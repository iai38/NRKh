import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Topbar from '@/components/Topbar'
import TweaksPanel from '@/components/TweaksPanel'
import { books, getBook } from '@/lib/books'

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return books.map(b => ({ slug: b.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const book = getBook(slug)
  if (!book) return {}
  return {
    title: `${book.title} — Николай Хлобыстов`,
  }
}

export default async function BookPage({ params }: Props) {
  const { slug } = await params
  const book = getBook(slug)
  if (!book) notFound()

  return (
    <>
      <Topbar variant="book" />
      <main>

        {/* ── Book Hero ── */}
        <section className="shell book-hero">
          <div className="cover">
            <div className="ph">
              <span className="ph-label">cover · {book.title}</span>
              <span className="ph-corner">2 : 3 / front cover / hi-res</span>
            </div>
          </div>
          <div className="info">
              <span className="eyebrow">{book.kind} · {book.year}</span>
              <h1>{book.title}</h1>
              <p className="h-sub">{book.subtitle}</p>
              <dl className="facts">
                <dt>Жанр</dt>
                <dd>{book.facts.genre}</dd>
                <dt>Год</dt>
                <dd>{book.facts.year}</dd>
                <dt>Место</dt>
                <dd>{book.facts.place}</dd>
                <dt>Язык</dt>
                <dd>{book.facts.lang}</dd>
                {book.facts.pages && (
                  <>
                    <dt>Страниц</dt>
                    <dd>{book.facts.pages}</dd>
                  </>
                )}
                {book.facts.publisher && (
                  <>
                    <dt>Издатель</dt>
                    <dd>{book.facts.publisher}</dd>
                  </>
                )}
              </dl>
              <div className="book-themes">
                {book.themes.map(theme => (
                  <span key={theme}>{theme}</span>
                ))}
              </div>
            </div>
        </section>

        {/* ── Book Body ── */}
        <section className="shell section">
          <div className="book-body">
            {book.body.map((paragraph, i) => (
              <p key={i} className={i === 0 ? 'first-letter' : undefined}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* ── Book Quotes ── */}
        <section className="shell section">
          <header className="sec-head">
            <div className="left">
              <span className="eyebrow">Цитаты</span>
              <h2 className="h-section">Из книги</h2>
            </div>
            <p className="right">
              Фрагменты из текста.
            </p>
          </header>
          <div className="quotes">
            {book.quotes.map((q, i) => (
              <figure key={i} className={`quote${q.full ? ' full' : ''}`}>
                <span className="quote-mark">&#8220;</span>
                <blockquote className="quote-body">{q.text}</blockquote>
                <figcaption className="quote-src">
                  <em>{q.source.split(' · ')[0]}</em>
                  {q.source.includes(' · ') && ` · ${q.source.split(' · ').slice(1).join(' · ')}`}
                </figcaption>
                {q.pending && <span className="quote-pending">placeholder · awaiting author</span>}
              </figure>
            ))}
          </div>
        </section>

      </main>

      {/* ── Slim Footer ── */}
      <footer>
        <div className="foot">
          <div className="foot-bottom">
            <a className="back-link" href="/#books">К книгам</a>
            <span>© {new Date().getFullYear()} Николай Хлобыстов</span>
            <span>@alkogramma</span>
          </div>
        </div>
      </footer>

      <TweaksPanel />
    </>
  )
}
