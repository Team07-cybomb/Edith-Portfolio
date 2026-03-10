import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Analytics Dashboard Redesign',
    description: 'Redesigning complex analytics into clear, actionable insights',
    image: 'https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcyNjE5NTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Dashboard', 'B2B', 'Analytics'],
  },
  {
    id: 2,
    title: 'FinTech Mobile App',
    description: 'Seamless banking experience with intuitive user onboarding',
    image: 'https://images.unsplash.com/photo-1764601841403-5c43713923c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwbW9iaWxlJTIwYXBwJTIwZGVzaWdufGVufDF8fHx8MTc3MjYyMjk5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Mobile', 'FinTech', 'UX'],
  },
  {
    id: 3,
    title: 'Design System Framework',
    description: 'Scalable design system with reusable components and patterns',
    image: 'https://images.unsplash.com/photo-1769149068959-b11392164add?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc3MjU3NTQzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Design System', 'Components', 'Tokens'],
  },
  {
    id: 4,
    title: 'E-commerce Platform',
    description: 'Modern shopping experience with optimized conversion flow',
    image: 'https://images.unsplash.com/photo-1687524690542-2659f268cde8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MjUxOTI2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['E-commerce', 'Web', 'Conversion'],
  },
];

export function SelectedWork() {
  return (
    <section id="work" className="relative px-6 py-24">
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
              Portfolio
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl mb-4">Selected Work</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A curated collection of projects that showcase my approach to solving complex design challenges
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project: Project, index: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring", bounce: 0.3 }}
              whileHover={{ y: -12 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-[#1A1A22] backdrop-blur-sm border border-[#8B5CF6]/10 transition-all duration-500 hover:border-[#A855F7]/50 hover:shadow-2xl hover:shadow-[#8B5CF6]/20">
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F13] via-[#0F0F13]/50 to-transparent" />
                  
                  {/* Hover overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/20 to-[#A855F7]/20"
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag: string, tagIndex: number) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * tagIndex }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 text-xs bg-[#8B5CF6]/20 text-[#A855F7] rounded-full border border-[#8B5CF6]/30"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <h3 className="text-2xl mb-2 text-[#F8FAFC]">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="flex items-center text-[#8B5CF6] group-hover:text-[#A855F7] transition-colors">
                    <span className="mr-2">View Case Study</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </div>

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{
                    background: 'radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.15), transparent 70%)',
                  }}
                />

                {/* Animated border on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(90deg, #6366F1, #8B5CF6, #A855F7, #6366F1)',
                    backgroundSize: '200% 100%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '200% 0%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="absolute inset-[2px] bg-[#1A1A22] rounded-2xl" />
                </motion.div>

                {/* Content overlay to keep it on top */}
                <div className="absolute inset-0 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
