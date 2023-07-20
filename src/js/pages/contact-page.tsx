import React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { ContactForm } from '../components/contact-form'
import { Flow } from '../components/flow';
import { BaseProps } from '../types/base-props';

const Outer = styled.div`
  padding-top: var(--header-height);
  background-color: var(--brown);
`

export const FlowOuter = styled.div`
  background-color: var(--dark-brown);
  padding: 4rem 1rem;
  width: 100%;
  box-sizing: border-box;
`

export const ContactFormOuter = styled.div`
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;
`

export const ContactPage: FunctionComponent<BaseProps> = () => {
  return <Outer>
    <FlowOuter>
      <Flow />
    </FlowOuter>
    <ContactFormOuter>
      <ContactForm />
    </ContactFormOuter>
  </Outer>
}