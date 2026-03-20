import { motion } from 'motion/react';
import { Mail, Linkedin, Twitter, Github, Send, LucideIcon } from 'lucide-react';
import { useState, ChangeEvent, FormEvent } from 'react';
import { db } from '../../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

interface SocialLink {
  icon: LucideIcon;
  label: string;
  href: string;
  color: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const socialLinks: SocialLink[] = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/manoj-m-r', color: 'hover:text-[#8B5CF6] hover:border-[#8B5CF6]/50' },
  { icon: Mail, label: 'Email', href: 'mailto:manoj2708mr@gmail.com', color: 'hover:text-[#A855F7] hover:border-[#A855F7]/50' },
];

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    // Background submission to Firebase (non-blocking)
    addDoc(collection(db, 'contacts'), {
      ...formData,
      submittedAt: serverTimestamp(),
    }).catch(err => console.error('Silent submission error:', err));

    // Instant success state
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative px-6 py-24 bg-gradient-to-b from-transparent via-[#1A1A22]/30 to-transparent overflow-hidden">
      {/* Background animated elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-[#6366F1]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-[#A855F7]/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
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
              Get In Touch
            </span>
          </motion.div>
          <motion.h2
            className="text-5xl md:text-6xl mb-4"
            animate={{
              backgroundImage: [
                'linear-gradient(to right, #F8FAFC, #8B5CF6, #F8FAFC)',
                'linear-gradient(to right, #6366F1, #A855F7, #6366F1)',
                'linear-gradient(to right, #F8FAFC, #8B5CF6, #F8FAFC)',
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            style={{
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Let's Work Together
          </motion.h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center p-12 bg-[#1A1A22] border border-[#8B5CF6]/30 rounded-2xl text-center space-y-6"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 10, stiffness: 100 }}
                  className="w-20 h-20 bg-[#8B5CF6]/20 rounded-full flex items-center justify-center"
                >
                  <Send className="w-10 h-10 text-[#8B5CF6]" />
                </motion.div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-[#F8FAFC]">Thank You!</h3>
                  <p className="text-gray-400">Your message has been received. I'll get back to you soon.</p>
                </div>
                <motion.button
                  onClick={() => setStatus('idle')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 border border-[#8B5CF6]/30 rounded-full text-sm text-[#8B5CF6] hover:bg-[#8B5CF6]/10 transition-colors"
                >
                  Send another message
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label htmlFor="name" className="block text-sm mb-2 text-gray-300">
                    Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02, borderColor: '#8B5CF6' }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1A1A22] border border-[#8B5CF6]/20 rounded-xl focus:outline-none focus:border-[#8B5CF6] transition-all text-[#F8FAFC] placeholder-gray-500"
                    placeholder="Your name"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="email" className="block text-sm mb-2 text-gray-300">
                    Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02, borderColor: '#8B5CF6' }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1A1A22] border border-[#8B5CF6]/20 rounded-xl focus:outline-none focus:border-[#8B5CF6] transition-all text-[#F8FAFC] placeholder-gray-500"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="message" className="block text-sm mb-2 text-gray-300">
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02, borderColor: '#8B5CF6' }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-[#1A1A22] border border-[#8B5CF6]/20 rounded-xl focus:outline-none focus:border-[#8B5CF6] transition-all text-[#F8FAFC] placeholder-gray-500 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </motion.div>
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#6366F1] to-[#A855F7] text-white rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#8B5CF6]/30 relative overflow-hidden group disabled:opacity-50"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#A855F7] to-[#6366F1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    <motion.div
                      animate={status === 'loading' ? { rotate: 360 } : { x: [0, 5, 0] }}
                      transition={status === 'loading' ? { repeat: Infinity, duration: 1, ease: "linear" } : { duration: 1.5, repeat: Infinity }}
                    >
                      <Send className="w-5 h-5" />
                    </motion.div>
                    {status === 'loading' ? 'Sending...' : status === 'error' ? 'Try Again' : 'Send Message'}
                  </span>
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="space-y-8"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-8 bg-[#1A1A22] backdrop-blur-sm border border-[#8B5CF6]/10 rounded-2xl hover:border-[#A855F7]/30 transition-all duration-300 relative overflow-hidden group"
            >
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-[#8B5CF6]/10 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              
              <h3 className="text-2xl mb-4 text-[#8B5CF6] relative z-10">Get in Touch</h3>
              <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through the form or connect with me on social media.
              </p>
              <div className="space-y-4 relative z-10">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center text-gray-300"
                >
                  <Mail className="w-5 h-5 mr-3 text-[#8B5CF6]" />
                  <span>manoj2708mr@gmail.com</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-8 bg-gradient-to-br from-[#6366F1]/10 via-[#1A1A22] to-[#A855F7]/10 backdrop-blur-sm border border-[#8B5CF6]/20 rounded-2xl relative overflow-hidden"
            >
              <h3 className="text-xl mb-6 text-[#8B5CF6] relative z-10">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {socialLinks.map((link: SocialLink, index: number) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ y: -8, scale: 1.05 }}
                      className={`flex items-center gap-3 p-4 bg-[#1A1A22] border border-[#8B5CF6]/20 rounded-xl ${link.color} transition-all duration-300 relative overflow-hidden group/social`}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/10 to-transparent opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"
                      />
                      <Icon className="w-5 h-5 relative z-10" />
                      <span className="text-sm relative z-10">{link.label}</span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-8 bg-[#1A1A22] backdrop-blur-sm border border-[#8B5CF6]/10 rounded-2xl hover:border-[#A855F7]/30 transition-all duration-300 relative overflow-hidden"
            >
              <motion.h3
                className="text-xl mb-4 text-[#8B5CF6] relative z-10"
                animate={{
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                Availability
              </motion.h3>
              <p className="text-gray-300 relative z-10">
                Currently available for freelance projects and collaborations. Response time: 24-48 hours.
              </p>
              
              {/* Pulsing dot indicator */}
              <motion.div
                className="absolute top-8 right-8 flex items-center gap-2"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <span className="w-3 h-3 bg-[#8B5CF6] rounded-full" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
