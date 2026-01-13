"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { LanguageSwitcher } from "./language-switcher"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/ablaal-20school-20logo.jpg"
            alt="Ablaal Schools Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-primary">Ablaal Schools</h1>
            <p className="text-xs text-muted-foreground">{t("heroTitle")}</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            {t("home")}
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
              {t("about")} <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/about/story">{t("ourStory")}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/about/mission">{t("missionVision")}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/about/leadership">{t("leadership")}</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
              {t("admissions")} <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/admissions/how-to-apply">{t("howToApply")}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/admissions/process">{t("applicationProcess")}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/admissions/requirements">{t("requirements")}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/admissions/tuition">{t("tuitionFees")}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/admissions/apply">{t("applyNow")}</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
              {t("academics")} <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/academics/primary">{t("primary")}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/academics/secondary">{t("secondary")}</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/news" className="text-sm font-medium hover:text-primary transition-colors">
            {t("newsEvents")}
          </Link>

          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            {t("contactUs")}
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Button asChild className="hidden md:inline-flex bg-primary hover:bg-primary/90">
            <Link href="/admissions/apply">{t("applyNow")}</Link>
          </Button>

          {/* Mobile menu button */}
          <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link href="/" className="block py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              {t("home")}
            </Link>

            <div className="space-y-2">
              <p className="text-sm font-semibold text-primary">{t("about")}</p>
              <div className="pl-4 space-y-2">
                <Link
                  href="/about/story"
                  className="block py-1 text-sm text-muted-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("ourStory")}
                </Link>
                <Link
                  href="/about/mission"
                  className="block py-1 text-sm text-muted-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("missionVision")}
                </Link>
                <Link
                  href="/about/leadership"
                  className="block py-1 text-sm text-muted-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("leadership")}
                </Link>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-semibold text-primary">{t("admissions")}</p>
              <div className="pl-4 space-y-2">
                <Link
                  href="/admissions/how-to-apply"
                  className="block py-1 text-sm text-muted-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("howToApply")}
                </Link>
                <Link
                  href="/admissions/process"
                  className="block py-1 text-sm text-muted-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("applicationProcess")}
                </Link>
                <Link
                  href="/admissions/requirements"
                  className="block py-1 text-sm text-muted-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("requirements")}
                </Link>
                <Link
                  href="/admissions/tuition"
                  className="block py-1 text-sm text-muted-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("tuitionFees")}
                </Link>
                <Link
                  href="/admissions/apply"
                  className="block py-1 text-sm text-muted-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("applyNow")}
                </Link>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-semibold text-primary">{t("academics")}</p>
              <div className="pl-4 space-y-2">
                <Link
                  href="/academics/primary"
                  className="block py-1 text-sm text-muted-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("primary")}
                </Link>
                <Link
                  href="/academics/secondary"
                  className="block py-1 text-sm text-muted-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("secondary")}
                </Link>
              </div>
            </div>

            <Link href="/news" className="block py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              {t("newsEvents")}
            </Link>

            <Link href="/contact" className="block py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              {t("contactUs")}
            </Link>

            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <Link href="/admissions/apply" onClick={() => setMobileMenuOpen(false)}>
                {t("applyNow")}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
