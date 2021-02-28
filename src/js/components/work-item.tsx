import React from 'react';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { bottomBar } from '../css-mixins/bottom-bar';
import { Image } from './image';
import { Text } from './text';
import { WorkItemProps } from './works';

const WorkItemOuter = styled(Link)`
  position: relative;
  overflow: hidden;
  display: block;
`

const WorkItemBackground = styled.div`
  z-index: -1;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.4s;
    ${WorkItemOuter}:hover & {
      transform: scale(1.05);
      filter: brightness(0.5)
    }
  }
`

const WorkItemLabelOuter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const WorkItemLabel = styled.div`
  text-align: center;
  margin: 2rem;
  color: var(--inverted-text-color);
  line-height: 2.5;
  text-decoration: underline;
  text-decoration-thickness: calc(1rem / 8);
  text-underline-offset: 0.5rem;
  opacity: 0;
  transition: opacity 0.6s;
  ${WorkItemOuter}:hover & {
    opacity: 1;
  }
`

const Canvas = styled.canvas`
  width: 100%;
  height: auto;
`

export const WorkItem: FunctionComponent<WorkItemProps> = ({ work }) => {
  return <WorkItemOuter to={`/works/${work.id}`}>
    <Canvas width="1618" height="1000" />
    <WorkItemBackground>
      <Image name={work.thumbnail.filename} width={work.thumbnail.width} height={work.thumbnail.height} />
    </WorkItemBackground>
    <WorkItemLabelOuter>
      <WorkItemLabel>
        <Text {...work.name} />
      </WorkItemLabel>
    </WorkItemLabelOuter>
  </WorkItemOuter>
}
