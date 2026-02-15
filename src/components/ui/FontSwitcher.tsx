"use client"

import { useEffect, useState } from "react"
import {
  applyFontPreference,
  FontPreference,
  getStoredFontPreference,
  saveFontPreference,
} from "@/lib/font"

const FONT_OPTIONS: { id: FontPreference; label: string }[] = [
  { id: "system", label: "System (default)" },
  { id: "arial", label: "Arial" },
]

export default function FontSwitcher() {
  const [preference, setPreference] = useState<FontPreference>("system")

  useEffect(() => {
    const stored = getStoredFontPreference() ?? "system"
    setPreference(stored)
    applyFontPreference(stored)
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const nextPreference = event.target.value as FontPreference
    setPreference(nextPreference)
    saveFontPreference(nextPreference)
    applyFontPreference(nextPreference)
  }

  return (
    <div className="flex items-center gap-2 text-sm">
      <label htmlFor="font-switcher" className="font-medium text-gray-600">
        Font
      </label>
      <select
        id="font-switcher"
        value={preference}
        onChange={handleChange}
        className="rounded-md border border-gray-300 bg-white px-2 py-1 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        {FONT_OPTIONS.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
      <span className="sr-only" aria-live="polite">
        Font preference saved: {preference === "system" ? "System (default)" : "Arial"}
      </span>
    </div>
  )
}
