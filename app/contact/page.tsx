"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle2, Building } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSubmitted(true)
      }
    } catch (error) {
      console.error("Error submitting contact form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: t("phone"),
      details: ["+252 612 277 993", "+252 612 461 112"],
      color: "bg-primary",
    },
    {
      icon: Mail,
      title: t("email"),
      details: ["info@ablaalschools.so"],
      color: "bg-amber-500",
    },
    {
      icon: MapPin,
      title: t("address"),
      details: ["Taleh Street, Hodan District", "Mogadishu, Somalia"],
      color: "bg-primary",
    },
    {
      icon: Clock,
      title: t("workingHours"),
      details: [t("saturdayThursday"), t("timeRange")],
      color: "bg-amber-500",
    },
  ]

  const branches = [
    { name: "Ablaal Main Campus", district: "Hodan District" },
    { name: "Ablaal Wadajir Branch", district: "Wadajir District" },
    { name: "Ablaal Yaqshid Branch", district: "Yaqshid District" },
    { name: "Ablaal Karan Branch", district: "Karan District" },
    { name: "Ablaal Heliwa Branch", district: "Heliwa District" },
    { name: "Ablaal Dharkenley Branch", district: "Dharkenley District" },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0d7377] to-[#14919B] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 border border-white/10 rounded-full animate-pulse" />
          <div
            className="absolute bottom-10 left-10 w-48 h-48 border border-white/10 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <span className="text-amber-400 font-medium mb-2 block">{t("weLoveToHear")}</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("getInTouch")}</h1>
            <p className="text-lg text-white/90">{t("contactHeroDesc")}</p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto -mt-20 relative z-20 stagger-children">
            {contactInfo.map((info, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-14 h-14 rounded-xl ${info.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <info.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-[#0d7377]/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{t("sendUsMessage")}</h2>
                  <p className="text-sm text-muted-foreground">{t("respondWithin")}</p>
                </div>
              </div>

              {isSubmitted ? (
                <Card className="overflow-hidden animate-scale-in">
                  <CardContent className="p-12 text-center">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{t("messageSent")}</h3>
                    <p className="text-muted-foreground">{t("thankYouContact")}</p>
                  </CardContent>
                </Card>
              ) : (
                <Card className="overflow-hidden shadow-lg">
                  <div className="h-2 bg-gradient-to-r from-[#0d7377] to-amber-500" />
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-foreground">
                            {t("fullName")} *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            required
                            placeholder={t("yourName")}
                            className="h-12 bg-background"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-foreground">
                            {t("email")} *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder={t("yourEmail")}
                            className="h-12 bg-background"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-foreground">
                            {t("phoneNumber")}
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+252 612 XXX XXX"
                            className="h-12 bg-background"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject" className="text-foreground">
                            {t("subject")} *
                          </Label>
                          <Input
                            id="subject"
                            name="subject"
                            required
                            placeholder={t("howCanWeHelp")}
                            className="h-12 bg-background"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-foreground">
                          {t("message")} *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          placeholder={t("tellUsMore")}
                          className="min-h-[150px] bg-background resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        size="lg"
                        className="w-full h-12 bg-primary hover:bg-primary/90"
                      >
                        {isSubmitting ? (
                          t("sending")
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            {t("sendMessage")}
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Map & Info */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{t("visitOurCampus")}</h2>
                  <p className="text-sm text-muted-foreground">{t("comeSeeFacilities")}</p>
                </div>
              </div>

              <Card className="overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.27122371!2d45.3182!3d2.0469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d58425f1d0a8d73%3A0xf99b4a30e4d43fdf!2sHodan%2C%20Mogadishu%2C%20Somalia!5e0!3m2!1sen!2sus!4v1705000000000!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ablaal Schools Location"
                  className="rounded-t-lg"
                />
                <CardContent className="p-4 bg-gradient-to-br from-[#0d7377]/5 to-[#14919B]/5">
                  <p className="text-sm text-muted-foreground text-center">
                    Taleh Street, Hodan District, Mogadishu, Somalia
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Building className="h-6 w-6 text-primary" />
                    <h3 className="font-bold text-foreground">{t("ourBranches")}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3 stagger-children">
                    {branches.map((branch, index) => (
                      <div key={index} className="p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                        <p className="font-medium text-sm text-foreground">{branch.name}</p>
                        <p className="text-xs text-muted-foreground">{branch.district}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact Card */}
              <Card className="bg-gradient-to-br from-[#0d7377] to-[#14919B] text-white overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">{t("quickContact")}</h3>
                  <div className="space-y-4">
                    <a
                      href="tel:+252612277993"
                      className="flex items-center gap-3 hover:text-amber-400 transition-colors"
                    >
                      <Phone className="h-5 w-5" />
                      <span>+252 612 277 993</span>
                    </a>
                    <a
                      href="mailto:info@ablaalschools.so"
                      className="flex items-center gap-3 hover:text-amber-400 transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                      <span>info@ablaalschools.so</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
