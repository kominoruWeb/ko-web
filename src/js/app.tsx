import React from 'react';
import { FunctionComponent } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled from 'styled-components';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { fadeIn } from './components/mobile-menu'
import { Reset } from './components/reset';
import { RootCSS } from './components/root-css';
import { ScrollToTop } from './components/scroll-to-top';
import { LanguageProvider } from './hooks/use-language';
import { ConceptPage } from './pages/concept-page';
import { ContactPage } from './pages/contact-page';
import { ProfilePage } from './pages/profile-page';
import { TopPage } from './pages/top-page';
import { WorkPage } from './pages/work-page';
import { WorksPage } from './pages/works-page';
import { BaseProps } from './types/base-props';

const Outer = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.6s 0.4s forwards;
  min-height: var(--view-height);
  display: flex;
  flex-direction: column;
`

const HeaderOuter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 100;
`

const FooterOuter = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: var(--brown);
`

const ContentOuter = styled.div`
`

export const App: FunctionComponent<BaseProps> = () => {
  return <BrowserRouter>
    <ScrollToTop />
    <LanguageProvider>
      <Reset />
      <RootCSS />
      <Outer>
        <HeaderOuter>
          <Header />
        </HeaderOuter>
        <ContentOuter>
          <Routes>
            <Route path="/" element={<TopPage />} />
            <Route path="/concept" element={<ConceptPage />} />
            <Route path="/works" element={<WorksPage />} />
            <Route path="/works/:workId" element={<WorkPage />}>
            </Route>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </ContentOuter>
        <FooterOuter>
          <Footer />
        </FooterOuter>
      </Outer>
    </LanguageProvider>
  </BrowserRouter>
}