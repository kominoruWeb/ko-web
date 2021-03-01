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
  z-index: 1;
  color: var(--inverted-text-color);
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`

const ItemContainer = styled.div`
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
  z-index: 1;
  margin-bottom: 3rem;
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
    object-fit: cover;
  }
`



type TopFullscreenScrollProps = {
  works: typeof works
}
export const TopFullscreenScroll: FunctionComponent<TopFullscreenScrollProps> = ({works}) => {
  return <Outer>
    <LogoOuter>
      <SvgSquareLogo />
    </LogoOuter>
    <ItemContainer>
      {
        works.map(work => {
          return <ItemOuter to={`/works/${work.id}`}>
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

  </Outer>
}