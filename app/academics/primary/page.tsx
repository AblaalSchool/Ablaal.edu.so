"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, Calculator, Globe, Beaker, BookText, Languages, Moon } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function PrimaryPage() {
  const { t } = useLanguage()

  const subjects = [
    {
      icon: Languages,
      name: t("englishLanguage"),
      description: t("readingWriting"),
      color: "bg-blue-500",
    },
    {
      icon: BookText,
      name: t("somaliLanguage"),
      description: t("nativeLanguage"),
      color: "bg-green-500",
    },
    {
      icon: Calculator,
      name: t("mathematics"),
      description: t("numbersArithmetic"),
      color: "bg-purple-500",
    },
    {
      icon: Beaker,
      name: t("science"),
      description: t("basicSciences"),
      color: "bg-orange-500",
    },
    {
      icon: Globe,
      name: t("socialStudies"),
      description: t("historyCivic"),
      color: "bg-teal-500",
    },
    {
      icon: Moon,
      name: t("islamicStudies"),
      description: t("quranIslamic"),
      color: "bg-emerald-600",
    },
  ]

  const features = [
    { label: t("classSize"), value: t("studentsMax25") },
    { label: t("teacherRatio"), value: "1:15" },
    { label: t("duration"), value: t("years8") },
    { label: t("languages"), value: t("englishSomali") },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0d7377] to-[#14919B] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 border border-white rounded-full animate-pulse" />
          <div
            className="absolute bottom-20 left-20 w-48 h-48 border border-white rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <span className="text-amber-400 font-medium mb-2 block">{t("academics")}</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("primarySchool")}</h1>
              <p className="text-lg text-white/90 mb-6">
                {t("primaryHeroDesc")}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-amber-500 hover:bg-amber-600 text-white">
                  <Link href="/admissions/apply">
                    {t("applyNow")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-[#0d7377]"
                >
                  <Link href="/admissions/requirements">{t("requirements")}</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block animate-slide-up">
              <Image
                src="/images/Primary.jpg"
                alt="Primary Students"
                width={500}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <p className="text-2xl font-bold text-primary">{feature.value}</p>
                <p className="text-sm text-muted-foreground">{feature.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <span className="text-amber-500 font-medium mb-2 block">{t("curriculum")}</span>
            <h2 className="text-3xl font-bold text-foreground">{t("primarySubjects")}</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">{t("comprehensiveCurriculum")}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {subjects.map((subject, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 hover:border-primary/50 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div
                    className={`w-14 h-14 rounded-xl ${subject.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <subject.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{subject.name}</h3>
                  <p className="text-sm text-muted-foreground">{subject.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Grade Levels */}
      <section className="py-16 bg-[#0d7377]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <span className="text-amber-500 font-medium mb-2 block">{t("structure")}</span>
            <h2 className="text-3xl font-bold text-foreground">{t("gradeLevels")}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Lower Primary */}
            <Card className="overflow-hidden animate-slide-up">
              <div className="h-2 bg-primary" />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">{t("lowerPrimary")}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{t("foundationLiteracy")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{t("introBasicSciences")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{t("characterDevelopment")}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Upper Primary */}
            <Card className="overflow-hidden animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="h-2 bg-amber-500" />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">{t("upperPrimary")}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{t("advancedLanguage")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{t("preAlgebra")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{t("comprehensiveScience")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{t("prepSecondary")}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-[#0d7377] to-[#14919B] text-white overflow-hidden animate-fade-in">
            <CardContent className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">{t("readyToEnroll")}</h2>
                <p className="text-white/90">{t("readyToEnrollDesc")}</p>
              </div>
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white whitespace-nowrap">
                <Link href="/admissions/apply">
                  {t("applyNow")}
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
