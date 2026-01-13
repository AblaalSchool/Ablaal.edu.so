"use client"

import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center">
      <button
        onClick={() => setLanguage(language === "en" ? "so" : "en")}
        className="relative flex items-center gap-2 bg-muted rounded-full p-1 transition-all hover:bg-muted/80"
        aria-label={language === "en" ? "Switch to Somali" : "Switch to English"}
      >
        {/* Left flag (UK) */}
        <div
          className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
            language === "en" ? "bg-primary shadow-md scale-110" : "opacity-60"
          }`}
        >
          <Image src="/uk-flag.png" alt="English" width={20} height={14} className="rounded-sm" />
        </div>

        {/* Right flag (Somalia) */}
        <div
          className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
            language === "so" ? "bg-primary shadow-md scale-110" : "opacity-60"
          }`}
        >
          <Image
            src="/somalia-flag-light-blue-with-white-star.jpg"
            alt="Soomaali"
            width={20}
            height={14}
            className="rounded-sm"
          />
        </div>
      </button>
    </div>
  )
}
