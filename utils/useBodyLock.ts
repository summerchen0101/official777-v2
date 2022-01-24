import { useEffect } from 'react'

function useBodyLock(isLock: boolean) {
  useEffect(() => {
    if (isLock) {
      document.querySelector('body')?.classList.add('lock')
    } else {
      document.querySelector('body')?.classList.remove('lock')
    }
  }, [isLock])
}

export default useBodyLock
