import Link from 'next/link'

const services = [
  {
    title: 'Haircut',
    description: 'Shape, finish, and detail work tailored to your hair pattern.',
    items: [
      { name: 'Classic Cut', price: '₦12,000' },
      { name: 'Skin Fade', price: '₦15,000' },
      { name: 'Scissor Cut', price: '₦18,000' },
      { name: 'Haircut + Wash', price: '₦20,000' },
    ],
  },
  {
    title: 'Beard Care',
    description: 'Clean grooming for beard shape, softness, and definition.',
    items: [
      { name: 'Beard Trim', price: '₦7,000' },
      { name: 'Beard Wash', price: '₦6,000' },
      { name: 'Beard Shape-Up', price: '₦8,500' },
      { name: 'Beard Treatment', price: '₦12,000' },
    ],
  },
  {
    title: 'Grooming Packages',
    description: 'Complete appointments for a sharper finish in one sitting.',
    items: [
      { name: 'Haircut + Beard Trim', price: '₦20,000' },
      { name: 'Haircut + Beard + Wash', price: '₦26,000' },
      { name: 'Private Grooming Appointment', price: '₦40,000' },
    ],
  },
  {
    title: 'Hair Care',
    description: 'Treatment services for scalp comfort, moisture, and finish.',
    items: [
      { name: 'Hair Wash', price: '₦6,000' },
      { name: 'Scalp Treatment', price: '₦14,000' },
      { name: 'Moisture Treatment', price: '₦16,000' },
      { name: 'Styling Finish', price: '₦10,000' },
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="page services-page">
      <section className="services-hero">
        <p>Services</p>
        <h1>Choose your appointment.</h1>
        <span>
          Haircuts, beard care, and grooming packages designed for a cleaner
          routine and a sharper finish.
        </span>
      </section>

      <section className="services-list-page">
        {services.map((service) => (
          <article className="service-wide-card" key={service.title}>
            <div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>

            <div className="service-list">
              {service.items.map((item) => (
                <div className="service-row" key={item.name}>
                  <span>{item.name}</span>
                  <strong>{item.price}</strong>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="services-cta">
        <h2>Ready when you are.</h2>
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
