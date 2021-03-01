import React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { ContactForm } from '../components/contact-form'
import { Flow } from '../components/flow';
import { LabelledArrow } from '../components/labelled-arrow';
import { Profile } from '../components/profile';

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
  background-color: var(--inverted-text-color);
`

export const ContactPage: FunctionComponent = () => {
  return <Outer>
    <ProfileOuter>
      <Profile />
    </ProfileOuter>
    <ArrowOuter>
      <LabelledArrow ja="設計業務の流れ" en="Design work flow" />
    </ArrowOuter>
    <FlowOuter>
      <Flow />
    </FlowOuter>
    <ContactFormOuter>
      <ContactForm />
    </ContactFormOuter>
  </Outer>
}