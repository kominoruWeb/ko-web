import React, { FunctionComponent, useEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'
import styled from 'styled-components'

type ScrollToTopProps = {

}
export const ScrollToTop: FunctionComponent<ScrollToTopProps> = () => {
  const navigationType = useNavigationType()
  const location = useLocation()
  useEffect(() => {
    if(navigationType === 'PUSH' || navigationType === 'REPLACE'){
      if(location.hash){
        setTimeout(() => {
          const target = document.getElementById(location.hash.replace(/^#/, ''))
          console.log(target)
          if(target){
              target.scrollIntoView({behavior: 'smooth'})
          }
        }, 50)
      } else {
        window.scrollTo(0, 0)
      }
    }
  }, [navigationType, location.hash, location.pathname, location.key])
  return null
}