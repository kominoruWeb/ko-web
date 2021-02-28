import React from 'react';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Outer = styled.div`
  background-color: var(--brown);
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContactLink = styled(Link)`
  padding: 0.75rem 0;
  max-width: 24rem;
  font-size: 1.25rem;
  font-family: 'Cabin';
  font-weight: 700;
  border: calc(1rem / 8) solid currentcolor;
  width: 100%;
  text-align: center;
  margin: 3.5rem 0;
  letter-spacing: 0.1em;
  color: var(--inverted-text-color);
`

const Copyright = styled.div`
  font-family: 'Cabin';
  font-size: 0.75rem;
  color: var(--inverted-text-color);
`

export const Footer: FunctionComponent = () => {
  return <Outer>
    <ContactLink to='/contact'>
      CONTACT
    </ContactLink>
    <Copyright>
      © KOMINORU design
    </Copyright>
  </Outer>
}