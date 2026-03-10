import { motion } from 'motion/react';
import { Target, Search, Lightbulb, Palette, CheckCircle, LucideIcon } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Section {
  icon: LucideIcon;
  title: string;
  content: string;
}

const sections: Section[] = [
  {
    icon: Target,
    title: 'Overview',
    content: 'Redesigned the HRMS dashboard to improve employee data management and streamline HR workflows for a mid-sized company with 500+ employees.',
  },
  {
    icon: Search,
    title: 'Problem',
    content: 'HR team struggled with complex navigation, scattered information, and time-consuming manual processes. Employee data was difficult to access and analyze.',
  },
  {
    icon: Lightbulb,
    title: 'Research',
    content: 'Conducted 12 user interviews with HR personnel, analyzed 3 competitor platforms, and mapped current user journey to identify pain points and opportunities.',
  },
  {
    icon: Palette,
    title: 'UI Design',
    content: 'Created a clean, modern interface with clear data hierarchy, improved navigation, and simplified workflows. Focused on reducing clicks and cognitive load.',
  },
  {
    icon: CheckCircle,
    title: 'Results',
    content: '40% reduction in task completion time, 85% user satisfaction score, and 60% decrease in support tickets related to dashboard usage.',
  },
];

interface Solution {
  title: string;
  description: string;
}

const solutions: Solution[] = [
  {
    title: 'Clear Data Hierarchy',
    description: 'Organized information architecture with priority-based layouts',
  },
  {
    title: 'Improved Chart Layout',
    description: 'Visual data representation for quick insights and decision-making',
  },
  {
    title: 'Simplified Navigation',
    description: 'Intuitive menu structure reducing cognitive load by 60%',
  },
];

export function FeaturedCaseStudy() {
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
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block px-4 py-2 bg-[#8B5CF6]/20 text-[#A855F7] rounded-full text-sm mb-4 border border-[#8B5CF6]/30"
          >
            Featured Case Study
          </motion.span>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl mb-4"
          >
            HRMS Dashboard Redesign
          </motion.h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Transforming complex HR workflows into an intuitive, efficient management system
          </p>
        </motion.div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
          className="mb-20 rounded-3xl overflow-hidden border border-[#8B5CF6]/20 shadow-2xl shadow-[#6366F1]/10 relative group"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1770368787728-73c60309cb42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRhc2hib2FyZCUyMGNvbXB1dGVyJTIwc2NyZWVufGVufDF8fHx8MTc3MjYyMjk5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="HRMS Dashboard"
            className="w-full h-96 md:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-[#0F0F13]/80 via-transparent to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Case Study Sections */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section: Section, index: number) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12, type: "spring", bounce: 0.3 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative p-8 bg-[#1A1A22] backdrop-blur-sm border border-[#8B5CF6]/10 rounded-2xl hover:border-[#A855F7]/50 transition-all duration-500 group overflow-hidden"
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/5 via-transparent to-[#A855F7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex p-3 bg-[#8B5CF6]/20 rounded-xl mb-4 group-hover:bg-[#8B5CF6]/30 transition-colors border border-[#8B5CF6]/30"
                  >
                    <Icon className="w-6 h-6 text-[#8B5CF6]" />
                  </motion.div>

                  <h3 className="text-xl mb-3 text-[#F8FAFC]">{section.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{section.content}</p>
                </div>

                {/* Glow effect on hover */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-[#6366F1]/20 to-[#A855F7]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Solution Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 p-8 md:p-10 bg-gradient-to-br from-[#2D2342] via-[#161225] to-[#120F1C] border border-[#8B5CF6]/10 rounded-2xl relative overflow-hidden shadow-2xl"
        >
          {/* Subtle ambient glow in the background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl mb-8 text-[#F8FAFC] font-medium tracking-wide">
              Key Solutions Implemented
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {solutions.map((solution: Solution, index: number) => (
                <div
                  key={solution.title}
                  className="relative p-7 bg-[#1A1525]/80 backdrop-blur-sm rounded-xl border border-white/5 flex flex-col justify-center min-h-[140px]"
                >
                  {/* Glowing left border */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 left-0 w-[3px] h-[70%] bg-gradient-to-b from-[#818CF8] via-[#C084FC] to-[#F472B6] rounded-r-md shadow-[0_0_12px_rgba(192,132,252,0.8)]"
                  />
                  
                  <div className="pl-4">
                    <h4 className="text-[17px] mb-2 text-[#C084FC] font-medium">{solution.title}</h4>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
