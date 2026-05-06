'use client'

import { useState } from 'react'
import { useScrollReveal } from '@/components/useScrollReveal'

const contactInfo = [
  {
    label: 'Studio',
    value: ['14 Bayo Kuku Road', 'Ikoyi, Lagos'],
    note: 'Free parking available on premises',
  },
  {
    label: 'Hours',
    value: ['Mon - Fri: 9:00am - 8:00pm', 'Sat: 8:00am - 9:00pm', 'Sun: 11:00am - 6:00pm'],
    note: 'Public holidays by confirmation',
  },
  {
    label: 'Phone',
    value: ['+234 801 234 5678'],
    note: 'WhatsApp preferred for fastest response',
  },
  {
    label: 'Email',
    value: ['hello@geordies.ng'],
    note: 'We reply within 2 business hours',
  },
]

const subjects = [
  'General Enquiry',
  'Booking Question',
  'Service Question',
  'Product Enquiry',
  'Feedback',
]

export default function ContactPage() {
  useScrollReveal()

  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="page contact-page">
      <section className="contact-hero">
        <p>Contact</p>
        <h1>Speak with the studio.</h1>
        <span>
          For bookings, product questions, or anything you
          would like us to prepare before your visit.
        </span>
      </section>

      <section className="contact-layout">
        <div className="contact-panel reveal">
          {submitted ? (
            <div className="contact-success">
              <p>Message sent</p>
              <h2>We’ll be in touch shortly.</h2>
              <span>
                A member of the Geordie’s team will respond using the details
                you provided.
              </span>
              <button type="button" onClick={() => setSubmitted(false)}>
                Send another message
              </button>
            </div>
          ) : (
            <>
              <div className="contact-section-heading">
                <p>Send a message</p>
                <h2>Tell us what you need.</h2>
              </div>

              <form
                className="contact-form"
                onSubmit={(event) => {
                  event.preventDefault()
                  setSubmitted(true)
                }}
              >
                <div className="form-row">
                  <label>
                    <span>Your name</span>
                    <input type="text" name="name" placeholder="Full name" required />
                  </label>

                  <label>
                    <span>Phone / WhatsApp</span>
                    <input type="tel" name="phone" placeholder="+234 801 234 5678" />
                  </label>
                </div>

                <label>
                  <span>Email</span>
                  <input type="email" name="email" placeholder="you@example.com" />
                </label>

                <label>
                  <span>Subject</span>
                  <select name="subject" defaultValue="">
                    <option value="" disabled>
                      Choose a subject
                    </option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </label>

                <label>
                  <span>Message</span>
                  <textarea
                    name="message"
                    placeholder="Share a few details..."
                    required
                  />
                </label>

                <button type="submit">Send Message</button>
              </form>
            </>
          )}
        </div>

        <aside className="contact-details">
          {contactInfo.map((item, index) => (
            <article
              className={`contact-card reveal ${index > 0 ? `delay-${Math.min(index, 4)}` : ''}`}
              key={item.label}
            >
              <p>{item.label}</p>
              <div>
                {item.value.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </div>
              <small>{item.note}</small>
            </article>
          ))}
        </aside>
      </section>

      <section className="contact-map reveal">
        <div>
          <p>Location</p>
          <h2>Ikoyi, Lagos</h2>
          <span>14 Bayo Kuku Road</span>
        </div>

        <a
          href="https://maps.google.com/?q=14+Bayo+Kuku+Road+Ikoyi+Lagos"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in Maps
        </a>
      </section>
    </main>
  )
}
