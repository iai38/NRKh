'use client'
import Link from 'next/link'

type Props = {
  variant: 'main' | 'book'
}

export default function Topbar({ variant }: Props) {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Link href="/" className="brand">
          <i>Николай</i> Хлобыстов
        </Link>
        {variant === 'main' ? (
          <nav className="nav" aria-label="Разделы сайта">
            <a href="#about">Об авторе</a>
            <span className="nav-sep">·</span>
            <a href="#books">Книги</a>
            <span className="nav-sep">·</span>
            <a href="#paintings">Живопись</a>
            <span className="nav-sep">·</span>
            <a href="#photos">Фото</a>
            <span className="nav-sep">·</span>
            <a href="#quotes">Цитаты</a>
            <span className="nav-sep">·</span>
            <a href="#events">Анонсы</a>
            <span className="nav-sep">·</span>
            <a href="#contacts">Контакты</a>
          </nav>
        ) : (
          <nav className="nav">
            <a className="back-link" href="/#books">К книгам</a>
          </nav>
        )}
      </div>
    </header>
  )
}
