"use client"

import type React from "react"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Github, Linkedin, ExternalLink } from "lucide-react"
import {Button} from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import AnimatedBackground from "@/components/animated-background"
import DecryptedText from "@/components/ui/DescryptedText"
import ProfileCard from "@/components/ProfileCard"

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Enviar el formulario usando EmailJS
    try {
      const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: formData.nombre,
        email: formData.email,
        mensaje: formData.mensaje,
        destinatario: "mariouppo1@gmail.com",
      }),
      })
      if (!response.ok) throw new Error("Error al enviar el mensaje")
    } catch (error) {
      alert("Hubo un error al enviar el mensaje. Intenta nuevamente.")
      return
    }
    console.log("Formulario enviado:", formData)
    alert("¡Mensaje enviado correctamente!")
    setFormData({ nombre: "", email: "", mensaje: "" })
  }

  const proyectos = [
    {
      titulo: "DNAMYK",
      descripcion: "Landing page para una startup de tecnología colombiana en crecimiento",
      tecnologias: ["Astro", "Figma", "Git", "Prisma", "Tailwind CSS"],
      imagen: "/dnamyk.png",
      video: undefined,
      github: "https://github.com/joshtin2505/dnamyk-landing",
      demo: "https://dnamyk.com/",
    },
    {
      titulo: "Search Film",
      descripcion: "web para buscar películas y series usando la API de TMDB y React",
      tecnologias: ["API", "React.js", "Git", "Tailwind CSS"],
      imagen: "/SearchFilm.png",
      video: undefined,
      github: "https://github.com/AkaMario/SearchFilm/",
      demo: "https://akamario.github.io/SearchFilm/",
    },
    {
      titulo: 'Calculadora Simplex',
      descripcion: 'Una calculadora web simple construida con React, Tailwind CSS, TypeScript que consume una API de cálculo hecha en Django.',
      tecnologias: ['React', 'APIs', 'TypeScript', 'Django'],
      imagen: '/Calculadora-simplex.png',
      video: undefined,
      github: 'https://github.com/AkaMario/Calculadora-Simplex',
    },

    {
      titulo: 'Rediseño de Campus Tecnologico Comfenalco',
      descripcion: 'Rediseño de la página del campus tecnológico Comfenalco, mejorando la experiencia del usuario y la accesibilidad.',
      tecnologias: ['Figma'],
      imagen: 'https://www.las2orillas.co/wp-content/uploads/2024/09/1-81.jpg',
      video: undefined,
      demo: 'https://www.figma.com/proto/JJQqISHgtFKrvXB7t3ZiXi/Campus?node-id=1-2&t=LhlL6ASJBc1Yilkc-1',
    },

    {
      titulo: "Calculadora metodo grafico IO",
      descripcion: "Una calculadora web que utiliza el método gráfico para resolver ecuaciones lineales.",
      tecnologias: ["React", "TypeScript", "Canvas", "Tailwind CSS", "Vite"],
      imagen: '/Metodo-grafico.png',
      video: undefined,
      github: "https://github.com/AkaMario/Metodo-grafico",
      demo: "https://akamario.github.io/Metodo-grafico/",
    },

    {
      titulo: "Comming Soon Page",
      descripcion: "Card de espera para un nuevo proyecto",
      tecnologias: ["React", "Redux", "Firebase", "Tailwind CSS", "next.js"],
      imagen: undefined,
      video: "https://videos.pexels.com/video-files/5803086/5803086-uhd_2560_1440_25fps.mp4", // ejemplo de video
      github: "#",
      demo: "#",
    },
  ]

  const experiencias = [
    {
      puesto: "Aprendiz de implementación",
      empresa: "ESTELA",
      periodo: "2024 - 2024",
      descripcion: "Mis practicas de la universidad y primer mi trabajo en una multinacional, fueron 6 meses donde aprendí sobre la implementación de sistemas y la gestión de proyectos tecnológicos. Me enfoqué en la automatización de procesos y la mejora de la eficiencia operativa.",
    },
    {
      puesto: "Auxiliar de sistemas",
      empresa: "CITUCAR",
      periodo: "2022 - 2022",
      descripcion: "Fueron 11 meses de mucho aprendizaje, soporte técnico y mantenimiento de equipos informáticos, así como la automatización de tareas repetitivas fue mi primer trabajo formal en el área de sistemas",
    },
    {
      puesto: "Desarrollador freelance",
      empresa: "independiente",
      periodo: "2021 - 2023",
      descripcion: "Di mis primeros pasos en el desarrollo web, creando sitios y aplicaciones para estudiantes de mi universidad la mas destacada fue una lading page para un proyectos de psicologia",
    },
  ]

  const estudios = [
    {
      titulo: "Ingeniería en Sistemas",
      institucion: "Fundacion Universitaria Tecnológico Comfenalco",
      periodo: "2025 - Presente",
      descripcion: "Con certificaciones en desarrollo web, herramientas ofimaticas y redes informáticas",
    },
    {
      titulo: "Tecnología en Desarrollo de Software",
      institucion: "Fundacion Universitaria Tecnológico Comfenalco",
      periodo: "2022 - 2024",
      descripcion: "con certificaciones en desarrollo web experiencias de usuario y diseño de interfaces",
    },
  ]

  const habilidades = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "REST APIs",
    "Git",
    "Figma",
    "Tailwind CSS",
    "Framer Motion",
    'Excel',
    'ClickUp',
    'Metodologías Ágiles',
    'Automatización de Tareas',
    'Soporte Técnico',
    'Mantenimiento de Equipos',
  ]

  return (
    <div>

    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <AnimatedBackground />

      {/* Hero Section */}
      <motion.section className="min-h-screen flex items-center justify-center relative z-10" style={{ y, opacity }}>
        <div className="text-center space-y-8">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <p className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Mario Uparela
            </p>
            <p className="text-xl md:text-2xl text-gray-300 mt-4">Desarrollador Web & Diseñador UX/UI</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex gap-6 justify-center"
          >
            <a href="https://github.com/AkaMario">
            <Button
              variant="outline"
              size="lg"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent hover:scale-105 transition-all duration-300 hover:rotate-2"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            </a>
            <a href="https://www.linkedin.com/in/mario-uparela-posada-18661632b/">  
            <Button
              variant="outline"
              size="lg"
              className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-black bg-transparent hover:scale-105 transition-all duration-300 hover:rotate-2"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
            </a>
          </motion.div>
            <div
              style={{ marginTop: '2rem', fontSize: '1rem' }}
              className="text-justify font-poppins font-semibold max-w-2xl mx-auto text-gray-300 transition-all duration-500 hover:text-white hover:scale-105 px-4 sm:px-10"
            >
              <DecryptedText
              text="Soy estudiante de Ingeniería de Sistemas con experiencia en soporte técnico, mantenimiento de equipos y automatización de tareas.
              Me destaco por mi enfoque en la eficiencia operativa mediante el uso de herramientas digitales y programación web. Soy una
              persona proactiva, con excelentes habilidades de comunicación, organización y trabajo en equipo. Comprometido con el
              aprendizaje continuo y con aportar soluciones prácticas que mejoren los procesos tecnológicos de las organizaciones"
              animateOn="hover"
              revealDirection="start"
              />
            </div>
        </div>
      </motion.section>

      {/* Habilidades Section */}
      <motion.section
        className="py-20 px-4 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {habilidades.map((habilidad, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <Badge
                  variant="outline"
                  className="text-lg py-2 px-4 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300"
                >
                  {habilidad}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Proyectos Section */}
      <motion.section
        className="py-20 px-4 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Mis Proyectos
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectos.map((proyecto, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="bg-gray-900/50 border-gray-700 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm">
                  <div className="relative overflow-hidden">
                    <img
                      src={proyecto.imagen || "/placeholder.svg"}
                      // alt={proyecto.titulo}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300 "
                    />
                    {proyecto.video && (
                      <video
                        src={proyecto.video}
                        autoPlay
                        loop
                        muted
                        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-cyan-400">{proyecto.titulo}</CardTitle>
                    <CardDescription className="text-gray-300">{proyecto.descripcion}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {proyecto.tecnologias.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-purple-900/50 text-purple-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <a href={proyecto.github} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="border-cyan-400 text-cyan-400 bg-transparent hover:cursor-pointer hover:scale-105 transition-all duration-300">
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </Button>
                      </a>
                      <a href={proyecto.demo} target="_blank" rel="noopener noreferrer">

                      <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:cursor-pointer hover:scale-105 transition-all duration-300">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experiencia Section */}
      <motion.section
        className="py-20 px-4 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Experiencia Laboral
          </motion.h2>

          <div className="space-y-8">
            {experiencias.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-700 hover:border-purple-400 transition-all duration-300 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-purple-400">{exp.puesto}</CardTitle>
                        <CardDescription className="text-lg text-cyan-300">{exp.empresa}</CardDescription>
                      </div>
                      <Badge variant="outline" className="border-pink-500 text-pink-400">
                        {exp.periodo}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{exp.descripcion}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Estudios Section */}
      <motion.section
        className="py-20 px-4 relative z-10 flex flex-col items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto w-full">
          <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
          >
        Educación
          </motion.h2>

          <div className="space-y-8">
        {estudios.map((estudio, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900/50 border-gray-700 hover:border-green-400 transition-all duration-300 backdrop-blur-sm">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
            <CardTitle className="text-green-400">{estudio.titulo}</CardTitle>
            <CardDescription className="text-lg text-cyan-300">{estudio.institucion}</CardDescription>
              </div>
              <Badge variant="outline" className="border-green-500 text-green-400">
            {estudio.periodo}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">{estudio.descripcion}</p>
          </CardContent>
            </Card>
          </motion.div>
        ))}
          </div>
        </div>

        <div className="flex justify-center w-full">
          <ProfileCard
            name="Mario Uparela"
            title="Software Developer"
            handle="AKAMarioU"
            status="Online"
            contactText="Contact Me"
            avatarUrl="https://arider.com/cdn/shop/files/r_4_1b5f8b73-095b-45bc-aef7-6776fe9e7b2f.png?v=1743496647&width=1445"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => window.open('https://wa.me/573043458159?text=Hola%2C%20vi%20tus%20proyectos', '_blank')}
            className="mt-16 mx-auto max-w-md"
          />
        </div>
      </motion.section>    
    </div>


      <footer className="py-8 text-center text-gray-400 relative z-10">
        <p>&copy; 2025 Mario Uparela. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}
