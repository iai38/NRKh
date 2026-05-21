'use client'
import { useState } from 'react'
import { useTheme } from './ThemeProvider'
import type { Palette, Typography, Density } from '@/lib/theme'

export default function TweaksPanel() {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const setPalette = (palette: Palette) => setTheme({ ...theme, palette })
  const setTypography = (typography: Typography) => setTheme({ ...theme, typography })
  const setDensity = (density: Density) => setTheme({ ...theme, density })
  const toggleMode = () => setTheme({ ...theme, mode: theme.mode === 'light' ? 'dark' : 'light' })

  return (
    <>
      <button className="tweaks-fab" onClick={() => setOpen(o => !o)} aria-label="Настройки оформления">
        tweaks
      </button>
      {open && (
        <div className="tweaks-panel" role="dialog" aria-label="Настройки оформления">
          <h3>Оформление</h3>

          <div className="tweaks-group">
            <label>Палитра</label>
            <div className="tweaks-seg">
              <button data-active={theme.palette === 'paper'} onClick={() => setPalette('paper')}>Бумага</button>
              <button data-active={theme.palette === 'museum'} onClick={() => setPalette('museum')}>Музей</button>
              <button data-active={theme.palette === 'sepia'} onClick={() => setPalette('sepia')}>Сепия</button>
            </div>
          </div>

          <div className="tweaks-group">
            <label>Типографика</label>
            <div className="tweaks-seg">
              <button data-active={theme.typography === 'elegant'} onClick={() => setTypography('elegant')}>Cormorant</button>
              <button data-active={theme.typography === 'classic'} onClick={() => setTypography('classic')}>Garamond</button>
              <button data-active={theme.typography === 'editorial'} onClick={() => setTypography('editorial')}>Lora</button>
            </div>
          </div>

          <div className="tweaks-group">
            <label>Плотность</label>
            <div className="tweaks-seg">
              <button data-active={theme.density === 'airy'} onClick={() => setDensity('airy')}>Воздушная</button>
              <button data-active={theme.density === 'compact'} onClick={() => setDensity('compact')}>Компактная</button>
            </div>
          </div>

          <div className="tweaks-toggle">
            <label>Тёмный режим</label>
            <button
              data-on={theme.mode === 'dark'}
              onClick={toggleMode}
              aria-pressed={theme.mode === 'dark'}
              aria-label="Тёмный режим"
            />
          </div>
        </div>
      )}
    </>
  )
}
