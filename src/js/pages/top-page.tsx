import React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { TopFullscreenScroll } from '../components/top-fullscreen-scroll';
import { Works } from '../components/works';
import works from '../works.json';

const Outer = styled.div`
`

const WorksOuter = styled.div`
  width: 100%;
`

export const TopPage: FunctionComponent = () => {
  return <Outer>
    <TopFullscreenScroll works={works.filter(work => work.pickup)}/>
    <WorksOuter>
      <Works works={works}/>
    </WorksOuter>
  </Outer>
}