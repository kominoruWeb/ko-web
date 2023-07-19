import React, { createRef, useEffect, useRef, useState } from 'react';
import { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import { bottomBar } from '../css-mixins/bottom-bar';
import SvgSquareLogo from '../generated/svg/square-logo';
import { Image } from './image';
import works from '../works.json';
import { Text } from './text'
import { Link } from 'react-router-dom'
import SvgArrow from '../generated/svg/arrow'
import SvgDownwardArrow from '../generated/svg/downward-arrow'
import { LabelledArrow } from './labelled-arrow'
import { useIsTop } from '../hooks/use-is-top'
import { fadeIn } from './mobile-menu'
import { BaseProps } from '../types/base-props';
import classNames from 'classnames'

const Outer = styled.div`
  position: relative;
  overflow: hidden;
  clip-path: inset(0 0 0 0);
`

const LogoOuter = styled.div`
  color: var(--inverted-text-color);
  position: fixed;
  width: 100vw;
  height: var(--view-height);
  transition: height 0.4s ease-in-out;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  transform: scale(1.25);
  opacity: 0;
  animation: ${fadeIn} 1s 1.2s forwards;
  svg {
    display: block;
    margin-top: -2.5rem;
  }
  @media (max-width: 50rem) {
    transform: none;
  }
`

const ArrowOuter = styled.div`
  color: var(--inverted-text-color);
  position: fixed;
  width: 100vw;
  height: var(--view-height);
  transition: height 0.4s ease-in-out;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  pointer-events: none;
  box-sizing: border-box;
  transition: opacity 0.4s;
  opacity: 0;
  animation: ${fadeIn} 1s 2.6s forwards;
  &.hide {
    opacity: 0 !important;
  }
`

const ItemContainer = styled.div`
  clip-path: inset(0 0 0 0);
`

const ItemOuter = styled(Link)`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: block;
`


const ItemInner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: var(--view-height);
  transition: height 0.4s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`

const ItemLabel = styled.div`
  color: var(--inverted-text-color);
  margin-bottom: calc(100vh - var(--view-height) + 3rem);
  text-transform: uppercase;
  transition: margin-bottom 0.4s;
  margin-bottom: -2.5rem;
  z-index: 1;
  ${bottomBar}
  opacity: 0;
  animation: ${fadeIn} 1s 2.6s forwards;
  @media (max-width: 50rem) {
    font-size: 0.9rem;
  }
`

const ItemBackgroundOuter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  img {
    width: 100vw;
    height: 100vh;
    transition: height 0.4s;
    object-fit: cover;
  }
`

type ItemProps = {
  work: (typeof works)[number]
}
const Item: FunctionComponent<ItemProps> = ({work}) => {
  const [position, setPosition] = useState(0)
  const outerRef = useRef<HTMLAnchorElement>(null)
  useEffect(() => {
    const listener = () => {
      const outer = outerRef.current
      if(outer){
        const rect = outer.getBoundingClientRect()
        console.log(rect)
      }
    } 
    window.addEventListener('sccroll', listener)
    window.addEventListener('resize', listener)
    return () => {
      window.removeEventListener('sccroll', listener)
      window.removeEventListener('resize', listener)
    }
  }, [])
  return <ItemOuter to={`/works/${work.id}`} key={work.id} ref={outerRef}>
    <ItemInner>
      <ItemLabel>
        <Text {...work.name} />
      </ItemLabel>
      <ItemBackgroundOuter style={{opacity: position}}>
        <Image name={work.thumbnail?.filename ?? ''
        } width={work.thumbnail?.width ?? ''} height={work.thumbnail?.height ?? ''} />
      </ItemBackgroundOuter>
    </ItemInner>
  </ItemOuter>
}



type TopFullscreenScrollProps = {
  works: typeof works
}
export const TopFullscreenScroll: FunctionComponent<TopFullscreenScrollProps> = ({works}) => {
  const isTop = useIsTop()
  return <Outer id="top-fullscreen-scroll">
    <ItemContainer>
      {
        works.map(work => <Item key={work.id} work={work} />)
      }
    </ItemContainer>
    <LogoOuter>
      <SvgSquareLogo />
    </LogoOuter>
    <ArrowOuter className={classNames({hide: !isTop})}>
      <LabelledArrow />
    </ArrowOuter>
  </Outer>
}

