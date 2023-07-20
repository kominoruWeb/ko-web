import React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Profile } from '../components/profile';
import { BaseProps } from '../types/base-props';

const Outer = styled.div`
  padding-top: var(--header-height);
  background-color: var(--brown);
`

const ProfileOuter = styled.div`
  max-width: 40rem;
  margin: 4rem auto 0;
  padding: 0 1rem 2rem;
`

export const ProfilePage: FunctionComponent<BaseProps> = () => {
  return <Outer>
    <ProfileOuter>
      <Profile />
    </ProfileOuter>
  </Outer>
}