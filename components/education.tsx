"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Calendar, Award } from "lucide-react"

const education = [
  {
    degree: "B-Tech",
    institution: "Madanapalle Institute of Technology and Science",
    period: "2022 – present",
    grade: "CGPA: 8.98",
    color: "from-purple-500 to-pink-500",
  },
  {
    degree: "Class XII",
    institution: "Sri Chaitanya Junior Kalasala",
    period: "2021 – 2022",
    grade: "Percentage: 93.6%",
    color: "from-blue-500 to-purple-500",
  },
  {
    degree: "SSC",
    institution: "SRI Maharshi High School",
    period: "2019 – 2020",
    grade: "Percentage: 98%",
    color: "from-green-500 to-teal-500",
  },
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-16">Education</h2>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${edu.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-lg text-gray-300 mb-3">{edu.institution}</p>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400">{edu.period}</span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Award className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-400 font-semibold">{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
