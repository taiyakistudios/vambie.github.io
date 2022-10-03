import { MutableRefObject, useEffect, useState } from 'react'

/**
 * Inspiration:
 * https://stackoverflow.com/a/65008608
 */
export function useOnScreenOnce(
  ref: MutableRefObject<any>,
  onChange: (isVisible: boolean) => void,
) {
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (hasShown) return
      onChange(entry.isIntersecting)

      if (entry.isIntersecting) {
        setHasShown(true)
      }
    })

    observer.observe(ref.current)

    // Remove the observer as soon as the component is unmounted
    return () => observer.disconnect()
  }, [ref, onChange, hasShown])
}
