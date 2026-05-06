'use client'

import { useCart } from './CartProvider'

export default function CartDrawer() {
  const { items, total, isOpen, closeCart, updateQuantity, removeItem } =
    useCart()

  return (
    <>
      <div
        className={`cart-backdrop ${isOpen ? 'is-open' : ''}`}
        onClick={closeCart}
      />

      <aside className={`cart-drawer ${isOpen ? 'is-open' : ''}`}>
        <div className="cart-head">
          <h2>Your cart</h2>
          <button type="button" onClick={closeCart}>
            Close
          </button>
        </div>

        {items.length === 0 ? (
          <p className="cart-empty">Your cart is empty.</p>
        ) : (
          <div className="cart-list">
            {items.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div>
                  <h3>{item.name}</h3>
                  <p>{item.priceLabel}</p>

                  <div className="cart-controls">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                    <button type="button" onClick={() => removeItem(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="cart-total">
          <span>Total</span>
          <strong>₦{total.toLocaleString()}</strong>
        </div>

        <a href="/checkout" className="cart-checkout">
  Checkout
</a>

      </aside>
    </>
  )
}
