"use client"

import { Target, Eye, Heart, Shield, Users, Lightbulb, BookOpen, Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Card, CardContent } from "@/components/ui/card"

export default function MissionVisionPage() {
  const { t } = useLanguage()

  const values = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Striving for the highest standards in education and learning outcomes.",
    },
    {
      icon: Heart,
      title: "Islamic Values",
      description: "Grounding education in strong moral and spiritual principles.",
    },
    {
      icon: Users,
      title: "Community Service",
      description: "Developing responsible citizens who contribute to society.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing modern teaching methods and technologies.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Maintaining honesty and transparency in all our endeavors.",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Preparing students for success in an interconnected world.",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0d7377] to-[#14919B] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 border border-white rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-amber-400 font-medium mb-2 block">{t("about")}</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("missionVision")}</h1>
            <p className="text-lg text-white/90">
              Our mission and vision guide everything we do at Ablaal Schools, shaping the future of education in
              Somalia.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mission Card */}
            <Card className="overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-colors">
              <div className="h-2 bg-primary" />
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To provide accessible, high-quality education that combines academic excellence with Islamic values,
                  empowering students to become knowledgeable, ethical, and responsible citizens who contribute
                  positively to their communities and the world.
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <h3 className="font-semibold text-foreground mb-2">We are committed to:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      Delivering excellence in education
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      Nurturing moral and spiritual growth
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      Building future leaders
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Vision Card */}
            <Card className="overflow-hidden border-2 border-amber-500/20 hover:border-amber-500/50 transition-colors">
              <div className="h-2 bg-amber-500" />
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-amber-500" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading educational institution in Somalia, recognized for producing graduates who excel
                  academically, embody strong moral character, and drive positive change in society through their
                  leadership and service.
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <h3 className="font-semibold text-foreground mb-2">We aspire to:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-500" />
                      Set the standard for education in Somalia
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-500" />
                      Inspire lifelong learning
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-500" />
                      Create global citizens
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-[#0d7377]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-500 font-medium mb-2 block">What Guides Us</span>
            <h2 className="text-3xl font-bold text-foreground">Our Core Values</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <value.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl text-primary/20 mb-4">"</div>
            <blockquote className="text-2xl md:text-3xl font-medium text-foreground mb-6 text-balance">
              Education is not preparation for life; education is life itself. At Ablaal Schools, we live this truth
              every day.
            </blockquote>
            <p className="text-muted-foreground">— Founding Philosophy of Ablaal Schools</p>
          </div>
        </div>
      </section>
    </main>
  )
}
