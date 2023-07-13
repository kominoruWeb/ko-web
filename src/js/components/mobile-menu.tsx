import React, { useEffect, useState } from 'react'
import { FunctionComponent } from 'react'
import styled, { keyframes } from 'styled-components'
import SvgLogo from '../generated/svg/logo'
import { HumbergerIcon } from './hamburger-icon'
import { HamburgerOuter } from './header'
import { HeaderNavigator } from './header-navigator'
import { LanguageSelector } from './language-selector'
import { BaseProps } from '../types/base-props';

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const blurIn = keyframes`
from {
  filter: blur(1rem);
}
to {
  filter: none;
}
`

const Outer = styled.div`
  background-color: var(--inverted-text-color);
  color: var(--text-color);
  position: fixed;
  width: 100vw;
  height: var(--view-height);
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 2rem;
  animation: ${fadeIn} 1s cubic-bezier(0, 1, 0, 1);
`

const LogoOuter = styled.div`
  align-self: center;
  @media (max-width: 50rem) {
    margin-top: 3rem;
    margin-bottom: auto;
  }
`

const NavigatorOuter = styled.div`

  animation: ${blurIn} 1s cubic-bezier(0, 1, 0, 1);
`

const LanguageSelectorOuter = styled.div`
  margin-top: auto;
  padding: 1rem 0;
  align-self: center;
  animation: ${blurIn} 1s cubic-bezier(0, 1, 0, 1);
`

const HamburgerContainer = styled.div`
  display: flex;
  width: 100%;
  height: var(--header-height);
  position: absolute;
  top: 0;
  left: 0;
  justify-content: flex-end;
  box-sizing: border-box;
  padding: 0.25rem 1rem;
`

type MobileMenuProps = {
  onClose?: () => void
}
export const MobileMenu: FunctionComponent<MobileMenuProps> = ({onClose}) => {
  const [cross, setCross] = useState(false)
  useEffect(() => {
    setCross(true)
  }, [])

  const close = () => {
    setCross(false)
    if(onClose){
      onClose()
    }
  }

  return <Outer>
    <HamburgerContainer>
      <HamburgerOuter onClick={close}>
        <HumbergerIcon cross={cross}/>
      </HamburgerOuter>
    </HamburgerContainer>
    <LogoOuter>
      <SvgLogo />
    </LogoOuter>
    <NavigatorOuter>
      <HeaderNavigator onClick={close} />
    </NavigatorOuter>
    <LanguageSelectorOuter>
      <LanguageSelector onChange={close} />
    </LanguageSelectorOuter>
  </Outer>
}