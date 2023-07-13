import React, { ReactNode } from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Language, useLanguage } from '../hooks/use-language';
import { BaseProps } from '../types/base-props';

type TextProps = {[language in Language]?: ReactNode}
export const Text: FunctionComponent<TextProps> = ({...languages}) => {
  const {language} = useLanguage()
  const text = languages[language] ? languages[language] : languages['ja'] ?? null
  return <>{text}</>
}