import { motion } from 'framer-motion'
import { useState } from 'react'

const Footer = ({ onConsultationClick }) => {
  const [emailCopied, setEmailCopied] = useState(false)

  const handleEmailClick = () => {
    navigator.clipboard.writeText('contact@kampusten.org')
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden" role="contentinfo">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 222, 89, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255, 222, 89, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center mb-6">
              <img
                src="/images/logo.jpg"
                alt="Kampüsten - Sınava Yenilikçi Bak Eğitim Platformu Logo"
                className="w-16 h-16 rounded-full border-4 border-brand object-cover shadow-lg"
                loading="lazy"
                width="64"
                height="64"
              />
              <h3 className="ml-4 text-2xl font-bold text-brand">Kampüsten</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Eğitim yolculuğunuzda yanınızdayız. Başarıya birlikte ulaşalım.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.instagram.com/kampustenozelders/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gray-700 hover:bg-brand rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 1.857-7.975 4.072-1.195 2.215-1.015 4.58-.979 7.947.023 3.189.023 3.668.072 4.948.2 4.358 1.857 6.78 4.072 7.975 2.215 1.195 4.58 1.015 7.947-.979 3.189-.023 3.668-.023 4.948-.072 4.358-.2 6.78-1.857 7.975-4.072 1.195-2.215 1.015-4.58-.979-7.947-.023-3.189-.023-3.668-.072-4.948-.196-4.354-1.857-6.78-4.072-7.975-2.215-1.196-4.58-1.015-7.947.979zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold mb-6 text-brand">Hızlı Linkler</h4>
            <ul className="space-y-3">
              <li>
                <motion.a
                  href="#home"
                  whileHover={{ x: 5, color: '#ffde59' }}
                  className="text-gray-300 hover:text-brand transition-colors inline-block"
                >
                  Ana Sayfa
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#services"
                  whileHover={{ x: 5, color: '#ffde59' }}
                  className="text-gray-300 hover:text-brand transition-colors inline-block"
                >
                  Servislerimiz
                </motion.a>
              </li>
              <li>
                <motion.button
                  onClick={onConsultationClick}
                  whileHover={{ x: 5, color: '#ffde59' }}
                  className="text-gray-300 hover:text-brand transition-colors inline-block text-left"
                >
                  Ücretsiz Sorun Tespit
                </motion.button>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xl font-bold mb-6 text-brand">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-brand mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <motion.button
                  onClick={handleEmailClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-300 hover:text-brand transition-colors text-left"
                >
                  {emailCopied ? (
                    <span className="text-brand font-semibold">Kopyalandı! ✓</span>
                  ) : (
                    'contact@kampusten.org'
                  )}
                </motion.button>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-brand mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">
                  İstanbul, Türkiye
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-700 pt-8 mt-8"
        >
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Kampüsten. Tüm hakları saklıdır.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

