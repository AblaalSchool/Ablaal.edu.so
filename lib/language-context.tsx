"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "so"

interface Translations {
  [key: string]: {
    en: string
    so: string
  }
}

export const translations: Translations = {
  // Navigation
  home: { en: "Home", so: "Bogga Hore" },
  about: { en: "About Us", so: "Nagu Saabsan" },
  admissions: { en: "Admissions", so: "Qalabsanaan" },
  academics: { en: "Academics", so: "Waxbarasho" },
  newsEvents: { en: "News & Events", so: "Warar & Munaasabadaha" },
  contactUs: { en: "Contact Us", so: "Nala Soo Xiriir" },

  // About subpages
  ourStory: { en: "Our Story", so: "Sheekadeena" },
  missionVision: { en: "Mission & Vision", so: "Hadaf & Aragtida" },
  leadership: { en: "Leadership", so: "Hogaaminta" },

  // Admissions
  howToApply: { en: "How to Apply", so: "Sida Loo Codsado" },
  applicationProcess: { en: "Application Process", so: "Habka Codsashada" },
  requirements: { en: "Admission Requirements", so: "Shuruudaha Qalabsanaanta" },
  tuitionFees: { en: "Tuition & Fees", so: "Kharashka & Lacagaha" },
  applyNow: { en: "Apply Now", so: "Hadda Codso" },
  startApplication: { en: "Start Your Application", so: "Bilow Codsigaaga" },

  // Academics
  primary: { en: "Primary", so: "Aasaasiga" },
  secondary: { en: "Secondary", so: "Sare" },

  // Home page
  heroTitle: { en: "Excellence in Education Since 1988", so: "Tayada Waxbarashada Tan iyo 1988" },
  heroSubtitle: {
    en: "Empowering Somali Youth to Lead the Future",
    so: "Awood-siinta Dhallinyarada Soomaaliyeed si ay u Hoggaamiyaan Mustaqbalka",
  },
  enrollNow: { en: "Enroll Now", so: "Hadda Isdiiwaangali" },
  learnMore: { en: "Learn More", so: "Wax Badan Baro" },
  whyChooseUs: { en: "Why Choose Ablaal Schools?", so: "Maxaa Ablaal Schools Loo Doorto?" },
  qualityEducation: { en: "Quality Education", so: "Waxbarasho Tayo Leh" },
  qualityEducationDesc: {
    en: "Comprehensive curriculum designed to develop well-rounded students",
    so: "Manhaj dhammaystiran oo loogu talagalay in lagu horumariyo ardayda si wanaagsan",
  },
  experiencedTeachers: { en: "Experienced Teachers", so: "Macallimiinta Khibradda Leh" },
  experiencedTeachersDesc: {
    en: "Dedicated educators committed to student success",
    so: "Barayaasha go'aanka leh ee u heellan guusha ardayda",
  },
  modernFacilities: { en: "Modern Facilities", so: "Xarumaha Casriga Ah" },
  modernFacilitiesDesc: {
    en: "Well-equipped classrooms and learning environments",
    so: "Fasallada iyo jawiga waxbarashada ee qalabka lagu qalabaysay",
  },
  islamicValues: { en: "Islamic Values", so: "Qiyamka Islaamka" },
  islamicValuesDesc: {
    en: "Education rooted in strong moral and Islamic principles",
    so: "Waxbarasho ku salaysan qiyamka anshaxa iyo Islaamka",
  },
  ourPrograms: { en: "Our Programs", so: "Barnaamijyadeena" },
  primarySchool: { en: "Primary School", so: "Dugsiga Aasaasiga" },
  secondarySchool: { en: "Secondary School", so: "Dugsiga Sare" },
  viewCurriculum: { en: "View Curriculum", so: "Arag Manhajka" },
  quickLinks: { en: "Quick Links", so: "Xiriirinta Degdega" },
  contactDetails: { en: "Contact Details", so: "Faahfaahinta Xiriirka" },
  followUs: { en: "Follow Us", so: "Na Raac" },
  workingHours: { en: "Working Hours", so: "Saacadaha Shaqada" },
  allRightsReserved: { en: "All rights reserved", so: "Dhammaan xuquuqda way xiran yihiin" },

  // Forms
  firstName: { en: "First Name", so: "Magaca Hore" },
  lastName: { en: "Last Name", so: "Magaca Dambe" },
  email: { en: "Email", so: "Iimaylka" },
  phone: { en: "Phone", so: "Telefoonka" },
  grade: { en: "Grade Applying For", so: "Fasalka La Codsanayo" },
  message: { en: "Message", so: "Fariin" },
  submit: { en: "Submit Application", so: "Dir Codsiga" },
  sendMessage: { en: "Send Message", so: "Dir Fariinta" },

  // Contact
  getInTouch: { en: "Get in Touch", so: "Nala Soo Xiriir" },
  address: { en: "Address", so: "Cinwaanka" },

  // News
  latestNews: { en: "Latest News & Events", so: "Wararka & Munaasabadaha Ugu Dambeeyay" },
  readMore: { en: "Read More", so: "Akhri Wax Badan" },

  // Stats
  yearsOfExcellence: { en: "Years of Excellence", so: "Sannadaha Tayada" },
  studentsGraduated: { en: "Students Graduated", so: "Ardayda Ka Qalin Jabisay" },
  expertTeachers: { en: "Expert Teachers", so: "Macallimiinta Khibradda Leh" },
  successRate: { en: "Success Rate", so: "Heerka Guusha" },

  // Additional Home Page
  ourStrengths: { en: "Our Strengths", so: "Awoodeena" },
  nurturingEnvironment: {
    en: "We provide a nurturing environment where students can excel academically while developing strong moral values.",
    so: "Waxaan bixinaa jawi wanaagsan oo ardaydu ku horumari karaan iyagoo horumarinaya qiyamka wanaagsan.",
  },
  educationPrograms: { en: "Education Programs", so: "Barnaamijyada Waxbarashada" },
  grades1to8: { en: "Grades 1-8", so: "Fasallada 1-8" },
  grades9to12: { en: "Grades 9-12", so: "Fasallada 9-12" },
  primaryDesc: {
    en: "Our primary program builds strong foundations in core subjects while nurturing creativity and critical thinking.",
    so: "Barnaamijka aasaasiga wuxuu dhisaa aasaas xoog leh iyagoo horumarinaya hal-abuurka iyo fikirka muhiimka ah.",
  },
  secondaryDesc: {
    en: "Preparing students for higher education and career success with advanced academic programs.",
    so: "Diyaarinta ardayda waxbarashada sare iyo guusha xirfadda barnaamijyada waxbarashada sare.",
  },

  // Founder Section
  founderMessage: { en: "Message from Founder", so: "Fariin Ka Timid Aasaasaha" },
  buildingLeaders: { en: "Building Tomorrow's Leaders Today", so: "Dhisida Hogaamiyeyaasha Berrito Maanta" },
  founderQuote: {
    en: "Education is the most powerful weapon which you can use to change the world. At Ablaal Schools, we are committed to nurturing young minds and building the future leaders of Somalia.",
    so: "Waxbarashadu waa hubka ugu xoogga badan ee aad ku bedeli karto adduunka. Ablaal Schools, waxaan u heellan nahay baraarujinta maskaxda dhallinyarada iyo dhisida hogaamiyeyaasha mustaqbalka Soomaaliya.",
  },
  founderDesc: {
    en: "Founded in 1988, Ablaal Schools has been at the forefront of quality education in Somalia, combining academic excellence with strong Islamic values.",
    so: "Waxaa la aasaasay 1988-kii, Ablaal Schools waxay horkacday waxbarashada tayada leh ee Soomaaliya, iyadoo isku daraysa tayada waxbarashada iyo qiyamka Islaamka.",
  },

  // CTA Section
  readyToJoin: { en: "Ready to Join the Ablaal Family?", so: "Ma Diyaar u Tahay Inaad Ku Biirto Qoyska Ablaal?" },
  ctaDesc: {
    en: "Take the first step towards academic excellence. Apply now and become part of our legacy of success.",
    so: "Qaad talaabada ugu horreysa ee tayada waxbarashada. Hadda codso oo noqo qayb ka mid ah taariikhddeena guusha.",
  },

  // Application Process
  whatToExpect: { en: "What to Expect", so: "Waxa La Filayo" },
  applicationTimeline: { en: "Application Timeline", so: "Jadwalka Codsiga" },
  totalEstimatedTime: {
    en: "Total estimated time: 1-2 weeks from application to enrollment",
    so: "Wadarta wakhtiga la qiyaasay: 1-2 toddobaad laga bilaabo codsiga ilaa isdiiwaangelinta",
  },
  readyToBegin: { en: "Ready to Begin?", so: "Ma Diyaar u Tahay Inaad Bilowdo?" },
  readyToBeginDesc: {
    en: "Start your application now and our admissions team will guide you through every step.",
    so: "Hadda bilow codsigaaga kooxdeena qalabsanaantu waxay ku hagayaan tallaabo kasta.",
  },

  // Phases
  phase1: { en: "Phase 1", so: "Marxalad 1" },
  phase2: { en: "Phase 2", so: "Marxalad 2" },
  phase3: { en: "Phase 3", so: "Marxalad 3" },
  phase4: { en: "Phase 4", so: "Marxalad 4" },
  applicationSubmission: { en: "Application Submission", so: "Gudbinta Codsiga" },
  documentReview: { en: "Document Review", so: "Dib U Eegista Dukumiintiyada" },
  interviewAssessment: { en: "Interview & Assessment", so: "Wareysiga & Qiimaynta" },
  decisionEnrollment: { en: "Decision & Enrollment", so: "Go'aanka & Isdiiwaangelinta" },

  // Tuition
  tuitionInfo: { en: "Tuition Information", so: "Macluumaadka Kharashka" },
  tuitionInfoDesc: {
    en: "For detailed information about tuition fees and payment options, please contact our admissions office directly.",
    so: "Macluumaad faahfaahsan oo ku saabsan kharashka waxbarashada iyo fursadaha lacag bixinta, fadlan la xiriir xafiiskeena qalabsanaanta si toos ah.",
  },
  affordableEducation: {
    en: "Affordable, quality education for every family. We believe in making education accessible.",
    so: "Waxbarasho tayo leh oo qoys walba u sahlan. Waxaan ku aaminsan nahay in waxbarashada la heli karo.",
  },
  perAcademicYear: { en: "Per Academic Year", so: "Sanadka Waxbarashada" },
  paymentOptions: { en: "Payment Options", so: "Fursadaha Lacag Bixinta" },
  paymentOptionsDesc: {
    en: "We offer flexible payment plans to accommodate different family situations. Contact our admissions office to discuss payment options including annual, semester, or monthly payment plans.",
    so: "Waxaan bixinaa qorshayaal lacag bixin oo dabacsanaan leh si loo waafajiyo xaaladaha kala duwan ee qoysaska. La xiriir xafiiska qalabsanaanta si aad uga wada hadasho fursadaha lacag bixinta oo ay ku jiraan qorshooyinka lacag bixinta sannadlaha, semester-ka, ama bishii.",
  },
  questionsAboutFees: { en: "Questions About Fees?", so: "Su'aalo Ku Saabsan Kharashka?" },
  questionsAboutFeesDesc: {
    en: "Our admissions team is here to help you understand all costs and payment options.",
    so: "Kooxdeena qalabsanaantu waa halkan si ay kaaga caawiyaan fahamka dhammaan kharashaadka iyo fursadaha lacag bixinta.",
  },

  // Academics
  curriculum: { en: "Curriculum", so: "Manhajka" },
  primarySubjects: { en: "Primary School Subjects", so: "Maaddooyinka Dugsiga Aasaasiga" },
  secondarySubjects: { en: "Secondary School Subjects", so: "Maaddooyinka Dugsiga Sare" },
  comprehensiveCurriculum: {
    en: "A comprehensive curriculum designed to develop well-rounded students",
    so: "Manhaj dhammaystiran oo loogu talagalay in lagu horumariyo ardayda si buuxda",
  },
  rigorousCurriculum: {
    en: "A rigorous curriculum preparing students for national examinations and higher education",
    so: "Manhaj adag oo ardayda u diyaarinaya imtixaannaadka qaranka iyo waxbarashada sare",
  },
  structure: { en: "Structure", so: "Qaab Dhismeedka" },
  gradeLevels: { en: "Grade Levels", so: "Heerarka Fasallada" },
  secondaryGradeLevels: { en: "Secondary Grade Levels", so: "Heerarka Fasallada Sare" },
  lowerPrimary: { en: "Lower Primary (Grades 1-4)", so: "Aasaasiga Hoose (Fasallada 1-4)" },
  upperPrimary: { en: "Upper Primary (Grades 5-8)", so: "Aasaasiga Sare (Fasallada 5-8)" },
  lowerSecondary: { en: "Lower Secondary (Grades 9-10)", so: "Sare Hoose (Fasallada 9-10)" },
  upperSecondary: { en: "Upper Secondary (Grades 11-12)", so: "Sare Sare (Fasallada 11-12)" },

  // Academic achievements section
  ourAchievements: { en: "Our Achievements", so: "Guulahayaga" },
  excellenceInExams: { en: "Excellence in National Examinations", so: "Tayada Imtixaanaadka Qaranka" },
  passRate: { en: "Pass Rate", so: "Heerka Gudbista" },
  universityAdmissions: { en: "University Admissions", so: "Qalabsanaanta Jaamacadda" },

  readyToEnroll: { en: "Ready to Enroll Your Child?", so: "Ma Diyaar u Tahay Inaad Isdiiwaangeliso Ilmahaaga?" },
  readyToEnrollDesc: {
    en: "Give your child the best start in education at Ablaal Schools.",
    so: "Sii ilmahaaga bilaabidda ugu wanaagsan ee waxbarashada Ablaal Schools.",
  },
  readyForExcellence: { en: "Ready for Academic Excellence?", so: "Ma Diyaar u Tahay Tayada Waxbarashada?" },
  readyForExcellenceDesc: {
    en: "Join our secondary program and prepare for a successful future.",
    so: "Ku biir barnaamijka sare oo u diyaar garow mustaqbal guuleysta.",
  },

  // Subjects
  englishLanguage: { en: "English Language", so: "Luqadda Ingiriisiga" },
  somaliLanguage: { en: "Somali Language", so: "Luqadda Soomaaliga" },
  mathematics: { en: "Mathematics", so: "Xisaabta" },
  science: { en: "Science", so: "Sayniska" },
  socialStudies: { en: "Social Studies", so: "Cilmiga Bulshada" },
  islamicStudies: { en: "Islamic Studies", so: "Diinta Islaamka" },
  physics: { en: "Physics", so: "Fiisigiska" },
  chemistry: { en: "Chemistry", so: "Kimistari" },
  biology: { en: "Biology", so: "Bayoloji" },
  geography: { en: "Geography & History", so: "Juqraafiyada & Taariikhda" },
  computerStudies: { en: "Computer Studies", so: "Cilmiga Kombiyuutarka" },
  businessStudies: { en: "Business Studies", so: "Cilmiga Ganacsiga" },
  arabicLanguage: { en: "Islamic Studies & Arabic", so: "Diinta Islaamka & Carabiga" },
  englishLiterature: { en: "English Language & Literature", so: "Luqadda Ingiriisiga & Suugaanta" },

  // Contact Page
  weLoveToHear: { en: "We'd Love to Hear From You", so: "Waxaan Jeclaan Lahayn Inaan Kaa Maqalno" },
  contactHeroDesc: {
    en: "Have questions about admissions, academics, or anything else? Our team is here to help you every step of the way.",
    so: "Ma qabtaa su'aalo ku saabsan qalabsanaanta, waxbarashada, ama wax kasta oo kale? Kooxdayadu waa halkan si ay kaaga caawiyaan tallaabo kasta.",
  },
  sendUsMessage: { en: "Send Us a Message", so: "Noo Dir Fariin" },
  respondWithin: { en: "We'll respond within 24 hours", so: "Waxaan kaaga jawaabi doonaa 24 saac gudahood" },
  fullName: { en: "Full Name", so: "Magaca Buuxa" },
  yourName: { en: "Your name", so: "Magacaaga" },
  yourEmail: { en: "your@email.com", so: "iimaylkaaga@email.com" },
  phoneNumber: { en: "Phone Number", so: "Lambarkaaga Telefoonka" },
  subject: { en: "Subject", so: "Mawduuca" },
  howCanWeHelp: { en: "How can we help?", so: "Sideen kaaga caawin karnaa?" },
  tellUsMore: { en: "Tell us more about your inquiry...", so: "Noo sheeg wax badan oo ku saabsan su'aashaada..." },
  messageSent: { en: "Message Sent!", so: "Fariinta Waa La Diray!" },
  thankYouContact: {
    en: "Thank you for contacting us. We will get back to you soon.",
    so: "Waad ku mahadsan tahay inaad nala soo xiriirtay. Waxaan kugu soo noqon doonaa dhawaan.",
  },
  sending: { en: "Sending...", so: "Waa la diraya..." },
  visitOurCampus: { en: "Visit Our Campus", so: "Booqo Xarunkeena" },
  comeSeeFacilities: { en: "Come see our facilities in person", so: "Kaalay arag xarumaha si shakhsi ah" },
  quickContact: { en: "Quick Contact", so: "Xiriir Degdeg Ah" },
  ourBranches: { en: "Our Branches", so: "Laamahayaga" },

  // News Page
  featuredNews: { en: "Featured", so: "Muhiimka" },
  recentNews: { en: "Recent News", so: "Wararka Dhawaan" },
  upcomingEvents: { en: "Upcoming Events", so: "Munaasabadaha Soo Socda" },
  stayUpdated: { en: "Stay Updated", so: "La Soco Wararka" },
  stayUpdatedDesc: {
    en: "Keep up with the latest happenings at Ablaal Schools",
    so: "La soco dhacdooyinka ugu dambeeyay ee Ablaal Schools",
  },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[key]?.[language] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
