"use client"

import { Target, Eye, Heart, Shield, Users, Lightbulb, BookOpen, Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Card, CardContent } from "@/components/ui/card"

export default function MissionVisionPage() {
  const { t } = useLanguage()

  const values = [
    {
      icon: BookOpen,
      title: t("academicExcellence"),
      description: t("academicExcellenceDesc"),
    },
    {
      icon: Heart,
      title: t("islamicValuesValue"),
      description: t("islamicValuesValueDesc"),
    },
    {
      icon: Users,
      title: t("communityService"),
      description: t("communityServiceDesc"),
    },
    {
      icon: Lightbulb,
      title: t("innovation"),
      description: t("innovationDesc"),
    },
    {
      icon: Shield,
      title: t("integrity"),
      description: t("integrityDesc"),
    },
    {
      icon: Globe,
      title: t("globalPerspective"),
      description: t("globalPerspectiveDesc"),
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
              {t("missionVisionHeroDesc")}
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
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("ourMission")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("missionDescription")}
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <h3 className="font-semibold text-foreground mb-2">{t("weAreCommittedTo")}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      {t("deliveringExcellence")}
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      {t("nurturingMoralGrowth")}
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      {t("buildingFutureLeaders")}
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
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("ourVision")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("visionDescription")}
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <h3 className="font-semibold text-foreground mb-2">{t("weAspireTo")}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-500" />
                      {t("setStandard")}
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-500" />
                      {t("inspireLifelongLearning")}
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-500" />
                      {t("createGlobalCitizens")}
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
            <span className="text-amber-500 font-medium mb-2 block">{t("whatGuidesUs")}</span>
            <h2 className="text-3xl font-bold text-foreground">{t("ourCoreValues")}</h2>
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
              {t("missionQuote")}
            </blockquote>
            <p className="text-muted-foreground">— {t("foundingPhilosophy")}</p>
          </div>
        </div>
      </section>
    </main>
  )
}
