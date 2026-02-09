"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-[#0d7377] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/ablaal-20school-20logo.jpg"
                alt="Ablaal Schools Logo"
                width={60}
                height={60}
                className="rounded-full bg-white p-1"
              />
              <div>
                <h3 className="font-bold text-lg">Ablaal Schools</h3>
                <p className="text-sm text-white/80">{t("heroTitle")}</p>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Ablaal Schools: A legacy of academic excellence and affordable education, serving the Somali community
              since 1988.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t("quickLinks")}</h4>
            <nav className="space-y-2">
              <Link href="/" className="block text-white/80 hover:text-amber-400 transition-colors">
                {t("home")}
              </Link>
              <Link href="/about/story" className="block text-white/80 hover:text-amber-400 transition-colors">
                {t("about")}
              </Link>
              <Link
                href="/admissions/how-to-apply"
                className="block text-white/80 hover:text-amber-400 transition-colors"
              >
                {t("admissions")}
              </Link>
              <Link href="/academics/primary" className="block text-white/80 hover:text-amber-400 transition-colors">
                {t("academics")}
              </Link>
              <Link href="/news" className="block text-white/80 hover:text-amber-400 transition-colors">
                {t("newsEvents")}
              </Link>
              <Link href="/contact" className="block text-white/80 hover:text-amber-400 transition-colors">
                {t("contactUs")}
              </Link>
            </nav>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t("contactDetails")}</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-white/80">
                  <p>+252 612 277 993</p>
                  <p>+252 612 461 112</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <p className="text-sm text-white/80">info@ablaalschools.so</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-white/80">
                  Taleh Street, Hodan District,
                  <br />
                  Mogadishu, Somalia
                </p>
              </div>
            </div>
          </div>

          {/* Follow Us & Working Hours */}
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg mb-4">{t("followUs")}</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/Ablaalschools"
                  className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-amber-400 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-amber-400 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-amber-400 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">{t("workingHours")}</h4>
              <p className="text-sm text-white/80">Saturday - Thursday</p>
              <p className="text-sm text-white/80">7:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm text-white/60">© 1988-2026 Ablaal Schools. {t("allRightsReserved")}.</p>
        </div>
      </div>
    </footer>
  )
}
