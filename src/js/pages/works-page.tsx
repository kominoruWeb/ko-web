import React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Works } from '../components/works';
import works from '../works.json'

const Outer = styled.div`
  margin-top: var(--header-height);
`

export const WorksPage: FunctionComponent = () => {
  return <Outer>
    <Works works={works} />
  </Outer>
}