import React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Concept } from '../components/concept';
import { Profile } from '../components/profile';

const Outer = styled.div`
  padding-top: var(--header-height);
  background-color: var(--brown);
`

export const ProfileOuter = styled.div`
  max-width: 40rem;
  margin: 6rem auto 6rem;
`

const ConceptOuter = styled.div`
`

export const ConceptPage: FunctionComponent = () => {
  return <Outer>
    <ProfileOuter>
      <Profile />
    </ProfileOuter>
    <ConceptOuter>
      <Concept />
    </ConceptOuter>

  </Outer>
}