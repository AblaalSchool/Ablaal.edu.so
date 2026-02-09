"use client"

import type React from "react"

import { useState } from "react"
import { GraduationCap, User, Mail, Phone, FileText, Send, CheckCircle2, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ApplyPage() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      grade: formData.get("grade"),
      previousSchool: formData.get("previousSchool"),
      parentName: formData.get("parentName"),
      parentPhone: formData.get("parentPhone"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSubmitted(true)
      }
    } catch (error) {
      console.error("Error submitting application:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen">
        <section className="py-20 bg-gradient-to-br from-[#0d7377] to-[#14919B]">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>
                <h1 className="text-3xl font-bold text-foreground mb-4">{t("applicationSubmitted")}</h1>
                <p className="text-muted-foreground mb-6">
                  {t("applicationSubmittedDesc")}
                </p>
                <p className="text-sm text-muted-foreground">{t("confirmationSent")}</p>
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
      <section className="relative py-16 bg-gradient-to-br from-[#0d7377] via-[#0d7377] to-[#14919B] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 border border-white/10 rounded-full" />
          <div className="absolute bottom-10 right-10 w-96 h-96 border border-white/10 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-amber-400" />
              <span className="text-sm font-medium">{t("joinGraduates")}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">{t("startApplication")}</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              {t("applyHeroDesc")}
            </p>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 bg-[#0d7377]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Progress Indicators */}
            <div className="flex justify-center gap-4 mb-12">
              {[t("studentInfo"), t("guardianInfo"), t("review")].map((step, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      index === 0 ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span className="text-sm font-medium text-muted-foreground hidden sm:inline">{step}</span>
                </div>
              ))}
            </div>

            <Card className="overflow-hidden shadow-2xl">
              <div className="h-2 bg-gradient-to-r from-[#0d7377] via-[#14919B] to-amber-500" />
              <CardContent className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Student Information */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-xl font-bold text-foreground">{t("studentInformation")}</h2>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-foreground">
                          {t("firstName")} *
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          required
                          placeholder={t("enterFirstName")}
                          className="h-12 bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-foreground">
                          {t("lastName")} *
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          required
                          placeholder={t("enterLastName")}
                          className="h-12 bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground">
                          {t("email")} *
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="student@example.com"
                            className="h-12 pl-10 bg-background"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-foreground">
                          {t("phone")} *
                        </Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            placeholder="+252 612 XXX XXX"
                            className="h-12 pl-10 bg-background"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="grade" className="text-foreground">
                          {t("grade")} *
                        </Label>
                        <Select name="grade" required>
                          <SelectTrigger className="h-12 bg-background">
                            <SelectValue placeholder={t("selectGrade")} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="grade-1">Grade 1</SelectItem>
                            <SelectItem value="grade-2">Grade 2</SelectItem>
                            <SelectItem value="grade-3">Grade 3</SelectItem>
                            <SelectItem value="grade-4">Grade 4</SelectItem>
                            <SelectItem value="grade-5">Grade 5</SelectItem>
                            <SelectItem value="grade-6">Grade 6</SelectItem>
                            <SelectItem value="grade-7">Grade 7</SelectItem>
                            <SelectItem value="grade-8">Grade 8</SelectItem>
                            <SelectItem value="grade-9">Grade 9 (Secondary)</SelectItem>
                            <SelectItem value="grade-10">Grade 10 (Secondary)</SelectItem>
                            <SelectItem value="grade-11">Grade 11 (Secondary)</SelectItem>
                            <SelectItem value="grade-12">Grade 12 (Secondary)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="previousSchool" className="text-foreground">
                          {t("previousSchool")}
                        </Label>
                        <Input
                          id="previousSchool"
                          name="previousSchool"
                          placeholder={t("nameOfPreviousSchool")}
                          className="h-12 bg-background"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Guardian Information */}
                  <div className="pt-6 border-t border-border">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                        <GraduationCap className="h-5 w-5 text-amber-500" />
                      </div>
                      <h2 className="text-xl font-bold text-foreground">{t("parentGuardianInfo")}</h2>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="parentName" className="text-foreground">
                          {t("parentGuardianName")}
                        </Label>
                        <Input
                          id="parentName"
                          name="parentName"
                          required
                          placeholder="Full name"
                          className="h-12 bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="parentPhone" className="text-foreground">
                          {t("parentGuardianPhone")}
                        </Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <Input
                            id="parentPhone"
                            name="parentPhone"
                            type="tel"
                            required
                            placeholder="+252 612 XXX XXX"
                            className="h-12 pl-10 bg-background"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="pt-6 border-t border-border">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-xl font-bold text-foreground">{t("additionalInfo")}</h2>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">
                        {t("whyJoinAblaal")}
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder={t("whyJoinPlaceholder")}
                        className="min-h-[120px] bg-background resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="w-full h-14 text-lg bg-gradient-to-r from-[#0d7377] to-[#14919B] hover:from-[#0d7377]/90 hover:to-[#14919B]/90"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin mr-2">{"..."}</span>
                          {t("submitting")}
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          {t("submit")}
                        </>
                      )}
                    </Button>
                    <p className="text-center text-sm text-muted-foreground mt-4">
                      {t("termsAgree")}
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
