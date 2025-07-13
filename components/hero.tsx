"use client"

import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial color="#8b5cf6" attach="material" distort={0.3} speed={1.5} roughness={0} />
    </Sphere>
  )
}

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white z-10"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent"
          >
            G Venkata Sunil Kumar Reddy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl lg:text-2xl mb-8 text-gray-300"
          >
            Frontend Developer & UI/UX Designer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg mb-8 text-gray-400 max-w-2xl"
          >
            Skilled in React.js, JavaScript, HTML, and CSS, with a focus on creating responsive and user-friendly
            interfaces. Strong problem-solving skills in Python and Java.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex space-x-6 mb-8"
          >
            <motion.a
              href="mailto:skumarreddy627@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full transition-colors"
            >
              <Mail size={20} />
              <span>Contact Me</span>
            </motion.a>

            <motion.a
              href="https://github.com/Sunilukmar"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 border border-purple-400 hover:bg-purple-400/20 px-6 py-3 rounded-full transition-colors"
              rel="noreferrer"
            >
              <Github size={20} />
              <span>GitHub</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex space-x-4"
          >
            <a href="https://linkedin.com/in/sunil-kumar-reddy-gajulapalli-348bb3272" target="_blank" rel="noreferrer">
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-purple-400 transition-colors" />
            </a>
            <a href="tel:8341181874">
              <Phone className="w-6 h-6 text-gray-400 hover:text-purple-400 transition-colors" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right 3D Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-96 lg:h-[500px]"
        >
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <AnimatedSphere />
            </Suspense>
          </Canvas>
        </motion.div>
      </div>
    </section>
  )
}
