// my reference for this hook: https://reedbarger.com/how-to-create-a-custom-usecopytoclipboard-react-hook/

import { useState, useCallback, useEffect } from 'react'
import copy from 'copy-to-clipboard'

const useCopyEmail = (resetInterval = null) => {
  
  const [ isCopied, setIsCopied ] = useState(false)

  const handleCopy = useCallback(
    (text) => {
      copy(text)
      setIsCopied(true)
  }, [])

  useEffect(() => {
    let timeout
    if (isCopied && resetInterval) {
      timeout = setTimeout(() => setIsCopied(false), resetInterval)
    }
    return () => {
      clearTimeout(timeout)
    }
  }, [ isCopied, resetInterval ])

  return [ isCopied, handleCopy ]

}

export default useCopyEmail