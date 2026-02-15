export type FontPreference = "default" | "comic";

const FONT_PREFERENCE_KEY = "fs-font-preference";

export const fontPreferenceDisplay: Record<FontPreference, string> = {
  default: "Default",
  comic: "Comic Sans",
};

export const fontPreferenceOptions: FontPreference[] = ["default", "comic"];

export function readFontPreference(): FontPreference | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const stored = window.localStorage.getItem(FONT_PREFERENCE_KEY);
    if (stored === "default" || stored === "comic") {
      return stored;
    }
  } catch (error) {
    console.warn("Unable to read font preference", error);
  }

  return null;
}

export function writeFontPreference(value: FontPreference) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(FONT_PREFERENCE_KEY, value);
  } catch (error) {
    console.warn("Unable to persist font preference", error);
  }
}
