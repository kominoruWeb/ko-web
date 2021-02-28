import React from 'react';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Outer = styled.div`
  margin: 0 -0.5rem;
`

const itemCSS = css`
  font-family: 'Cabin';
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  transition: opacity 0.4s;
  &:hover {
    opacity: 0.5;
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

export const HeaderNavigator: FunctionComponent = () => {
  return <Outer>
    <Item to='/'>TOP</Item>
    <Item to='/concept'>CONCEPT</Item>
    <Item to='/works'>WORKS</Item>
    <Item to='/contact'>CONTACT</Item>
    <ExternalItem href='http://blog.kominoru.com/' target="_blank">BLOG</ExternalItem>
  </Outer>
}