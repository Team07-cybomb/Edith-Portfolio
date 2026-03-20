import { motion } from 'motion/react';
import { Figma, Palette, Image, Layers, Sparkles, Wand2, LucideIcon } from 'lucide-react';

interface Tool {
  name: string;
  icon: LucideIcon;
  color: string;
}

interface SkillSet {
  category: string;
  items: string[];
}

const tools: Tool[] = [
  { name: 'Figma', icon: Figma, color: 'from-[#F24E1E] to-[#A259FF]' },
  { name: 'Adobe XD', icon: Layers, color: 'from-[#FF61F6] to-[#470137]' },
  { name: 'Illustrator', icon: Palette, color: 'from-[#FF9A00] to-[#330000]' },
  { name: 'Photoshop', icon: Image, color: 'from-[#31A8FF] to-[#001E36]' },
  { name: 'Framer', icon: Wand2, color: 'from-[#0055FF] to-[#000000]' },
  { name: 'Canva', icon: Sparkles, color: 'from-[#00C4CC] to-[#7D2AE8]' },
];

const skills: SkillSet[] = [
  { category: 'Design', items: ['User Interface Design', 'Interaction Design', 'Visual Design', 'Wireframing', 'Prototyping'] },
  { category: 'Research', items: ['User Experience Design', 'User Research', 'Usability Testing', 'User Flows', 'Design Systems'] },
  { category: 'Software', items: ['Figma AI', 'ChatGPT/Gemini', 'Adobe Creative Suite', 'Microsoft Office', 'FigJam/Miro'] },
];

export function SkillsTools() {
  return (
    <section className="relative px-6 py-24 bg-gradient-to-b from-transparent via-[#1A1A22]/30 to-transparent">
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
              Expertise
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl mb-4">Skills & Tools</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for delivering exceptional design solutions
          </p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl mb-8 text-center text-gray-300"
          >
            Design Toolkit
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((tool: Tool, index: number) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.08,
                    type: "spring",
                    bounce: 0.5
                  }}
                  whileHover={{ 
                    y: -12, 
                    scale: 1.1,
                    rotateY: 10,
                  }}
                  className="relative group"
                  style={{ perspective: '1000px' }}
                >
                  <div className="p-6 bg-[#1A1A22] backdrop-blur-sm border border-[#8B5CF6]/10 rounded-2xl flex flex-col items-center justify-center aspect-square hover:border-[#A855F7]/30 transition-all duration-300 relative overflow-hidden">
                    {/* Animated gradient background on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`}
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    
                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)',
                      }}
                    />
                    
                    <div className="relative z-10">
                      <motion.div
                        animate={{
                          rotateZ: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Icon className="w-10 h-10 mb-3 text-gray-300 group-hover:text-[#8B5CF6] transition-colors" />
                      </motion.div>
                      <p className="text-sm text-center text-gray-400 group-hover:text-[#A855F7] transition-colors">
                        {tool.name}
                      </p>
                    </div>

                    {/* Sparkle effects on hover */}
                    <motion.div
                      className="absolute top-2 right-2 w-2 h-2 bg-[#A855F7] rounded-full opacity-0 group-hover:opacity-100"
                      animate={{
                        scale: [0, 1, 0],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 0.5,
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skillSet: SkillSet, index: number) => (
            <motion.div
              key={skillSet.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring", bounce: 0.3 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-8 bg-[#1A1A22] backdrop-blur-sm border border-[#8B5CF6]/10 rounded-2xl hover:border-[#A855F7]/50 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Animated corner accent */}
              <motion.div
                className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#8B5CF6]/20 to-transparent rounded-bl-full"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3 }}
              />

              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.2 }}
                className="text-xl mb-4 text-[#8B5CF6] relative z-10"
              >
                {skillSet.category}
              </motion.h3>
              <ul className="space-y-3 relative z-10">
                {skillSet.items.map((item: string, itemIndex: number) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + itemIndex * 0.05 + 0.3 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center text-gray-300 group/item"
                  >
                    <motion.div
                      className="w-2 h-2 bg-[#8B5CF6] rounded-full mr-3"
                      whileHover={{ scale: 1.5 }}
                      animate={{
                        boxShadow: [
                          '0 0 0px rgba(139, 92, 246, 0.5)',
                          '0 0 10px rgba(139, 92, 246, 0.8)',
                          '0 0 0px rgba(139, 92, 246, 0.5)',
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: itemIndex * 0.2,
                      }}
                    />
                    <span className="group-hover/item:text-[#A855F7] transition-colors">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Hover glow effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-br from-[#6366F1]/20 to-[#A855F7]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
