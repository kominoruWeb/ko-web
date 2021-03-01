import React from 'react';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Outer = styled.div`
  margin: 0 -0.75rem;
  display: flex;
  @media (max-width: 40rem) {
    flex-direction: column;
    margin: 0.5rem 0;
  }
`

const itemCSS = css`
  font-family: 'Cabin';
  font-weight: 500;
  padding: 0.25rem 0.75rem;
  transition: opacity 0.4s;
  display: block;
  &:hover {
    opacity: 0.5;
  }

  @media (max-width: 50rem) {
    font-size: 1.25rem;
    padding: 0.5rem 0;
  }
`

const Item = styled(Link)`
  ${itemCSS}
  transition: opacity 0.4s;
  &:hover {
    opacity: 0.5;
  }
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
    <Item to='/contact' onClick={handleClick}>CONTACT</Item>
    <ExternalItem href='http://blog.kominoru.com/' target="_blank" onClick={handleClick}>BLOG</ExternalItem>
  </Outer>
}