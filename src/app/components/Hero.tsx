import { motion } from 'motion/react';
import { ArrowDown, Download, Mail, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToWork = (): void => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 bg-[#6366F1]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#A855F7]/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8B5CF6]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#A855F7] rounded-full blur-2xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ImageWithFallback
                src="/manoj.jpeg"
                alt="Manoj M R"
                className="relative w-32 h-32 rounded-full object-cover border-4 border-[#8B5CF6]/20"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h1
            title="UI/UX Designer"
            className="text-6xl md:text-8xl mb-4 bg-gradient-to-r from-[#F8FAFC] via-[#A855F7] to-[#F8FAFC] bg-clip-text text-transparent bg-[length:200%_auto]"
            animate={{
              backgroundPosition: ['0% center', '200% center'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Manoj M R
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-[#8B5CF6] mb-4"
            animate={{
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            UI/UX Designer
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg text-gray-400 mb-2 max-w-2xl mx-auto"
          >
            Currently designing digital products at{' '}
            <span className="text-[#8B5CF6]">Cybomb Technologies</span>
          </motion.p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Designing intuitive digital experiences with clarity and purpose.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <motion.button
            onClick={scrollToWork}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[#6366F1] to-[#A855F7] text-white rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#8B5CF6]/30"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5" />
            </motion.div>
            View Work
          </motion.button>
          <motion.a
            href="/resume.pdf"
            download="Manoj_MR_Resume.pdf"
            whileHover={{ scale: 1.05, borderColor: '#A855F7' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-[#8B5CF6]/30 rounded-full hover:bg-[#1A1A22] transition-all duration-300 flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, borderColor: '#A855F7' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-[#8B5CF6]/30 rounded-full hover:bg-[#1A1A22] transition-all duration-300 flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Let's Talk
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col items-center text-gray-500"
        >
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-sm mb-2"
          >
            Scroll to explore
          </motion.span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-[#8B5CF6]" />
          </motion.div>
        </motion.div>

        {/* Floating UI mockups */}
        <motion.div
          className="absolute top-1/3 -left-20 xl:-left-40 w-40 h-40 hidden lg:block"
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            opacity: { duration: 0.6, delay: 0.8 },
            x: { duration: 0.6, delay: 0.8 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="w-full h-full bg-[#1A1A22] backdrop-blur-sm rounded-2xl border border-[#8B5CF6]/20 p-4 shadow-lg shadow-[#6366F1]/10">
            <motion.div
              className="w-full h-2 bg-[#6366F1]/40 rounded mb-2"
              animate={{ width: ['50%', '100%', '50%'] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="w-3/4 h-2 bg-[#A855F7]/20 rounded mb-2"
              animate={{ width: ['30%', '75%', '30%'] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
              className="w-1/2 h-2 bg-[#8B5CF6]/20 rounded"
              animate={{ width: ['20%', '50%', '20%'] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 -right-20 xl:-right-60 w-48 h-48 hidden lg:block"
          animate={{
            opacity: 1,
            x: 0,
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            opacity: { duration: 0.6, delay: 1 },
            x: { duration: 0.6, delay: 1 },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="w-full h-full bg-[#1A1A22] backdrop-blur-sm rounded-2xl border border-[#8B5CF6]/20 p-4 shadow-lg shadow-[#A855F7]/10">
            <div className="flex gap-2 mb-3">
              <motion.div
                className="w-8 h-8 bg-[#6366F1]/30 rounded-lg"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="flex-1">
                <div className="w-full h-2 bg-[#8B5CF6]/40 rounded mb-1" />
                <div className="w-2/3 h-2 bg-[#A855F7]/20 rounded" />
              </div>
            </div>
            <div className="flex gap-2">
              <motion.div
                className="w-8 h-8 bg-[#A855F7]/30 rounded-lg"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              <div className="flex-1">
                <div className="w-full h-2 bg-[#8B5CF6]/40 rounded mb-1" />
                <div className="w-2/3 h-2 bg-[#6366F1]/20 rounded" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
