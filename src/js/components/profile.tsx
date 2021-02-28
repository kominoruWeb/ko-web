import React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Text } from './text';

const Outer = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--inverted-text-color);
`

const Name = styled.div`
  font-size: 1.25rem;
  align-self: flex-start;
  font-weight: 700;
  &::after {
    content: '';
    display: block;
    height: calc(1rem / 8);
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
`


export const Profile: FunctionComponent = () => {
  return <Outer>
    <Name>
      <Text ja="胡　実　Ko-mi" />
    </Name>
    <Role>
      <Text ja="代表 / 一級建築士" en="CEO / Architect" />
    </Role>
    <BiographyTable>
      <BiographyItem>
        <BiographyYear>
          1982
        </BiographyYear>
        <BiographyLabel>
          <Text ja="北京生まれ" en="Born in Beijing" />
        </BiographyLabel>
      </BiographyItem>
      <BiographyItem>
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
  </Outer>
}