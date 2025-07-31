import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import EducationSection from "@/components/education-section"
import LanguagesSection from "@/components/languages-section"
import BlogSection from "@/components/blog-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <LanguagesSection />
      <ContactSection />
      <Footer />
    </>
  )
}
