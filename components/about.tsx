"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">About Me</h2>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-300 mb-6 leading-relaxed"
            >
              I am a passionate Frontend Developer currently pursuing B-Tech at Madanapalle Institute of Technology and
              Science with a CGPA of 8.98. I specialize in creating responsive and user-friendly interfaces using modern
              web technologies.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              With strong problem-solving skills in Python and Java, and a keen eye for creative and functional UI/UX
              design, I bring both technical expertise and design sensibility to every project.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-6 rounded-xl border border-purple-400/30">
              <h3 className="text-2xl font-bold text-white mb-2">Languages</h3>
              <p className="text-gray-300">Telugu • English • Japanese</p>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-6 rounded-xl border border-purple-400/30">
              <h3 className="text-2xl font-bold text-white mb-2">Education</h3>
              <p className="text-gray-300">B-Tech • CGPA: 8.98</p>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-6 rounded-xl border border-purple-400/30">
              <h3 className="text-2xl font-bold text-white mb-2">Focus</h3>
              <p className="text-gray-300">Frontend • UI/UX • Problem Solving</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
