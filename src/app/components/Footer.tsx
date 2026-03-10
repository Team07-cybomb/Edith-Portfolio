import { motion } from 'motion/react';
import { Heart, ArrowUp } from 'lucide-react';

export function Footer() {
  const currentYear: number = new Date().getFullYear();

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative px-6 py-12 border-t border-[#8B5CF6]/10">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-[#1A1A22]/50 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Copyright content */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-gray-400">
              © {currentYear} <span className="text-[#8B5CF6]">Manoj M R</span>. All rights reserved.
            </p>
          </motion.div>
        </motion.div>

        {/* Back to top */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <motion.button
            onClick={scrollToTop}
            whileHover={{ 
              scale: 1.1,
              y: -5,
            }}
            whileTap={{ scale: 0.9 }}
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#8B5CF6] transition-colors px-6 py-3 border border-[#8B5CF6]/20 rounded-full hover:border-[#8B5CF6]/50 hover:bg-[#1A1A22] group"
          >
            <span>Back to top</span>
            <motion.div
              animate={{
                y: [-2, 2, -2],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ArrowUp className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Decorative elements */}
        <div className="mt-12 flex justify-center gap-4">
          {[0, 1, 2, 3, 4].map((index: number) => (
            <motion.div
              key={index}
              className="w-2 h-2 rounded-full bg-[#8B5CF6]/30"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          ))}
        </div>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center"
        >
          <motion.p
            className="text-xs text-gray-600"
            animate={{
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            Crafted with precision and passion
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
