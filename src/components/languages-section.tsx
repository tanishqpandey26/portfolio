import { Card, CardContent } from "@/components/ui/card"
import { Languages } from "lucide-react"

const languages = [
  {
    name: "English",
    proficiency: "Fluent",
    level: 95,
  },
  {
    name: "Hindi",
    proficiency: "Native",
    level: 100,
  },
]

export default function LanguagesSection() {
  return (
    <section className="py-12 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Languages</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {languages.map((language, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Languages className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold">{language.name}</h3>
                    <p className="text-sm text-muted-foreground">{language.proficiency}</p>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${language.level}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
