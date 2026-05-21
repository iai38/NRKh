export type Palette = 'paper' | 'museum' | 'sepia'
export type Mode = 'light' | 'dark'
export type Typography = 'elegant' | 'classic' | 'editorial'
export type Density = 'airy' | 'compact'

export type Theme = {
  palette: Palette
  mode: Mode
  typography: Typography
  density: Density
}

export const defaultTheme: Theme = {
  palette: 'paper',
  mode: 'light',
  typography: 'elegant',
  density: 'airy',
}

export function parseThemeCookie(raw: string | undefined): Theme {
  if (!raw) return defaultTheme
  try {
    const t = JSON.parse(raw)
    return {
      palette: ['paper','museum','sepia'].includes(t.palette) ? t.palette : defaultTheme.palette,
      mode: ['light','dark'].includes(t.mode) ? t.mode : defaultTheme.mode,
      typography: ['elegant','classic','editorial'].includes(t.typography) ? t.typography : defaultTheme.typography,
      density: ['airy','compact'].includes(t.density) ? t.density : defaultTheme.density,
    }
  } catch { return defaultTheme }
}
