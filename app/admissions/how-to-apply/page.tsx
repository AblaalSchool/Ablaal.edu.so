"use client"

import Link from "next/link"
import { FileText, Calendar, CheckCircle, Send, ArrowRight, ClipboardList, MessageSquare } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HowToApplyPage() {
  const { t } = useLanguage()

  const steps = [
    {
      icon: ClipboardList,
      title: "Review Requirements",
      description: "Check the admission requirements for your desired grade level.",
      link: "/admissions/requirements",
    },
    {
      icon: FileText,
      title: "Complete Application",
      description: "Fill out the online application form with accurate information.",
      link: "/admissions/apply",
    },
    {
      icon: Send,
      title: "Submit Documents",
      description: "Upload required documents including previous school records.",
      link: "/admissions/process",
    },
    {
      icon: MessageSquare,
      title: "Interview",
      description: "Attend an interview with our admissions team.",
      link: "/contact",
    },
    {
      icon: Calendar,
      title: "Await Decision",
      description: "Receive admission decision within 2 weeks of interview.",
      link: "/admissions/process",
    },
    {
      icon: CheckCircle,
      title: "Enroll",
      description: "Complete enrollment and prepare for the school year.",
      link: "/admissions/tuition",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0d7377] to-[#14919B] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 border border-white rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-amber-400 font-medium mb-2 block">{t("admissions")}</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("howToApply")}</h1>
            <p className="text-lg text-white/90">
              Follow our simple admission process to join the Ablaal Schools family.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-500 font-medium mb-2 block">Application Process</span>
            <h2 className="text-3xl font-bold text-foreground">Six Simple Steps to Enrollment</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-5xl font-bold text-primary/10">{index + 1}</div>
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <step.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                  <Link
                    href={step.link}
                    className="text-primary text-sm font-medium inline-flex items-center hover:underline"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0d7377]/5">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-[#0d7377] to-[#14919B] text-white">
            <CardContent className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Ready to Get Started?</h2>
                <p className="text-white/90">Begin your application today and join our community.</p>
              </div>
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white whitespace-nowrap">
                <Link href="/admissions/apply">
                  {t("startApplication")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
