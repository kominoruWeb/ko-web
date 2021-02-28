import React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import works from '../works.json'
import { ImageSlider } from './image-slider';
import { Text } from './text';

const Outer = styled.div`
  display: flex;
  flex-direction: column;
`

const ImageSliderOuter = styled.div`

`

const DetailOuter = styled.div`
  max-width: 50rem;
  margin: 5.5rem auto 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 1rem;
`

const Name = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  &::after {
    content: '';
    display: block;
    height: calc(1rem / 8);
    width: 100%;
    margin: 1.5rem 0;
    background-color: var(--text-color);
  }
`

const Description = styled.div`
  margin: -0.5rem 0;
  line-height: 2;
  white-space: pre-wrap;
`

type WorkProps = {
  work: typeof works[number]
}
export const Work: FunctionComponent<WorkProps> = ({work}) => {
  return <Outer>
    <ImageSliderOuter>
      <ImageSlider images={work.images}/>
    </ImageSliderOuter>
    <DetailOuter>
      <Name>
        <Text {...work.name} />
        </Name>
      <Description>
        <Text {...work.description} />
      </Description>
    </DetailOuter>
  </Outer>
}