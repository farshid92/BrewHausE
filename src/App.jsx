import { useState } from 'react'
import { Header } from './components/Headder'
import { Hero } from './components/Hero'
import { Shop } from './components/Shop'
import { About } from './components/About'
import { Footer } from './components/Footer'

function App() {

  return (
    <div>
      <Header />
      <Hero />
      <Shop />
      <About />
      <Footer />
    </div>
  )
}

export default App
