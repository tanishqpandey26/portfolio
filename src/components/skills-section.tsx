import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Server, Cloud, GitBranch, Settings } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code className="h-6 w-6" />,
    skills: ["Java", "Python", "JavaScript", "TypeScript", "HTML"],
  },
  {
    title: "Frontend Technologies",
    icon: <Globe className="h-6 w-6" />,
    skills: ["Tailwind CSS", "React.js", "Next.js", "React Native", "ReactQuery"],
  },
  {
    title: "Backend Technologies",
    icon: <Server className="h-6 w-6" />,
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6" />,
    skills: ["MongoDB", "MySQL", "Firestore"],
  },
  {
    title: "Version Control & CI/CD",
    icon: <GitBranch className="h-6 w-6" />,
    skills: ["Git", "GitLab", "GitHub Actions", "Jenkins"],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="h-6 w-6" />,
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Ansible"],
  },
  {
    title: "Tools & Others",
    icon: <Settings className="h-6 w-6" />,
    skills: ["Postman", "JIRA"],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-primary mr-3">{category.icon}</div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
