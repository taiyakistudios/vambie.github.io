import { MutableRefObject, useEffect, useState } from 'react'

/**
 * Custom hook that returns true if the element referenced is visible on screen.
 *
 * Reference:
 * https://stackoverflow.com/a/65008608
 */
export default function useOnScreen(ref: MutableRefObject<any>) {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting),
    )

    observer.observe(ref.current)

    // Remove the observer as soon as the component is unmounted
    return () => observer.disconnect()
  }, [ref])

  return isIntersecting
}
