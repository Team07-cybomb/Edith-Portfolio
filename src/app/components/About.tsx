import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

const experience: Experience[] = [
  {
    title: 'UI/UX Designer (Full-time)',
    company: 'Cybomb Technologies, Chennai',
    period: '06/2025 - Current',
    description: 'Designed user interfaces for 20+ web and mobile applications, improving usability and consistency across products. Built and maintained reusable UI components and design systems.',
  },
  {
    title: 'UI/UX Design Intern',
    company: 'Cybomb Technologies, Chennai',
    period: '11/2024 - 05/2025',
    description: 'Assisted in designing UI components and layouts for 5+ web and mobile applications. Developed wireframes and prototypes to support product design.',
  },
];

const specializations: string[] = [
  'Dashboard & Analytics Design',
  'Mobile App UX',
  'Design System Architecture',
  'User Research & Testing',
];

export function About() {
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
              Background
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl mb-4">About Me</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Passionate about creating meaningful digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-8 bg-[#1A1A22] backdrop-blur-sm border border-[#8B5CF6]/10 rounded-2xl hover:border-[#A855F7]/30 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />

              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-2xl mb-4 text-[#8B5CF6] relative z-10"
              >
                My Journey
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-300 leading-relaxed mb-4 relative z-10"
              >
                With a passion for creating intuitive digital experiences, I specialize in UI/UX design with a focus on user-centered solutions. My approach combines empathy, data-driven insights, and creative problem-solving to deliver designs that truly resonate with users.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-gray-300 leading-relaxed relative z-10"
              >
                Currently at <span className="text-[#8B5CF6]">Cybomb Technologies</span>, I work on designing digital products, building design systems, and collaborating with cross-functional teams to bring innovative solutions to life. I believe in the power of simplicity and clarity to transform complex challenges into elegant, accessible experiences.
              </motion.p>

              {/* Corner decoration */}
              <motion.div
                className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#A855F7]/10 to-transparent rounded-tr-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-8 bg-gradient-to-br from-[#6366F1]/10 via-[#1A1A22] to-[#A855F7]/10 backdrop-blur-sm border border-[#8B5CF6]/20 rounded-2xl relative overflow-hidden group"
            >
              <motion.div
                className="flex items-center mb-4 relative z-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Award className="w-6 h-6 text-[#8B5CF6] mr-3" />
                </motion.div>
                <h3 className="text-xl text-[#8B5CF6]">Specializations</h3>
              </motion.div>
              <ul className="space-y-2 text-gray-300 relative z-10">
                {specializations.map((spec: string, index: number) => (
                  <motion.li
                    key={spec}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10, color: '#A855F7' }}
                    className="flex items-center group/spec cursor-default"
                  >
                    <motion.span
                      className="mr-2 text-[#8B5CF6]"
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    >
                      •
                    </motion.span>
                    {spec}
                  </motion.li>
                ))}
              </ul>

              {/* Animated orb */}
              <motion.div
                className="absolute top-4 right-4 w-16 h-16 bg-[#A855F7]/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-8 bg-[#1A1A22] backdrop-blur-sm border border-[#8B5CF6]/10 rounded-2xl hover:border-[#A855F7]/30 transition-all duration-300 relative overflow-hidden group"
            >
              <motion.div
                className="flex items-center mb-6 relative z-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Briefcase className="w-6 h-6 text-[#8B5CF6] mr-3" />
                </motion.div>
                <h3 className="text-2xl text-[#8B5CF6]">Experience</h3>
              </motion.div>
              <div className="space-y-6 relative z-10">
                {experience.map((exp: Experience, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    whileHover={{ x: 5 }}
                    className="relative pl-6 border-l-2 border-[#8B5CF6]/30 group/exp"
                  >
                    <motion.div
                      className="absolute -left-[9px] top-0 w-4 h-4 bg-[#8B5CF6] rounded-full"
                      whileHover={{ scale: 1.5 }}
                      animate={{
                        boxShadow: [
                          '0 0 0px rgba(139, 92, 246, 0.5)',
                          '0 0 15px rgba(139, 92, 246, 0.8)',
                          '0 0 0px rgba(139, 92, 246, 0.5)',
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />
                    <h4 className="text-lg mb-1 text-[#F8FAFC] group-hover/exp:text-[#A855F7] transition-colors">
                      {exp.title}
                    </h4>
                    <p className="text-[#8B5CF6] text-sm mb-2">{exp.company}</p>
                    <p className="text-gray-500 text-sm mb-2">{exp.period}</p>
                    <p className="text-gray-400 text-sm">{exp.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Glow effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-br from-[#6366F1]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-8 bg-[#1A1A22] backdrop-blur-sm border border-[#8B5CF6]/10 rounded-2xl hover:border-[#A855F7]/30 transition-all duration-300 relative overflow-hidden group"
            >
              <motion.div
                className="flex items-center mb-6 relative z-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <GraduationCap className="w-6 h-6 text-[#8B5CF6] mr-3" />
                </motion.div>
                <h3 className="text-2xl text-[#8B5CF6]">Education</h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-300 relative z-10"
              >
                <h4 className="text-lg mb-1 text-[#F8FAFC]">SRM Institute of Hotel Management</h4>
                <p className="text-gray-400 text-sm">
                  B.Sc., Hotel Management | Graduated: 01/2025
                </p>
              </motion.div>

              {/* Decorative element */}
              <motion.div
                className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#A855F7]/10 to-transparent rounded-tl-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
