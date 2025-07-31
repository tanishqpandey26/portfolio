import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, MessageCircle,  } from "lucide-react";


export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <CardTitle>Email</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Send me an email for any inquiries or collaborations</p>
              <Button asChild className="w-full bg-transparent">
                <a href="mailto:tanishqpandeyofficial@gmail.com">tanishqpandeyofficial@gmail.com</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="text-primary">
                  <Linkedin className="h-6 w-6" />
                </div>
                <CardTitle>LinkedIn</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Connect with me on LinkedIn for professional networking</p>
              <Button asChild className="w-full">
                <a href="https://www.linkedin.com/in/pandey26tanishq/" target="_blank" rel="noopener noreferrer">
                  Tanishq Pandey | LinkedIn
                </a>
              </Button>
            </CardContent>
          </Card>

        </div>

        {/* <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Let's Work Together</h3>
              <p className="text-muted-foreground mb-6">
                Whether you have a project in mind or just want to chat about technology, I'd love to hear from you.
                Let's create something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href="mailto:tanishqpandeyofficial@gmail.com">
                    <Mail className="h-5 w-5 mr-2" />
                    Send Email
                  </a>
                </Button>
                <Button asChild size="lg">
                  <a href="https://linkedin.com/in/tanishq-pandey" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5 mr-2" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div> */}

        
      </div>
    </section>
  )
}
