import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Catalog from './components/Catalog.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Cart from './components/Cart.jsx'

export default function App() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <>
      <Navbar onOpenCart={() => setCartOpen(true)} />
      <main>
        <Hero />
        <Catalog />
        <About />
        <Contact />
      </main>
      <Footer />
      <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}
