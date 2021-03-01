import React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Concept } from '../components/concept'
import { TopFullscreenScroll } from '../components/top-fullscreen-scroll';
import { Works } from '../components/works';
import works from '../works.json';

const Outer = styled.div`
`

const TopFullscreenScrollOuter = styled.div`
  z-index: -1;
`


const WorksOuter = styled.div`
  width: 100%;
  z-index: 100;
`

const ConceptOuter = styled.div`
z-index: 100;
`

export const TopPage: FunctionComponent = () => {
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