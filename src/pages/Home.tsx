import About from '../components/About'
import Benefits from '../components/Benefits'
import FloatingContact from '../components/FloatingContact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <About />
      </main>
      <Footer />
      <FloatingContact />
    </>
  )
}
