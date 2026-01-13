"use client"

import Link from "next/link"
import { ArrowRight, Clock, FileCheck, Users, Mail, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ApplicationProcessPage() {
  const { t } = useLanguage()

  const timeline = [
    {
      phase: t("phase1"),
      title: t("applicationSubmission"),
      duration: "1 Day",
      icon: FileCheck,
      items: [
        "Complete online application form",
        "Upload required documents",
        "Pay application fee (if applicable)",
        "Receive confirmation email",
      ],
    },
    {
      phase: t("phase2"),
      title: t("documentReview"),
      duration: "2-3 Days",
      icon: Clock,
      items: [
        "Review of academic records",
        "Verification of documents",
        "Assessment of eligibility",
        "Initial screening",
      ],
    },
    {
      phase: t("phase3"),
      title: t("interviewAssessment"),
      duration: "1 Day",
      icon: Users,
      items: [
        "Student interview",
        "Parent/Guardian meeting",
        "Academic assessment (if required)",
        "Tour of facilities",
      ],
    },
    {
      phase: t("phase4"),
      title: t("decisionEnrollment"),
      duration: "2-3 Days",
      icon: Mail,
      items: ["Admission decision communicated", "Acceptance letter issued", "Enrollment documents", "Fee payment"],
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0d7377] to-[#14919B] text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <span className="text-amber-400 font-medium mb-2 block">{t("admissions")}</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("applicationProcess")}</h1>
            <p className="text-lg text-white/90">
              Understanding our admission timeline helps you prepare for a smooth application experience.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <span className="text-amber-500 font-medium mb-2 block">{t("whatToExpect")}</span>
              <h2 className="text-3xl font-bold text-foreground">{t("applicationTimeline")}</h2>
              <p className="text-muted-foreground mt-2">{t("totalEstimatedTime")}</p>
            </div>

            <div className="space-y-6">
              {timeline.map((phase, index) => (
                <Card
                  key={index}
                  className="overflow-hidden group hover:shadow-lg transition-all animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 bg-gradient-to-br from-[#0d7377] to-[#14919B] p-6 text-white">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                            <phase.icon className="h-6 w-6" />
                          </div>
                          <span className="text-amber-400 font-medium">{phase.phase}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                        <p className="text-sm text-white/80 flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {phase.duration}
                        </p>
                      </div>
                      <div className="md:w-2/3 p-6">
                        <ul className="space-y-3">
                          {phase.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0d7377]/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">{t("readyToBegin")}</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">{t("readyToBeginDesc")}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/admissions/apply">
                {t("applyNow")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent">
              <Link href="/contact">{t("contactUs")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
