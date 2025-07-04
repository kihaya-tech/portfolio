"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Moon, Sun, Menu, X, Mail, MapPin, Users, TrendingUp, Code } from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const skills = [
    { name: "Angular", level: "Expert", versions: "v8-17" },
    { name: "TypeScript", level: "Expert", versions: "" },
    { name: "Vue.js", level: "Advanced", versions: "" },
    { name: "React", level: "Advanced", versions: "" },
    { name: "Flutter", level: "Intermediate", versions: "" },
    { name: "PHP", level: "Intermediate", versions: "" },
    { name: "AWS", level: "Advanced", versions: "" },
    { name: "GCP", level: "Advanced", versions: "" },
    { name: "Firebase", level: "Advanced", versions: "" },
  ]

  const projects = [
    {
      title: "MaaS Bus Application",
      description:
        "Enterprise-scale mobility-as-a-service platform built with Angular and TypeScript, serving thousands of daily users across multiple transit systems.",
      technologies: ["Angular", "TypeScript", "RxJS", "Angular Material"],
      achievements: [
        "Reduced operational costs by 67%",
        "Improved on-time performance by 30%",
        "Scaled to handle 50K+ daily active users",
      ],
      metrics: { cost: "67%", performance: "30%", users: "50K+" },
    },
    {
      title: "Engineering Mentorship Platform",
      description:
        "Comprehensive learning management system designed to accelerate junior developer growth through structured mentorship programs.",
      technologies: ["Angular", "TypeScript", "Firebase", "Cloud Functions"],
      achievements: [
        "Trained 100+ engineers successfully",
        "Achieved 95% program completion rate",
        "Reduced onboarding time by 40%",
      ],
      metrics: { engineers: "100+", completion: "95%", time: "40%" },
    },
    {
      title: "Large-scale Angular Migration",
      description:
        "Led the modernization of legacy AngularJS applications to Angular 15+, improving performance and maintainability across multiple product lines.",
      technologies: ["Angular", "AngularJS", "TypeScript", "Webpack"],
      achievements: ["Migrated 15+ legacy applications", "Improved bundle size by 45%", "Enhanced performance by 60%"],
      metrics: { apps: "15+", bundle: "45%", performance: "60%" },
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-bold">Yuki Yahaba</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("about")} className="hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("projects")} className="hover:text-primary transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection("skills")} className="hover:text-primary transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-primary transition-colors">
              Contact
            </button>
            <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="ml-4">
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-left hover:text-primary transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left hover:text-primary transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Yuki Yahaba
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">Senior Frontend Engineer</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Passionate about building scalable web applications and mentoring the next generation of developers. 6+
              years of experience crafting exceptional user experiences with modern technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection("projects")} className="text-lg px-8">
                View My Work
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")} className="text-lg px-8">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  As a Senior Frontend Engineer with over 6 years of experience, I specialize in building robust,
                  scalable web applications using Angular and TypeScript. My passion extends beyond coding to mentoring
                  and developing talent within engineering teams.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  I've had the privilege of mentoring over 100 engineers throughout my career, helping them grow from
                  junior developers to confident professionals. I believe in the power of knowledge sharing and
                  collaborative development to drive innovation.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Currently seeking opportunities with forward-thinking tech companies in Montreal where I can
                  contribute to meaningful projects while continuing to foster engineering excellence.
                </p>
              </div>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Code className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">6+ Years Experience</h3>
                        <p className="text-sm text-muted-foreground">Frontend Development</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">100+ Engineers Mentored</h3>
                        <p className="text-sm text-muted-foreground">Leadership & Development</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Montreal, Canada</h3>
                        <p className="text-sm text-muted-foreground">Available for opportunities</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="grid gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl md:text-2xl">{project.title}</CardTitle>
                        <CardDescription className="text-base mt-2">{project.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center">
                            <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {project.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="text-sm text-muted-foreground flex items-start">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                          {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                            <div key={metricIndex} className="text-center p-3 bg-muted/50 rounded-lg">
                              <div className="text-lg font-bold text-primary">{value}</div>
                              <div className="text-xs text-muted-foreground capitalize">{key}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Technical Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{skill.name}</h3>
                      <Badge
                        variant={
                          skill.level === "Expert" ? "default" : skill.level === "Advanced" ? "secondary" : "outline"
                        }
                      >
                        {skill.level}
                      </Badge>
                    </div>
                    {skill.versions && <p className="text-sm text-muted-foreground">{skill.versions}</p>}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Connect</h2>
            <p className="text-lg text-muted-foreground mb-12">
              I'm always interested in discussing new opportunities, innovative projects, or simply connecting with
              fellow developers in the Montreal tech community.
            </p>

            <Card className="p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold">Email</h3>
                    <Link href="mailto:yuki@kihaya.dev" className="text-primary hover:underline">
                      yuki@kihaya.dev
                    </Link>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-center space-x-4">
                  <Button variant="outline" size="lg" asChild>
                    <Link href="mailto:yuki@kihaya.dev">
                      <Mail className="h-4 w-4 mr-2" />
                      Send Email
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Yuki Yahaba. All rights reserved.</p>
            <p className="mt-2 text-sm">Senior Frontend Engineer • Montreal, Canada</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
