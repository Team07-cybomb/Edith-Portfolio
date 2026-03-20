import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ExternalLink, X } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  figmaLink: string;
  behanceLink: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Nexus Manufacturing',
    description: 'Leading precision manufacturing solutions with 25+ years of excellence in industrial production.',
    image: '/nexus.jpeg',
    tags: ['Dashboard', 'B2B', 'Analytics'],
    figmaLink: 'https://www.figma.com/proto/jsibxHMq9sImobRrzypyS3/CYBOMB?node-id=1948-9509&t=N0l5wksdjyrG6O23-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=130%3A2421&show-proto-sidebar=1',
    behanceLink: 'https://www.behance.net/gallery/243071723/Nexus-Manufacturing',
  },
  // {
  //   id: 2,
  //   title: 'FinTech Mobile App',
  //   description: 'Seamless banking experience with intuitive user onboarding',
  //   image: 'https://images.unsplash.com/photo-1764601841403-5c43713923c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwbW9iaWxlJTIwYXBwJTIwZGVzaWdufGVufDF8fHx8MTc3MjYyMjk5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  //   tags: ['Mobile', 'FinTech', 'UX'],
  //   figmaLink: 'https://www.figma.com',
  //   behanceLink: 'https://www.behance.net',
  // },
  {
    id: 3,
    title: 'Design System Framework',
    description: 'Scalable design system with reusable components and patterns',
    image: '/hrms-pro.png',
    tags: ['Design System', 'Components', 'Tokens'],
    figmaLink: 'https://www.figma.com/proto/jsibxHMq9sImobRrzypyS3/CYBOMB?node-id=2102-12147&t=lPIoLgVLTEvHGCtt-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=130%3A2421&show-proto-sidebar=1',
    behanceLink: 'https://www.behance.net/gallery/245888973/HRMS-Pro-Modern-HR-Management-Dashboard?platform=direct',
  },
  {
    id: 4,
    title: 'E-commerce Platform',
    description: 'Modern shopping experience with optimized conversion flow',
    image: '/E-commerce.jpeg',
    tags: ['E-commerce', 'Web', 'Conversion'],
    figmaLink: 'https://www.figma.com/proto/jsibxHMq9sImobRrzypyS3/CYBOMB?node-id=2011-10672&t=ZGy80X59eJpdGWQB-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=130%3A2421&show-proto-sidebar=1',
    behanceLink: 'https://www.behance.net/gallery/245524287/E-Commerce',
  },
];

export function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring", bounce: 0.3 }}
              whileHover={{ y: -12 }}
              className="group cursor-pointer block relative h-full"
            >
              <div className="h-full relative overflow-hidden rounded-2xl bg-[#1A1A22] backdrop-blur-sm border border-[#8B5CF6]/10 transition-all duration-500 hover:border-[#A855F7]/50 hover:shadow-2xl hover:shadow-[#8B5CF6]/20 flex flex-col">
                {/* Background effects - moved behind content */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl z-0"
                  style={{
                    background: 'radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.15), transparent 70%)',
                  }}
                />
                
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
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
                  <div className="absolute inset-[2px] bg-[#1A1A22] rounded-2xl z-[-1]" />
                </motion.div>

                {/* Main Content Area */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="h-full"
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top"
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

                  {/* Text Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex-1">
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
                    </div>

                    <div className="flex items-center text-[#8B5CF6] group-hover:text-[#A855F7] transition-colors mt-auto pt-4">
                      <span className="mr-2">View Case Study</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Selection Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-lg bg-[#1A1A22] border border-[#8B5CF6]/30 rounded-3xl p-8 shadow-2xl overflow-hidden"
              >
                {/* Modal Glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#8B5CF6]/20 rounded-full blur-3xl" />
                
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                <p className="text-gray-400 mb-8">Choose how you'd like to view this project</p>

                <div className="grid gap-4">
                  <motion.a
                    href={selectedProject.figmaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-between p-6 bg-gradient-to-r from-[#1E1E2E] to-[#1A1A22] border border-[#8B5CF6]/20 rounded-2xl hover:border-[#8B5CF6]/50 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#F24E1E]/10 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#F24E1E]" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19 28.5C19 25.8478 17.9464 23.3043 16.0711 21.4289C14.1957 19.5536 11.6522 18.5 9 18.5C6.34784 18.5 3.8043 19.5536 1.92893 21.4289C0.0535692 23.3043 -1 25.8478 -1 28.5C-1 31.1522 0.0535692 33.6957 1.92893 35.5711C3.8043 37.4464 6.34784 38.5 9 38.5C11.6522 38.5 14.1957 37.4464 16.0711 35.5711C17.9464 33.6957 19 31.1522 19 28.5Z" fill="currentColor"/>
                          <path d="M19 9.5C19 6.84784 17.9464 4.3043 16.0711 2.42893C14.1957 0.553569 11.6522 -0.5 9 -0.5C6.34784 -0.5 3.8043 0.553569 1.92893 2.42893C0.0535692 4.3043 -1 6.84784 -1 9.5C-1 12.1522 0.0535692 14.6957 1.92893 16.5711C3.8043 18.4464 6.34784 19.5 9 19.5H19V9.5Z" fill="currentColor"/>
                          <path d="M19 9.5V19.5H29C31.6522 19.5 34.1957 18.4464 36.0711 16.5711C37.9464 14.6957 39 12.1522 39 9.5C39 6.84784 37.9464 4.3043 36.0711 2.42893C34.1957 0.553569 31.6522 -0.5 29 -0.5C26.3478 -0.5 23.8043 0.553569 21.9289 2.42893C20.0536 4.3043 19 6.84784 19 9.5Z" fill="currentColor"/>
                          <path d="M19 28.5V38.5H29C31.6522 38.5 34.1957 37.4464 36.0711 35.5711C37.9464 33.6957 39 31.1522 39 28.5C39 25.8478 37.9464 23.3043 36.0711 21.4289C34.1957 19.5536 31.6522 18.5 29 18.5H19V28.5Z" fill="currentColor"/>
                          <path d="M9 38.5C6.34784 38.5 3.8043 39.5536 1.92893 41.4289C0.0535692 43.3043 -1 45.8478 -1 48.5C-1 51.1522 0.0535692 53.6957 1.92893 55.5711C3.8043 57.4464 6.34784 58.5 9 58.5C11.6522 58.5 14.1957 57.4464 16.0711 55.5711C17.9464 53.6957 19 51.1522 19 48.5V38.5H9Z" fill="currentColor"/>
                        </svg>
                      </div>
                      <div className="text-left">
                        <span className="block text-lg font-medium text-white">Figma Design</span>
                        <span className="text-xs text-gray-500">View source file and prototypes</span>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-[#8B5CF6] transition-colors" />
                  </motion.a>

                  <motion.a
                    href={selectedProject.behanceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-between p-6 bg-gradient-to-r from-[#1E1E2E] to-[#1A1A22] border border-[#8B5CF6]/20 rounded-2xl hover:border-[#8B5CF6]/50 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#0057FF]/10 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#0057FF]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.228 15.01h-2.203v-2.013h2.203c.609 0 1.059.141 1.347.422.288.277.432.61.432.997 0 .397-.144.733-.432 1.009-.288.274-.738.411-1.347.411zm-.441-5.176h-1.762v1.751h1.762c.5 0 .885-.122 1.155-.366.27-.244.405-.536.405-.875s-.135-.644-.405-.892c-.27-.248-.655-.372-1.155-.372zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM12.47 12.3c.531-.478.797-1.118.797-1.919s-.284-1.442-.852-1.921c-.569-.479-1.385-.718-2.451-.718H4.634v8.52h5.564c1.11 0 1.956-.27 2.538-.809.582-.54.873-1.259.873-2.158 0-.414-.112-.76-.339-1.035V12.3zm8.381 1.096c-.34-.492-.816-.864-1.428-1.115-.612-.251-1.282-.377-2.011-.377-1.099 0-2.007.316-2.724.949-.717.632-1.076 1.542-1.076 2.729 0 1.158.358 2.059 1.073 2.703.716.645 1.612.966 2.69.966 1.003 0 1.848-.255 2.535-.765.688-.51 1.127-1.216 1.318-2.12h-2.055c-.104.364-.325.642-.663.834-.338.191-.741.287-1.209.287-.534 0-.964-.176-1.29-.529-.326-.353-.489-.861-.489-1.524h5.836c.01-.133.015-.246.015-.339 0-1.011-.194-1.844-.582-2.499zm-4.757 1.332c.071-.476.242-.843.513-1.1.272-.257.63-.385 1.075-.385s.803.128 1.075.385c.272.257.442.624.513 1.1h-3.176zm.106-5.832h5.215V8.043h-5.215v.853z" fill="currentColor"/>
                        </svg>
                      </div>
                      <div className="text-left">
                        <span className="block text-lg font-medium text-white">Behance Case Study</span>
                        <span className="text-xs text-gray-500">Read the detailed process</span>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-[#8B5CF6] transition-colors" />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
