"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Palette, Brain, Users, Zap, Heart } from "lucide-react"

const highlights = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "Expert in React.js, JavaScript, HTML5 & CSS3 with modern frameworks",
    color: "from-electric-blue to-royal-blue",
    glowColor: "rgba(0, 102, 255, 0.3)",
  },
  {
    icon: Brain,
    title: "Problem Solving",
    description: "Strong analytical thinking with Python & Java programming skills",
    color: "from-neon-cyan to-emerald-green",
    glowColor: "rgba(0, 255, 255, 0.3)",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creative design thinking with Figma and modern design principles",
    color: "from-deep-purple to-hot-pink",
    glowColor: "rgba(107, 70, 193, 0.3)",
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Excellent communication and collaborative project management",
    color: "from-sunset-orange to-lime-green",
    glowColor: "rgba(245, 158, 11, 0.3)",
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className="py-20 relative bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900">
      <div className="container mx-auto px-6">
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
              <Heart className="w-6 h-6 text-hot-pink animate-pulse" />
              <span className="text-hot-pink font-semibold">Get to know me</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 rounded-2xl blur opacity-30"></div>
              <div className="relative bg-gray-900/90 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50">
                <div className="flex items-center space-x-2 mb-4">
                  <Zap className="w-5 h-5 text-sunset-orange" />
                  <span className="text-sunset-orange font-semibold text-sm">My Story</span>
                </div>
                <p className="text-lg text-white/90 leading-relaxed mb-6">
                  I am a passionate Frontend Developer currently pursuing B-Tech at{" "}
                  <span className="text-neon-cyan font-semibold">Madanapalle Institute of Technology and Science</span>{" "}
                  with an outstanding <span className="text-electric-blue font-bold">CGPA of 8.98</span>.
                </p>
                <p className="text-lg text-white/80 leading-relaxed mb-6">
                  My journey in technology is fueled by curiosity and creativity. I specialize in transforming complex
                  ideas into beautiful, interactive web experiences that users love and remember.
                </p>
                <div className="flex flex-wrap gap-3">
                  <motion.span
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 102, 255, 0.4)" }}
                    className="px-4 py-2 bg-gradient-to-r from-electric-blue/20 to-royal-blue/20 text-electric-blue rounded-full text-sm border border-electric-blue/30 backdrop-blur-sm"
                  >
                    Telugu Native
                  </motion.span>
                  <motion.span
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 255, 255, 0.4)" }}
                    className="px-4 py-2 bg-gradient-to-r from-neon-cyan/20 to-emerald-green/20 text-neon-cyan rounded-full text-sm border border-neon-cyan/30 backdrop-blur-sm"
                  >
                    English Fluent
                  </motion.span>
                  <motion.span
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(245, 158, 11, 0.4)" }}
                    className="px-4 py-2 bg-gradient-to-r from-sunset-orange/20 to-lime-green/20 text-sunset-orange rounded-full text-sm border border-sunset-orange/30 backdrop-blur-sm"
                  >
                    Japanese N5 🏆
                  </motion.span>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    boxShadow: `0 20px 40px ${item.glowColor}`,
                  }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur"></div>
                  <div className="relative p-6 bg-slate-900/60 backdrop-blur-md rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
