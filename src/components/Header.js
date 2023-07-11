import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  let [cartOpen, setCartOpen] = useState(false);
  return (
    <header>
      <div className='header__info'>
        <span className='logo'>CoolShop</span>
        <ul className='nav'>
          <li>About us</li>
          <li>Guns</li>
          <li>Contacts</li>
        </ul>
        <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shopcart__button ${cartOpen && 'active'}`} />
      {cartOpen && (
        <div className='shop-cart'>

        </div>
      )}
      </div>
      <div className='presentation'> </div>
    </header>
  )
}
