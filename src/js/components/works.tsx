import React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import works from '../works.json';
import { WorkItem } from './work-item';
import { BaseProps } from '../types/base-props';

const Outer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.25rem;
  background-color: var(--darkest-brown);
  @media (max-width: 120rem) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 90rem) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 40rem) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const WorkItemOuter = styled.div`
`

export type WorkItemProps = {
  work: typeof works[number]
}

type WorksProps = {
  works: typeof works
}
export const Works: FunctionComponent<WorksProps> = ({works}) => {
  return <Outer>
    {works.map(work => {
      return <WorkItemOuter key={work.id} >
        <WorkItem work={work}/>
      </WorkItemOuter>
    })}
  </Outer>
}