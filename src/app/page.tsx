"use client"

import type React from "react"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Github, Linkedin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import AnimatedBackground from "@/components/animated-background"
import ProfileCard from "@/components/ProfileCard"
import LogoLoop from "@/components/LogoLoop"
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFigma, SiDjango, SiJavascript, SiGit, SiVite, SiAstro, SiNodedotjs, SiNpm, SiPostgresql, SiMysql } from 'react-icons/si';

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
      titulo: "Calculadora metodo grafico",
      descripcion: "Calculadora y graficadora que utiliza en investigacion de operaciones para resolver ecuaciones lineales.",
      tecnologias: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      imagen: '/Metodo-grafico.png',
      video: undefined,
      github: "https://github.com/AkaMario/Metodo-grafico",
      demo: "https://akamario.github.io/Metodo-grafico/",
    },
    {
      titulo: 'Sistemas POS Web',
      descripcion: 'Sistema de punto de venta desarrollado con React, que permite gestionar inventarios, ventas y generar reportes para pequeñas empresas usando Local Storage.',
      tecnologias: ['React','Vite', 'TypeScript', 'Tailwind CSS', 'Local Storage'],
      imagen: './pos.png',
      video: undefined,
      github: 'https://github.com/AkaMario/MiniPOS',
      demo: 'https://akamario.github.io/MiniPOS/',
    },
    {
      titulo: "Search Film",
      descripcion: "Desarrolle y diseñe esta Website para buscar películas y series con autoupdate usando la API de TMDB y React",
      tecnologias: ["API", "React", "Git", "Tailwind CSS"],
      imagen: "/SearchFilm.png",
      video: undefined,
      github: "https://github.com/AkaMario/SearchFilm/",
      demo: "https://akamario.github.io/SearchFilm/",
    },
    {
      titulo: 'Calculadora Simplex',
      descripcion: 'Calculadora simplex construida con React, Tailwind CSS, TypeScript que consume una API de cálculo hecha en Django, Se usa en IO para resolver problemas de programación lineal.',
      tecnologias: ['React', 'API', 'TypeScript', 'Django'],
      imagen: '/Calculadora-simplex.png',
      video: undefined,
      github: 'https://github.com/AkaMario/Calculadora-Simplex',
    },
    
    {
      titulo: "DNAMYK",
      descripcion: "Desarrolle y diseñe esta landing page para una startup de servicios de tecnología colombiana en crecimiento",
      tecnologias: ["Astro", "Figma", "Git", "Tailwind CSS"],
      imagen: "/dnamyk.png",
      video: undefined,
      github: "https://github.com/joshtin2505/dnamyk-landing",
      demo: "https://dnamyk.com/",
    },


    {
      titulo: "Rediseño de Landing Page Regace Lang",
      descripcion: "Rediseño de la landing page de Regace Lang, es una empresa tecnológica internacional dedicada a entrenar, evaluar y mejorar modelos de IA",
      tecnologias: ["Figma"],
      imagen: '/RegaceLang.png',
      video: undefined, // ejemplo de video
      github: "#",
      demo: "https://www.figma.com/proto/cZIJfiiYFTv1hBy9gY1aSG/Redise%C3%B1o-Regace-Lang?page-id=0%3A1&node-id=7-17&viewport=643%2C35%2C0.42&t=8MOOqlOrJZR2Fawm-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=7%3A17",
    },
  ]

  const experiencias = [
    {
      puesto: "Desarrollador Freelance",
      periodo: "2025 - Presente",
      descripcion: "Actualmente trabajo como desarrollador web freelance, creando y diseñando sitios web personalizados y aplicaciones para clientes diversos. Me especializo en el desarrollo front-end, utilizando tecnologías modernas para ofrecer soluciones eficientes y atractivas.",
    },
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
      descripcion: "Fueron 11 meses de mucho aprendizaje, Capacitaciones y mantenimiento de equipos informáticos, así como la automatización de tareas repetitivas, fue mi primer trabajo formal en el área de sistemas",
    },
    {
      puesto: "Desarrollador Freelance",
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


  const certificados = [
    {
      titulo: "Diseño UX: experiencia de usuario UX/UI",
      institucion: "Udemy",
      link: "https://www.udemy.com/certificate/UC-f20f7e78-b1f6-4351-8e89-5b50a74cad1c/",
    },

    {
      titulo: "Responsive Web Design",
      institucion: "FreeCodeCamp",
      link: "https://freecodecamp.org/certification/fcc00c15089-5736-44fd-b8f6-5ed8262bbfaa/responsive-web-design",

    },

    {
      titulo: "JavaScript Algorithms and Data Structures",
      institucion: "FreeCodeCamp",
      link: "https://freecodecamp.org/certification/fcc00c15089-5736-44fd-b8f6-5ed8262bbfaa/javascript-algorithms-and-data-structures-v8",

    },

    {
      titulo: "Gestión de Proyectos",
      institucion: "Ministerio de Tecnologías de la Información y las Comunicaciones",
      link: "https://lms.mintic.gov.co/mod/customcert/verify_certificate.php?contextid=102375&code=YoMuYUGJ8x&qrcode=1",
    },



  ];
  const techLogosFrontEnd = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiVite />, title: "Vite", href: "https://vitejs.dev" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiFigma />, title: "Figma", href: "https://figma.com" },
    { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/es/docs/Web/JavaScript" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiAstro />, title: "Astro", href: "https://astro.build/" },
  ];

  const techLogosFullStack = [
    { node: <SiDjango />, title: "Django", href: "https://www.djangoproject.com/" },
    { node: <SiGit />, title: "Git", href: "https://git-scm.com/" },
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org/" },
    { node: <SiNpm />, title: "NPM", href: "https://www.npmjs.com/" },
    { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org/" },
    { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com/" },


  ]; // Duplicar los logos para un bucle más suave


  return (
    <div>

      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <AnimatedBackground />

        {/* Hero Section */}
        <motion.section
          className="relative z-10 flex items-center justify-center px-4 py-12 min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] xl:min-h-screen sm:py-16 md:py-20"
          style={{ y, opacity }}
        >
          <div className="text-center space-y-8 w-full max-w-lg sm:max-w-2xl md:max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <p className="text-4xl sm:text-5xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent relative animate-glow">
                Mario Uparela
                <span
                  aria-hidden
                  className="absolute inset-0 blur-[6px] opacity-60 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                >
                  Mario Uparela
                </span>
              </p>
              <p className="text-3xl sm:text-3xl md:text-4xl text-gray-300 mt-4">Web developer & UX/UI designer</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-col gap-10"
            >
              <div className="flex flex-wrap items-center justify-center gap-4">
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
              </div>

              <div
                className="justify-center bg-gray-900/50 border border-gray-700 backdrop-blur-sm hover:border-cyan-400 transition-all duration-300 py-6 rounded-lg sm:mx-33"
              >

                <p className="text-left font-poppins font-semibold max-w-2xl mx-auto text-gray-300 transition-all duration-500 hover:text-white hover:scale-102 px-4 sm:px-10">
                  Hola 👋, Soy Mario aun me encuentro estudiando pero tengo experiencia en desarrollo web, soporte técnico y automatización de tareas,
                  me destaco por mi eficiencia operativa usando herramientas digitales y desarrollo de interfaces. Me considero
                  proactivo, con excelentes habilidades de comunicación, organización y trabajo en equipo. Comprometido con el
                  aprendizaje continuo y con aportar soluciones prácticas que mejoren los procesos tecnológicos de las organizaciones</p>


              </div>
            </motion.div>
          </div>
        </motion.section>


        {/* Habilidades Section */}
        <div style={{ height: '120px', position: 'relative', overflow: 'hidden' }} className="py-10 px-4 relative z-10">
          <LogoLoop
            logos={techLogosFrontEnd}
            speed={40}
            direction="left"
            logoHeight={52}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut 
            fadeOutColor="#000000"
            ariaLabel="Technology partners"
          />
        </div>
        <div style={{ height: '120px', position: 'relative', overflow: 'hidden' }} className="py-10 px-4 relative z-10">
          <LogoLoop
            logos={techLogosFullStack}
            speed={-40}
            direction="left"
            logoHeight={52}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut 
            fadeOutColor="#000000"
            ariaLabel="Technology partners"
          />
        </div>

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


        </motion.section>

        {/*Certificados Section*/}
        <motion.section
          className="py-20 px-4 relative z-10 flex flex-col items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto w-full ">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Certificados
            </motion.h2>
            <div className="flex justify-center relative z-10 gap-20 flex flex-col md:flex-row items-start md:items-center relative z-10 gap-8 md:gap-20">
              <ProfileCard
                name="Mario Uparela"
                title="Web Developer"
                handle="AKAMarioU"
                status="Online"
                contactText="Contact Me"
                avatarUrl="/FOTO_MARIO.png"
                showUserInfo={true}
                enableTilt={true}
                onContactClick={() => window.open('https://wa.me/573043458159?text=Hola%2C%20vi%20tus%20proyectos', '_blank')}
                className="mx-auto max-w-md"
              />
              <div className="justify-center space-y-8">
                {certificados.map((certificado, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-gray-900/50 border-gray-700 hover:border-green-400 transition-all duration-300 backdrop-blur-sm">
                      <CardHeader>
                        <div className="flex-col justify-between items-center gap-4 md:flex-row md:gap-0 md:flex">
                          <div>
                          <CardTitle className="text-green-400">{certificado.titulo}</CardTitle>
                          <CardDescription className="text-lg text-cyan-300">{certificado.institucion}</CardDescription>
                        </div>
                          <a href={certificado.link}>
                          <Button size="sm" variant="outline" className="border-green-500 text-green-400 bg-transparent hover:cursor-pointer hover:scale-105 transition-all duration-300 hover:bg-transparent hover:text-green-400">
                            <ExternalLink className="w-4 h-4 mr-2 " />
                            Ver
                          </Button>
                        </a>
                        
                      </div>
                    </CardHeader>
                    
                  </Card>
                </motion.div>
              ))}
              
              </div>
            </div>
          </div>


        </motion.section>        
      </div>
      <footer className="py-8 text-center text-gray-400 relative z-10">
        <p>&copy; 2025 Mario Uparela. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}
