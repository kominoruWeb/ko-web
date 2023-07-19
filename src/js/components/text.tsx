import React, { ReactNode } from 'react';
import { FunctionComponent } from 'react';
import { Language, useLanguage } from '../hooks/use-language';

type TextProps = {[language in Language]?: ReactNode}
export const Text: FunctionComponent<TextProps> = ({...languages}) => {
  const {language} = useLanguage()
  const text = languages[language] ? languages[language] : languages['ja'] ?? null
  return <>{text}</>
}