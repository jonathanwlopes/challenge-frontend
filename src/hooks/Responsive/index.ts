import { useState, useEffect } from "react"

interface WindowResponsiveProps {
  width: number
  height: number
}

const getWindowDimensions = (): WindowResponsiveProps => {
  const { innerWidth: width, innerHeight: height } = window

  return {
    width,
    height,
  }
}

export const useWindowDimensions = (): WindowResponsiveProps => {
  const [windowDimensions, setWindowDimensions] = useState<WindowResponsiveProps>(getWindowDimensions())

  useEffect(() => {
    const handleResize = (): void => {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener("resize", handleResize)

    return (): void => window.removeEventListener("resize", handleResize)
  }, [])

  return windowDimensions
}
