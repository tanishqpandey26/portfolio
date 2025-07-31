"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Github, ExternalLink, Download, Eye, Calendar, Users, Star } from "lucide-react"
import Image from "next/image"

interface Project {
  id: string
  title: string
  description: string
  detailedDescription: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  downloadUrl?: string
  type: "web" | "mobile" | "tool"
  features: string[]
  challenges: string[]
  learnings: string[]
  duration: string
  teamSize?: string
  status: "completed" | "in-progress" | "maintained"
}

const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard.",
    detailedDescription:
      "This comprehensive e-commerce platform was built to provide a complete online shopping experience. The application features a modern, responsive design with advanced functionality including real-time inventory management, secure payment processing through Stripe, and a powerful admin dashboard for managing products, orders, and customers. The platform supports multiple user roles, advanced search and filtering capabilities, and includes features like wishlist management, order tracking, and automated email notifications.",
    image: "/placeholder.svg?height=200&width=300&text=E-Commerce+Platform",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Tailwind CSS", "NextAuth.js"],
    githubUrl: "https://github.com/tanishqpandey26/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    type: "web",
    features: [
      "User authentication and authorization",
      "Product catalog with advanced search and filtering",
      "Shopping cart and wishlist functionality",
      "Secure payment processing with Stripe",
      "Order management and tracking",
      "Admin dashboard for inventory management",
      "Responsive design for all devices",
      "Email notifications for order updates",
    ],
    challenges: [
      "Implementing secure payment processing",
      "Managing complex state across multiple components",
      "Optimizing database queries for large product catalogs",
      "Ensuring responsive design across all screen sizes",
    ],
    learnings: [
      "Advanced Next.js patterns and optimization techniques",
      "Payment gateway integration best practices",
      "Database design for e-commerce applications",
      "User experience design for conversion optimization",
    ],
    duration: "3 months",
    teamSize: "Solo project",
    status: "completed",
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description: "A React Native mobile app for task management with offline support and real-time synchronization.",
    detailedDescription:
      "A comprehensive task management mobile application designed to help users organize their daily activities efficiently. The app features offline-first architecture, allowing users to create, edit, and manage tasks even without internet connectivity. When connection is restored, the app automatically synchronizes data with the cloud. The application includes advanced features like task categorization, priority levels, due date reminders, collaborative task sharing, and detailed analytics to track productivity patterns.",
    image: "/placeholder.svg?height=200&width=300&text=Task+Management+App",
    technologies: ["React Native", "Firebase", "Redux", "AsyncStorage", "Push Notifications"],
    githubUrl: "https://github.com/tanishqpandey26/task-manager",
    downloadUrl: "https://github.com/tanishqpandey26/task-manager/releases",
    type: "mobile",
    features: [
      "Offline-first task management",
      "Real-time synchronization with Firebase",
      "Task categorization and priority levels",
      "Due date reminders and push notifications",
      "Collaborative task sharing",
      "Productivity analytics and insights",
      "Dark/light theme support",
      "Cross-platform compatibility (iOS/Android)",
    ],
    challenges: [
      "Implementing offline-first architecture",
      "Managing data synchronization conflicts",
      "Optimizing performance for large task lists",
      "Handling push notifications across platforms",
    ],
    learnings: [
      "React Native development best practices",
      "Offline data management strategies",
      "Firebase real-time database optimization",
      "Mobile app performance optimization",
    ],
    duration: "4 months",
    teamSize: "2 developers",
    status: "maintained",
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description: "A responsive weather dashboard with location-based forecasts and interactive charts.",
    detailedDescription:
      "An intuitive weather dashboard that provides comprehensive weather information with beautiful visualizations. The application automatically detects user location or allows manual city selection to display current weather conditions, hourly forecasts, and 7-day weather predictions. Interactive charts show temperature trends, precipitation probability, and other meteorological data. The dashboard features a clean, modern interface with smooth animations and supports multiple units of measurement.",
    image: "/placeholder.svg?height=200&width=300&text=Weather+Dashboard",
    technologies: ["React", "Chart.js", "OpenWeather API", "Geolocation API", "CSS Modules"],
    githubUrl: "https://github.com/tanishqpandey26/weather-dashboard",
    liveUrl: "https://weather-dashboard-demo.vercel.app",
    type: "web",
    features: [
      "Automatic location detection",
      "Current weather conditions display",
      "Hourly and 7-day weather forecasts",
      "Interactive temperature and precipitation charts",
      "Multiple cities comparison",
      "Weather alerts and warnings",
      "Responsive design for all devices",
      "Multiple unit systems (Celsius/Fahrenheit)",
    ],
    challenges: [
      "Handling geolocation permissions and errors",
      "Creating responsive chart visualizations",
      "Managing API rate limits efficiently",
      "Implementing smooth animations and transitions",
    ],
    learnings: [
      "Working with external weather APIs",
      "Data visualization with Chart.js",
      "Browser geolocation API implementation",
      "Performance optimization for data-heavy applications",
    ],
    duration: "2 months",
    teamSize: "Solo project",
    status: "completed",
  },
  {
    id: "devops-automation-tool",
    title: "DevOps Automation Tool",
    description: "A CLI tool for automating deployment processes with Docker and Kubernetes integration.",
    detailedDescription:
      "A powerful command-line interface tool designed to streamline DevOps workflows and automate complex deployment processes. The tool provides a unified interface for managing Docker containers, Kubernetes deployments, and CI/CD pipelines. It includes features for automated testing, building, and deploying applications across multiple environments. The tool supports configuration management, secret handling, and provides detailed logging and monitoring capabilities for deployment processes.",
    image: "/placeholder.svg?height=200&width=300&text=DevOps+Tool",
    technologies: ["Node.js", "Docker", "Kubernetes", "AWS CLI", "Commander.js", "YAML"],
    githubUrl: "https://github.com/tanishqpandey26/devops-automation",
    downloadUrl: "https://github.com/tanishqpandey26/devops-automation/releases",
    type: "tool",
    features: [
      "Automated Docker container management",
      "Kubernetes deployment automation",
      "CI/CD pipeline integration",
      "Multi-environment configuration management",
      "Automated testing and quality checks",
      "Secret and credential management",
      "Detailed logging and monitoring",
      "Rollback and recovery mechanisms",
    ],
    challenges: [
      "Managing complex deployment configurations",
      "Ensuring security in automated processes",
      "Handling different cloud provider APIs",
      "Creating intuitive CLI interface design",
    ],
    learnings: [
      "Advanced Docker and Kubernetes concepts",
      "CLI tool development best practices",
      "Infrastructure as Code principles",
      "DevOps security and compliance requirements",
    ],
    duration: "5 months",
    teamSize: "3 developers",
    status: "in-progress",
  },
]

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const getStatusColor = (status: Project["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "in-progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "maintained":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                <div className="absolute top-2 right-2">
                  <Badge className={`${getStatusColor(project.status)} border-0`}>
                    {project.status.replace("-", " ")}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline">+{project.technologies.length - 3} more</Badge>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <Button asChild size="sm">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1"
                    >
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  </Button>

                  {project.liveUrl && (
                    <Button asChild size="sm">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Live Demo</span>
                      </a>
                    </Button>
                  )}

                  {project.downloadUrl && (
                    <Button asChild size="sm">
                      <a
                        href={project.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1"
                      >
                        <Download className="h-4 w-4" />
                        <span>Download</span>
                      </a>
                    </Button>
                  )}
                </div>

                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      
                      className="w-full justify-center"
                      onClick={() => setSelectedProject(project)}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Show More
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="w-full sm:max-w-2xl overflow-y-auto">
                    {selectedProject && (
                      <>
                        <SheetHeader>
                          <div className="flex items-center justify-between">
                            <SheetTitle className="text-2xl">{selectedProject.title}</SheetTitle>
                            <Badge className={`${getStatusColor(selectedProject.status)} border-0`}>
                              {selectedProject.status.replace("-", " ")}
                            </Badge>
                          </div>
                          <SheetDescription className="text-left">{selectedProject.description}</SheetDescription>
                        </SheetHeader>

                        <div className="mt-6 space-y-6">
                          {/* Project Image */}
                          <div className="relative h-48 rounded-lg overflow-hidden">
                            <Image
                              src={selectedProject.image || "/placeholder.svg"}
                              alt={selectedProject.title}
                              fill
                              className="object-cover"
                            />
                          </div>

                          {/* Project Details */}
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center space-x-2">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              <span className="text-muted-foreground">Duration:</span>
                              <span className="font-medium">{selectedProject.duration}</span>
                            </div>
                            {selectedProject.teamSize && (
                              <div className="flex items-center space-x-2">
                                <Users className="h-4 w-4 text-muted-foreground" />
                                <span className="text-muted-foreground">Team:</span>
                                <span className="font-medium">{selectedProject.teamSize}</span>
                              </div>
                            )}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex flex-wrap gap-2">
                            <Button asChild>
                              <a
                                href={selectedProject.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2"
                              >
                                <Github className="h-4 w-4" />
                                <span>View Code</span>
                              </a>
                            </Button>

                            {selectedProject.liveUrl && (
                              <Button asChild>
                                <a
                                  href={selectedProject.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center space-x-2"
                                >
                                  <ExternalLink className="h-4 w-4" />
                                  <span>Live Demo</span>
                                </a>
                              </Button>
                            )}

                            {selectedProject.downloadUrl && (
                              <Button asChild>
                                <a
                                  href={selectedProject.downloadUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center space-x-2"
                                >
                                  <Download className="h-4 w-4" />
                                  <span>Download</span>
                                </a>
                              </Button>
                            )}
                          </div>

                          {/* Detailed Description */}
                          <div>
                            <h3 className="text-lg font-semibold mb-3">Project Overview</h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {selectedProject.detailedDescription}
                            </p>
                          </div>

                          {/* Technologies */}
                          <div>
                            <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                            <div className="flex flex-wrap gap-2">
                              {selectedProject.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Key Features */}
                          <div>
                            <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                            <ul className="space-y-2">
                              {selectedProject.features.map((feature, index) => (
                                <li key={index} className="flex items-start space-x-2">
                                  <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-muted-foreground">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Challenges */}
                          <div>
                            <h3 className="text-lg font-semibold mb-3">Technical Challenges</h3>
                            <ul className="space-y-2">
                              {selectedProject.challenges.map((challenge, index) => (
                                <li key={index} className="flex items-start space-x-2">
                                  <div className="h-2 w-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                                  <span className="text-muted-foreground">{challenge}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Key Learnings */}
                          <div>
                            <h3 className="text-lg font-semibold mb-3">Key Learnings</h3>
                            <ul className="space-y-2">
                              {selectedProject.learnings.map((learning, index) => (
                                <li key={index} className="flex items-start space-x-2">
                                  <div className="h-2 w-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                                  <span className="text-muted-foreground">{learning}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </>
                    )}
                  </SheetContent>
                </Sheet>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
