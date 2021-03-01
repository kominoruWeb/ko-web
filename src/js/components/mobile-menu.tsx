import React from 'react'
import { FunctionComponent } from 'react'
import styled, { keyframes } from 'styled-components'
import { HeaderNavigator } from './header-navigator'
import { LanguageSelector } from './language-selector'

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
  height: calc(var(--view-height) - var(--header-height));
  top: var(--header-height);
  left: 0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 2rem;
  animation: ${fadeIn} 1s cubic-bezier(0, 1, 0, 1);
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

type MobileMenuProps = {
  onClose?: () => void
}
export const MobileMenu: FunctionComponent<MobileMenuProps> = ({onClose}) => {

  return <Outer>
    <NavigatorOuter>
      <HeaderNavigator onClick={onClose} />
    </NavigatorOuter>
    <LanguageSelectorOuter>
      <LanguageSelector onChange={onClose} />
    </LanguageSelectorOuter>
  </Outer>
}