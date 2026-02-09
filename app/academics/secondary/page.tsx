"use client"

import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  BookOpen,
  Calculator,
  Globe,
  Atom,
  Microscope,
  BookText,
  Languages,
  Moon,
  Computer,
  TrendingUp,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function SecondaryPage() {
  const { t } = useLanguage()

  const subjects = [
    {
      icon: Languages,
      name: t("englishLiterature"),
      description: t("advancedReading"),
      color: "bg-blue-500",
    },
    {
      icon: BookText,
      name: t("somaliLanguage"),
      description: t("advancedSomali"),
      color: "bg-green-500",
    },
    {
      icon: Calculator,
      name: t("mathematics"),
      description: t("algebraCalculus"),
      color: "bg-purple-500",
    },
    {
      icon: Atom,
      name: t("physics"),
      description: t("mechanicsElectricity"),
      color: "bg-indigo-500",
    },
    {
      icon: Microscope,
      name: t("chemistry"),
      description: t("organicChemistry"),
      color: "bg-orange-500",
    },
    {
      icon: Microscope,
      name: t("biology"),
      description: t("lifeSciences"),
      color: "bg-emerald-500",
    },
    {
      icon: Globe,
      name: t("geography"),
      description: t("worldGeography"),
      color: "bg-teal-500",
    },
    {
      icon: Moon,
      name: t("arabicLanguage"),
      description: t("advancedIslamic"),
      color: "bg-emerald-600",
    },
    {
      icon: Computer,
      name: t("computerStudies"),
      description: t("digitalLiteracy"),
      color: "bg-cyan-500",
    },
    {
      icon: TrendingUp,
      name: t("businessStudies"),
      description: t("economicsAccounting"),
      color: "bg-amber-500",
    },
  ]

  const features = [
    { label: "Class Size", value: "30 Students Max" },
    { label: "Teacher Ratio", value: "1:20" },
    { label: "Duration", value: "4 Years" },
    { label: "Certification", value: "National Exams" },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-500 to-amber-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-white rounded-full animate-pulse" />
          <div
            className="absolute bottom-20 right-20 w-48 h-48 border border-white rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <span className="text-amber-100 font-medium mb-2 block">{t("academics")}</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("secondarySchool")}</h1>
              <p className="text-lg text-white/90 mb-6">
                Preparing students for higher education and career success. Our secondary program (Grades 9-12) offers
                advanced academics and practical skills.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-white text-amber-600 hover:bg-white/90">
                  <Link href="/admissions/apply">
                    {t("applyNow")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-amber-600"
                >
                  <Link href="/admissions/requirements">{t("requirements")}</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block animate-slide-up">
              <Image
                src="/images/Secondary.jpg"
                alt="Secondary Students"
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
                <p className="text-2xl font-bold text-amber-500">{feature.value}</p>
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
            <h2 className="text-3xl font-bold text-foreground">{t("secondarySubjects")}</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">{t("rigorousCurriculum")}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
            {subjects.map((subject, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 hover:border-amber-500/50 animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-4">
                  <div
                    className={`w-12 h-12 rounded-lg ${subject.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                  >
                    <subject.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-sm text-foreground mb-1">{subject.name}</h3>
                  <p className="text-xs text-muted-foreground">{subject.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Grade Levels */}
      <section className="py-16 bg-amber-500/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <span className="text-amber-500 font-medium mb-2 block">{t("structure")}</span>
            <h2 className="text-3xl font-bold text-foreground">{t("secondaryGradeLevels")}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Lower Secondary */}
            <Card className="overflow-hidden animate-slide-up">
              <div className="h-2 bg-[#0d7377]" />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">{t("lowerSecondary")}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Core subjects in sciences and humanities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Introduction to specialized subjects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Career guidance and exploration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Foundation for national examinations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Upper Secondary */}
            <Card className="overflow-hidden animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="h-2 bg-amber-500" />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">{t("upperSecondary")}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Advanced subject specialization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Intensive exam preparation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">University application support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Leadership and service programs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <span className="text-amber-500 font-medium mb-2 block">{t("ourAchievements")}</span>
            <h2 className="text-3xl font-bold text-foreground mb-8">{t("excellenceInExams")}</h2>
            <div className="grid grid-cols-3 gap-8">
              <div className="p-6 bg-[#0d7377]/5 rounded-2xl animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <p className="text-4xl font-bold text-primary mb-2">95%</p>
                <p className="text-sm text-muted-foreground">{t("passRate")}</p>
              </div>
              <div className="p-6 bg-amber-500/10 rounded-2xl animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <p className="text-4xl font-bold text-amber-500 mb-2">500+</p>
                <p className="text-sm text-muted-foreground">{t("universityAdmissions")}</p>
              </div>
              <div className="p-6 bg-[#0d7377]/5 rounded-2xl animate-scale-in" style={{ animationDelay: "0.3s" }}>
                <p className="text-4xl font-bold text-primary mb-2">35+</p>
                <p className="text-sm text-muted-foreground">{t("yearsOfExcellence")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-500/5">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-amber-500 to-amber-600 text-white overflow-hidden animate-fade-in">
            <CardContent className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">{t("readyForExcellence")}</h2>
                <p className="text-white/90">{t("readyForExcellenceDesc")}</p>
              </div>
              <Button asChild size="lg" className="bg-white text-amber-600 hover:bg-white/90 whitespace-nowrap">
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
