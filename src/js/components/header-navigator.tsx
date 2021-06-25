import React from 'react';
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
    <Item to='/' onClick={handleClick}>TOP</Item>
    <Item to='/concept' onClick={handleClick}>CONCEPT</Item>
    <Item to='/works' onClick={handleClick}>WORKS</Item>
    <Item to='/profile' onClick={handleClick}>PROFILE</Item>
    <Item to='/contact' onClick={handleClick}>CONTACT</Item>
    <ExternalItem href='http://blog.kominoru.com/' target="_blank" onClick={handleClick}>BLOG</ExternalItem>
  </Outer>
}