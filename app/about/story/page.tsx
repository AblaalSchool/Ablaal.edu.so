"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Award, Users, BookOpen } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function OurStoryPage() {
  const { t } = useLanguage()

  const milestones = [
    { year: "1988", event: t("milestone1988"), icon: Calendar },
    { year: "1995", event: t("milestone1995"), icon: BookOpen },
    { year: "2005", event: t("milestone2005"), icon: Users },
    { year: "2015", event: t("milestone2015"), icon: Award },
    { year: "2024", event: t("milestone2024"), icon: Award },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0d7377] to-[#14919B] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-white rounded-full" />
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-white rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-amber-400 font-medium mb-2 block">{t("about")}</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("ourStory")}</h1>
            <p className="text-lg text-white/90">
              {t("storyHeroDesc")}
            </p>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">{t("legacyOfExcellence")}</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>{t("storyParagraph1")}</p>
                <p>{t("storyParagraph2")}</p>
                <p>{t("storyParagraph3")}</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-amber-400/20 rounded-2xl" />
              <Image
                src="/images/design.jpg"
                alt="Ablaal Schools Campus"
                width={600}
                height={400}
                className="rounded-2xl relative z-10 shadow-xl object-cover"
              />
            </div>
          </div>

          {/* Founder Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center py-16 border-t border-b border-border">
            <div className="order-2 lg:order-1 relative">
              <Image
                src="/images/baba-20talking.jpg"
                alt="Founder Speaking"
                width={500}
                height={600}
                className="rounded-2xl shadow-xl object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-amber-500 font-medium mb-2 block">{t("theFounder")}</span>
              <h2 className="text-3xl font-bold text-foreground mb-6">{t("visionTransformed")}</h2>
              <blockquote className="text-lg italic text-muted-foreground border-l-4 border-primary pl-4 mb-6">
                {t("founderStoryQuote")}
              </blockquote>
              <p className="text-muted-foreground mb-6">
                {t("founderStoryDesc")}
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/about/leadership">
                  {t("meetOurLeadership")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-[#0d7377]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-500 font-medium mb-2 block">{t("ourJourney")}</span>
            <h2 className="text-3xl font-bold text-foreground">{t("milestonesTitle")}</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block" />

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <Card key={index} className="relative md:ml-16">
                    {/* Timeline dot */}
                    <div className="absolute -left-[4.5rem] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center hidden md:flex">
                      <milestone.icon className="h-4 w-4 text-white" />
                    </div>
                    <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
                      <div className="text-3xl font-bold text-primary">{milestone.year}</div>
                      <p className="text-muted-foreground">{milestone.event}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-br from-[#0d7377] to-[#14919B] text-white overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">{t("bePartOfStory")}</h2>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                {t("bePartOfStoryDesc")}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild className="bg-amber-500 hover:bg-amber-600 text-white">
                  <Link href="/admissions/apply">{t("applyNow")}</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white text-white bg-transparent hover:bg-white hover:text-[#0d7377]"
                >
                  <Link href="/contact">{t("contactUs")}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
