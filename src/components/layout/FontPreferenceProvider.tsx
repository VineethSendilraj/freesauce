"use client"

import * as React from "react"

import { FontPreference, readFontPreference, writeFontPreference } from "@/lib/fontPreference"

type FontPreferenceContextValue = {
  preference: FontPreference
  setPreference: (value: FontPreference) => void
}

const FontPreferenceContext = React.createContext<FontPreferenceContextValue | undefined>(undefined)

export function FontPreferenceProvider({ children }: { children: React.ReactNode }) {
  const [preference, setPreferenceState] = React.useState<FontPreference>("default")

  React.useEffect(() => {
    const storedPreference = readFontPreference()
    if (storedPreference) {
      setPreferenceState(storedPreference)
    }
  }, [])

  React.useEffect(() => {
    document.documentElement.dataset.font = preference
  }, [preference])

  const setPreference = React.useCallback((value: FontPreference) => {
    setPreferenceState(value)
    writeFontPreference(value)
  }, [])

  const contextValue = React.useMemo(
    () => ({
      preference,
      setPreference,
    }),
    [preference, setPreference]
  )

  return (
    <FontPreferenceContext.Provider value={contextValue}>
      {children}
    </FontPreferenceContext.Provider>
  )
}

export function useFontPreference() {
  const context = React.useContext(FontPreferenceContext)
  if (!context) {
    throw new Error("useFontPreference must be used within FontPreferenceProvider")
  }
  return context
}
