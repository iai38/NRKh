import { cookies } from 'next/headers'
import {
  Cormorant_Garamond, EB_Garamond, Lora,
  Manrope, IBM_Plex_Sans, IBM_Plex_Mono, Work_Sans
} from 'next/font/google'
import { parseThemeCookie } from '@/lib/theme'
import ThemeProvider from '@/components/ThemeProvider'
import '@/styles/globals.css'

// Font declarations — each gets a CSS variable
const cormorant = Cormorant_Garamond({ subsets: ['latin', 'cyrillic'], weight: ['400', '500', '600', '700'], style: ['normal', 'italic'], variable: '--f-cormorant', display: 'swap' })
const ebGaramond = EB_Garamond({ subsets: ['latin', 'cyrillic'], weight: ['400', '500', '600'], style: ['normal', 'italic'], variable: '--f-eb-garamond', display: 'swap' })
const lora = Lora({ subsets: ['latin', 'cyrillic'], weight: ['400', '500', '600'], style: ['normal', 'italic'], variable: '--f-lora', display: 'swap' })
const manrope = Manrope({ subsets: ['latin', 'cyrillic'], weight: ['400', '500', '600', '700'], variable: '--f-manrope', display: 'swap' })
const ibmPlexSans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--f-ibm-plex-sans', display: 'swap' })
const ibmPlexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--f-ibm-plex-mono', display: 'swap' })
const workSans = Work_Sans({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--f-work-sans', display: 'swap' })

export const metadata = {
  title: { default: 'Николай Хлобыстов — писатель, поэт, фотограф, художник', template: '%s — Николай Хлобыстов' },
  description: 'Официальный сайт Николая Хлобыстова — российского прозаика и поэта, автора романов «Homo Veritas» и «Французское кресло», поэтического сборника «Весь мой хлам».',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const raw = cookieStore.get('nkh_tweaks')?.value
  const theme = parseThemeCookie(raw)

  const fontVars = [cormorant, ebGaramond, lora, manrope, ibmPlexSans, ibmPlexMono, workSans]
    .map(f => f.variable).join(' ')

  return (
    <html
      lang="ru"
      data-palette={theme.palette}
      data-mode={theme.mode}
      data-typography={theme.typography}
      data-density={theme.density}
      className={fontVars}
    >
      <body>
        <ThemeProvider initialTheme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
