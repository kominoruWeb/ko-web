import React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Work } from '../components/work';
import { Works } from '../components/works';
import SvgArrow from '../generated/svg/arrow';
import SvgDownwardArrow from '../generated/svg/downward-arrow';
import works from '../works.json';
import { ErrorPage } from './error-page';

const Outer = styled.div`
  margin-top: var(--header-height);
`

const ArrowOuter = styled.div`
  margin: 5.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

type WorkPageProps = {
  workId: string
}

export const WorkPage: FunctionComponent<WorkPageProps> = ({workId}) => {
  const work = works.find(work => work.id === workId)
  console.log(work)
  if(!work) return <ErrorPage code={404} message="Not found" />
  return <Outer>
    <Work work={work} />
    <ArrowOuter>
      <SvgDownwardArrow />
    </ArrowOuter>
    <Works works={works} />
  </Outer>
}