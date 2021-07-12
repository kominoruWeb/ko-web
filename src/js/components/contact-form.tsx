import React, { useEffect, useState } from 'react'
import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { createForm } from './form'
import { InputContainer } from './input-container'
import { Text } from './text'
import { ContactBody, prefectures } from '../../../form-function/src/contact-body'
import { useLanguage } from '../hooks/use-language'
import { validate } from 'class-validator'

const {
  Form,
  Text: TextInput,
  Textarea,
  Radio,
  MultipleCheckbox,
  Select,
  useForm
} = createForm<ContactBody>()

const Outer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 4rem 0;
`

const SendButton = styled.button`
  background-color: var(--brown);
  border: 1px solid var(--inverted-text-color);
  border-radius: 0.25rem;
  display: block;
  padding: 0.75rem 1rem;
  text-align: center;
  color: var(--inverted-text-color);
  width: 100%;
  cursor: pointer;
  font-weight: 300;
  margin-top: 2rem;
  font-size: 0.9rem;
  transition: background-color 0.4s;
  &:hover {
    background-color: var(--dark-brown);
  }
`

const SentMessasge = styled.div`
  text-align: center;
  color: var(--inverted-text-color);
`

const Notice = styled.div`
  text-align: center;
  color: var(--inverted-text-color);
  font-size: 0.8rem;
  margin-top: 1rem;
`

const Message = styled.div`
  text-align: center;
  color: var(--inverted-text-color);
  margin-top: 1rem;

`


export const ContactForm: FunctionComponent = () => {
  const {language} = useLanguage()
  const [values, formProps] = useForm({
    name: '',
    email: '',
    phoneNumber: '',
    site: '東京都',
    requests: [],
    hasLand: null,
    text: '',
    language: language
  })
  const [sending, setSending] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    formProps.setValue({...formProps.value, language})
  }, [language])

  const send = async () => {
    if((await validate(new ContactBody(values))).length > 0){
      alert()
    }
    if(sending) return
    setSending(true)
    const res = await fetch('https://32thljarje.execute-api.ap-northeast-1.amazonaws.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })

    const resBody = await res.json()

    if(res.status === 200){
      setSent(true)
    } else {
    }
    setSending(false)
  }
  if(sent) {
    return <Outer>
      <SentMessasge>
        <Text ja="送信が完了いたしました。お問い合わせありがとうございます。" en="Message has been sent. Thank you for your inquiry." zh="送信完成 谢谢您的咨询" />
      </SentMessasge>
      <Notice>
        <Text ja="2営業日以内にお返事させて頂きます。暫しお待ちください。" en="We will get back to you within 2 working days." zh="两三工作日内给您回信，请稍等。" />
      </Notice>
    </Outer>
  }
  return <Outer>
    <Text
      ja={<>
        胡実建築設計事務所へのご質問やご相談は、下記フォームによりご連絡ください。<br />
        必要事項をご記入の上、［送信］をクリックしてください。
      </>}
      en={<>
        If you have any questions or inquiries to KOMINORUdesign, please use the form below.<br />
        Please fill in the required items and click [Send].
      </>}
      zh={<>
        如果您对胡実建築設計事務所有兴趣或咨询事项，请使用下面的表格。<br />
        请填写必填项目，然后点击[发送]。
      </>}
    />
    <Form {...formProps}>
      <InputContainer label={<Text ja="お名前" en="Name" zh="姓名"/>} required>
        <TextInput name={'name'} />
      </InputContainer>
      <InputContainer label={<Text ja="メールアドレス" en="Email address" zh="邮箱" />} required>
        <TextInput name={'email'} />
      </InputContainer>
      <InputContainer label={<Text ja="電話番号" en="Phone number" zh="电话号码"/>}>
        <TextInput name={'phoneNumber'} />
      </InputContainer>
      <InputContainer label={<Text ja="計画地" en="Site" zh="地点"/>} >
        <Select name="site" options={new Map(prefectures.map(name => [name, name]))} />
      </InputContainer>
      <InputContainer label={<Text ja="ご要望" en="Request" zh="要求"/>} >
        <label>
          <MultipleCheckbox name="requests" value={({ja: 'ご相談', en: 'Consultation', zh: '咨询'})[language]} />
          <Text ja="ご相談" en="Consultation" zh="咨询" />
        </label>
        <label>
          <MultipleCheckbox name="requests" value={({ja: 'ラフプラン提案', en: 'Rough plan proposal', zh: '初期方案提案'})[language]} />
          <Text ja="ラフプラン提案" en="Rough plan proposal" zh="初期方案提案" />
        </label>
        <label>
          <MultipleCheckbox name="requests" value={({ja: 'その他', en: 'Other', zh: '其他'})[language]} />
          <Text ja="その他" en="Other" zh="其他" />
        </label>
      </InputContainer>
      <InputContainer label={<Text ja="土地の有無" en="Have land or not" zh="土地"/>} >
        <label>
          <Radio name="hasLand" value={true}/>
          <Text ja="あり" en="Yes" zh="有" />
        </label>
        <label>
          <Radio name="hasLand" value={false}/>
          <Text ja="なし" en="No" zh="没有"/>
        </label>
      </InputContainer>
      <InputContainer label={<Text ja="お問い合わせ内容" en="Content of inquiry" zh="查询内容" />}>
        <Textarea name="text" />
      </InputContainer>
      {
        message &&
        <Message>
          <Text ja="必須項目を誤入力ください" en="Please input required items." zh="請輸入必填項目。" />
        </Message>
      }
      <SendButton onClick={send}>
        {
          sending ?
            <Text ja="送信中" en="Sending" zh="现在发送" /> :
            <Text ja="送信する" en="Send" zh="发送" />
        }
      </SendButton>
    </Form>
  </Outer>
}