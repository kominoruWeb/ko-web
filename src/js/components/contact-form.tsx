import React, { useEffect, useState } from 'react'
import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { createForm } from './form'
import { InputContainer } from './input-container'
import { Text } from './text'
import { ContactBody, prefectures } from '../../../form-function/src/contact-body'
import { useLanguage } from '../hooks/use-language'

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


export const ContactForm: FunctionComponent = () => {
  const {language} = useLanguage()
  const [values, formProps] = useForm({
    name: '',
    email: '',
    phoneNumber: '',
    site: null,
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
        <Text ja="送信が完了いたしました。お問い合わせありがとうございます。" en="Message has been sent. Thank you for your inquiry." zh="传输完成。感谢您的查询。" />
      </SentMessasge>
    </Outer>
  }
  return <Outer>
    <Form {...formProps}>
      <InputContainer label={<Text ja="お名前" en="Name" zh="全名"/>} required>
        <TextInput name={'name'} />
      </InputContainer>
      <InputContainer label={<Text ja="メールアドレス" en="邮件地址" />} required>
        <TextInput name={'email'} />
      </InputContainer>
      <InputContainer label={<Text ja="電話番号" en="Phone number" zh="电话号码"/>} required>
        <TextInput name={'phoneNumber'} />
      </InputContainer>
      <InputContainer label={<Text ja="計画地" en="Site" zh="地点"/>} >
        <Select name="site" options={new Map(prefectures.map(name => [name, name]))} />
      </InputContainer>
      <InputContainer label={<Text ja="ご希望のサービス" en="Request" zh="要求"/>} >
        <label>
          <MultipleCheckbox name="requests" value={({ja: 'ご相談', en: 'Consultation', zh: '咨询'})[language]} />
          <Text ja="ご相談" en="Consultation" zh="咨询" />
        </label>
        <label>
          <MultipleCheckbox name="requests" value={({ja: 'ラフプラン提案', en: 'Rough plan proposal', zh: '粗略的计划提案'})[language]} />
          <Text ja="ラフプラン提案" en="Rough plan proposal" zh="粗略的计划提案" />
        </label>
        <label>
          <MultipleCheckbox name="requests" value={({ja: 'その他', en: 'Other', zh: '其他'})[language]} />
          <Text ja="その他" en="Other" zh="其他" />
        </label>
      </InputContainer>
      <InputContainer label={<Text ja="土地の有無" en="Have land or not" zh="有地与否"/>} >
        <label>
          <Radio name="hasLand" value={true}/>
          <Text ja="ある" en="Yes" zh="有" />
        </label>
        <label>
          <Radio name="hasLand" value={false}/>
          <Text ja="ない" en="No" zh="不"/>
        </label>
      </InputContainer>
      <InputContainer label={<Text ja="お問い合わせ内容" en="Content of inquiry" zh="查询内容"/>}>
        <Textarea name="text" />
      </InputContainer>
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