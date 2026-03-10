import { motion } from 'motion/react';
import { Heart, Sparkles, BarChart3, RefreshCw, LucideIcon } from 'lucide-react';

interface Principle {
  icon: LucideIcon;
  title: string;
  description: string;
}

const principles: Principle[] = [
  {
    icon: Heart,
    title: 'Empathy First',
    description: 'Understand users before designing',
  },
  {
    icon: Sparkles,
    title: 'Simplicity Always',
    description: 'Remove complexity from interfaces',
  },
  {
    icon: BarChart3,
    title: 'Design with Data',
    description: 'Validate ideas through insights',
  },
  {
    icon: RefreshCw,
    title: 'Iterate Relentlessly',
    description: 'Improve continuously',
  },
];

const processSteps: string[] = ['Discover', 'Define', 'Ideate', 'Prototype', 'Test'];

export function DesignPhilosophy() {
  return (
    <section className="relative px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-[#1A1A22] border border-[#8B5CF6]/30 rounded-full text-sm text-[#8B5CF6]">
              Philosophy
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl mb-4">How I Think</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My design philosophy is rooted in creating meaningful, user-centered experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle: Principle, index: number) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12, type: "spring", bounce: 0.4 }}
                whileHover={{ y: -12, scale: 1.05 }}
                className="relative p-8 bg-[#1A1A22] backdrop-blur-sm border border-[#8B5CF6]/10 rounded-2xl group cursor-pointer overflow-hidden"
              >
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/10 via-transparent to-[#A855F7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ 
                      rotate: [0, -15, 15, -15, 0],
                      scale: [1, 1.1, 1.1, 1.1, 1]
                    }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex p-4 bg-gradient-to-br from-[#6366F1]/30 to-[#A855F7]/30 rounded-2xl mb-6 border border-[#8B5CF6]/30"
                  >
                    <Icon className="w-8 h-8 text-[#8B5CF6]" />
                  </motion.div>

                  <h3 className="text-xl mb-2 text-[#F8FAFC]">{principle.title}</h3>
                  <p className="text-gray-400">{principle.description}</p>
                </div>

                {/* Glowing particles effect */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-[#A855F7]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    scale: [1, 1.5, 1],
                    x: [0, 10, 0],
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />

                {/* Border glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#A855F7]/30 transition-all duration-500"
                  whileHover={{
                    boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)',
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Design Process */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 p-8 md:p-12 bg-gradient-to-r from-[#1A1A22] via-[#8B5CF6]/5 to-[#1A1A22] backdrop-blur-sm border border-[#8B5CF6]/20 rounded-3xl relative overflow-hidden"
        >
          {/* Animated background lines */}
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'linear-gradient(90deg, transparent 0%, #8B5CF6 50%, transparent 100%)',
              backgroundSize: '200% 2px',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            animate={{
              backgroundPosition: ['0% center', '200% center'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl mb-8 text-center relative z-10"
          >
            My Design Process
          </motion.h3>
          <div className="grid md:grid-cols-5 gap-4 relative z-10">
            {processSteps.map((step: string, index: number) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center group"
              >
                <motion.div
                  className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-[#6366F1] to-[#A855F7] rounded-full flex items-center justify-center text-lg relative overflow-hidden group-hover:shadow-lg group-hover:shadow-[#8B5CF6]/50 transition-shadow duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="relative z-10 text-white font-bold">{index + 1}</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#A855F7] to-[#6366F1]"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                <p className="text-gray-300 group-hover:text-[#8B5CF6] transition-colors duration-300">
                  {step}
                </p>
                
                {/* Connecting line */}
                {index < processSteps.length - 1 && (
                  <motion.div
                    className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#6366F1]/30 to-[#A855F7]/30"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    style={{ transformOrigin: 'left' }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
