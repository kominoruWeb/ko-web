import React from 'react';
import { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import { Language, useLanguage } from '../hooks/use-language'
import works from '../works.json'
import { ImageSlider } from './image-slider';
import { Text } from './text';

const Outer = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--inverted-text-color);
`

const ImageSliderOuter = styled.div`

`

const DetailOuter = styled.div`
  max-width: 50rem;
  margin: 5.5rem auto 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
  padding: 0 1rem;

  @media (max-width: 40rem) {
    margin-top: 3rem;
  }
`

const Name = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.5;
  margin-top: calc(1.25rem * 0.5 / 2 * -1);
  &::after {
    content: '';
    display: block;
    height: calc(1rem / 16);
    width: 100%;
    margin: calc(1.25rem * 0.5 / 2 * -1 + 1.5rem) 0 1.5rem;
    background-color: currentcolor;
  }
`

const Description = styled.div<{language: Language}>`
  margin: -0.5rem 0;
  line-height: 2;
  white-space: pre-wrap;
  ${({language}) => {
    switch(language){
      case 'en':
        return css`
          font-style: italic;
        `
    }
  }}
  @media (max-width: 40rem) {
    margin: -0.25rem 0;
    line-height: 1.75;
    white-space: normal;
    text-align: justify;
  }
`

type WorkProps = {
  work: typeof works[number]
}
export const Work: FunctionComponent<WorkProps> = ({work}) => {
  const {language} = useLanguage()
  return <Outer key={work.id}>
    <ImageSliderOuter>
      <ImageSlider images={work.images}/>
    </ImageSliderOuter>
    <DetailOuter>
      <Name>
        <Text {...work.name} />
        </Name>
      <Description language={language}>
        <Text {...work.description} />
      </Description>
    </DetailOuter>
  </Outer>
}