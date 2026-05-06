'use client'

import { useState } from 'react'

const services = [
  'Haircut',
  'Beard Trim',
  'Haircut + Beard',
  'Hair Treatment',
  'Private Grooming Appointment',
]

const times = [
  '9:00 AM',
  '10:30 AM',
  '12:00 PM',
  '2:00 PM',
  '4:00 PM',
  '6:00 PM',
]

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="page booking-page">
      <section className="booking-hero">
        <p>Booking</p>
        <h1>Reserve your appointment.</h1>
        <span>
          Choose a service, share your preferred time, and the studio will
          confirm your appointment.
        </span>
      </section>

      <section className="booking-panel">
        {submitted ? (
          <div className="booking-success">
            <p>Request received</p>
            <h2>We’ll confirm your appointment shortly.</h2>
            <span>
              A member of the Geordie’s team will contact you with availability
              and next steps.
            </span>
            <button type="button" onClick={() => setSubmitted(false)}>
              Make another booking
            </button>
          </div>
        ) : (
          <form
            className="booking-form"
            onSubmit={(event) => {
              event.preventDefault()
              setSubmitted(true)
            }}
          >
            <label>
              <span>Your name</span>
              <input type="text" name="name" placeholder="Full name" required />
            </label>

            <label>
              <span>Phone / WhatsApp</span>
              <input
                type="tel"
                name="phone"
                placeholder="+234 801 234 5678"
                required
              />
            </label>

            <label>
              <span>Service</span>
              <select name="service" defaultValue="" required>
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </label>

            <div className="form-row">
              <label>
                <span>Date</span>
                <input type="date" name="date" required />
              </label>

              <label>
                <span>Preferred time</span>
                <select name="time" defaultValue="" required>
                  <option value="" disabled>
                    Select a time
                  </option>
                  {times.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label>
              <span>Notes</span>
              <textarea
                name="notes"
                placeholder="Any preferences, hair concerns, or requests?"
              />
            </label>

            <button type="submit">Request Appointment</button>
          </form>
        )}
      </section>
    </main>
  )
}
