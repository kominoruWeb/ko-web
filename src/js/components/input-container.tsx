import React, { FunctionComponent, ReactNode } from 'react'
import styled from 'styled-components'
import { Text } from './text'

const Outer = styled.div`
  display: flex;
  padding-bottom: 2rem;
  color: var(--inverted-text-color);
  flex-direction: column;
  & + & {
    padding-top: 2rem;
    border-top: 1px solid #c8c8c8;
  }
  @media (max-width: 40rem) {
    flex-direction: column;
    align-items: stretch;
    padding-left: 0;
    padding-right: 0;
  }
`

const LabelContainer = styled.div`
  font-weight: 300;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  font-weight: 500;
  @media (max-width: 40rem) {
    flex: 0 0 auto;
  }
`
const InputWrapper = styled.div`
  flex: 1 1 0;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  @media (max-width: 40rem) {
    margin-left: 0;
    margin-top: 1rem;
  }

  input[type="text"],
  input[type="password"],
  textarea {
    padding: 0.5rem;
    border-radius: 0.25em;
    border: 1px solid #808080;
    font-size: 1rem;
    flex: 1 1 0;
    box-sizing: border-box;
    width: 100%;
  }
  textarea {
    height: 20rem;
  }
  label {
    display: flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
  }
  * + label {
    margin-left: 1rem;
  }
  input[type="radio"],
  input[type="checkbox"] {
    margin-right: 0.25rem;
    display: block;
  }

  select {
    font-size: 1rem;
  }
`

export const Required = styled.span`
  font-size: 0.8em;
  color: #888;
  font-weight: bold;
  margin-left: 0.5rem;
  vertical-align: top;
`

type InputContainerProps = {
  label: ReactNode,
  required?: boolean
}
export const InputContainer: FunctionComponent<InputContainerProps> = ({children, label, required}) => {
  return <Outer>
    <LabelContainer>
      {label}
      {required && <Required><Text ja="*必須" en="*Required"/></Required>}
    </LabelContainer>
    <InputWrapper>{children}</InputWrapper>
  </Outer>
}

export const MultipleCheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -0.5rem;
  label {
    margin: 0.5rem;
    white-space: nowrap;
  }
`