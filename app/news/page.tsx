"use client"

import Image from "next/image"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function NewsPage() {
  const { t } = useLanguage()

  const news = [
    {
      title: "2026 Academic Year Registration Now Open",
      date: "January 10, 2026",
      category: "Admissions",
      excerpt:
        "We are pleased to announce that registration for the 2026 academic year is now open. Early registration is encouraged.",
      image: "/images/Adayda.jpg",
      featured: true,
    },
    {
      title: "Annual Sports Day Celebration",
      date: "December 15, 2025",
      category: "Events",
      excerpt:
        "Students showcased their athletic talents in our annual sports day celebration with various competitions.",
      image: "/students-playing-sports.jpg",
      featured: false,
    },
    /* {
      title: "Science Fair Winners Announced",
      date: "November 28, 2025",
      category: "Academics",
      excerpt: "Congratulations to all participants and winners of our annual science fair competition.",
      image: "/science-fair-projects.jpg",
      featured: false,
    },
    */
   /* {
      title: "New Computer Lab Inauguration",
      date: "November 10, 2025",
      category: "Facilities",
      excerpt: "We are excited to announce the opening of our new state-of-the-art computer laboratory.",
      image: "/modern-computer-lab.jpg",
      featured: false,
    },
    */
  ]

  const upcomingEvents = [
    /*
    {
      title: "Parent-Teacher Conference",
      date: "January 25, 2026",
      time: "9:00 AM - 4:00 PM",
    },
    {
      title: "Cultural Day Celebration",
      date: "February 10, 2026",
      time: "8:00 AM - 2:00 PM",
    },
    {
      title: "Inter-School Quiz Competition",
      date: "February 20, 2026",
      time: "10:00 AM - 1:00 PM",
    },
    {
      title: "Career Guidance Workshop",
      date: "March 5, 2026",
      time: "11:00 AM - 3:00 PM",
    },
    */
  ]

  const featuredNews = news.find((item) => item.featured)
  const otherNews = news.filter((item) => !item.featured)

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
            <span className="text-amber-400 font-medium mb-2 block">{t("stayUpdated")}</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("latestNews")}</h1>
            <p className="text-lg text-white/90">{t("stayUpdatedDesc")}</p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews && (
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <Card className="overflow-hidden group hover:shadow-xl transition-all animate-slide-up">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-[300px] md:h-auto overflow-hidden">
                    <Image
                      src={featuredNews.image || "/placeholder.svg"}
                      alt={featuredNews.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 left-4 bg-amber-500">{t("featuredNews")}</Badge>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <Badge variant="outline" className="w-fit mb-4">
                      {featuredNews.category}
                    </Badge>
                    <h2 className="text-2xl font-bold text-foreground mb-4">{featuredNews.title}</h2>
                    <p className="text-muted-foreground mb-4">{featuredNews.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {featuredNews.date}
                      </span>
                    </div>
                      <Button className="w-fit bg-primary hover:bg-primary/90">
                      {t("readMore")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* News & Events Grid */}
      <section className="py-12 bg-[#0d7377]/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* News Column */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-6 animate-fade-in">{t("recentNews")}</h2>
              <div className="grid sm:grid-cols-2 gap-6 stagger-children">
                {otherNews.map((item, index) => (
                  <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-5">
                      <Badge variant="outline" className="mb-3">
                        {item.category}
                      </Badge>
                      <h3 className="font-bold text-foreground mb-2 line-clamp-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{item.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {item.date}
                        </span>
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/90">
                          {t("readMore")}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Events Sidebar */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6 animate-fade-in">{t("upcomingEvents")}</h2>
              <Card className="animate-slide-up">
                <CardContent className="p-0">
                  {upcomingEvents.map((event, index) => (
                    <div
                      key={index}
                      className={`p-5 hover:bg-muted/50 transition-colors ${index !== upcomingEvents.length - 1 ? "border-b border-border" : ""}`}
                    >
                      <h3 className="font-bold text-foreground mb-2">{event.title}</h3>
                      <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          {event.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* School Calendar Card */}
              <Card
                className="mt-6 bg-gradient-to-br from-[#0d7377] to-[#14919B] text-white animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                <CardContent className="p-6 text-center">
                  <Calendar className="h-12 w-12 mx-auto mb-4 text-amber-400 animate-float" />
                  <h3 className="font-bold text-lg mb-2">{t("schoolCalendar")}</h3>
                  <p className="text-sm text-white/80 mb-4">
                    {t("downloadCalendarDesc")}
                  </p>
                  <Button variant="secondary" size="sm" className="bg-white text-primary hover:bg-white/90">
                    {t("downloadCalendar")}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
