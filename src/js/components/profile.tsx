import React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Image } from './image'
import { Text } from './text';
import { BaseProps } from '../types/base-props';

const Outer = styled.div`
  display: flex;
  color: var(--inverted-text-color);

  @media (max-width: 40rem) {
    flex-direction: column-reverse;
  }
`

const ProfileOuter = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  margin-right: 0.75rem;
`

const Name = styled.div`
  font-size: 1.25rem;
  align-self: flex-start;
  font-weight: 500;
  &::after {
    content: '';
    display: block;
    height: calc(1rem / 16);
    width: 100%;
    margin: 1.5rem 0;
    background-color: currentcolor;
  }
`

const Role = styled.div`
`

const BiographyTable = styled.div`
  margin-top: 1rem;
`

const BiographyItem = styled.div`
  display: flex;
  & + & {
    margin-top: 1rem;
  }
`

const BiographyYear = styled.div`
  flex: 0 0 6rem;
`

const BiographyLabel = styled.div`
  line-height: 1.25;
  margin: -0.175rem 0;
`

const Detail = styled.div`
  margin-top: 2.5rem;
  line-height: 2;
  white-space: pre-wrap;
  margin-bottom: calc((1em * 2 - 1em) / 2 * -1);
`

const ProfileImageOuter = styled.div`
  max-width: 17rem;
  margin-top: 3rem;
  @media (max-width: 40rem) {
    margin-right: 0;
    margin-bottom: 1.5rem;
    margin-top: 0;
    max-width: none;
    max-height: 20rem;
    height: 25rem;
  }
  picture, img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 20%;
    @media (max-width: 40rem) {
    }
  }
`


export const Profile: FunctionComponent<BaseProps> = () => {
  return <Outer>
    <ProfileOuter>
      <Name>
        <Text ja="胡　実　KO MINORU" />
      </Name>
      <Role>
        <Text ja="代表 / 一級建築士" en="CEO / Architect" />
      </Role>
      <BiographyTable>
          <BiographyYear>
            2006
          </BiographyYear>
          <BiographyLabel>
            <Text ja="東京大学工学部建築学科卒業" en="Graduated from the Department of Architecture, Faculty of Engineering, University of Tokyo" />
          </BiographyLabel>
        </BiographyItem>
        <BiographyItem>
          <BiographyYear>
            2007
          </BiographyYear>
          <BiographyLabel>
            <Text ja="ドイツミュンヘン工科大学 交換留学" en="Technische Universität München, Germany Exchange Study Abroad" />
          </BiographyLabel>
        </BiographyItem>
        <BiographyItem>
          <BiographyYear>
            2008
          </BiographyYear>
          <BiographyLabel>
            <Text ja="東京大学大学院建築学専攻卒業" en="Graduated from the University of Tokyo Graduate School of Architecture" />
          </BiographyLabel>
        </BiographyItem>
        <BiographyItem>
          <BiographyYear>
            2008-2016
          </BiographyYear>
          <BiographyLabel>
            <Text ja="隈研吾建筑都市設計事務所" en="Kengo Kuma &amp; Associates" />
          </BiographyLabel>
        </BiographyItem>
        <BiographyItem>
          <BiographyYear>
            2017
          </BiographyYear>
          <BiographyLabel>
            <Text ja="胡実建築設計事務所 設立" en="Established KOMINORU DESIGN" />
          </BiographyLabel>
        </BiographyItem>
      </BiographyTable>
      <Detail>
        <Text ja={`胡実建築設計事務所\n一級建築士事務所\n東京都知事登録第63040号`} en={`KOMINORU DESIGN\nThe offices of registered architects\n東京都知事登録第63040号`} />
      </Detail>
    </ProfileOuter>
    <ProfileImageOuter>
      <Image name="ko.jpg" width="800" height="1200" />
    </ProfileImageOuter>
  </Outer>
}
