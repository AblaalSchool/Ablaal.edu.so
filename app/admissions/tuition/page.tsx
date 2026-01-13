"use client"

import Link from "next/link"
import { ArrowRight, DollarSign, Info } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const SHOW_TUITION_FEES = true

export default function TuitionPage() {
  const { t } = useLanguage()

  if (!SHOW_TUITION_FEES) {
    return (
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-[#0d7377] to-[#14919B] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="text-amber-400 font-medium mb-2 block">{t("admissions")}</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("tuitionFees")}</h1>
            </div>
          </div>
        </section>

        {/* Hidden Message */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto text-center">
              <CardContent className="p-12">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Info className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("tuitionInfo")}</h2>
                <p className="text-muted-foreground mb-6">{t("tuitionInfoDesc")}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <Link href="/contact">{t("contactUs")}</Link>
                  </Button>
                  <Button asChild variant="outline" className="bg-transparent">
                    <Link href="/admissions/apply">{t("applyNow")}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0d7377] to-[#14919B] text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <span className="text-amber-400 font-medium mb-2 block">{t("admissions")}</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("tuitionFees")}</h1>
            <p className="text-lg text-white/90">{t("affordableEducation")}</p>
          </div>
        </div>
      </section>

      {/* Tuition Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Primary Tuition */}
            <Card className="overflow-hidden border-2 hover:shadow-xl transition-all animate-slide-up">
              <CardHeader className="bg-gradient-to-r from-[#0d7377] to-[#14919B] text-white text-center py-8">
                <p className="text-amber-400 font-medium mb-2">{t("primary")}</p>
                <CardTitle className="text-3xl">{t("grades1to8")}</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-1">
                    <DollarSign className="h-8 w-8 text-primary" />
                    <span className="text-4xl font-bold text-foreground">{t("contactUs")}</span>
                  </div>
                  <p className="text-muted-foreground mt-2">{t("perAcademicYear")}</p>
                </div>
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link href="/admissions/apply">{t("applyNow")}</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Secondary Tuition */}
            <Card
              className="overflow-hidden border-2 border-amber-500/30 hover:shadow-xl transition-all animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <CardHeader className="bg-gradient-to-r from-amber-500 to-amber-600 text-white text-center py-8">
                <p className="text-amber-100 font-medium mb-2">{t("secondary")}</p>
                <CardTitle className="text-3xl">{t("grades9to12")}</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-1">
                    <DollarSign className="h-8 w-8 text-amber-500" />
                    <span className="text-4xl font-bold text-foreground">{t("contactUs")}</span>
                  </div>
                  <p className="text-muted-foreground mt-2">{t("perAcademicYear")}</p>
                </div>
                <Button asChild className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                  <Link href="/admissions/apply">{t("applyNow")}</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Payment Info */}
          <div className="max-w-4xl mx-auto mt-6">
            <Card className="animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Info className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">{t("paymentOptions")}</h3>
                    <p className="text-sm text-muted-foreground">{t("paymentOptionsDesc")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0d7377]/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">{t("questionsAboutFees")}</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">{t("questionsAboutFeesDesc")}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                {t("contactUs")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent">
              <Link href="/admissions/apply">{t("applyNow")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
