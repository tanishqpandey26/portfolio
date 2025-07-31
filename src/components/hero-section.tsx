import { Button } from "@/components/ui/button"
import {  Linkedin, Mail } from "lucide-react"
import { FaGithub } from "react-icons/fa";
import Image from "next/image"

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <Image
              src="/DigitalResumeProfilePic.jpeg?height=200&width=200&text=Tanishq+Pandey"
              alt="Tanishq Pandey"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-6 border-4 border-primary/20"
            />
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
            Hi, I&apos;m <span className="text-primary">Tanishq Pandey</span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Software Developer well versed with frontend,backend and mobile technologies,building robust and scalable applications.
          </p>

          <div className="flex justify-center space-x-4 mb-8">

            <Button asChild  size="lg">
              <a
                href="https://www.linkedin.com/in/pandey26tanishq/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
            </Button>

            <Button asChild size="lg">
              <a href="#contact" className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>Contact Me</span>
              </a>
            </Button>

            <Button asChild size="lg">
              <a 
               href="https://github.com/tanishqpandey26"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <FaGithub className="h-5 w-5" />
                <span>GitHub</span>
              </a>
            </Button>

          </div>
        </div>
      </div>
    </section>
  )
}
