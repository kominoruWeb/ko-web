import React, { useEffect, useState } from 'react';
import { FunctionComponent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import SvgHamburger from '../generated/svg/hamburger'
import SvgLogo from '../generated/svg/logo';
import { useIsMobile } from '../hooks/use-is-mobile'
import { HeaderNavigator } from './header-navigator';
import { LanguageSelector } from './language-selector';
import { MobileMenu } from './mobile-menu'

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

const HamburgerOuter = styled.div`
  margin-left: auto;
  cursor: pointer;
  align-self: stretch;
  padding: 0 0.25rem;
  display: flex;
  align-items: center;
  transition: opacity 0.4s;
  &:hover {
    opacity: 0.5;
  }
`


export const Header: FunctionComponent = () => {
  const isMobile = useIsMobile(50)
  const [isOpen, setIsOpen] = useState(false)
  const {pathname} = useLocation()
  return <Outer>
    <LogoOuter to='/'>
      <SvgLogo />
    </LogoOuter>
    {
      isMobile ? <>
        <HamburgerOuter onClick={() => setIsOpen(!isOpen)}>
          <SvgHamburger />
        </HamburgerOuter>
        {
          isOpen &&
          <MobileMenu onClose={() => setIsOpen(false)}/>
        }
      </> : <>
        <NavigatorOuter>
          <HeaderNavigator />
        </NavigatorOuter>
        <LanguageSelectorOuter>
          <LanguageSelector />
        </LanguageSelectorOuter>
      </>
    }
  </Outer>
}