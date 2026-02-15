"use client"

import * as React from "react"

import type { FontPreference } from "@/lib/fontPreference"
import { fontPreferenceDisplay, fontPreferenceOptions } from "@/lib/fontPreference"

export type FontSelectorProps = {
  value: FontPreference
  onChange: (value: FontPreference) => void
}

export function FontSelector({ value, onChange }: FontSelectorProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as FontPreference)
  }

  return (
    <div className="flex items-center gap-1">
      <label htmlFor="font-selector" className="sr-only">
        Choose interface font
      </label>
      <select
        id="font-selector"
        value={value}
        onChange={handleChange}
        className="rounded border border-gray-200/80 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-gray-800 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
      >
        {fontPreferenceOptions.map((option) => (
          <option key={option} value={option}>
            {fontPreferenceDisplay[option]}
          </option>
        ))}
      </select>
    </div>
  )
}
