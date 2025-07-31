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
    id: "payment anamoly",
    title: "GraphGuard",
    description: "Credit Card Payment Anomaly Detection using Graph Neural Networks",
    detailedDescription:
      "Collaboratively built using Next.js, TypeScript, and React Query on the frontend, and a Python-based backend integrating a Graph Neural Network model. Frontend deployed via Vercel, and backend (including the ML inference API) hosted on Render. Implemented using PyTorch Geometric (PyG) to train GNNs for detecting fraudulent transaction patterns from graph-structured data. Used Pandas and NumPy for data preprocessing and scikit-learn for model evaluation. Integrated user query risk scores into the UI for each transaction with React Query handling API state management.",
    image: "/graphguard.png?height=200&width=300&text=E-Commerce+Platform",
    technologies: ["Next.js", "TypeScript","Python", "MongoDB", "PyTorch","Pandas","Numpy","React Query", "Tailwind CSS"],
    githubUrl: "https://github.com/tanishqpandey26/graphguard",
    liveUrl: "https://graphguard.vercel.app/",
    type: "web",
    features: [
      "Used modern UI libraries such as Shadcn for interactive UI",

      "Responsive design for all devices",
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
    teamSize: "3 developers",
    status: "completed",
  },

  {
    id: "trip planning website",
    title: "Tripper",
    description: "A comprehensive trip planning website using React.js for the frontend and Node.js, Express.js,and MongoDB for the backend.",
    detailedDescription:
      " Implemented an intuitive UI for users to create, manage, and share travel itineraries seamlessly. Integrated dynamic routing and efficient state management for smooth user experience. Optimized database queries to enhance performance and provide real-time updates on trip details. Deployed the application on Vercel for frontend and backend hosting.",
    image: "/tripper.png?height=200&width=300&text=E-Commerce+Platform",
    technologies: ["React.js", "Express.js","Node.js", "MongoDB", "JavaScript", "CSS"],
    githubUrl: "https://github.com/tanishqpandey26/Tripper",
    liveUrl: "https://tripper-ui.vercel.app/",
    type: "web",
    features: [
      "User authentication and authorization",
      "Itinerary management and tracking",
      "Responsive design for all devices",
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
    id: "medicine-reminder-app",
    title: "Medmind",
    description: " Developed a Cross-platform medicine reminder app for a seamless iOS and Android experience.",
    detailedDescription:
      " Implements custom medication scheduling with timely push notifications via Expo Notifications. Tracks refill needs and manages medicine supply with intuitive UI and smooth React Native Reanimated animations.Integrated Face ID/Touch ID for secure biometric authentication.Maintains local data persistence using AsyncStorage for offline-first support.Provides daily progress logs and dose history tracking with calendar integration for enhanced dose management. Enabled smooth screen transitions using React Navigation.",
    image: "/medmind.jpeg?height=200&width=300&text=Task+Management+App",
    technologies: ["React Native", "Expo", "TypeScript", "AsyncStorage", "Expo Notifications"],
    githubUrl: "https://github.com/tanishqpandey26/Medmind",
    downloadUrl: "https://drive.google.com/file/d/1ZuMHzCp2PdUCnve4B3ZSKwFllLpZE-Aw/view",
    type: "mobile",
    features: [
      "Task categorization and priority levels",
      "Due date reminders and push notifications",
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
    teamSize: "Solo project",
    status: "completed",
  },

  {
    id: "blogging website",
    title: "Cotlog",
    description: "A Social blogging website created using React.js, JavaScript and Firebase.",
    detailedDescription:
      "Implemented Firebase Authentication for secure user login and access control.Utilized Firestore for real-time database updates, enabling instant post publishing and interactions. Designed a responsive and user-friendly UI to enhance the reading and writing experience. Deployed the application on Vercel for efficient and scalable hosting.",
    image: "/cotlog.png?height=200&width=300&text=Weather+Dashboard",
    technologies: ["React", "FireStore", "Firebase", "JavaScript", "CSS"],
    githubUrl: "https://github.com/tanishqpandey26/Cotlog-social_blog_website",
    liveUrl: "https://cotlog-social-blog-website.vercel.app/",
    type: "web",
    features: [
      "Firebase Authentication for secure user login",
      "Utilized Firestore for real-time database updates",
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
                          <SheetDescription className="text-left">{selectedProject.description}
                          </SheetDescription>
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
                          {/* <div>
                            <h3 className="text-lg font-semibold mb-3">Technical Challenges</h3>
                            <ul className="space-y-2">
                              {selectedProject.challenges.map((challenge, index) => (
                                <li key={index} className="flex items-start space-x-2">
                                  <div className="h-2 w-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                                  <span className="text-muted-foreground">{challenge}</span>
                                </li>
                              ))}
                            </ul>
                          </div> */}

                          {/* Key Learnings */}
                          {/* <div>
                            <h3 className="text-lg font-semibold mb-3">Key Learnings</h3>
                            <ul className="space-y-2">
                              {selectedProject.learnings.map((learning, index) => (
                                <li key={index} className="flex items-start space-x-2">
                                  <div className="h-2 w-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                                  <span className="text-muted-foreground">{learning}</span>
                                </li>
                              ))}
                            </ul>
                          </div> */}

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
