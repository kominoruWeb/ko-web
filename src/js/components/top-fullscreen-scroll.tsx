import React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { bottomBar } from '../css-mixins/bottom-bar';
import SvgSquareLogo from '../generated/svg/square-logo';
import { Image } from './image';
import works from '../works.json';
import { Text } from './text'
import { Link } from 'react-router-dom'

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
`

const ItemContainer = styled.div`
  clip-path: inset(0 0 0 0);
`

const ItemOuter = styled(Link)`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  clip-path: inset(0 0 0 0);
  display: block;
`

const Item = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`

const ItemLabel = styled.div`
  color: var(--inverted-text-color);
  margin-bottom: calc(100vh - var(--view-height) + 3rem);
  text-transform: uppercase;
  transition: margin-bottom 0.4s;
  ${bottomBar}
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



type TopFullscreenScrollProps = {
  works: typeof works
}
export const TopFullscreenScroll: FunctionComponent<TopFullscreenScrollProps> = ({works}) => {
  return <Outer>
    <ItemContainer>
      {
        works.map(work => {
          return <ItemOuter to={`/works/${work.id}`} key={work.id}>
            <Item>
              <ItemLabel>
                <Text {...work.name} />
              </ItemLabel>
              <ItemBackgroundOuter>
                <Image name={work.thumbnail.filename
                } width={work.thumbnail.width} height={work.thumbnail.height} />
              </ItemBackgroundOuter>
            </Item>
          </ItemOuter>
        })
      }
    </ItemContainer>
    <LogoOuter>
      <SvgSquareLogo />
    </LogoOuter>

  </Outer>
}