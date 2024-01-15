'use client'

import Projects from "@/components/shared/Projects"
import About from "./landing/About"
import Blogs from "./landing/Blogs"
import Contact from "./landing/Contact"
import Faqs from "./landing/Faqs"
import Hero from "./landing/Hero"
import Ribbon from "./landing/Ribbon"
import Services from "./landing/Services"


export default function Home() {
  return (
    <>
      <Hero />
      <Ribbon />
      <About />
      <Services />
      <Faqs />
      <Projects />
      <Contact />
      <Blogs />
    </>
  )
}
