"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Database, Palette, Lightbulb } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Technologies",
    icon: Code2,
    skills: [
      { name: "React.js", level: 90, color: "from-electric-blue to-royal-blue" },
      { name: "JavaScript", level: 85, color: "from-sunset-orange to-lime-green" },
      { name: "HTML5", level: 95, color: "from-hot-pink to-deep-purple" },
      { name: "CSS3", level: 90, color: "from-neon-cyan to-emerald-green" },
    ],
    bgColor: "from-electric-blue/10 to-royal-blue/10",
    borderColor: "border-electric-blue/30",
  },
  {
    title: "Programming Languages",
    icon: Database,
    skills: [
      { name: "Python", level: 80, color: "from-emerald-green to-lime-green" },
      { name: "Java", level: 75, color: "from-hot-pink to-deep-purple" },
      { name: "SQL", level: 70, color: "from-royal-blue to-electric-blue" },
    ],
    bgColor: "from-neon-cyan/10 to-emerald-green/10",
    borderColor: "border-neon-cyan/30",
  },
  {
    title: "Design & Tools",
    icon: Palette,
    skills: [
      { name: "UI/UX Design", level: 85, color: "from-deep-purple to-hot-pink" },
      { name: "Figma", level: 80, color: "from-sunset-orange to-hot-pink" },
      { name: "Responsive Design", level: 90, color: "from-neon-cyan to-emerald-green" },
    ],
    bgColor: "from-deep-purple/10 to-hot-pink/10",
    borderColor: "border-deep-purple/30",
  },
]

const softSkills = [
  { name: "Problem Solving", color: "from-electric-blue to-royal-blue" },
  { name: "Leadership", color: "from-neon-cyan to-emerald-green" },
  { name: "Communication", color: "from-deep-purple to-hot-pink" },
  { name: "Creative Design", color: "from-sunset-orange to-lime-green" },
  { name: "Team Work", color: "from-hot-pink to-deep-purple" },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="skills" className="py-20 relative bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-indigo-900/30 to-purple-900/50"></div>
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
              <Lightbulb className="w-6 h-6 text-sunset-orange animate-pulse" />
              <span className="text-sunset-orange font-semibold">My Expertise</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div
                  className={`relative bg-gradient-to-br ${category.bgColor} backdrop-blur-md rounded-2xl p-6 border ${category.borderColor} hover:border-white/30 transition-all duration-300`}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-electric-blue to-neon-cyan flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>

                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white/90 font-medium">{skill.name}</span>
                          <span className="text-white/70 text-sm font-semibold">{skill.level}%</span>
                        </div>

                        <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                          <motion.div
                            className={`h-3 rounded-full bg-gradient-to-r ${skill.color} relative overflow-hidden`}
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{
                              delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                              duration: 1.2,
                              ease: "easeOut",
                            }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              animate={{ x: ["-100%", "100%"] }}
                              transition={{
                                repeat: Number.POSITIVE_INFINITY,
                                duration: 2,
                                ease: "linear",
                                delay: categoryIndex * 0.2 + skillIndex * 0.1 + 1.5,
                              }}
                            />
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-electric-blue via-neon-cyan to-emerald-green rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-br from-slate-900/60 to-indigo-900/40 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center justify-center space-x-2 mb-8">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-deep-purple to-hot-pink flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Soft Skills</h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                      boxShadow: "0 10px 30px rgba(0, 102, 255, 0.3)",
                    }}
                    className="relative group/skill"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 rounded-xl blur"></div>
                    <div
                      className={`relative bg-gradient-to-r ${skill.color} p-4 rounded-xl text-center hover:shadow-lg transition-all duration-300`}
                    >
                      <span className="text-white font-medium text-sm">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
