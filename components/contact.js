"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, Send, Github, Linkedin, MapPin, MessageCircle, Heart } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "skumarreddy627@gmail.com",
      href: "mailto:skumarreddy627@gmail.com",
      color: "from-electric-blue to-royal-blue",
      glowColor: "rgba(0, 102, 255, 0.4)",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8341181874",
      href: "tel:+918341181874",
      color: "from-neon-cyan to-emerald-green",
      glowColor: "rgba(0, 255, 255, 0.4)",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/sunil-kumar-reddy-gajulapalli-348bb3272",
      color: "from-royal-blue to-electric-blue",
      glowColor: "rgba(59, 130, 246, 0.4)",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my projects",
      href: "https://github.com/Sunilukmar",
      color: "from-deep-purple to-hot-pink",
      glowColor: "rgba(107, 70, 193, 0.4)",
    },
  ]

  return (
    <section id="contact" className="py-20 relative bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-indigo-900/50 to-purple-900/40"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <MessageCircle className="w-6 h-6 text-electric-blue animate-pulse" />
              <span className="text-electric-blue font-semibold">Let's Connect</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's create something amazing together!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">Contact Information</h3>
                <p className="text-white/70 leading-relaxed">
                  I'm always excited to discuss new opportunities, innovative projects, or just have a friendly chat
                  about technology and development. Don't hesitate to reach out!
                </p>
              </motion.div>

              <div className="space-y-6 mb-8">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{
                      scale: 1.02,
                      x: 10,
                      boxShadow: `0 10px 30px ${contact.glowColor}`,
                    }}
                    className="group flex items-center gap-4 p-4 bg-gray-900/80 backdrop-blur-md rounded-lg border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300"
                  >
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${contact.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                    >
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm font-medium">{contact.label}</p>
                      <p className="text-white font-semibold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300">
                        {contact.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-3 p-4 bg-gradient-to-r from-slate-900/40 to-indigo-900/30 backdrop-blur-md rounded-lg border border-white/10"
              >
                <MapPin className="w-5 h-5 text-emerald-green" />
                <div>
                  <p className="text-white/60 text-sm">Location</p>
                  <p className="text-white">Madanapalle, Andhra Pradesh, India</p>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-gray-900/90 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center space-x-2">
                  <Send className="w-6 h-6 text-neon-cyan" />
                  <span>Send a Message</span>
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white/80 mb-2 font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white/80 mb-2 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white/80 mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 0 30px rgba(0, 255, 255, 0.5)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-cyan to-emerald-green hover:from-emerald-green hover:to-neon-cyan text-white rounded-lg transition-all duration-300 font-semibold shadow-lg"
                  >
                    <Send size={20} />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-16"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="inline-block bg-gradient-to-r from-slate-900/60 to-indigo-900/40 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 max-w-2xl"
            >
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Heart className="w-6 h-6 text-hot-pink animate-pulse" />
                <span className="text-hot-pink font-semibold">Let's Build Something Amazing</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Ready to start your project?</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Whether you need a stunning website, a powerful web application, or just want to discuss your ideas, I'm
                here to help bring your vision to life with cutting-edge technology and creative design.
              </p>
              <motion.a
                href="mailto:skumarreddy627@gmail.com"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(0, 102, 255, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-electric-blue to-royal-blue hover:from-royal-blue hover:to-electric-blue px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 shadow-lg"
              >
                <Mail className="w-5 h-5" />
                <span>Start a Conversation</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1 }}
        className="text-center mt-16 pt-8 border-t border-white/10"
      >
        <p className="text-gray-400 mb-2">© 2024 G Venkata Sunil Kumar Reddy</p>
        <p className="text-gray-500 text-sm">
          Built with <span className="text-electric-blue">❤️</span> using React, JavaScript & Three.js
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            className="text-2xl"
          >
            🚀
          </motion.span>
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            className="text-2xl"
          >
            ✨
          </motion.span>
          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.8 }}
            className="text-2xl"
          >
            💻
          </motion.span>
        </div>
      </motion.div>
    </section>
  )
}
