import React, { Fragment } from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import SvgLanguageSelectorDivider from '../generated/svg/language-selector-divider';
import { Language, languages, useLanguage } from '../hooks/use-language';

const Outer = styled.div`
`

const LanguageItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0.5rem;
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

  @media (max-width: 50rem) {
    
  }
`

const LanguageItemLabel = styled.div``

const Divider = styled.div`
  width: calc(1rem / 8);
  height: 1rem;
  background-color: var(--text-color);
`

type LanguageSelectorProps = {
  onChange?: (language: Language) => void
}
export const LanguageSelector: FunctionComponent<LanguageSelectorProps> = ({onChange}) => {
  const {setLanguage} = useLanguage()
  return <Outer>
    <LanguageItemContainer>
      {languages.map((language, i) => {
        return <Fragment key={i}>
          {
            i > 0 &&
            <Divider />
          }
          <LanguageItem onClick={() => {
            setLanguage(language)
            if(onChange){
              onChange(language)
            }
          }}>
            <LanguageItemLabel>
              {language.toUpperCase()}
            </LanguageItemLabel>

          </LanguageItem>
        </Fragment>
      })}
    </LanguageItemContainer>
  </Outer>
}