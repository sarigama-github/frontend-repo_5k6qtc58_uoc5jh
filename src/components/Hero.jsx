import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/90 dark:from-black/40 dark:via-black/20 dark:to-black/95 pointer-events-none" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <p className="text-sm uppercase tracking-widest text-blue-600/90 dark:text-cyan-300/90 mb-4">Futuristic • Interactive • Minimal</p>
            <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-br from-gray-900 via-blue-700 to-purple-700 dark:from-white dark:via-cyan-200 dark:to-purple-200">
              Building Intelligent Products with AI
            </h1>
            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-xl">
              I’m an AI engineer focused on shipping real-world machine learning systems, from rapid prototyping to production.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#projects" className="inline-flex items-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-semibold hover:bg-gray-800 transition-colors">
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center rounded-full border border-gray-300 dark:border-white/20 px-6 py-3 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-white/10 transition-colors">
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
