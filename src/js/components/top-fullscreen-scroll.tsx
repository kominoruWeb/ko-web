import React, { useEffect, useRef, useState } from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { bottomBar } from '../css-mixins/bottom-bar';
import SvgSquareLogo from '../generated/svg/square-logo';
import { Image } from './image';
import works from '../works.json';
import { Text } from './text'
import { Link } from 'react-router-dom'
import { LabelledArrow } from './labelled-arrow'
import { useIsTop } from '../hooks/use-is-top'
import { fadeIn } from './mobile-menu'
import classNames from 'classnames'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import {EffectFade} from 'swiper/modules';

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
  position: fixed;
  width: 100vw;
  height: 100vh;
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
  transition: transform 1000ms;
  .swiper-slide-prev & {
    transform: scale(1.1);
  }
  img {
    width: 100vw;
    height: 100vh;
    transition: height 0.4s;
    object-fit: cover;
  }
`

const ScrollContainer = styled.div`
  pointer-events: none;
`

const ScrollItemOuter = styled.div`
  width: 100vw;
  height: 100vh;
`

type ItemProps = {
  work: (typeof works)[number]
}
const Item: FunctionComponent<ItemProps> = ({work}) => {
  return <ItemOuter to={`/works/${work.id}`} key={work.id}>
    <ItemInner>
      <ItemBackgroundOuter>
        <Image
          name={work.thumbnail?.filename ?? ''}
          width={work.thumbnail?.width ?? ''}
          height={work.thumbnail?.height ?? ''}
        />
      </ItemBackgroundOuter>
      <LogoOuter style={{color: work.pickupTextColor ?? 'var(--inverted-text-color)'}}>
        <SvgSquareLogo />
      </LogoOuter>
      <ItemLabel style={{color: work.pickupTextColor ?? 'var(--inverted-text-color)'}}>
        <Text {...work.name} />
      </ItemLabel>
    </ItemInner>
  </ItemOuter>
}



type TopFullscreenScrollProps = {
  works: typeof works
}
export const TopFullscreenScroll: FunctionComponent<TopFullscreenScrollProps> = ({works}) => {
  const isTop = useIsTop()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [swiper, setSwiper] = useState<SwiperClass>()
  useEffect(() => {
    const listener = () => {
      const scrollContainer = scrollContainerRef.current
      if(scrollContainer){
        Array.from(scrollContainer.children).forEach((el, i) => {
          const rect = el.getBoundingClientRect()
          if(rect.top - (window.innerHeight / 2) < window.innerHeight / 2){
            setCurrentIndex(i)
          }
        })
      }
    }
    listener()
    window.addEventListener('scroll', listener)
    window.addEventListener('resize', listener)
    return () => {
      window.removeEventListener('sccroll', listener)
      window.removeEventListener('resize', listener)
    }
  }, [])
  useEffect(() => {
    if(swiper){
      swiper.slideTo(currentIndex, 1000)
    }
  }, [currentIndex, swiper])
  
  return <Outer id="top-fullscreen-scroll">
    <ItemContainer>
      <Swiper
        modules={[
          EffectFade
        ]}
        effect="fade"
        fadeEffect={{
        }}
        onSwiper={setSwiper}
      >
        {
          works.map(work => {
            return <SwiperSlide key={work.id}>
              <Item work={work} />
            </SwiperSlide>
          })
        }
      </Swiper>
    </ItemContainer>
    <ScrollContainer ref={scrollContainerRef}>
     {
        works.map(work => {
          return <ScrollItemOuter key={work.id} />
        })
      }
    </ScrollContainer>
    <ArrowOuter className={classNames({hide: !isTop})}>
      <LabelledArrow />
    </ArrowOuter>
  </Outer>
}

