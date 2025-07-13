"use client"

import { motion } from "framer-motion"
import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense, useRef } from "react"
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Text3D, Center } from "@react-three/drei"
import { Github, Linkedin, Mail, Phone, ChevronDown, Sparkles } from "lucide-react"

function AnimatedSphere() {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} visible args={[1, 100, 200]} scale={2.5}>
        <MeshDistortMaterial
          color="#0066ff"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          emissive="#0066ff"
          emissiveIntensity={0.3}
        />
      </Sphere>
    </Float>
  )
}

function Floating3DText() {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Center>
        <Text3D
          font="/fonts/Geist_Bold.json"
          size={0.3}
          height={0.05}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          Developer
          <meshStandardMaterial
            color="#00ffff"
            emissive="#00ffff"
            emissiveIntensity={0.2}
            metalness={0.8}
            roughness={0.1}
          />
        </Text3D>
      </Center>
    </Float>
  )
}

export default function Hero() {
  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="flex items-center space-x-2 mb-4"
          >
            <Sparkles className="w-6 h-6 text-sunset-orange" />
            <span className="text-sunset-orange font-semibold">Frontend Developer</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent animate-pulse">
              G Venkata Sunil
            </span>
            <br />
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent bg-300% animate-gradient"
            >
              Kumar Reddy
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl lg:text-2xl mb-4 text-gray-100 font-medium"
          >
            Creative UI/UX Designer & React Specialist
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg mb-8 text-gray-300 max-w-2xl leading-relaxed"
          >
            Transforming ideas into stunning digital experiences with React.js, JavaScript, and modern web technologies.
            Passionate about creating user-friendly interfaces that make a difference.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <motion.a
              href="mailto:skumarreddy627@gmail.com"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 102, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-gradient-to-r from-electric-blue to-royal-blue hover:from-royal-blue hover:to-electric-blue px-6 py-3 rounded-full transition-all duration-300 shadow-lg"
            >
              <Mail size={20} />
              <span className="font-semibold">Contact Me</span>
            </motion.a>

            <motion.a
              href="https://github.com/Sunilukmar"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 255, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 border-2 border-neon-cyan hover:bg-neon-cyan/20 px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <Github size={20} />
              <span className="font-semibold">GitHub</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex space-x-6"
          >
            <motion.a
              href="https://linkedin.com/in/sunil-kumar-reddy-gajulapalli-348bb3272"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5, boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)" }}
              className="p-3 bg-gradient-to-r from-royal-blue/20 to-electric-blue/20 hover:from-royal-blue/40 hover:to-electric-blue/40 rounded-full transition-all duration-300 backdrop-blur-sm border border-royal-blue/30"
            >
              <Linkedin className="w-6 h-6 text-royal-blue" />
            </motion.a>
            <motion.a
              href="tel:8341181874"
              whileHover={{ scale: 1.2, rotate: -5, boxShadow: "0 0 20px rgba(16, 185, 129, 0.6)" }}
              className="p-3 bg-gradient-to-r from-emerald-green/20 to-lime-green/20 hover:from-emerald-green/40 hover:to-lime-green/40 rounded-full transition-all duration-300 backdrop-blur-sm border border-emerald-green/30"
            >
              <Phone className="w-6 h-6 text-emerald-green" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right 3D Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-96 lg:h-[500px] relative"
        >
          <Canvas camera={{ position: [0, 0, 5] }}>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={3} />
              <ambientLight intensity={0.5} />
              <pointLight position={[5, 5, 5]} intensity={1} color="#0066ff" />
              <pointLight position={[-5, -5, 5]} intensity={0.8} color="#00ffff" />
              <AnimatedSphere />
              <Floating3DText />
            </Suspense>
          </Canvas>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          whileHover={{ scale: 1.2, color: "#0066ff" }}
          className="text-white/60 hover:text-electric-blue transition-colors cursor-pointer"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>
    </section>
  )
}
