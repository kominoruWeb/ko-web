import React, { useState } from 'react'
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


export const ContactForm: FunctionComponent = () => {
  const [values, formProps] = useForm({
    name: '',
    email: '',
    phoneNumber: '',
    site: null,
    requests: [],
    hasLand: null,
    text: '',
    language: ''
  })
  const [sending, setSending] = useState(false)
  const {language} = useLanguage()
  return <Outer>
    <Form {...formProps}>
      <InputContainer label={<Text ja="お名前" en="Name"/>} required>
        <TextInput name={'name'} />
      </InputContainer>
      <InputContainer label={<Text ja="メールアドレス" en="Email address"/>} required>
        <TextInput name={'email'} />
      </InputContainer>
      <InputContainer label={<Text ja="電話番号" en="Phone number"/>} required>
        <TextInput name={'phoneNumber'} />
      </InputContainer>
      <InputContainer label={<Text ja="計画地" en="Site"/>} >
        <Select name="site" options={new Map(prefectures.map(name => [name, name]))} />
      </InputContainer>
      <InputContainer label={<Text ja="ご希望のサービス" en="Request"/>} >
        <label>
          <MultipleCheckbox name="requests" value={({ja: 'ご相談', en: 'Consultation', zh: 'Consultation'})[language]} />
          <Text ja="ご相談" en="Consultation" />
        </label>
        <label>
          <MultipleCheckbox name="requests" value={({ja: 'ラフプラン提案', en: 'Rough plan proposal', zh: 'Rough plan proposal'})[language]} />
          <Text ja="ラフプラン提案" en="Rough plan proposal" />
        </label>
        <label>
          <MultipleCheckbox name="requests" value={({ja: 'その他', en: 'Other', zh: 'Other'})[language]} />
          <Text ja="その他" en="Other" />
        </label>
      </InputContainer>
      <InputContainer label={<Text ja="土地の有無" en="Have land or not"/>} >
        <label>
          <Radio name="hasLand" value={true}/>
          <Text ja="ある" en="Yes" />
        </label>
        <label>
          <Radio name="hasLand" value={false}/>
          <Text ja="ない" en="No" />
        </label>
      </InputContainer>
      <InputContainer label={<Text ja="お問い合わせ内容" en="Content of inquiry"/>}>
        <Textarea name="text" />
      </InputContainer>
      <SendButton>
        <Text ja="送信する" en="Send" />
      </SendButton>
    </Form>
  </Outer>
}