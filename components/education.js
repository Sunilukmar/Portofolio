"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Calendar, Award, BookOpen, Trophy } from "lucide-react"

const education = [
  {
    degree: "B-Tech",
    institution: "Madanapalle Institute of Technology and Science",
    period: "2022 – present",
    grade: "CGPA: 8.98",
    color: "from-electric-blue to-royal-blue",
    icon: GraduationCap,
    description: "Computer Science & Engineering with focus on Full-Stack Development",
    glowColor: "rgba(0, 102, 255, 0.3)",
  },
  {
    degree: "Class XII",
    institution: "Sri Chaitanya Junior Kalasala",
    period: "2021 – 2022",
    grade: "Percentage: 93.6%",
    color: "from-neon-cyan to-emerald-green",
    icon: BookOpen,
    description: "Mathematics, Physics, Chemistry - Science Stream",
    glowColor: "rgba(0, 255, 255, 0.3)",
  },
  {
    degree: "SSC",
    institution: "SRI Maharshi High School",
    period: "2019 – 2020",
    grade: "Percentage: 98%",
    color: "from-deep-purple to-hot-pink",
    icon: Award,
    description: "Outstanding academic performance with distinction",
    glowColor: "rgba(107, 70, 193, 0.3)",
  },
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="education" className="py-20 relative bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-indigo-900/40 to-purple-900/30"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Trophy className="w-6 h-6 text-sunset-orange animate-pulse" />
              <span className="text-sunset-orange font-semibold">Academic Journey</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                Education & Achievements
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              A consistent track record of academic excellence and continuous learning
            </p>
          </motion.div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  boxShadow: `0 20px 40px ${edu.glowColor}`,
                }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative bg-gray-900/90 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300">
                  <div className="flex items-start space-x-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 rounded-xl bg-gradient-to-r ${edu.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    >
                      <edu.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300">
                            {edu.degree}
                          </h3>
                          <p className="text-lg text-neon-cyan mb-3 font-medium">{edu.institution}</p>
                          <p className="text-white/70 mb-4">{edu.description}</p>
                        </div>

                        <div className="text-right lg:text-right">
                          <div className="flex items-center lg:justify-end gap-2 mb-2">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-400 text-sm">{edu.period}</span>
                          </div>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className={`inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${edu.color} rounded-full shadow-lg`}
                          >
                            <Award className="w-4 h-4 text-white" />
                            <span className="text-white font-bold">{edu.grade}</span>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Academic Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-gradient-to-br from-electric-blue/20 to-royal-blue/20 backdrop-blur-md rounded-xl border border-electric-blue/30"
            >
              <div className="text-3xl font-bold text-electric-blue mb-2">8.98</div>
              <div className="text-white/80">Current CGPA</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-gradient-to-br from-neon-cyan/20 to-emerald-green/20 backdrop-blur-md rounded-xl border border-neon-cyan/30"
            >
              <div className="text-3xl font-bold text-neon-cyan mb-2">93.6%</div>
              <div className="text-white/80">Class XII Score</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-gradient-to-br from-deep-purple/20 to-hot-pink/20 backdrop-blur-md rounded-xl border border-deep-purple/30"
            >
              <div className="text-3xl font-bold text-deep-purple mb-2">98%</div>
              <div className="text-white/80">SSC Score</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
