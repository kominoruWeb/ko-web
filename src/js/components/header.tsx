import React, { useEffect, useState } from 'react';
import { FunctionComponent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import SvgHamburger from '../generated/svg/hamburger'
import SvgLogo from '../generated/svg/logo';
import { useIsMobile } from '../hooks/use-is-mobile'
import { useIsTop } from '../hooks/use-is-top'
import { HumbergerIcon } from './hamburger-icon'
import { HeaderNavigator } from './header-navigator';
import { LanguageSelector } from './language-selector';
import { MobileMenu } from './mobile-menu'
import { BaseProps } from '../types/base-props';
import classNames from 'classnames'

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Outer = styled.div`
  padding: 0.25rem 1.75rem;
  display: flex;
  align-items: center;
  height: var(--header-height);
  box-sizing: border-box;
  color: var(--text-color);
  transition: all 0.4s;
  position: relative;
  background-color: rgba(255, 255, 255, 0.75);
  /* backdrop-filter: blur(0.5rem); */
  opacity: 0;
  animation: ${fadeIn} 1s 2.6s forwards;
  &.hide {
    background-color: transparent;
    backdrop-filter: none;
  }
  &.top {
    opacity: 1 !important;
  }
  @media (max-width: 50rem) {
    padding: 0.25rem 1rem;
  }
`

const LogoOuter = styled(Link)`
  transition: opacity 0.4s, color 0.4s;
  &.hide {
    opacity: 0;
  }
  &:hover {
    color: var(--hover-text-color);
  }
`

const NavigatorOuter = styled.div`
  margin-left: auto;
`

const LanguageSelectorOuter = styled.div`
  margin-left: 4rem;
`

export const HamburgerOuter = styled.div`
  margin-left: auto;
  cursor: pointer;
  align-self: stretch;
  padding: 0 0.5rem;
  margin-right: -0.5rem;
  display: flex;
  align-items: center;
  transition: color 0.4s;
  &.hide {
    color: var(--inverted-text-color);
  }
  &:hover {
    color: var(--hover-text-color);
  }
`


export const Header: FunctionComponent<BaseProps> = () => {
  const isMobile = useIsMobile(50)
  const [isOpen, setIsOpen] = useState(false)
  const {pathname} = useLocation()
  const [hide, setHide] = useState(pathname === '/' && isMobile)
  useEffect(() => {
    if(pathname === '/' && isMobile){
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
    } else {
      setHide(false)
    }
  }, [pathname, isMobile])
  return <Outer className={classNames({hide, top: pathname === '/'})} >
    <LogoOuter to='/' className={classNames({hide})}>
      <SvgLogo />
    </LogoOuter>
    {
      isMobile ? <>
        <HamburgerOuter className={classNames({hide})} onClick={() => setIsOpen(isOpen => !isOpen)}>
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