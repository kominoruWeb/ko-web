import React, { createContext, FunctionComponent, useContext, useState } from 'react'

export const languages = [
  'ja',
  'en',
  'zh'
] as const

export type Language = (typeof languages)[number]

type LanguageContextType = {
  language: Language,
  setLanguage: ((language: Language) => void) | null
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'ja',
  setLanguage: null
})

export const LanguageProvider: FunctionComponent = ({children}) => {
  const [language, setLanguage] = useState<Language>('ja')
  return <LanguageContext.Provider value={{language, setLanguage}}>
    {children}
  </LanguageContext.Provider>
}

export const useLanguage = () => {
  const {language, setLanguage} = useContext(LanguageContext)
  if(!setLanguage) throw new Error('useLanguage must be called inside LanguageProvider child.')
  return {language, setLanguage}
}