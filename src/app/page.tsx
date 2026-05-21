import Link from 'next/link'
import Topbar from '@/components/Topbar'
import TweaksPanel from '@/components/TweaksPanel'
import { books } from '@/lib/books'

export default function HomePage() {
  return (
    <>
      <Topbar variant="main" />
      <main id="top">

        {/* ── Hero ── */}
        <section className="shell hero">
          <div className="hero-text">
            <span className="eyebrow">Москва · 2024 / 2025</span>
            <h1 className="h-display hero-title">
              <span className="first">Николай</span>
              <span>Хлобыстов</span>
            </h1>
            <p className="hero-roles">
              <span>писатель</span><span>поэт</span><span>фотограф</span><span>художник</span>
            </p>
            <p className="lead hero-bio">
              Российский прозаик и поэт. Работает в жанре современной&nbsp;философской прозы,
              соединяя интеллектуальный роман с авантюрным и историко-метафизическим сюжетом.
              Автор романов «Homo&nbsp;Veritas» и «Французское кресло» и поэтического сборника
              «Весь&nbsp;мой&nbsp;хлам».
            </p>
            <div className="hero-meta">
              <span>Род. в Москве</span>
              <span>РГГУ · РЭУ им. Г.&nbsp;В.&nbsp;Плеханова</span>
              <span>Plenum scriptor</span>
            </div>
          </div>
          <figure className="hero-portrait ph" aria-label="Портрет автора">
            <span className="ph-label">drop portrait here · 4 : 5</span>
            <span className="ph-corner">portrait — author / b&w preferred</span>
          </figure>
        </section>

        {/* ── About ── */}
        <section id="about" className="shell section">
          <div className="about-grid">
            <aside className="about-aside">
              <div className="eyebrow">Об авторе</div>
              <div className="about-aside-mark">N.&nbsp;K.</div>
              <p className="meta" style={{ marginTop: '8px' }}>Москва · с 1990-х</p>
            </aside>
            <div className="about-body">
              <p className="first-letter">
                Николай Хлобыстов — российский прозаик и поэт. Родился и живёт в Москве,
                учился в Российском государственном гуманитарном университете и в
                Российском экономическом университете имени Г.&nbsp;В.&nbsp;Плеханова.
                Много путешествовал; занимается плёночной фотографией и масляной живописью —
                внимание к детали и наблюдательность, выработанные этими практиками, заметно
                определяют его прозу.
              </p>
              <p>
                Хлобыстов работает в жанре современной философской прозы, в которой
                остросюжетная или историческая конструкция служит рамкой для размышления
                о природе человека, истины и памяти. Роман «Homo&nbsp;Veritas» — интеллектуальная
                проза с авантюрным каркасом и ироничным повествователем: действие
                разворачивается в современной художественной среде Москвы и строится вокруг
                спора о «человеке истинном». «Французское&nbsp;кресло» сочетает семейную сагу,
                историческую прозу и метафизику памяти: герой-француз русского происхождения
                обнаруживает рукопись своего прадеда.
              </p>
              <p>
                Поэтический сборник «Весь мой хлам» (2024) объединяет лирику разных лет.
                Её сквозные мотивы — память, дом и его отсутствие, взросление, родовая
                преемственность, дорога, любовь и одиночество — перекликаются с прозой
                автора. Для поэтики характерны насыщенная звукопись и паронимическая игра,
                тяготение к сжатому, афористичному четверостишию.
              </p>
            </div>
          </div>
        </section>

        {/* ── Books ── */}
        <section id="books" className="shell section">
          <header className="sec-head">
            <div className="left">
              <span className="eyebrow">Книги</span>
              <h2 className="h-section">Романы и стихи</h2>
            </div>
            <p className="right">
              Три книги — две прозы и сборник стихов. Каждая существует как отдельный
              разговор о памяти, корнях и природе человека. Нажмите обложку, чтобы перейти
              на страницу книги.
            </p>
          </header>
          <div className="books">
            {books.map(book => (
              <Link key={book.slug} href={`/books/${book.slug}`} className="book">
                <div className="book-cover ph">
                  <span className="ph-label">cover · {book.title}</span>
                  <span className="ph-corner">2 : 3 / front cover</span>
                </div>
                <div className="book-meta">
                  <span className="book-genre">{book.kind}</span>
                  <span className="book-year">{book.year}</span>
                </div>
                <h3 className="book-title">{book.title}</h3>
                <p className="book-blurb">{book.blurb}</p>
                <span className="book-link">Открыть страницу</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Paintings ── */}
        <section id="paintings" className="shell section">
          <header className="sec-head">
            <div className="left">
              <span className="eyebrow">Живопись · Oil on canvas</span>
              <h2 className="h-section">Картины маслом</h2>
            </div>
            <p className="right">
              Внимание к детали и наблюдательность, выработанные за мольбертом, заметно
              определяют прозу автора. Здесь — избранные работы последних лет.
            </p>
          </header>
          <div className="gallery paintings">
            <figure className="cell c1">
              <div className="ph">
                <span className="ph-label">drop image here</span>
                <span className="ph-corner">painting #01 / 4 : 5</span>
              </div>
              <figcaption className="cell-caption">
                <span className="t">Окно на Ильинке</span>
                <span className="s">oil / 80 × 100 / 2024</span>
              </figcaption>
            </figure>
            <figure className="cell c2">
              <div className="ph">
                <span className="ph-label">drop image here</span>
                <span className="ph-corner">painting #02 / 4 : 5</span>
              </div>
              <figcaption className="cell-caption">
                <span className="t">Француженка</span>
                <span className="s">oil / 60 × 80 / 2023</span>
              </figcaption>
            </figure>
            <figure className="cell c3">
              <div className="ph">
                <span className="ph-label">drop image here</span>
                <span className="ph-corner">painting #03 / 1 : 1</span>
              </div>
              <figcaption className="cell-caption">
                <span className="t">Натюрморт с креслом</span>
                <span className="s">oil / 70 × 70 / 2024</span>
              </figcaption>
            </figure>
            <figure className="cell c4">
              <div className="ph">
                <span className="ph-label">drop image here</span>
                <span className="ph-corner">painting #04 / 1 : 1</span>
              </div>
              <figcaption className="cell-caption">
                <span className="t">Луара, март</span>
                <span className="s">oil / 50 × 50 / 2023</span>
              </figcaption>
            </figure>
            <figure className="cell c5">
              <div className="ph">
                <span className="ph-label">drop image here</span>
                <span className="ph-corner">painting #05 / 1 : 1</span>
              </div>
              <figcaption className="cell-caption">
                <span className="t">Антресоль</span>
                <span className="s">oil / 60 × 60 / 2022</span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ── Photos ── */}
        <section id="photos" className="shell section">
          <header className="sec-head">
            <div className="left">
              <span className="eyebrow">Плёночная фотография · 35&nbsp;mm</span>
              <h2 className="h-section">Фотография</h2>
            </div>
            <p className="right">
              Главным образом плёнка, чаще чёрно-белая. Москва, Байкал, дороги между
              городами; путевые серии — большая часть архива.
            </p>
          </header>
          <div className="gallery photos">
            <figure className="cell p1">
              <div className="ph">
                <span className="ph-label">drop photo here</span>
                <span className="ph-corner">photo #01 / 4 : 5 / b&amp;w</span>
              </div>
              <figcaption className="cell-caption">
                <span className="t">Чистые пруды</span>
                <span className="s">35mm / TX-400 / 2023</span>
              </figcaption>
            </figure>
            <figure className="cell p2">
              <div className="ph">
                <span className="ph-label">drop photo here</span>
                <span className="ph-corner">photo #02 / 7 : 5</span>
              </div>
              <figcaption className="cell-caption">
                <span className="t">Байкал, зима</span>
                <span className="s">35mm / Portra 400 / 2022</span>
              </figcaption>
            </figure>
            <figure className="cell p3">
              <div className="ph">
                <span className="ph-label">drop photo here</span>
                <span className="ph-corner">photo #03 / 1 : 1</span>
              </div>
              <figcaption className="cell-caption">
                <span className="t">Замоскворечье</span>
                <span className="s">35mm / HP5 / 2023</span>
              </figcaption>
            </figure>
            <figure className="cell p4">
              <div className="ph">
                <span className="ph-label">drop photo here</span>
                <span className="ph-corner">photo #04 / 1 : 1</span>
              </div>
              <figcaption className="cell-caption">
                <span className="t">Бордо–Нант</span>
                <span className="s">35mm / Portra 160 / 2024</span>
              </figcaption>
            </figure>
            <figure className="cell p5">
              <div className="ph">
                <span className="ph-label">drop photo here</span>
                <span className="ph-corner">photo #05 / 1 : 1</span>
              </div>
              <figcaption className="cell-caption">
                <span className="t">Шоле, окно</span>
                <span className="s">35mm / Ektar / 2024</span>
              </figcaption>
            </figure>
            <figure className="cell p6">
              <div className="ph">
                <span className="ph-label">drop photo here</span>
                <span className="ph-corner">photo #06 / 7 : 5</span>
              </div>
              <figcaption className="cell-caption">
                <span className="t">Дорога к дому</span>
                <span className="s">35mm / TX-400 / 2022</span>
              </figcaption>
            </figure>
            <figure className="cell p7">
              <div className="ph">
                <span className="ph-label">drop photo here</span>
                <span className="ph-corner">photo #07 / 7 : 5</span>
              </div>
              <figcaption className="cell-caption">
                <span className="t">Чужой шкаф</span>
                <span className="s">35mm / HP5 / 2023</span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ── Quotes ── */}
        <section id="quotes" className="shell section">
          <header className="sec-head">
            <div className="left">
              <span className="eyebrow">Из книг</span>
              <h2 className="h-section">Избранные цитаты</h2>
            </div>
            <p className="right">
              Несколько фраз из романов и стихов — как ключи к интонации автора.{' '}
              <span className="mono">[ цитаты будут заменены оригинальными ]</span>
            </p>
          </header>
          <div className="quotes">
            <figure className="quote">
              <span className="quote-mark">&#8220;</span>
              <blockquote className="quote-body">
                [ цитата из «Homo Veritas» — о споре о «человеке истинном» ]
              </blockquote>
              <figcaption className="quote-src">Homo&nbsp;Veritas · <em>2025</em></figcaption>
              <span className="quote-pending">placeholder · awaiting author</span>
            </figure>
            <figure className="quote">
              <span className="quote-mark">&#8220;</span>
              <blockquote className="quote-body">
                [ цитата из «Французского кресла» — о рукописи и памяти поколений ]
              </blockquote>
              <figcaption className="quote-src">Французское&nbsp;кресло · <em>2025</em></figcaption>
              <span className="quote-pending">placeholder · awaiting author</span>
            </figure>
            <figure className="quote full">
              <span className="quote-mark">&#8220;</span>
              <blockquote className="quote-body">
                моё пальто <em>в чужом шкафу</em>
              </blockquote>
              <figcaption className="quote-src">Весь&nbsp;мой&nbsp;хлам · <em>2024</em></figcaption>
            </figure>
            <figure className="quote">
              <span className="quote-mark">&#8220;</span>
              <blockquote className="quote-body">
                [ цитата из «Homo Veritas» — о современном искусстве и зеркале эпохи ]
              </blockquote>
              <figcaption className="quote-src">Homo&nbsp;Veritas · <em>2025</em></figcaption>
              <span className="quote-pending">placeholder · awaiting author</span>
            </figure>
            <figure className="quote">
              <span className="quote-mark">&#8220;</span>
              <blockquote className="quote-body">
                [ цитата из «Весь мой хлам» — четверостишие о дороге или о доме ]
              </blockquote>
              <figcaption className="quote-src">Весь&nbsp;мой&nbsp;хлам · <em>2024</em></figcaption>
              <span className="quote-pending">placeholder · awaiting author</span>
            </figure>
          </div>
        </section>

        {/* ── Events ── */}
        <section id="events" className="shell section">
          <header className="sec-head">
            <div className="left">
              <span className="eyebrow">Анонсы</span>
              <h2 className="h-section">Ближайшие&nbsp;события</h2>
            </div>
            <p className="right">
              Презентации, чтения, выставки. Расписание уточняется — следите за каналом
              в&nbsp;Telegram.
            </p>
          </header>
          <div className="events">
            <article className="event">
              <div className="event-date">
                <span className="d">—</span>
                <span className="m">tba · 2026</span>
              </div>
              <div className="event-body">
                <span className="event-kind">Презентация книги</span>
                <h3 className="event-title">Презентация романа «Homo Veritas»</h3>
                <p className="event-place">[ место и дата уточняются — Москва, книжный магазин ]</p>
              </div>
              <span className="event-meta">вход свободный</span>
            </article>
            <article className="event">
              <div className="event-date">
                <span className="d">—</span>
                <span className="m">tba · 2026</span>
              </div>
              <div className="event-body">
                <span className="event-kind">Поэтические чтения</span>
                <h3 className="event-title">«Весь мой хлам» — авторский вечер</h3>
                <p className="event-place">[ место и дата уточняются — литературный клуб, Москва ]</p>
              </div>
              <span className="event-meta">регистрация</span>
            </article>
            <article className="event">
              <div className="event-date">
                <span className="d">—</span>
                <span className="m">tba · 2026</span>
              </div>
              <div className="event-body">
                <span className="event-kind">Выставка</span>
                <h3 className="event-title">Живопись и плёночная фотография</h3>
                <p className="event-place">[ галерея, даты уточняются ]</p>
              </div>
              <span className="event-meta">по приглашению</span>
            </article>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer id="contacts">
        <div className="foot">
          <div className="foot-grid">
            <div>
              <div className="eyebrow" style={{ marginBottom: '18px' }}>Связь</div>
              <h2 className="foot-name"><i>Николай</i><br />Хлобыстов</h2>
              <p className="foot-tag">Москва · plenum scriptor</p>
            </div>
            <div className="foot-col">
              <h4>Канал в Telegram</h4>
              <a className="foot-tg" href="https://t.me/alkogramma" target="_blank" rel="noopener noreferrer">@alkogramma</a>
              <p className="meta" style={{ marginTop: '14px', textTransform: 'none', letterSpacing: 0 }}>
                Анонсы, новые тексты, заметки о&nbsp;книгах, живописи и&nbsp;плёнке.
              </p>
            </div>
            <div className="foot-col">
              <h4>На&nbsp;сайте</h4>
              <nav className="foot-anchors">
                <a href="#about">Об авторе</a>
                <a href="#books">Книги</a>
                <a href="#paintings">Живопись</a>
                <a href="#photos">Фотография</a>
                <a href="#quotes">Цитаты</a>
                <a href="#events">Анонсы</a>
              </nav>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© Николай Хлобыстов · 2024 — 2026</span>
            <span>Сделано вручную · Next.js</span>
          </div>
        </div>
      </footer>

      <TweaksPanel />
    </>
  )
}
