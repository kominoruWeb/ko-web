import React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { ContactForm } from '../components/contact-form'
import { Flow } from '../components/flow';

const Outer = styled.div`
  padding-top: var(--header-height);
  background-color: var(--brown);
`

const ProfileOuter = styled.div`
  max-width: 40rem;
  margin: 4rem auto 2rem;
  padding: 0 1rem;
`

export const FlowOuter = styled.div`
  background-color: var(--dark-brown);
  padding: 4rem 1rem;
  width: 100%;
  box-sizing: border-box;
`

const ArrowOuter = styled.div`
  color: var(--inverted-text-color);
  margin: 4rem 0;
`

export const ContactFormOuter = styled.div`
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;
`

export const ContactPage: FunctionComponent = () => {
  return <Outer>
    <FlowOuter>
      <Flow />
    </FlowOuter>
    <ContactFormOuter>
      <ContactForm />
    </ContactFormOuter>
  </Outer>
}