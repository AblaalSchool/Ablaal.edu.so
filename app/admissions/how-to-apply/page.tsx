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
      title: t("reviewRequirements"),
      description: t("reviewRequirementsDesc"),
      link: "/admissions/requirements",
    },
    {
      icon: FileText,
      title: t("completeApplication"),
      description: t("completeApplicationDesc"),
      link: "/admissions/apply",
    },
    {
      icon: Send,
      title: t("submitDocuments"),
      description: t("submitDocumentsDesc"),
      link: "/admissions/process",
    },
    {
      icon: MessageSquare,
      title: t("interview"),
      description: t("interviewDesc"),
      link: "/contact",
    },
    {
      icon: Calendar,
      title: t("awaitDecision"),
      description: t("awaitDecisionDesc"),
      link: "/admissions/process",
    },
    {
      icon: CheckCircle,
      title: t("enroll"),
      description: t("enrollDesc"),
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
              {t("followSimpleProcess")}
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-500 font-medium mb-2 block">{t("applicationProcessLabel")}</span>
            <h2 className="text-3xl font-bold text-foreground">{t("sixSimpleSteps")}</h2>
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
                    {t("learnMore")}
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
                <h2 className="text-2xl font-bold mb-2">{t("readyToGetStarted")}</h2>
                <p className="text-white/90">{t("readyToGetStartedDesc")}</p>
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
