import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Hero = ({ onConsultationClick }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image - iOS uyumlu */}
      <div 
        className="absolute inset-0 hero-bg-image"
        style={{
          backgroundImage: 'url(/images/hero_background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Overlay - Brand color with better visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand/75 via-brand/70 to-brand-dark/75 z-[1]" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-15 z-[2]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        />
      </div>

      {/* Floating Particles */}
      {typeof window !== 'undefined' && [...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/40 rounded-full z-[2]"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
          }}
          animate={{
            y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080)],
            x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920)],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-[3] text-center px-4 max-w-4xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6"
          style={{
            color: '#1a1a1a',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.3), 0 2px 10px rgba(0, 0, 0, 0.2)',
            letterSpacing: '-0.02em',
            lineHeight: '1.1',
          }}
        >
          <span className="block">Arka plan Kampüs</span>
          <span className="block">Burası da Kampüsten</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-900 mb-10 font-semibold drop-shadow-lg"
          style={{
            color: '#1a1a1a',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          Sınav sürecinizde yanınızdayız.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={onConsultationClick}
          className="bg-white text-gray-900 font-bold px-10 py-4 rounded-full text-lg shadow-2xl hover:shadow-brand/50 transition-all duration-300 relative overflow-hidden group"
        >
          <span className="relative z-10">Ücretsiz Danışmanlık Al</span>
          <motion.div
            className="absolute inset-0 bg-brand"
            initial={{ x: '-100%' }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-[3]"
      >
        <div className="w-6 h-10 border-2 border-gray-900 rounded-full flex justify-center drop-shadow-lg bg-white/20 backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

