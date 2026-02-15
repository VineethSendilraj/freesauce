export const FONT_PREFERENCE_KEY = "font-preference" as const

export type FontPreference = "system" | "arial"

export const FONT_CLASS_MAP: Record<FontPreference, string> = {
  system: "font-system",
  arial: "font-arial",
}

const FONT_CLASSES = Object.values(FONT_CLASS_MAP)

const isFontPreference = (value: unknown): value is FontPreference =>
  value === "system" || value === "arial"

/**
 * Read the stored font preference if localStorage is available.
 * Errors (e.g., blocked storage) are swallowed so callers can fall back.
 */
export function getStoredFontPreference(): FontPreference | null {
  if (typeof window === "undefined") {
    return null
  }

  try {
    const raw = window.localStorage.getItem(FONT_PREFERENCE_KEY)
    if (raw && isFontPreference(raw)) {
      return raw
    }
  } catch (error) {
    // Ignore storage failures (private mode, blocked, etc.).
  }

  return null
}

/**
 * Persist the chosen preference with a best-effort attempt.
 */
export function saveFontPreference(preference: FontPreference): void {
  if (typeof window === "undefined") {
    return
  }

  try {
    window.localStorage.setItem(FONT_PREFERENCE_KEY, preference)
  } catch (error) {
    // Swallow so UI continues to function without storage.
  }
}

/**
 * Apply the preference immediately by toggling the root class list.
 */
export function applyFontPreference(preference: FontPreference): void {
  if (typeof document === "undefined") {
    return
  }

  const root = document.documentElement
  if (!root) {
    return
  }

  FONT_CLASSES.forEach((className) => root.classList.remove(className))
  root.classList.add(FONT_CLASS_MAP[preference])
}
