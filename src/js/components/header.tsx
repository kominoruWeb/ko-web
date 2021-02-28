import React from 'react';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SvgLogo from '../generated/svg/logo';
import { HeaderNavigator } from './header-navigator';
import { LanguageSelector } from './language-selector';

const Outer = styled.div`
  padding: 0.25rem;
  display: flex;
  align-items: center;
  background-color: var(--inverted-text-color);
  backdrop-filter: blur(1rem);
  height: var(--header-height);
  box-sizing: border-box;
`

const LogoOuter = styled(Link)`
  color: var(--text-color);
  transition: opacity 0.4s;
  &:hover {
    opacity: 0.5;
  }
`

const NavigatorOuter = styled.div`
  margin-left: 3rem;
`

const LanguageSelectorOuter = styled.div`
  margin-left: auto;
`

export const Header: FunctionComponent = () => {
  return <Outer>
    <LogoOuter to='/'>
      <SvgLogo />
    </LogoOuter>
    <NavigatorOuter>
      <HeaderNavigator />
    </NavigatorOuter>
    <LanguageSelectorOuter>
      <LanguageSelector />
    </LanguageSelectorOuter>
   </Outer>
}