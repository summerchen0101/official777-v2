import React, { useEffect, useRef, useState } from 'react'

function useObserver<T extends Element>() {
  const targetRef = useRef<T>(null)
  const [isViewing, setIsViewing] = useState(false)
  useEffect(() => {
    const _target = targetRef.current!
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsViewing(true)
          return
        }
        setIsViewing(false)
      })
    })
    observer.observe(_target)
    return () => {
      observer.unobserve(_target)
    }
  }, [])
  return { targetRef, isViewing }
}

export default useObserver
