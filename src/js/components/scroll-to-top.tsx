import { FunctionComponent, useEffect } from 'react';
import { useHistory } from 'react-router';

export const ScrollToTop: FunctionComponent = () => {
  const history = useHistory()
  useEffect(() => {
    history.listen((location, action) => {
      console.log(action, location)
      if(action === 'PUSH'){
        window.scrollTo(0, 0)

        if(location.hash){
          window.requestAnimationFrame(() => {
            document.getElementById(location.hash.replace(/^#/, ''))?.scrollIntoView()
          })
        }
      }
    })
  }, [])

  return null
}