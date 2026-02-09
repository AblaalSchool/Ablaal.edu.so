"use client"

import Image from "next/image"
import Link from "next/link"
import { BookOpen, Users, Building, Star, GraduationCap, Award, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  const { t } = useLanguage()

  const features = [
    {
      icon: BookOpen,
      title: t("qualityEducation"),
      description: t("qualityEducationDesc"),
    },
    {
      icon: Users,
      title: t("experiencedTeachers"),
      description: t("experiencedTeachersDesc"),
    },
    {
      icon: Building,
      title: t("modernFacilities"),
      description: t("modernFacilitiesDesc"),
    },
    {
      icon: Star,
      title: t("islamicValues"),
      description: t("islamicValuesDesc"),
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/design.jpg" alt="Ablaal School Students" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d7377]/95 via-[#0d7377]/80 to-[#0d7377]/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-12 bg-amber-400 rounded" />
              <span className="text-amber-400 font-medium">Since 1988</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
              {t("heroTitle")}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">{t("heroSubtitle")}</p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                <Link href="/admissions/apply">
                  {t("enrollNow")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 border-white text-white hover:bg-white hover:text-[#0d7377]"
              >
                <Link href="/about/story">{t("learnMore")}</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[#0d7377]/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center stagger-children">
            <div className="p-6">
              <p className="text-4xl font-bold text-primary mb-2">35+</p>
              <p className="text-muted-foreground">{t("yearsOfExcellence")}</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-primary mb-2">5000+</p>
              <p className="text-muted-foreground">{t("studentsGraduated")}</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-primary mb-2">100+</p>
              <p className="text-muted-foreground">{t("expertTeachers")}</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-primary mb-2">95%</p>
              <p className="text-muted-foreground">{t("successRate")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <span className="text-amber-500 font-medium mb-2 block">{t("ourStrengths")}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">{t("whyChooseUs")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("nurturingEnvironment")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50 bg-card"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Programs Section */}
      <section className="py-20 bg-[#0d7377]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <span className="text-amber-500 font-medium mb-2 block">{t("educationPrograms")}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("ourPrograms")}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Primary School Card */}
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 animate-slide-up">
              <div className="h-48 bg-gradient-to-br from-[#0d7377] to-[#14919B] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <GraduationCap className="h-24 w-24 text-white/20 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium opacity-80">{t("grades1to8")}</p>
                  <h3 className="text-2xl font-bold">{t("primarySchool")}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">{t("primaryDesc")}</p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-white transition-all bg-transparent"
                >
                  <Link href="/academics/primary">
                    {t("viewCurriculum")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Secondary School Card */}
            <Card
              className="overflow-hidden group hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="h-48 bg-gradient-to-br from-amber-500 to-amber-600 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Award className="h-24 w-24 text-white/20 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium opacity-80">{t("grades9to12")}</p>
                  <h3 className="text-2xl font-bold">{t("secondarySchool")}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">{t("secondaryDesc")}</p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:bg-amber-500 group-hover:text-white transition-all bg-transparent"
                >
                  <Link href="/academics/secondary">
                    {t("viewCurriculum")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative animate-slide-up">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-400/20 rounded-full blur-xl animate-pulse" />
              <div
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#0d7377]/20 rounded-full blur-xl animate-pulse"
                style={{ animationDelay: "1s" }}
              />
              <Image
                src="/images/prof ablaal.jpg"
                alt="Founder of Ablaal Schools"
                width={700}
                height={600}
                className="rounded-2xl shadow-2xl relative z-10 object-cover"
              />
            </div>
            <div className="animate-fade-in">
              <span className="text-amber-500 font-medium mb-2 block">{t("founderMessage")}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{t("buildingLeaders")}</h2>
              <blockquote className="text-lg text-muted-foreground italic border-l-4 border-primary pl-4 mb-6">
                {t("founderQuote")}
              </blockquote>
              <p className="text-muted-foreground mb-6">{t("founderDesc")}</p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/about/story">
                  {t("learnMore")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0d7377] via-[#0d7377] to-[#14919B] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 border-2 border-white rounded-full animate-pulse" />
          <div
            className="absolute bottom-10 right-10 w-48 h-48 border-2 border-white rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("readyToJoin")}</h2>
            <p className="text-lg text-white/90 mb-8">{t("ctaDesc")}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                <Link href="/admissions/apply">
                  {t("applyNow")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#0d7377]"
              >
                <Link href="/contact">{t("contactUs")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
