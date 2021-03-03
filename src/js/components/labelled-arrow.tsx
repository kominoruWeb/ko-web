import React from 'react'
import { FunctionComponent } from 'react'
import styled, { keyframes } from 'styled-components'
import SvgDownwardArrow from '../generated/svg/downward-arrow'
import { Language } from '../hooks/use-language'
import { Text } from './text'

const blink = keyframes`
  from {
    opacity: 1;
  }
  50% {
    opacity: 0.75;
  }
  to {
    opacity: 1;
  }
`

const scroll = keyframes`
  from {
    transform: translateY(-0.5rem);
  }
  to {
    transform: translateY(0.5rem)
  }
`

const fade = keyframes`
  from {
    opacity: 0;
  }
  10% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  90% {
    opacity: 0;
  }
  to {
    opacity: 0;
  }
`

const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${scroll} 4s linear infinite, ${fade} 4s linear infinite;
`

const Label = styled.div`
  width: 0;
  white-space: nowrap;
`

const ArrowOuter = styled.div`
  margin: 1.5rem 2rem;
`

type LabelledArrowProps = {
  [language in Language]?: string
}

export const LabelledArrow: FunctionComponent<LabelledArrowProps> = ({children, ...label}) => {
  return <Outer>
    <ArrowOuter>
      <SvgDownwardArrow />
    </ArrowOuter>
  </Outer>
}