import React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Concept } from '../components/concept'
import { TopFullscreenScroll } from '../components/top-fullscreen-scroll';
import { Works } from '../components/works';
import works from '../works.json';
import { BaseProps } from '../types/base-props';

const Outer = styled.div`
`

const TopFullscreenScrollOuter = styled.div`
`

const WorksOuter = styled.div`
  width: 100%;
`

const ConceptOuter = styled.div`
`

export const TopPage: FunctionComponent<BaseProps> = () => {
  return <Outer>
    <TopFullscreenScrollOuter>
      <TopFullscreenScroll works={works.filter(work => work.pickup).sort((a, b) => a.pickupOrder - b.pickupOrder)} />
    </TopFullscreenScrollOuter>
    <WorksOuter>
      <Works works={works}/>
    </WorksOuter>
    <ConceptOuter>
      <Concept />
    </ConceptOuter>
  </Outer>
}