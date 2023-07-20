import React, { useEffect } from 'react';
import { FunctionComponent } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Language, useLanguage } from '../hooks/use-language'
import { BaseProps } from '../types/base-props';
import { useExternalCss } from '../hooks/use-external-css';

const CSS = createGlobalStyle<{language: Language}>`
  :root {
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 100;
    --gray: #e6e6e6;
    --brown: #413d3a;
    --dark-brown: #332e28;
    --darkest-brown: #f0f0f0;
    --header-height: 3rem;
    --text-color: var(--brown);
    --hover-text-color: #6e6861;
    --inverted-text-color: #f0f0f0;
    color: var(--text-color);
    overflow-x: hidden;

    @media (max-width: 50rem) {
      --header-height: 3rem;
    }
  }
  
  a {
    color: inherit;
    text-decoration: inherit;

  }
`

export const RootCSS: FunctionComponent<BaseProps> = () => {
  const {language} = useLanguage()
  useEffect(() => {
    const setViewHeight = () => {
      document.documentElement.style.setProperty('--view-height', `${window.innerHeight}px`)
    }
    setViewHeight()
    window.addEventListener('resize', setViewHeight)
    return () => {
      window.removeEventListener('resize', setViewHeight)
    }
  })
  useExternalCss('https://fonts.googleapis.com/css2?family=Cabin:wght@400&family=Noto+Sans+JP:wght@100;500&display=swap')
  useExternalCss('https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css')
  return <CSS language={language}/>
}