import React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

const Outer = styled.div`
`

const Code = styled.div`

`

const Message = styled.div``

type ErrorPageProps = {
  code: number,
  message: string
}
export const ErrorPage: FunctionComponent<ErrorPageProps> = ({code, message}) => {
  return <Outer>
    <Code>{code}</Code>
    <Message>{message}</Message>
  </Outer>
}