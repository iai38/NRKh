'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import type { Theme } from '@/lib/theme'

type Ctx = { theme: Theme; setTheme: (t: Theme) => void }
const ThemeCtx = createContext<Ctx | null>(null)

export function useTheme() {
  const ctx = useContext(ThemeCtx)
  if (!ctx) throw new Error('useTheme outside ThemeProvider')
  return ctx
}

export default function ThemeProvider({ initialTheme, children }: { initialTheme: Theme; children: React.ReactNode }) {
  const [theme, setThemeState] = useState(initialTheme)

  const setTheme = (t: Theme) => {
    setThemeState(t)
    const r = document.documentElement
    r.setAttribute('data-palette', t.palette)
    r.setAttribute('data-mode', t.mode)
    r.setAttribute('data-typography', t.typography)
    r.setAttribute('data-density', t.density)
    const json = JSON.stringify(t)
    try { localStorage.setItem('nkh_tweaks', json) } catch {}
    document.cookie = `nkh_tweaks=${encodeURIComponent(json)};path=/;max-age=31536000;SameSite=Lax`
  }

  // Sync from localStorage on mount (other tabs, bookmarks, etc.)
  useEffect(() => {
    try {
      const saved = localStorage.getItem('nkh_tweaks')
      if (saved) {
        const t = JSON.parse(saved)
        setTheme({ ...theme, ...t })
      }
    } catch {}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <ThemeCtx.Provider value={{ theme, setTheme }}>{children}</ThemeCtx.Provider>
}
