import React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import works from '../works.json';
import { WorkItem } from './work-item';

const Outer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.25rem;
  background-color: var(--brown);
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
      return <WorkItemOuter>
        <WorkItem key={work.id} work={work} />
      </WorkItemOuter>
    })}
  </Outer>
}