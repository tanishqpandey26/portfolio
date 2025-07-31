import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"

const blogPosts = [
  {
    title: "Building Scalable React Applications with Next.js",
    excerpt:
      "Learn how to create performant and scalable React applications using Next.js features like SSR, SSG, and API routes.",
    image: "/placeholder.svg?height=200&width=300&text=Next.js+Blog",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["React", "Next.js", "Performance"],
    slug: "building-scalable-react-applications",
  },
  {
    title: "DevOps Best Practices for Modern Web Development",
    excerpt:
      "Explore essential DevOps practices including CI/CD pipelines, containerization, and cloud deployment strategies.",
    image: "/placeholder.svg?height=200&width=300&text=DevOps+Blog",
    date: "2024-01-08",
    readTime: "12 min read",
    tags: ["DevOps", "Docker", "AWS"],
    slug: "devops-best-practices",
  },
  {
    title: "TypeScript Tips for Better Code Quality",
    excerpt: "Discover advanced TypeScript techniques that will help you write more maintainable and type-safe code.",
    image: "/placeholder.svg?height=200&width=300&text=TypeScript+Blog",
    date: "2024-01-01",
    readTime: "6 min read",
    tags: ["TypeScript", "JavaScript", "Code Quality"],
    slug: "typescript-tips-code-quality",
  },
]

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Latest Blog Posts</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharing insights and experiences from my development journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button className="p-0 h-auto font-semibold text-primary">
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button  size="lg">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  )
}
