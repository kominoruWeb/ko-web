import React from 'react'
import { FunctionComponent } from 'react'
import styled, { css } from 'styled-components'
import { BaseProps } from '../types/base-props';
import classNames from 'classnames';

const Outer = styled.div`
  width: 1.75rem;
  height: 0.625rem;
  position: relative;
`

const Bar = styled.div`
  --height: 0.1125rem; 
  height: var(--height);
  width: 100%;
  background-color: currentcolor;
  position: absolute;
  left: 0;
  transition: top 0.4s 0.8s, bottom 0.4s 0.8s, transform 0.8s cubic-bezier(0.5, 0, 0, 1);
  &.cross {
    transition: top 0.4s, bottom 0.4s, transform 0.8s 0.4s cubic-bezier(0.5, 0, 0, 1);
  }
`

const TopBar = styled(Bar)`
  top: 0;
  &.cross {
    top: calc(50% - var(--height) / 2);
    transform: rotate(45deg);
  }
`

const BottomBar = styled(Bar)`
  bottom: 0;
  &.cross {
    bottom: calc(50% - var(--height) / 2);
    transform: rotate(135deg);
  }
`

type HamburgerIconProps = {
  cross: boolean
}
export const HumbergerIcon: FunctionComponent<HamburgerIconProps> = ({cross}) => {
  return <Outer>
    <TopBar className={classNames({cross})}/>
    <BottomBar className={classNames({cross})}/>
  </Outer>
}