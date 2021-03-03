import React, { useEffect, useState } from 'react';
import { FunctionComponent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import SvgHamburger from '../generated/svg/hamburger'
import SvgLogo from '../generated/svg/logo';
import { useIsMobile } from '../hooks/use-is-mobile'
import { HumbergerIcon } from './hamburger-icon'
import { HeaderNavigator } from './header-navigator';
import { LanguageSelector } from './language-selector';
import { MobileMenu } from './mobile-menu'

const Outer = styled.div<{hide?: boolean}>`
  padding: 0.25rem 1.75rem;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(0.5rem);
  height: var(--header-height);
  box-sizing: border-box;
  color: var(--text-color);
  transition: all 0.4s;
  ${({hide}) => hide ? css`
    background-color: transparent;
    backdrop-filter: none;
  ` : ''}
  @media (max-width: 50rem) {
    padding: 0.25rem 1rem;
  }
`

const LogoOuter = styled(Link)<{hide?: boolean}>`
  transition: opacity 0.4s;
  ${({hide}) => hide ? css`
    opacity: 0;
  ` : ''}
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

export const HamburgerOuter = styled.div<{hide?: boolean}>`
  margin-left: auto;
  cursor: pointer;
  align-self: stretch;
  padding: 0 0.5rem;
  margin-right: -0.5rem;
  display: flex;
  align-items: center;
  transition: all 0.4s;
  ${({hide}) => hide ? css`
    color: var(--inverted-text-color);
  ` : ''}
  &:hover {
    opacity: 0.5;
  }
`


export const Header: FunctionComponent = () => {
  const isMobile = useIsMobile(50)
  const [isOpen, setIsOpen] = useState(false)
  const {pathname} = useLocation()
  const [hide, setHide] = useState(pathname === '/')
  useEffect(() => {
    if(pathname === '/'){
      const listener = () => {
        const el = document.getElementById('top-fullscreen-scroll')
        if(el){
          const rect = el.getBoundingClientRect()
          if(rect.y + rect.height > 0){
            setHide(true)
          } else {
            setHide(false)
          }
        } else {
          setHide(false)
        }
      }
      listener()
      window.addEventListener('scroll', listener)
      return () => {
        window.removeEventListener('scroll', listener)
      }
    }
  }, [pathname])
  return <Outer hide={hide}>
    <LogoOuter to='/' hide={hide}>
      <SvgLogo />
    </LogoOuter>
    {
      isMobile ? <>
        <HamburgerOuter hide={hide} onClick={() => setIsOpen(isOpen => !isOpen)}>
          <HumbergerIcon cross={isOpen}/>
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