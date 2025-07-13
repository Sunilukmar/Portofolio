"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { BadgeIcon as Certificate, Award, Trophy } from "lucide-react"

const certifications = [
  "Basics of Python Programming - Infosys Springboard",
  "Basics of Java Programming - Edx",
  "Learn SQL from Scratch - Udemy",
  "Learn HTML from Scratch - Udemy",
  "Certificate of UI/UX Design",
  "Japanese Language Proficiency Test (Level N5)",
]

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-16">Certifications & Achievements</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="flex items-center space-x-3 mb-8">
                <Certificate className="w-8 h-8 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">Certifications</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-3 p-4 rounded-xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300"
                  >
                    <Award className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievement */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="flex items-center space-x-3 mb-8">
                <Trophy className="w-8 h-8 text-yellow-400" />
                <h3 className="text-2xl font-bold text-white">Achievement</h3>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 p-6 rounded-xl border border-yellow-400/30"
              >
                <h4 className="text-xl font-bold text-white mb-4">Language Proficiency Award</h4>

                <p className="text-gray-300 leading-relaxed">
                  Received a <span className="text-yellow-400 font-semibold">₹1800 cash prize</span> for clearing JLPT
                  N5 as a first-batch student from my college to achieve this certification.
                </p>

                <div className="mt-4 flex items-center space-x-2">
                  <span className="px-3 py-1 bg-yellow-500/30 text-yellow-300 rounded-full text-sm border border-yellow-400/30">
                    JLPT N5
                  </span>
                  <span className="px-3 py-1 bg-green-500/30 text-green-300 rounded-full text-sm border border-green-400/30">
                    First Batch
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
