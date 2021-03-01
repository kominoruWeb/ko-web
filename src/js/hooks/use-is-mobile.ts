import { useEffect, useRef, useState } from 'react'

const remToPixel = (rem: number) => {
  console.log(getComputedStyle(document.documentElement).fontSize)
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

export const useIsMobile = (rem: number): boolean => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= remToPixel(rem))
  const isMobileRef = useRef(isMobile)
  useEffect(() => {
    isMobileRef.current = isMobile
  }, [isMobile])
  useEffect(() => {
    const listener = () => {
      const isMobile = window.innerWidth <= remToPixel(rem)
      if(isMobileRef.current !== isMobile){
        setIsMobile(isMobile)
      }
    }
    window.addEventListener('resize', listener)
    return () => {
      window.removeEventListener('resize', listener)
    }
  }, [])
  return isMobile
}