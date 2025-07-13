"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Trophy, Star, Crown, Zap, Gift } from "lucide-react"

const certifications = [
  {
    title: "Basics of Python Programming",
    provider: "Infosys Springboard",
    color: "from-electric-blue to-royal-blue",
    icon: Award,
  },
  {
    title: "Basics of Java Programming",
    provider: "EdX",
    color: "from-neon-cyan to-emerald-green",
    icon: Award,
  },
  {
    title: "Learn SQL from Scratch",
    provider: "Udemy",
    color: "from-deep-purple to-hot-pink",
    icon: Award,
  },
  {
    title: "Learn HTML from Scratch",
    provider: "Udemy",
    color: "from-sunset-orange to-lime-green",
    icon: Award,
  },
  {
    title: "Certificate of UI/UX Design",
    provider: "Design Institute",
    color: "from-hot-pink to-deep-purple",
    icon: Award,
  },
  {
    title: "Japanese Language Proficiency Test (Level N5)",
    provider: "JLPT",
    color: "from-sunset-orange to-hot-pink",
    icon: Star,
    special: true,
  },
]

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-20 relative bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-slate-900/50"></div>
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
              <Crown className="w-6 h-6 text-sunset-orange animate-pulse" />
              <span className="text-sunset-orange font-semibold">Achievements</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                Certifications & Awards
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Continuous learning and professional development milestones
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-gray-900/90 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-neon-cyan to-emerald-green flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Professional Certifications</h3>
                </div>

                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{
                        x: 10,
                        scale: 1.02,
                        boxShadow: cert.special
                          ? "0 0 30px rgba(245, 158, 11, 0.4)"
                          : "0 0 20px rgba(0, 255, 255, 0.3)",
                      }}
                      className={`relative group/cert ${cert.special ? "ring-2 ring-sunset-orange/50" : ""}`}
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300 rounded-xl blur"></div>
                      <div
                        className={`relative flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r ${cert.color}/10 border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm`}
                      >
                        <div
                          className={`w-10 h-10 rounded-lg bg-gradient-to-r ${cert.color} flex items-center justify-center flex-shrink-0 group-hover/cert:scale-110 transition-transform duration-300`}
                        >
                          <cert.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold mb-1 group-hover/cert:text-transparent group-hover/cert:bg-gradient-to-r group-hover/cert:bg-clip-text transition-all duration-300">
                            {cert.title}
                          </h4>
                          <p className="text-white/60 text-sm">{cert.provider}</p>
                          {cert.special && (
                            <div className="mt-2">
                              <span className="px-2 py-1 bg-gradient-to-r from-sunset-orange/30 to-hot-pink/30 text-sunset-orange rounded-full text-xs border border-sunset-orange/30">
                                Special Achievement
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Special Achievement */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-sunset-orange via-hot-pink to-deep-purple rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-900/80 to-indigo-900/60 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-sunset-orange to-hot-pink flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Special Recognition</h3>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(245, 158, 11, 0.4)",
                  }}
                  className="relative group/award"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-sunset-orange to-hot-pink rounded-xl blur opacity-0 group-hover/award:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-r from-sunset-orange/20 to-hot-pink/20 p-6 rounded-xl border border-sunset-orange/30 hover:border-sunset-orange/50 transition-all duration-300 backdrop-blur-sm">
                    <div className="flex items-center space-x-3 mb-4">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                        className="w-12 h-12 rounded-full bg-gradient-to-r from-sunset-orange to-hot-pink flex items-center justify-center"
                      >
                        <Trophy className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">Language Proficiency Award</h4>
                        <div className="flex items-center space-x-2">
                          <Gift className="w-4 h-4 text-sunset-orange" />
                          <span className="text-sunset-orange font-semibold text-sm">Cash Prize Winner</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-white/90 leading-relaxed mb-4">
                      Received a <span className="text-sunset-orange font-bold text-lg">₹1800 cash prize</span> for
                      clearing JLPT N5 as the <span className="text-hot-pink font-semibold">first-batch student</span>{" "}
                      from my college to achieve this prestigious certification.
                    </p>

                    <div className="flex flex-wrap gap-2">
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-gradient-to-r from-sunset-orange/30 to-hot-pink/30 text-sunset-orange rounded-full text-sm border border-sunset-orange/30 backdrop-blur-sm"
                      >
                        🇯🇵 JLPT N5
                      </motion.span>
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-gradient-to-r from-neon-cyan/30 to-emerald-green/30 text-neon-cyan rounded-full text-sm border border-neon-cyan/30 backdrop-blur-sm"
                      >
                        🥇 First Batch
                      </motion.span>
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-gradient-to-r from-emerald-green/30 to-lime-green/30 text-emerald-green rounded-full text-sm border border-emerald-green/30 backdrop-blur-sm"
                      >
                        💰 Cash Prize
                      </motion.span>
                    </div>
                  </div>
                </motion.div>

                {/* Achievement Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="mt-8 grid grid-cols-2 gap-4"
                >
                  <div className="text-center p-4 bg-gradient-to-r from-electric-blue/10 to-royal-blue/10 rounded-lg border border-electric-blue/20">
                    <div className="text-2xl font-bold text-electric-blue mb-1">6+</div>
                    <div className="text-white/70 text-sm">Certifications</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-r from-neon-cyan/10 to-emerald-green/10 rounded-lg border border-neon-cyan/20">
                    <div className="text-2xl font-bold text-neon-cyan mb-1">1st</div>
                    <div className="text-white/70 text-sm">In College</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
