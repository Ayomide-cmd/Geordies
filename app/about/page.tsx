import Link from 'next/link'

const values = [
  ['Precision', 'Every appointment is shaped around detail, proportion, and finish.'],
  ['Texture', 'We work with natural hair patterns instead of forcing them into one look.'],
  ['Care', 'The service continues after the chair through simple, reliable grooming routines.'],
]

const milestones = [
  ['2018', 'Geordie’s opens in Lagos as a small appointment-led grooming room.'],
  ['2021', 'The studio expands into dedicated haircut, beard, and care services.'],
  ['2024', 'Hair and beard products are introduced for daily maintenance between visits.'],
]

export default function AboutPage() {
  return (
    <main className="page">
      <section className="story-hero">
        <p>Our story</p>
        <h1>Built for calm, considered grooming.</h1>
      </section>

      <section className="story-split">
        <div className="story-image">
          <img
            src="https://i.pinimg.com/736x/76/26/b3/7626b3c8ea3ea0e4a6e5cb930fd7378a.jpg"
            alt="Geordie's grooming studio"
          />
        </div>

        <div className="story-copy">
          <p className="eyebrow">Geordie's Lagos</p>
          <h2>A grooming space with intention.</h2>
          <p>
            Geordie’s was created for people who want grooming to feel precise,
            unhurried, and personal. The studio brings together clean technique,
            natural texture, and a quieter kind of luxury.
          </p>
          <p>
            Every service is appointment-led so the chair never feels rushed.
            Haircuts, beard work, and product recommendations are treated as one
            complete routine.
          </p>
        </div>
      </section>

      <section className="story-values">
        {values.map(([title, text]) => (
          <article key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="story-timeline">
        <div>
          <p className="eyebrow">Progression</p>
          <h2>From studio chair to care routine.</h2>
        </div>

        <div className="timeline-list">
          {milestones.map(([year, text]) => (
            <div className="timeline-row" key={year}>
              <span>{year}</span>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="story-cta">
        <h2>Reserve your next appointment.</h2>
        <div className="hero-actions">
          <Link href="/booking" className="primary">
            Book Appointment <span className="arrow">↗</span>
          </Link>
          <Link href="/#products" className="secondary">
            Shop Products
          </Link>
        </div>
      </section>
    </main>
  )
}
