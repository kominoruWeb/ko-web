import React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Concept } from '../components/concept';
import { BaseProps } from '../types/base-props';

const Outer = styled.div`
  padding-top: var(--header-height);
  background-color: var(--brown);
`

export const ProfileOuter = styled.div`
  max-width: 40rem;
  margin: 6rem auto 4rem;
  padding: 0 1rem;
`

const ConceptOuter = styled.div`
`

export const ConceptPage: FunctionComponent<BaseProps> = () => {
  return <Outer>
    <ConceptOuter>
      <Concept />
    </ConceptOuter>

  </Outer>
}