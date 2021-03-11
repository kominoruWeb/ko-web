import React, { useEffect, useState } from 'react'
import { FunctionComponent } from 'react'
import styled, { keyframes } from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import SvgArrow from '../generated/svg/arrow'
import { Image } from './image'
import SwiperCore, { Autoplay, Controller, Pagination } from 'swiper'
import { useIsMobile } from '../hooks/use-is-mobile'

SwiperCore.use([Controller, Autoplay, Pagination])

const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Outer = styled.div`
`

const SwiperOuter = styled.div`
  background-color: var(--darkest-brown);
  position: relative;
  user-select: none;
  .swiper-pagination {
    height: 2rem;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    animation: ${fadein} 0.4s 2.1s forwards;
    padding: 0 1rem;
    box-sizing: border-box;
    .swiper-pagination-bullet {
      display: block;
      color: var(--brown);
      opacity: 1;
      margin: -0.5rem 0.175rem;
      width: 1.75rem;
      height: 2rem;
      opacity: 0.3;
      border-radius: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      &::after {
        content: '';
        display: block;
        height: calc(1rem / 16);
        width: 100%;
        background-color: currentcolor;
      }
      &:hover {
        opacity: 0.7;
      }
      @media (max-width: 50rem) {
        width: 1.25rem;
      }
      &.swiper-pagination-bullet-active {
        opacity: 1;
        height: 0.25rem;
      }
    }
  }
`

const ControllOuter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: stretch;
  z-index: 1;
  pointer-events: none;
  opacity: 0;
  animation: ${fadein} 0.4s 2.1s forwards;
`

const ControllButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  pointer-events: auto;
  transition: all 0.4s;
  cursor: pointer;
  color: var(--brown);
  &:hover {
    opacity: 0.5;
  }
`

const LeftControllButton = styled(ControllButton)`
padding-right: 4rem;
  svg {
    transform: scaleX(-1);
  }
`

const RightControllButton = styled(ControllButton)`
  padding-left: 4rem;
  margin-left: auto;
`

const padding = keyframes`
  from {
    opacity: 0;
    transform: scale(1.2);
  }
  to {
    opacity: 1;
    transform: none;
  }
`

const ImageOuter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: calc(var(--view-height) - var(--header-height) - 10rem);
  min-height: 20rem;
  box-sizing: border-box;
  padding: 3rem 4rem;
  overflow: hidden;
  @media (max-width: 40rem) {
    height: 100%;
    padding: 2rem;
  }


  picture, img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transform: scale(1.2);
    opacity: 0;
    animation: ${padding} 2s 0.1s cubic-bezier(0.5, 0.5, 0, 1) forwards;
    @media (max-width: 40rem) {
      width: 100%;
      height: auto;
      object-fit: fill;
    }
  }
`

type ImageSliderProps = {
  images: {
    filename: string,
    width: number,
    height: number
  }[]
}
export const ImageSlider: FunctionComponent<ImageSliderProps> = ({images}) => {
  const isMobile = useIsMobile(50)
  const [swiper, setSwiper] = useState<SwiperCore>()
  useEffect(() => {
    if(swiper){
      setTimeout(() => {
        swiper.updateSlides()
        swiper.updateAutoHeight()
      }, 1)
    }
  }, [isMobile, swiper])
  return <Outer>
    <SwiperOuter>
      <Swiper
        slidesPerView={1}
        onSwiper={(swiper => setSwiper(swiper))}
        loop
        autoHeight
        speed={1000}
        autoplay={{
          delay: 4000,

        }}
        pagination={{
          clickable: true
        }}
      >
        {images.map((image, i) => {
          return <SwiperSlide key={i}>
            <ImageOuter>
              <Image name={image.filename} width={image.width} height={image.height} />
            </ImageOuter>
          </SwiperSlide>
        })}
      </Swiper>
      <ControllOuter>
        <LeftControllButton onClick={() => swiper?.slidePrev()}>
          <SvgArrow />
        </LeftControllButton>
        <RightControllButton onClick={() => swiper?.slideNext()}>
          <SvgArrow />
        </RightControllButton>
      </ControllOuter>
    </SwiperOuter>
  </Outer>
}