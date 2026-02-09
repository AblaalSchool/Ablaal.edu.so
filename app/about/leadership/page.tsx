"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { Card, CardContent } from "@/components/ui/card"

export default function LeadershipPage() {
  const { t } = useLanguage()

  const principals = [
    {
      name: "Ahmed Sali",
      role: t("principalPrimary"),
      description: t("principalPrimaryDesc"),
    },
    {
      name: "Ustaad Sahal",
      role: t("principalSecondary"),
      description: t("principalSecondaryDesc"),
    },
    {
      name: "Mohamed Ali",
      role: t("academicDirector"),
      description: t("academicDirectorDesc"),
    },
    {
      name: "Halima Yusuf",
      role: t("studentAffairsDirector"),
      description: t("studentAffairsDirectorDesc"),
    },
    {
      name: "Abdi Karim",
      role: t("operationsDirector"),
      description: t("operationsDirectorDesc"),
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0d7377] to-[#14919B] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-20 left-20 w-48 h-48 border border-white rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-amber-400 font-medium mb-2 block">{t("about")}</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("leadership")}</h1>
            <p className="text-lg text-white/90">
              {t("leadershipHeroDesc")}
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-amber-500 font-medium mb-2 block">{t("ourFounder")}</span>
              <h2 className="text-3xl font-bold text-foreground">{t("visionaryBehind")}</h2>
            </div>

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-[400px] md:h-auto">
                    <Image
                      src="/images/baba-20talking.jpg"
                      alt="Founder of Ablaal Schools"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{t("founderChairman")}</h3>
                    <p className="text-primary font-medium mb-4">Ablaal Schools</p>
                    <p className="text-muted-foreground mb-4">
                      {t("leadershipFounderDesc1")}
                    </p>
                    <p className="text-muted-foreground">
                      {t("leadershipFounderDesc2")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-[#0d7377]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-500 font-medium mb-2 block">{t("schoolLeadership")}</span>
            <h2 className="text-3xl font-bold text-foreground">{t("principalsDirectors")}</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              {t("principalsDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {principals.map((principal, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-48 bg-gradient-to-br from-[#0d7377]/80 to-[#14919B]/80 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">
                        {principal.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-foreground mb-1">{principal.name}</h3>
                    <p className="text-primary text-sm font-medium mb-3">{principal.role}</p>
                    <p className="text-sm text-muted-foreground">{principal.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-[#0d7377] to-[#14919B] text-white">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="text-5xl text-white/30 mb-4">"</div>
              <blockquote className="text-xl md:text-2xl mb-6 text-balance">
                {t("leadershipQuote")}
              </blockquote>
              <p className="text-white/80">— {t("leadershipTeamQuoteAuthor")}</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
