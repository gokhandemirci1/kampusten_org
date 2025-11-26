import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    icon: '📞',
    title: 'Ücretsiz Danışmanlık',
    description: 'Bir danışmanımızla ücretsiz görüşün. Mevcut durumu analiz edelim, sorunu netleştirelim ve size özel, yol gösterici çözüm önerilerini hemen sunalım.',
  },
  {
    icon: '🎯',
    title: 'Nokta Atışı Kamp Eğitimleri',
    description: 'Klasik koçluk anlayışının dışına çıkın. Boğaziçi, İTÜ gibi köklü üniversitelerde eğitim alan mentor ve eğitmenlerimizden, taktiklerle zenginleştirilmiş dersler alın.',
  },
  {
    icon: '🌐',
    title: 'Geleceğini Şekillendiren Ağ',
    description: 'Sana ders veren eğitmen gelecekteki üniversitende üst dönemin, birlikte eğitim aldığın akranın ise kampüs arkadaşın olabilir. Bu güçlü profesyonel ağın bir parçası olarak rakiplerinin bir adım önüne geçme fırsatını yakala.',
  },
  {
    icon: '🚀',
    title: 'Soru Çözüm Kamp Programları',
    description: 'Soruları çözememe nedeniniz konu eksiği değil, doğru soru çözme taktiği eksikliği olabilir. Sınav stratejilerine hâkim eğitmenlerimizle zorlu soruları aşın ve netlerinizi yükseltin.',
  },
  {
    icon: '👥',
    title: 'Fark Yarat, Kampüse Gel',
    description: 'Piyasadaki klasik özel ders ve mentörlük anlayışının ötesine geçin. Başarıya giden yolu yeniden tanımlayan Kampüsten ailesinin bir parçası olun ve fark yaratın.',
  },
  {
    icon: '🎁',
    title: 'Sana Özel Ücretsiz Kaynaklar',
    description: 'Konu eksiklerini gidermek için ücretsiz konu özet dosyaları ve anlatım videoları, pratik yapmak için ise soru kitapçıklarına ve daha fazlasına Kampüsten üzerinden hemen ulaşın.',
  },
]

const Services = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section ref={sectionRef} id="services" className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #ffde59 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-4 py-2 bg-brand/10 text-brand font-semibold rounded-full text-sm mb-6"
          >
            HİZMETLERİMİZ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6"
            style={{
              letterSpacing: '-0.02em',
            }}
          >
            Neler Yapıyoruz?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Eğitim yolculuğunuzda size en iyi hizmeti sunmak için çalışıyoruz
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -15, scale: 1.02, rotateY: 5 }}
              className="group cursor-pointer relative"
            >
              <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-brand/50 relative overflow-hidden h-full">
                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-brand/10 via-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                
                {/* Animated top border */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand via-brand-dark to-brand"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Corner decoration */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-brand/5 rounded-full blur-3xl group-hover:bg-brand/20 transition-colors duration-500" />

                {/* Icon container */}
                <motion.div
                  className="relative z-10 mb-6"
                  whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-brand/20 to-brand-dark/20 rounded-2xl flex items-center justify-center text-5xl group-hover:from-brand/30 group-hover:to-brand-dark/30 transition-all duration-300">
                    {service.icon}
                  </div>
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-dark transition-colors duration-300 relative z-10">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed relative z-10 text-base">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services

