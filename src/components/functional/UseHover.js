// my reference for this hook: https://gist.github.com/gragland/a32d08580b7e0604ff02cb069826ca2f

import { useState, useCallback, useRef } from "react"

const useHover = () =>  {
  const [value, setValue] = useState(false)
	
  const handleMouseOver = useCallback(() => setValue(true), [])
  const handleMouseOut = useCallback(() => setValue(false), [])

  const ref = useRef()
  
  const callbackRef = useCallback(
    node => {
      if (ref.current) {
        ref.current.removeEventListener("mouseenter", handleMouseOver)
        ref.current.removeEventListener("mouseleave", handleMouseOut)
      }

      ref.current = node

      if (ref.current) {
        ref.current.addEventListener("mouseenter", handleMouseOver)
        ref.current.addEventListener("mouseleave", handleMouseOut)
      }
    },
    [handleMouseOver, handleMouseOut]
  );

  return [callbackRef, value]
}

export default useHover