import React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { bottomBar } from '../css-mixins/bottom-bar';
import SvgSquareLogo from '../generated/svg/square-logo';
import { Image } from './image';

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
`

const ItemContainer = styled.div`
`

const ItemOuter = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  clip-path: inset(0 0 0 0);
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




export const TopFullscreenScroll: FunctionComponent = () => {
  return <Outer>
    <LogoOuter>
      <SvgSquareLogo />
    </LogoOuter>
    <ItemContainer>
      <ItemOuter>
        <Item>
          <ItemLabel>
            K邸リノベーション
          </ItemLabel>
          <ItemBackgroundOuter>
            <Image name="image01.jpg" width="1189" height="800" />
          </ItemBackgroundOuter>
        </Item>
      </ItemOuter>
      <ItemOuter>
        <Item>
          <ItemLabel>
            IN NO HOUSE
          </ItemLabel>
          <ItemBackgroundOuter>
            <Image name="image02.jpg" width="1303" height="800" />
          </ItemBackgroundOuter>
        </Item>
      </ItemOuter>
    </ItemContainer>

  </Outer>
}