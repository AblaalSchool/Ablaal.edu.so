"use client"

import Link from "next/link"
import { ArrowRight, FileText, UserCheck, GraduationCap, ClipboardCheck, AlertCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function RequirementsPage() {
  const { t } = useLanguage()

  const primaryRequirements = [
    t("birthCertificate"),
    t("previousSchoolRecords"),
    t("passportPhotos"),
    t("vaccinationRecords"),
    t("parentIdentification"),
    t("proofOfResidence"),
  ]

  const secondaryRequirements = [
    t("birthCertificate"),
    t("primaryCompletion"),
    t("academicTranscripts"),
    t("passportPhotos"),
    t("characterReference"),
    t("parentIdentification"),
    t("proofOfResidence"),
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0d7377] to-[#14919B] text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-amber-400 font-medium mb-2 block">{t("admissions")}</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("requirements")}</h1>
            <p className="text-lg text-white/90">
              {t("requirementsHeroDesc")}
            </p>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Primary Requirements */}
            <Card className="overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-colors">
              <CardHeader className="bg-gradient-to-r from-[#0d7377] to-[#14919B] text-white">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{t("primary")}</CardTitle>
                    <p className="text-sm text-white/80">{t("grades1to8")}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  {t("requiredDocuments")}
                </h4>
                <ul className="space-y-3">
                  {primaryRequirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <ClipboardCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Secondary Requirements */}
            <Card className="overflow-hidden border-2 border-amber-500/20 hover:border-amber-500/50 transition-colors">
              <CardHeader className="bg-gradient-to-r from-amber-500 to-amber-600 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{t("secondary")}</CardTitle>
                    <p className="text-sm text-white/80">{t("grades9to12")}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-amber-500" />
                  {t("requiredDocuments")}
                </h4>
                <ul className="space-y-3">
                  {secondaryRequirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <ClipboardCheck className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Eligibility Section */}
          <div className="max-w-5xl mx-auto mt-12">
            <Card className="bg-[#0d7377]/5">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <UserCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">{t("eligibilityCriteria")}</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>{"• "}{t("eligibilityAge")}</li>
                      <li>{"• "}{t("primaryAges")}</li>
                      <li>{"• "}{t("secondaryAges")}</li>
                      <li>{"• "}{t("academicReadiness")}</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Note Section */}
          <div className="max-w-5xl mx-auto mt-6">
            <Card className="border-amber-500/30 bg-amber-50 dark:bg-amber-950/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-6 w-6 text-amber-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{t("importantNote")}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t("importantNoteDesc")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">{t("haveDocumentsReady")}</h2>
          <p className="text-muted-foreground mb-6">{t("haveDocumentsReadyDesc")}</p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/admissions/apply">
              {t("startApplication")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
