import { motion } from 'framer-motion'
import { useState } from 'react'

const Navbar = ({ onHomeClick, onServicesClick, onConsultationClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md shadow-2xl border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={onHomeClick}
            className="flex items-center cursor-pointer"
          >
            <img
              src="/images/logo.jpg"
              alt="Kampüsten Logo"
              className="w-14 h-14 rounded-full border-4 border-brand shadow-lg object-cover"
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.button
              whileHover={{ y: -2 }}
              onClick={onHomeClick}
              className="text-gray-300 hover:text-brand font-medium transition-colors relative group"
            >
              Ana Sayfa
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand group-hover:w-full transition-all duration-300" />
            </motion.button>
            
            <motion.button
              whileHover={{ y: -2 }}
              onClick={onServicesClick}
              className="text-gray-300 hover:text-brand font-medium transition-colors relative group"
            >
              Servislerimiz
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand group-hover:w-full transition-all duration-300" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={onConsultationClick}
              className="bg-brand hover:bg-brand-dark text-gray-900 font-semibold px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:shadow-brand/50 transition-all duration-300"
            >
              Ücretsiz Sorun Tespit
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col space-y-1.5 p-2"
          >
            <motion.span
              animate={mobileMenuOpen ? { rotate: 45, y: 8 } : {}}
              className="w-6 h-0.5 bg-gray-300"
            />
            <motion.span
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-gray-300"
            />
            <motion.span
              animate={mobileMenuOpen ? { rotate: -45, y: -8 } : {}}
              className="w-6 h-0.5 bg-gray-300"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pb-4 space-y-4 border-t border-gray-800 pt-4 mt-4"
          >
            <button onClick={onHomeClick} className="block w-full text-left text-gray-300 hover:text-brand font-medium py-3 transition-colors">
              Ana Sayfa
            </button>
            <button onClick={onServicesClick} className="block w-full text-left text-gray-300 hover:text-brand font-medium py-3 transition-colors">
              Servislerimiz
            </button>
            <button
              onClick={onConsultationClick}
              className="block w-full bg-brand hover:bg-brand-dark text-gray-900 font-semibold px-6 py-3 rounded-full text-center transition-all duration-300"
            >
              Ücretsiz Sorun Tespit
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar

