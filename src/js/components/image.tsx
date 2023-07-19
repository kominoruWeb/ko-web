import React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

const Picture = styled.picture`
  display: block;
`
const Img = styled.img`
  display: block;
`

type ImageProps = {
  name: string,
  alt?: string,
  width: number | string,
  height: number | string
}
export const Image: FunctionComponent<ImageProps> = ({name, width, height, alt}) => {
  return <Picture>
    <source type="image/webp" srcSet={`/images/${name.replace(/\..*?$/, '')}.webp`} />
    <source type="image/png" srcSet={`/images/${name}`} />
    <Img src={`/images/${name}`} width={width} height={height} alt={alt} />
  </Picture>
}