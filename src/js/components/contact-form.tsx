import React from 'react'
import { FunctionComponent } from 'react'
import styled from 'styled-components'

const Outer = styled.div`
  height: 40rem;
  width: 100%;
  box-sizing: border-box;
  padding: 4rem 0;
  iframe {
    height: 100%;
    width: 100%;
  }
`

export const ContactForm: FunctionComponent = () => {
  return <Outer>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdTwDytBzr_frpfC9OukCojUxm_FWmcwEIaBCKac7XP_rWchA/viewform?embedded=true">Loading…</iframe>
  </Outer>
}