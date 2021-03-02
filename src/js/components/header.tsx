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
  padding: 0.25rem 1.75rem;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(0.5rem);
  height: var(--header-height);
  box-sizing: border-box;
  color: var(--text-color);
  @media (max-width: 40rem) {
    padding: 0.25rem 1rem;
  }
`

const LogoOuter = styled(Link)`
  transition: opacity 0.4s;
  &:hover {
    opacity: 0.5;
  }
`

const NavigatorOuter = styled.div`
  margin-left: auto;
`

const LanguageSelectorOuter = styled.div`
  margin-left: 4rem;
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