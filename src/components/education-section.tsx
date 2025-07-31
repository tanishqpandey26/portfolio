import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar } from "lucide-react"

const education = [
  {
    degree: "B.Tech in Computer Engineering",
    institution: "College of Technology, GBPUAT",
    duration: "2021-2025",
    grade: "CGPA:8.027",
    courses: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Data Mining",
      "Cryptography",
      "Artificial Intelligence",
      "Machine Learning",
      "Discrete Mathematics",
      "Software Engineering",
      "Computer Network",
      "Operating Systems",
    ],
  },
  {
    degree: "Senior School Certificate (XII)",
    institution: "Central Board of Secondary Education (CBSE)",
    duration: "2020",
    grade: "Grade: 94.4%",
    courses: ["Mathematics", "Physics", "Chemistry", "English", "Hindi"],
  },
  {
    degree: "Secondary School Certificate (X)",
    institution: "Central Board of Secondary Education (CBSE)",
    duration: "2018",
    grade: "Grade: 94%",
    courses: ["Mathematics", "Science", "Social Studies", "English", "Hindi"],
  },
]

export default function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and educational background
          </p>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="text-primary mt-1">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                      <p className="text-lg font-semibold text-primary">{edu.institution}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
               <div>
                  <div className="text-left w-1/2 p-4">
                   <div className="flex items-center text-muted-foreground mb-1">
                    <span className="text-sm">{edu.duration}</span>
                    <p className="text-sm ml-4">{edu.grade}</p>
                   </div>
                  </div>

    <h4 className="font-semibold mb-2">Relevant Courses:</h4>
    <div className="flex flex-wrap gap-2">
      {edu.courses.map((course) => (
        <Badge key={course} variant="outline">
          {course}
        </Badge>
      ))}
    </div>
  </div>
</CardContent>


            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
