import React from 'react';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { bottomBar } from '../css-mixins/bottom-bar';
import { Image } from './image';
import { Text } from './text';
import { WorkItemProps } from './works';
import { BaseProps } from '../types/base-props';

const scrollUp = keyframes`
  from {
    transform: translateY(0.5rem);
  }
  to {
    transform: translateY(0);
  }
`

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
  text-decoration-thickness: calc(1rem / 16);
  text-underline-offset: 0.5rem;
  text-decoration-color: transparent;
  opacity: 0;
  transition: opacity 0.6s, text-decoration-color 0.6s 0.2s;
  font-size: 0.9rem;
  ${WorkItemOuter}:hover & {
    opacity: 1;
    animation: ${scrollUp} 0.4s ease-out;
    text-decoration-color: currentColor;
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
      <Image name={work.thumbnail?.filename ?? ''} width={work.thumbnail?.width ?? ''} height={work.thumbnail?.height ?? ''} />
    </WorkItemBackground>
    <WorkItemLabelOuter>
      <WorkItemLabel>
        <Text {...work.name} />
      </WorkItemLabel>
    </WorkItemLabelOuter>
  </WorkItemOuter>
}
