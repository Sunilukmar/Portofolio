"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Users, Shield, Bike, ShoppingCart, Rocket, Star } from "lucide-react"

const projects = [
  {
    title: "MargRakshak - Path Protector",
    description:
      "Revolutionary map-based safety app with real-time accident alerts. Features AI-powered route optimization and community-driven safety reporting system.",
    teamSize: 5,
    icon: Shield,
    color: "from-electric-blue to-royal-blue",
    technologies: ["React", "Maps API", "Real-time Data", "AI/ML", "Mobile App"],
    glowColor: "rgba(0, 102, 255, 0.4)",
  },
  {
    title: "Bike Buddy",
    description:
      "Smart bike rental platform with IoT integration. Secure booking system with real-time tracking, payment gateway, and user rating system.",
    teamSize: 5,
    icon: Bike,
    color: "from-neon-cyan to-emerald-green",
    technologies: ["React", "Node.js", "Payment Gateway", "IoT", "Real-time Tracking"],
    glowColor: "rgba(0, 255, 255, 0.4)",
  },
  {
    title: "E-Mart - E-commerce Platform",
    description:
      "Full-featured e-commerce application with advanced filtering, wishlist, cart management, and responsive design across all devices.",
    teamSize: 1,
    icon: ShoppingCart,
    color: "from-deep-purple to-hot-pink",
    technologies: ["React JS", "React Router", "Redux", "Responsive Design", "API Integration"],
    glowColor: "rgba(107, 70, 193, 0.4)",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="projects" className="py-20 relative bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/20 to-slate-900/40"></div>
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
              <Rocket className="w-6 h-6 text-electric-blue animate-bounce" />
              <span className="text-electric-blue font-semibold">My Work</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Innovative solutions that blend creativity with cutting-edge technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                whileHover={{
                  y: -15,
                  scale: 1.02,
                  boxShadow: `0 25px 50px ${project.glowColor}`,
                }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative bg-gray-900/90 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                    >
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-sunset-orange fill-current" />
                      <span className="text-sunset-orange text-sm font-semibold">Featured</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-electric-blue group-hover:to-neon-cyan group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>

                  <div className="flex items-center space-x-2 mb-4">
                    <Users className="w-4 h-4 text-neon-cyan" />
                    <span className="text-neon-cyan text-sm font-medium">Team Size: {project.teamSize}</span>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed flex-grow">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.2 + techIndex * 0.1 + 0.5 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-gradient-to-r from-white/10 to-white/5 text-white/80 rounded-full text-xs border border-white/20 hover:border-neon-cyan/50 transition-all duration-300 backdrop-blur-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)" }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-neon-cyan/20 to-emerald-green/20 text-neon-cyan rounded-lg hover:from-neon-cyan/30 hover:to-emerald-green/30 transition-all duration-300 text-sm border border-neon-cyan/30 backdrop-blur-sm flex-1 justify-center"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 102, 255, 0.5)" }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-electric-blue/20 to-royal-blue/20 text-electric-blue rounded-lg hover:from-electric-blue/30 hover:to-royal-blue/30 transition-all duration-300 text-sm border border-electric-blue/30 backdrop-blur-sm flex-1 justify-center"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-16"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-block bg-gradient-to-r from-slate-900/60 to-indigo-900/40 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Want to see more?</h3>
              <p className="text-gray-300 mb-6">Check out my GitHub for more exciting projects and contributions!</p>
              <motion.a
                href="https://github.com/Sunilukmar"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 255, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-neon-cyan to-emerald-green hover:from-emerald-green hover:to-neon-cyan px-6 py-3 rounded-full text-white font-semibold transition-all duration-300"
              >
                <Github className="w-5 h-5" />
                <span>View All Projects</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
