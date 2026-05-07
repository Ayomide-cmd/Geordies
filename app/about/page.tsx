import Link from 'next/link'

const faqGroups = [
  {
    title: 'Appointments',
    questions: [
      {
        question: 'Do I need to book ahead?',
        answer:
          'Yes. Geordie’s is appointment-led, so booking ahead helps us reserve proper time for your service and consultation.',
      },
      {
        question: 'Can I book a haircut and beard service together?',
        answer:
          'Yes. Choose a grooming package or mention both services in your booking notes so we can assign enough time.',
      },
      {
        question: 'What happens after I request an appointment?',
        answer:
          'The studio will contact you to confirm availability, service details, and your preferred time.',
      },
    ],
  },
  {
    title: 'Services',
    questions: [
      {
        question: 'What services do you offer?',
        answer:
          'Haircuts, fades, scissor cuts, beard trims, beard washes, beard shaping, scalp care, moisture treatments, and private grooming appointments.',
      },
      {
        question: 'Can I get advice on what style suits me?',
        answer:
          'Yes. Each appointment includes space for a short consultation around face shape, hair texture, maintenance, and your routine.',
      },
      {
        question: 'Do you offer add-ons?',
        answer:
          'Yes. Add-ons can include washes, treatments, beard conditioning, styling finish, and product recommendations.',
      },
    ],
  },
  {
    title: 'Products',
    questions: [
      {
        question: 'Can I buy products without booking?',
        answer:
          'Yes. You can add products to your cart from the homepage and check out separately from booking an appointment.',
      },
      {
        question: 'Which product should I choose?',
        answer:
          'Wet Wax is best for polished hold and shine. Beard Grooming Cream softens and shapes. The Beard Grooming Kit is for daily maintenance. Moisture Care Formula helps with smoothness and dryness.',
      },
      {
        question: 'Can a stylist recommend products during my appointment?',
        answer:
          'Yes. Product guidance is part of the experience, especially if you want to maintain the finish at home.',
      },
    ],
  },
  {
    title: 'Private Grooming',
    questions: [
      {
        question: 'Do you offer private appointments?',
        answer:
          'Yes. Private grooming appointments are available for clients who want a quieter, more personal studio experience.',
      },
      {
        question: 'Can I book for an event or group?',
        answer:
          'Yes. Contact the studio with the date, number of people, and required services so we can plan timing and availability.',
      },
      {
        question: 'Can I request a specific stylist?',
        answer:
          'Yes. Add the stylist request in your booking notes. We will confirm based on availability.',
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <main className="page faq-page">
      <section className="faq-hero">
        <p>FAQ</p>
        <h1>Before you book.</h1>
        <span>
          Answers about appointments, products, stylists, add-ons, and private
          grooming at Geordie’s.
        </span>
      </section>

      <section className="faq-layout">
        {faqGroups.map((group) => (
          <article className="faq-group" key={group.title}>
            <div className="faq-group-heading">
              <p>{group.title}</p>
            </div>

            <div className="faq-items">
              {group.questions.map((item) => (
                <div className="faq-item" key={item.question}>
                  <h2>{item.question}</h2>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="faq-cta">
        <div>
          <p>Still deciding?</p>
          <h2>Reserve the appointment, then we’ll refine the details.</h2>
        </div>

        <div className="hero-actions">
          <Link href="/booking" className="primary">
            Book Appointment <span className="arrow">↗</span>
          </Link>
          <Link href="/contact" className="secondary">
            Contact Studio
          </Link>
        </div>
      </section>
    </main>
  )
}
