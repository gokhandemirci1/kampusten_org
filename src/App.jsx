import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import ConsultationForm from './components/ConsultationForm'
import SuccessModal from './components/SuccessModal'
import Footer from './components/Footer'

function App() {
  const [showConsultation, setShowConsultation] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        onHomeClick={() => {
          setShowConsultation(false)
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        onServicesClick={() => {
          setShowConsultation(false)
          const servicesSection = document.getElementById('services')
          if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }}
        onConsultationClick={() => {
          setShowConsultation(true)
          setTimeout(() => {
            const consultationSection = document.getElementById('consultation')
            if (consultationSection) {
              consultationSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          }, 100)
        }}
      />
      
      <Hero onConsultationClick={() => setShowConsultation(true)} />
      
      <Services />
      
      {showConsultation && (
        <ConsultationForm 
          onClose={() => setShowConsultation(false)}
          onSuccess={() => {
            setShowConsultation(false)
            setShowSuccess(true)
          }}
        />
      )}
      
      {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}
      
      <Footer onConsultationClick={() => setShowConsultation(true)} />
    </div>
  )
}

export default App

