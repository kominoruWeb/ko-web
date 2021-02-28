import React, { Fragment } from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import SvgLanguageSelectorDivider from '../generated/svg/language-selector-divider';
import { languages, useLanguage } from '../hooks/use-language';

const Outer = styled.div`
`

const LanguageItemContainer = styled.div`
  display: flex;
  align-items: center;
`

const LanguageItem = styled.div`
  font-family: 'Cabin';
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    opacity: 0.5;
  }
`

const LanguageItemLabel = styled.div``

const Divider = styled.div`
  width: calc(1rem / 8);
  height: 1rem;
  background-color: var(--text-color);
`

export const LanguageSelector: FunctionComponent = () => {
  const {setLanguage} = useLanguage()
  return <Outer>
    <LanguageItemContainer>
      {languages.map((language, i) => {
        return <Fragment key={i}>
          {
            i > 0 &&
            <Divider />
          }
          <LanguageItem onClick={() => setLanguage(language)}>
            <LanguageItemLabel>
              {language.toUpperCase()}
            </LanguageItemLabel>

          </LanguageItem>
        </Fragment>
      })}
    </LanguageItemContainer>
  </Outer>
}