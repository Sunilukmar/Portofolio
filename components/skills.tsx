"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
  { name: "React JS", level: 90, color: "from-purple-500 to-pink-500" },
  { name: "JavaScript", level: 85, color: "from-yellow-500 to-orange-500" },
  { name: "HTML5", level: 95, color: "from-red-500 to-pink-500" },
  { name: "CSS3", level: 90, color: "from-blue-500 to-purple-500" },
  { name: "Python", level: 80, color: "from-green-500 to-teal-500" },
  { name: "Java", level: 75, color: "from-orange-500 to-red-500" },
  { name: "UI/UX Design", level: 85, color: "from-purple-500 to-indigo-500" },
  { name: "Figma", level: 80, color: "from-pink-500 to-purple-500" },
]

const softSkills = ["Problem Solving", "Leadership", "Communication Skills", "Creative Design", "Interpersonal Skills"]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-16">Skills & Expertise</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-8">Technical Skills</h3>

              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-gray-300">{skill.level}%</span>
                    </div>

                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <motion.div
                        className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-8">Soft Skills</h3>

              <div className="grid grid-cols-1 gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 p-4 rounded-xl border border-purple-400/30 text-center"
                  >
                    <span className="text-white font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
