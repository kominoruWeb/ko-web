import { parsePath } from 'history';
import React, { ReactNode } from 'react';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

export const scrollUp = keyframes`
  from {
    transform: translateY(1rem);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const Outer = styled.div`
  margin: 0 -0.8rem;
  display: flex;
  @media (max-width: 50rem) {
    flex-direction: column;
    margin: -1.25rem 0;
  }
`

const itemCSS = css`
  font-family: 'Cabin';
  font-weight: 500;
  padding: 0.25rem 0.8rem;
  transition: opacity 0.4s;
  display: block;
  font-size: 0.85rem;
  transition: color 0.4s;
  &:hover {
    color: var(--hover-text-color);
  }
  @media (max-width: 50rem) {
    text-align: center;
    font-size: 1rem;
    padding: 1.25rem 0;
    animation: ${scrollUp} 0.4s ease-out forwards;
    opacity: 0;
    &:nth-child(1){
      animation-delay: 0.0s;
    }
    &:nth-child(2){
      animation-delay: 0.1s;
    }
    &:nth-child(3){
      animation-delay: 0.2s;
    }
    &:nth-child(4){
      animation-delay: 0.3s;
    }
    &:nth-child(5){
      animation-delay: 0.4s;
    }
    &:nth-child(6){
      animation-delay: 0.5s;
    }
  }
`

const Item = styled(Link)`
  ${itemCSS}
`

const ExternalItem = styled.a`
  ${itemCSS}
`

type HeaderNavigatorProps = {
  onClick?: () => void
}

export const HeaderNavigator: FunctionComponent<HeaderNavigatorProps> = ({onClick}) => {
  const handleClick = () => {
    if(onClick){
      onClick()
    }
  }
  return <Outer>
    <HeaderNavigatorItem to='/' onClick={handleClick}>TOP</HeaderNavigatorItem>
    <HeaderNavigatorItem to='/concept' onClick={handleClick}>CONCEPT</HeaderNavigatorItem>
    <HeaderNavigatorItem to='/works' onClick={handleClick}>WORKS</HeaderNavigatorItem>
    <HeaderNavigatorItem to='/profile' onClick={handleClick}>PROFILE</HeaderNavigatorItem>
    <HeaderNavigatorItem to='/contact' onClick={handleClick}>CONTACT</HeaderNavigatorItem>
    <ExternalItem href='http://blog.kominoru.com/' target="_blank" onClick={handleClick}>BLOG</ExternalItem>
  </Outer>
}

type HeaderNavigatorItemProps = {
  onClick: () => void,
  to: string,
  children?: ReactNode
}
export const HeaderNavigatorItem: FunctionComponent<HeaderNavigatorItemProps> = ({onClick, to, children}) => {
  return <Item to={to} onClick={onClick}>{children}</Item>
}

const createKey = () => {
  const source = 'abcdefghijklmnopqrstuvwxyz0123456789'
  return Array.from(Array(12), () => source[Math.floor(Math.random() * source.length)]).join('')
}