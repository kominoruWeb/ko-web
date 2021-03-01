import React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Concept } from '../components/concept';
import { LabelledArrow } from '../components/labelled-arrow'
import { Profile } from '../components/profile';

const Outer = styled.div`
  padding-top: var(--header-height);
  background-color: var(--brown);
`

export const ProfileOuter = styled.div`
  max-width: 40rem;
  margin: 6rem auto 4rem;
  padding: 0 1rem;
`

const ArrowOuter = styled.div`
  color: var(--inverted-text-color);
  margin: 4rem 0;
`

const ConceptOuter = styled.div`
`

export const ConceptPage: FunctionComponent = () => {
  return <Outer>
    <ProfileOuter>
      <Profile />
    </ProfileOuter>
    <ArrowOuter>
      <LabelledArrow ja="設計理念" en="Design philosophy" />
    </ArrowOuter>
    <ConceptOuter>
      <Concept />
    </ConceptOuter>

  </Outer>
}