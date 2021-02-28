import React from 'react';
import { FunctionComponent } from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import styled from 'styled-components';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Reset } from './components/reset';
import { RootCSS } from './components/root-css';
import { LanguageProvider } from './hooks/use-language';
import { ConceptPage } from './pages/concept-page';
import { ContactPage } from './pages/contact-page';
import { TopPage } from './pages/top-page';
import { WorkPage } from './pages/work-page';
import { WorksPage } from './pages/works-page';
const ScrollRestoration = require('react-scroll-restoration')

const HeaderOuter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 100;
`

const FooterOuter = styled.div``

const ContentOuter = styled.div`
`

export const App: FunctionComponent = () => {
  return <BrowserRouter>
    <LanguageProvider>
      <ScrollRestoration />
      <Reset />
      <RootCSS />
      <HeaderOuter>
        <Header />
      </HeaderOuter>
      <ContentOuter>
        <Switch>
          <Route exact path="/" component={TopPage} />
          <Route exact path="/concept" component={ConceptPage} />
          <Route exact path="/works" component={WorksPage} />
          <Route exact path="/works/:workId" render={({match}) => {
            return <WorkPage workId={match.params.workId}/>
          }}>
          </Route>
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
      </ContentOuter>
      <FooterOuter>
        <Footer />
      </FooterOuter>
    </LanguageProvider>
  </BrowserRouter>
}