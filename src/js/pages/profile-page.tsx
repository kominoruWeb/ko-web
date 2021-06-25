import React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Profile } from '../components/profile';

const Outer = styled.div`
  padding-top: var(--header-height);
  background-color: var(--brown);
`

const ProfileOuter = styled.div`
  max-width: 40rem;
  margin: 4rem auto 2rem;
  padding: 0 1rem;
`

export const ProfilePage: FunctionComponent = () => {
  return <Outer>
    <ProfileOuter>
      <Profile />
    </ProfileOuter>
  </Outer>
}