"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Users, Shield, Bike, ShoppingCart } from "lucide-react"

const projects = [
  {
    title: "MargRakshak - Path Protector",
    description:
      "A map-based safety app that alerts travelers about accident-prone areas in real time. Acts as a digital guardian to help users navigate safer routes and reduce travel risks.",
    teamSize: 5,
    icon: Shield,
    color: "from-red-500 to-orange-500",
    technologies: ["React", "Maps API", "Real-time Data"],
  },
  {
    title: "Bike Buddy",
    description:
      "A simple platform that lets users rent out their unused bikes to others, helping them earn extra income through secure and easy bookings.",
    teamSize: 5,
    icon: Bike,
    color: "from-green-500 to-teal-500",
    technologies: ["React", "Node.js", "Payment Gateway"],
  },
  {
    title: "E-Mart - E-commerce Web App",
    description:
      "Built a multi-category e-commerce app using React JS, featuring product listings in mobiles, fashion, and appliances. Implemented React Router for smooth navigation.",
    teamSize: 1,
    icon: ShoppingCart,
    color: "from-purple-500 to-pink-500",
    technologies: ["React JS", "React Router", "Responsive Design"],
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-16">Featured Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center mb-6`}
                >
                  <project.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>

                <div className="flex items-center space-x-2 mb-4">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400 text-sm">Team Size: {project.teamSize}</span>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-sm border border-purple-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <span>View Details</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
