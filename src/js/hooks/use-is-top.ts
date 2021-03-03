import { useState, useRef, useEffect } from 'react'

export const useIsTop = (): boolean => {
  const [isTop, setIsTop] = useState(true)
  const isTopRef = useRef(isTop)
  useEffect(() => {
    isTopRef.current = isTop
  }, [isTop])
  useEffect(() => {
    const listener = () => {
      const isTop = window.scrollY < 1
      if(isTopRef.current !== isTop){
        setIsTop(isTop)
      }
    }
    listener()
    window.addEventListener('scroll', listener)
    return () => {
      window.removeEventListener('scroll', listener)
    }
  })
  return isTop
}