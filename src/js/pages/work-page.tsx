import React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { LabelledArrow } from '../components/labelled-arrow'
import { Work } from '../components/work';
import { Works } from '../components/works';
import works from '../works.json';
import { ErrorPage } from './error-page';
import { useParams } from 'react-router-dom';

const Outer = styled.div`
  padding-top: var(--header-height);
  background-color: var(--darkest-brown);
`

const WorkOuter = styled.div`
  background-color: var(--brown);
`

const ArrowOuter = styled.div`
  padding: 5.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--inverted-text-color);
  background-color: var(--brown);
`

type WorkPageProps = {
}

export const WorkPage: FunctionComponent<WorkPageProps> = () => {
  const {workId} = useParams()
  const work = works.find(work => work.id === workId)
  if(!work) return <ErrorPage code={404} message="Not found" />
  return <Outer>
    <WorkOuter>
      <Work work={work} />
    </WorkOuter>
    <ArrowOuter>
      <LabelledArrow ja="MORE WORKS" en="MORE WORKS" />
    </ArrowOuter>
    <Works works={works} />
  </Outer>
}