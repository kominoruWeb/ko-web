import React, { useState } from 'react';
import { FunctionComponent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ContactFormOuter, FlowOuter } from '../pages/contact-page'
import { ContactForm } from './contact-form'
import { Flow } from './flow'
import { blurIn, fadeIn } from './mobile-menu'
import { BaseProps } from '../types/base-props';

const Outer = styled.div`
  background-color: var(--brown);
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContactLink = styled.div`
  padding: 0.75rem 0;
  max-width: 24rem;
  font-size: 1.25rem;
  font-family: 'Cabin';
  font-weight: 500;
  border: calc(1rem / 16) solid currentcolor;
  width: 100%;
  text-align: center;
  margin: 3.5rem 0 2rem;
  letter-spacing: 0.1em;
  color: var(--inverted-text-color);
  cursor: pointer;
  transition: opacity 0.4s;
  &:hover {
    opacity: 0.5;
  }
`

const Copyright = styled.div`
  font-family: 'Cabin';
  font-size: 0.75rem;
  margin-top: 1.5rem;
  color: var(--inverted-text-color);
`

const ContactOuter = styled.div`
  animation: ${blurIn} 0.6s, ${fadeIn} 0.4s;
  width: 100%;
`

export const Footer: FunctionComponent<BaseProps> = () => {
  const {pathname} = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  return <Outer>
    {
      /^\/contact\/?/.test(pathname) || <>
        {
          isOpen ? <ContactOuter>
            <FlowOuter>
              <Flow />
            </FlowOuter>
            <ContactFormOuter>
              <ContactForm />
            </ContactFormOuter>
          </ContactOuter> : <>
            <ContactLink onClick={() => setIsOpen(true)}>
              CONTACT
            </ContactLink>
          </>
        }
      </>
    }
    <Copyright>
      © KOMINORU design
    </Copyright>
  </Outer>
}