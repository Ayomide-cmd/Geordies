'use client'

import { useCart } from '@/components/CartProvider'

const products = [
  {
    id: 'wet-wax',
    name: 'Wet Wax',
    price: 8500,
    priceLabel: '₦8,500',
    image:
      'https://i.pinimg.com/736x/f4/09/39/f4093950664f9d05f0b496576a1ee40b.jpg',
    description:
      'The petroleum-free Wet Wax delivers a polished, high gloss shape with firm hold and no oily feel.',
  },
  {
    id: 'beard-grooming-cream',
    name: 'Beard Grooming Cream',
    price: 12000,
    priceLabel: '₦12,000',
    image:
      'https://i.pinimg.com/736x/41/83/10/418310e23659cbc80b8ef789bcf78567.jpg',
    description:
      'A smooth grooming cream designed to soften, shape, and condition beard texture without a heavy finish.',
  },
  {
    id: 'beard-grooming-kit',
    name: 'Beard Grooming Kit',
    price: 28000,
    priceLabel: '₦17,300',
    image:
      'https://i.pinimg.com/736x/da/ef/a6/daefa6537c38d9c174d9ea63268e92e0.jpg',
    description:
      'Includes a boar bristle brush, beard comb, and trimming scissors for everyday beard care.',
  },
  {
    id: 'moisture-care-formula',
    name: 'Moisture Care Formula',
    price: 10500,
    priceLabel: '₦22,500',
    image:
      'https://i.pinimg.com/736x/49/4e/1b/494e1bc8ddabae64ef13bb0552c68961.jpg',
    description:
      'Keeps locks smooth and shiny with formulas designed to seal in moisture and reduce dryness.',
  },
]

export default function Page() {
  const { addItem } = useCart()

  return (
    <main className="page">
      <section className="hero">
        <div className="hero-text">
          <h1>Refined grooming, reserved for you.</h1>
          <p>
            Book a haircut, beard service, or grooming appointment at
            Geordie’s, with care products selected for your daily routine.
          </p>

          <div className="hero-actions">
            <a href="/booking" className="primary">
              Book Appointment <span className="arrow">↗</span>
            </a>
            <a href="/services" className="secondary">
              View Services
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://i.pinimg.com/736x/76/26/b3/7626b3c8ea3ea0e4a6e5cb930fd7378a.jpg"
            alt="Barber preparing a refined grooming service"
          />
          <div className="image-shade" />
          <div className="hero-badges">
            <span>Haircuts</span>
            <span>Beard Care</span>
            <span>Care Products</span>
          </div>
        </div>
      </section>

      <section id="products" className="products">
        <div className="section-heading">
          <p>Shop care</p>
          <h2>Hair and beard essentials</h2>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="product-info">
                <div className="product-top">
                  <h3>{product.name}</h3>
                  <span>{product.priceLabel}</span>
                </div>

                <p>{product.description}</p>

                <button
                  type="button"
                  className="product-action"
                  onClick={() => addItem(product)}
                >
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
