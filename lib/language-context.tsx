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
  since1988: { en: "Since 1988", so: "Tan iyo 1988" },
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

  // ===== OUR STORY PAGE =====
  storyHeroDesc: {
    en: "Discover the journey of Ablaal Schools - from a small educational initiative to one of Somalia's most respected institutions.",
    so: "Ogaado safarka Ablaal Schools - laga bilaabo mashruuc waxbarasho yar ilaa mid ka mid ah hay'adaha ugu sharafta badan ee Soomaaliya.",
  },
  legacyOfExcellence: { en: "A Legacy of Excellence", so: "Taariikhda Tayada" },
  storyParagraph1: {
    en: "Ablaal Schools was founded in 1988 with a vision to provide quality education to the children of Somalia. What started as a small school with just a handful of students has grown into one of the most respected educational institutions in the country.",
    so: "Ablaal Schools waxaa la aasaasay 1988-kii ayadoo leh aragtida in la siiyo waxbarasho tayo leh carruurta Soomaaliya. Waxaa bilaabmay dugsi yar oo aan lahayn ardayda tiro badan wuxuuna noqday mid ka mid ah hay'adaha waxbarashada ugu sharafta badan dalka.",
  },
  storyParagraph2: {
    en: "Throughout the decades, we have remained committed to our founding principles: academic excellence, Islamic values, and community service. Our dedication to these principles has helped us navigate through challenging times while maintaining our focus on student success.",
    so: "Tobannaan sano gudahood, waxaan ku sii adkeynay mabaadi'deena aasaasiga ah: tayada waxbarashada, qiyamka Islaamka, iyo adeegga bulshada. U heellanaanteena mabaadi'dan waxay naga caawisay inaan ka gudubno xilliyada adag anagoo ilaalinayno diiraddeena guusha ardayda.",
  },
  storyParagraph3: {
    en: "Today, Ablaal Schools stands as a beacon of hope and opportunity, offering primary and secondary education to thousands of students who dream of a brighter future.",
    so: "Maanta, Ablaal Schools waxay u taagan tahay iftiinka rajada iyo fursadda, iyadoo siisa waxbarasho aasaasi ah iyo sare kumaan ardayda riyoonaysa mustaqbal iftiimin.",
  },
  theFounder: { en: "The Founder", so: "Aasaasaha" },
  visionTransformed: { en: "A Vision That Transformed Education", so: "Aragti Bedeshay Waxbarashada" },
  founderStoryQuote: {
    en: "When I started Ablaal Schools in 1988, my dream was simple - to give every child access to quality education. Today, seeing thousands of our graduates succeed in various fields fills me with immense pride and gratitude.",
    so: "Markaan bilaabay Ablaal Schools 1988-kii, riyaddaydu way fududayd - in la siiyo ilmo walba waxbarasho tayo leh. Maanta, arkideeda kumaan ka mid ah ardaydii ka qalin jabisay oo ku guuleysta meelaha kala duwan waxay igu buuxisaa sharaf iyo mahad weyn.",
  },
  founderStoryDesc: {
    en: "Our founder's unwavering commitment to education has been the driving force behind Ablaal Schools' success. His vision continues to guide our mission of nurturing tomorrow's leaders.",
    so: "U heellanaanta aasaasahayaga ee aan is-beddelin ee waxbarashada ayaa ahayd xoogga dhaqdhaqaaqa guusha Ablaal Schools. Aragtidiisa waxay sii waddaa inay hagto howlgalkeena baraarujinta hogaamiyeyaasha berrito.",
  },
  meetOurLeadership: { en: "Meet Our Leadership", so: "La Kulan Hogaaminteena" },
  ourJourney: { en: "Our Journey", so: "Safarkayaga" },
  milestonesTitle: { en: "Milestones Through the Years", so: "Guulaha Sannadaha" },
  bePartOfStory: { en: "Be Part of Our Story", so: "Noqo Qayb Ka Mid Ah Sheekadeena" },
  bePartOfStoryDesc: {
    en: "Join the thousands of families who have trusted Ablaal Schools with their children's education.",
    so: "Ku biir kumaananka qoysas ee aaminsanaa Ablaal Schools waxbarashada carruurtooda.",
  },
  // Story milestones
  milestone1988: { en: "Ablaal Schools founded in Mogadishu", so: "Ablaal Schools waxaa laga aasaasay Muqdisho" },
  milestone1995: { en: "Expanded to secondary education", so: "Waxaa la balaariyay waxbarashada sare" },
  milestone2005: { en: "Graduated 1000th student", so: "Ardaygii 1000-aad ayaa ka qalin jabisay" },
  milestone2015: { en: "Modernized facilities and curriculum", so: "Casriyeynta xarumaha iyo manhajka" },
  milestone2024: { en: "Celebrating 36 years of excellence", so: "Xusidda 36 sano oo tayo ah" },

  // ===== MISSION & VISION PAGE =====
  missionVisionHeroDesc: {
    en: "Our mission and vision guide everything we do at Ablaal Schools, shaping the future of education in Somalia.",
    so: "Hadafkeena iyo aragtideenu waxay hagaan wax kasta oo aan ku samayno Ablaal Schools, iyadoo qaabaysa mustaqbalka waxbarashada Soomaaliya.",
  },
  ourMission: { en: "Our Mission", so: "Hadafkeena" },
  missionDescription: {
    en: "To provide accessible, high-quality education that combines academic excellence with Islamic values, empowering students to become knowledgeable, ethical, and responsible citizens who contribute positively to their communities and the world.",
    so: "In la bixiyo waxbarasho tayo sare leh oo la heli karo oo isku dareysa tayada waxbarashada iyo qiyamka Islaamka, awood-siinta ardayda inay noqdaan muwaadiniinta aqoonta, anshaxa, iyo mas'uuliyadda leh ee si togan ugu deeqda bulshada iyo adduunka.",
  },
  weAreCommittedTo: { en: "We are committed to:", so: "Waxaan u heellan nahay:" },
  deliveringExcellence: { en: "Delivering excellence in education", so: "Bixinta tayada waxbarashada" },
  nurturingMoralGrowth: { en: "Nurturing moral and spiritual growth", so: "Horumarinta korriinka anshaxa iyo ruuxa" },
  buildingFutureLeaders: { en: "Building future leaders", so: "Dhisida hogaamiyeyaasha mustaqbalka" },
  ourVision: { en: "Our Vision", so: "Aragtideena" },
  visionDescription: {
    en: "To be the leading educational institution in Somalia, recognized for producing graduates who excel academically, embody strong moral character, and drive positive change in society through their leadership and service.",
    so: "Inaan noqono hay'adda waxbarashada ee hormuudka u ah Soomaaliya, oo lagu yaqaanno soo saarista ardayda ka qalin jabisay oo ku fiican waxbarashada, leh dabeecad anshax fiican, oo waddaya isbeddel togan oo bulshada ah iyagoo adeegsanaya hogaamintooda iyo adeeggooda.",
  },
  weAspireTo: { en: "We aspire to:", so: "Waxaan rajaynaynaa:" },
  setStandard: { en: "Set the standard for education in Somalia", so: "Dejinta heerka waxbarashada Soomaaliya" },
  inspireLifelongLearning: { en: "Inspire lifelong learning", so: "Dhiirrigelinta waxbarashada nolosha oo dhan" },
  createGlobalCitizens: { en: "Create global citizens", so: "Abuurista muwaadiniinta caalamka" },
  whatGuidesUs: { en: "What Guides Us", so: "Waxa Na Haga" },
  ourCoreValues: { en: "Our Core Values", so: "Qiyamkeena Aasaasiga Ah" },
  academicExcellence: { en: "Academic Excellence", so: "Tayada Waxbarashada" },
  academicExcellenceDesc: {
    en: "Striving for the highest standards in education and learning outcomes.",
    so: "Ku dadaalka heerka ugu sarreeya ee waxbarashada iyo natiijada barashada.",
  },
  islamicValuesValue: { en: "Islamic Values", so: "Qiyamka Islaamka" },
  islamicValuesValueDesc: {
    en: "Grounding education in strong moral and spiritual principles.",
    so: "Ku salaysa waxbarashada mabaadi'da xooggan ee anshaxa iyo ruuxa.",
  },
  communityService: { en: "Community Service", so: "Adeegga Bulshada" },
  communityServiceDesc: {
    en: "Developing responsible citizens who contribute to society.",
    so: "Horumarinta muwaadiniinta mas'uuliyadda leh ee ka qayb gala bulshada.",
  },
  innovation: { en: "Innovation", so: "Hal-abuur" },
  innovationDesc: {
    en: "Embracing modern teaching methods and technologies.",
    so: "Aqbalista habab casri ah oo wax-barista iyo tignoolajiyada.",
  },
  integrity: { en: "Integrity", so: "Daacadnimo" },
  integrityDesc: {
    en: "Maintaining honesty and transparency in all our endeavors.",
    so: "Ilaalinta daacadnimada iyo hufnaanta dhammaan hawlaheena.",
  },
  globalPerspective: { en: "Global Perspective", so: "Aragtida Caalamiga Ah" },
  globalPerspectiveDesc: {
    en: "Preparing students for success in an interconnected world.",
    so: "Diyaarinta ardayda guusha adduunka isku xiran.",
  },
  missionQuote: {
    en: "Education is not preparation for life; education is life itself. At Ablaal Schools, we live this truth every day.",
    so: "Waxbarashadu maaha diyaarinta nolosha; waxbarashadu waa nolosha lafteeda. Ablaal Schools, waxaan ku nool nahay runta maalin walba.",
  },
  foundingPhilosophy: { en: "Founding Philosophy of Ablaal Schools", so: "Falsafada Aasaasiga ee Ablaal Schools" },

  // ===== LEADERSHIP PAGE =====
  leadershipHeroDesc: {
    en: "Meet the dedicated team that leads Ablaal Schools towards excellence in education.",
    so: "La kulan kooxda go'aanka leh ee hogaaaminaysa Ablaal Schools tayada waxbarashada.",
  },
  ourFounder: { en: "Our Founder", so: "Aasaasahayaga" },
  visionaryBehind: { en: "The Visionary Behind Ablaal Schools", so: "Aragtilaha Ka Dambeeya Ablaal Schools" },
  founderChairman: { en: "Founder & Chairman", so: "Aasaasaha & Guddoomiyaha" },
  leadershipFounderDesc1: {
    en: "Since founding Ablaal Schools in 1988, our visionary founder has dedicated his life to transforming education in Somalia. His commitment to providing quality, affordable education has impacted thousands of families and shaped the future of countless students.",
    so: "Tan iyo markii uu aasaasay Ablaal Schools 1988-kii, aasaasahayaga aragtilaha ah wuxuu u hiibay nolosha beddelka waxbarashada Soomaaliya. U heellanaantiisa bixinta waxbarasho tayo leh oo la awoodo waxay saameysay kumaananka qoysas waxayna qaabaysay mustaqbalka ardaydo tiro badan.",
  },
  leadershipFounderDesc2: {
    en: "Under his guidance, Ablaal Schools has grown from a small school to one of the most respected educational institutions in Somalia, producing graduates who excel in various fields both nationally and internationally.",
    so: "Hogaamintiisa hoostiisa, Ablaal Schools waxay ka kordhay dugsi yar ilaa mid ka mid ah hay'adaha waxbarashada ugu sharafta badan ee Soomaaliya, iyadoo soo saartay ardayda ka qalin jabisay oo ku guuleysta meelaha kala duwan ee qaran iyo caalami ba.",
  },
  schoolLeadership: { en: "School Leadership", so: "Hogaaminta Dugsiga" },
  principalsDirectors: { en: "Our Principals & Directors", so: "Maamulayaasheena & Agaasimayaasha" },
  principalsDesc: {
    en: "Experienced educators dedicated to maintaining the highest standards of academic excellence.",
    so: "Barayaasha khibradda leh ee u heellan ilaalinta heerka ugu sarreeya ee tayada waxbarashada.",
  },
  leadershipQuote: {
    en: "Our leadership is built on the foundation of service, dedication, and an unwavering commitment to student success. Together, we shape the future of Somalia, one student at a time.",
    so: "Hogaaminteenu waxay ku dhisan tahay aasaaska adeegga, go'aanka, iyo u heellanaanta aan is-beddelin ee guusha ardayda. Wadajir, waxaan qaabaynaynaa mustaqbalka Soomaaliya, hal arday markii.",
  },
  leadershipTeamQuoteAuthor: { en: "The Leadership Team of Ablaal Schools", so: "Kooxda Hogaaminta ee Ablaal Schools" },
  // Leadership team members
  principalPrimary: { en: "Principal - Primary School", so: "Maamulaha - Dugsiga Aasaasiga" },
  principalPrimaryDesc: {
    en: "Leading our primary education with 15 years of experience in curriculum development.",
    so: "Hogaaminta waxbarashaddeena aasaasiga 15 sano oo khibrad ah oo horumarinta manhajka.",
  },
  principalSecondary: { en: "Principal - Secondary School", so: "Maamulaha - Dugsiga Sare" },
  principalSecondaryDesc: {
    en: "Expert in secondary education with focus on preparing students for higher education.",
    so: "Khabiir ku takhasusay waxbarashada sare isagoo diiradda saaraya diyaarinta ardayda waxbarashada jaamacadda.",
  },
  academicDirector: { en: "Academic Director", so: "Agaasimaha Waxbarashada" },
  academicDirectorDesc: {
    en: "Overseeing curriculum standards and academic excellence across all programs.",
    so: "Kormeerka heerka manhajka iyo tayada waxbarashada dhammaan barnaamijyada.",
  },
  studentAffairsDirector: { en: "Student Affairs Director", so: "Agaasimaha Arrimaha Ardayda" },
  studentAffairsDirectorDesc: {
    en: "Dedicated to student welfare and creating a supportive learning environment.",
    so: "U heellan caafimaadka ardayda iyo abuurista jawi waxbarasho oo taageero leh.",
  },
  operationsDirector: { en: "Operations Director", so: "Agaasimaha Howlgallada" },
  operationsDirectorDesc: {
    en: "Ensuring smooth operations and maintaining our facilities to the highest standards.",
    so: "Hubinta habsami-socodka iyo ilaalinta xarumaheena heerka ugu sarreeya.",
  },

  // ===== PRIMARY ACADEMICS PAGE =====
  primaryHeroDesc: {
    en: "Building strong foundations for lifelong learning. Our primary program (Grades 1-8) focuses on developing essential skills in a nurturing environment.",
    so: "Dhisida aasaas xoog leh ee waxbarashada nolosha. Barnaamijkeena aasaasiga (Fasallada 1-8) wuxuu diiradda saaraa horumarinta xirfadaha muhiimka ah jawi wanaagsan.",
  },
  classSize: { en: "Class Size", so: "Tirada Fasalka" },
  studentsMax25: { en: "25 Students Max", so: "Ugu badnaan 25 Arday" },
  teacherRatio: { en: "Teacher Ratio", so: "Saamiga Macallinka" },
  duration: { en: "Duration", so: "Muddada" },
  years8: { en: "8 Years", so: "8 Sano" },
  languages: { en: "Languages", so: "Luuqadaha" },
  englishSomali: { en: "English & Somali", so: "Ingiriisi & Soomaali" },
  readingWriting: { en: "Reading, writing, grammar, and communication skills", so: "Akhriska, qoraalka, naxwaha, iyo xirfadaha isgaarsiinta" },
  nativeLanguage: { en: "Native language mastery and literature", so: "Xirfadaha luqadda hooyo iyo suugaanta" },
  numbersArithmetic: { en: "Numbers, arithmetic, geometry, and problem-solving", so: "Nambarrada, xisaabta, joometriyada, iyo xallinta dhibaatooyinka" },
  basicSciences: { en: "Basic sciences, nature studies, and experiments", so: "Sayniska aasaasiga, daraasadda dabiiciga, iyo tijaabooyin" },
  historyCivic: { en: "History, geography, and civic education", so: "Taariikhda, juqraafiyada, iyo waxbarashada madaniga" },
  quranIslamic: { en: "Quran, Islamic principles, and Arabic basics", so: "Quraanka, mabaadi'da Islaamka, iyo aasaaska Carabiga" },
  foundationLiteracy: { en: "Foundation literacy and numeracy skills", so: "Xirfadaha aasaasiga akhris iyo xisaab" },
  introBasicSciences: { en: "Introduction to basic sciences and social studies", so: "Hordhac sayniska aasaasiga iyo cilmiga bulshada" },
  characterDevelopment: { en: "Character development and Islamic values", so: "Horumarinta dabeecadda iyo qiyamka Islaamka" },
  advancedLanguage: { en: "Advanced language and communication skills", so: "Xirfadaha luqadda sare iyo isgaarsiinta" },
  preAlgebra: { en: "Pre-algebra and geometry", so: "Aljabrada hore iyo joometriyada" },
  comprehensiveScience: { en: "Comprehensive science curriculum", so: "Manhajka sayniska dhammaystiran" },
  prepSecondary: { en: "Preparation for secondary education", so: "Diyaarinta waxbarashada sare" },

  // ===== SECONDARY ACADEMICS PAGE =====
  secondaryHeroDesc: {
    en: "Preparing students for higher education and career success. Our secondary program (Grades 9-12) offers advanced academics and practical skills.",
    so: "Diyaarinta ardayda waxbarashada sare iyo guusha xirfadda. Barnaamijkeena sare (Fasallada 9-12) wuxuu bixiyaa waxbarasho sare iyo xirfado waxtar leh.",
  },
  studentsMax30: { en: "30 Students Max", so: "Ugu badnaan 30 Arday" },
  years4: { en: "4 Years", so: "4 Sano" },
  certification: { en: "Certification", so: "Shahaado" },
  nationalExams: { en: "National Exams", so: "Imtixaannaadka Qaranka" },
  advancedReading: { en: "Advanced reading, writing, and literary analysis", so: "Akhriska sare, qoraalka, iyo falanqaynta suugaanta" },
  advancedSomali: { en: "Advanced Somali literature and composition", so: "Suugaanta Soomaaliga sare iyo qoraalka" },
  algebraCalculus: { en: "Algebra, calculus, statistics, and advanced math", so: "Aljabrada, kaalkulaska, tirakoobka, iyo xisaabta sare" },
  mechanicsElectricity: { en: "Mechanics, electricity, waves, and modern physics", so: "Mishiinnada, korontada, mowjadaha, iyo fiisigiska casriga" },
  organicChemistry: { en: "Organic, inorganic, and physical chemistry", so: "Kimistari noolaha, aan noolaha ahayn, iyo jireed" },
  lifeSciences: { en: "Life sciences, anatomy, and environmental biology", so: "Sayniska nolosha, anatomy-ga, iyo bayolojiga deegaanka" },
  worldGeography: { en: "World geography, Somali and world history", so: "Juqraafiyada adduunka, taariikhda Soomaaliya iyo adduunka" },
  advancedIslamic: { en: "Advanced Islamic knowledge and Arabic language", so: "Aqoonta sare ee Islaamka iyo luqadda Carabiga" },
  digitalLiteracy: { en: "Digital literacy, programming basics", so: "Aqoonta dhijitaalka, aasaaska barnaamijka" },
  economicsAccounting: { en: "Economics, accounting, and entrepreneurship", so: "Dhaqaalaha, xisaabaha, iyo ganacsatoonimada" },
  coreSubjects: { en: "Core subjects in sciences and humanities", so: "Maaddooyinka udubka sayniska iyo bulshada" },
  introSpecialized: { en: "Introduction to specialized subjects", so: "Hordhac maaddooyinka takhasusga" },
  careerGuidance: { en: "Career guidance and exploration", so: "Hanuuninta xirfadda iyo sahamin" },
  foundationNational: { en: "Foundation for national examinations", so: "Aasaaska imtixaannaadka qaranka" },
  advancedSpecialization: { en: "Advanced subject specialization", so: "Takhasusga maaddada sare" },
  intensiveExamPrep: { en: "Intensive exam preparation", so: "Diyaarinta imtixaanka oo xooggan" },
  universitySupport: { en: "University application support", so: "Taageerada codsiga jaamacadda" },
  leadershipServicePrograms: { en: "Leadership and service programs", so: "Barnaamijyada hogaaminta iyo adeegga" },

  // ===== HOW TO APPLY PAGE =====
  applicationProcessLabel: { en: "Application Process", so: "Habka Codsashada" },
  sixSimpleSteps: { en: "Six Simple Steps to Enrollment", so: "Lix Talaabo Oo Fudud Oo Isdiiwaangelinta Ah" },
  followSimpleProcess: {
    en: "Follow our simple admission process to join the Ablaal Schools family.",
    so: "Raac habkeena fudud ee qalabsanaanta si aad ugu biirto qoyska Ablaal Schools.",
  },
  reviewRequirements: { en: "Review Requirements", so: "Dib U Eeg Shuruudaha" },
  reviewRequirementsDesc: {
    en: "Check the admission requirements for your desired grade level.",
    so: "Hubi shuruudaha qalabsanaanta fasalka aad rabto.",
  },
  completeApplication: { en: "Complete Application", so: "Dhammaystir Codsiga" },
  completeApplicationDesc: {
    en: "Fill out the online application form with accurate information.",
    so: "Buuxi foomka codsiga ee khadka tooska ah macluumaad sax ah.",
  },
  submitDocuments: { en: "Submit Documents", so: "Gudbi Dukumiintiyada" },
  submitDocumentsDesc: {
    en: "Upload required documents including previous school records.",
    so: "Soo geli dukumiintiyada loo baahan yahay oo ay ku jiraan diiwaangelinta dugsigii hore.",
  },
  interview: { en: "Interview", so: "Wareysiga" },
  interviewDesc: {
    en: "Attend an interview with our admissions team.",
    so: "Ka qayb gal wareysiga kooxda qalabsanaanta.",
  },
  awaitDecision: { en: "Await Decision", so: "Sug Go'aanka" },
  awaitDecisionDesc: {
    en: "Receive admission decision within 2 weeks of interview.",
    so: "Hel go'aanka qalabsanaanta 2 toddobaad gudahood wareysiga.",
  },
  enroll: { en: "Enroll", so: "Isdiiwaangeli" },
  enrollDesc: {
    en: "Complete enrollment and prepare for the school year.",
    so: "Dhammaystir isdiiwaangelinta oo u diyaargarow sannadka dugsiga.",
  },
  readyToGetStarted: { en: "Ready to Get Started?", so: "Ma Diyaar u Tahay Inaad Bilowdo?" },
  readyToGetStartedDesc: {
    en: "Begin your application today and join our community.",
    so: "Bilow codsigaaga maanta oo ku biir bulshadeena.",
  },

  // ===== APPLICATION PROCESS PAGE =====
  processHeroDesc: {
    en: "Understanding our admission timeline helps you prepare for a smooth application experience.",
    so: "Fahamka jadwalka qalabsanaanteena wuxuu kaa caawiyaa inaad u diyaargarowdo waayo-aragnimo codsi oo sahlan.",
  },
  completeOnlineForm: { en: "Complete online application form", so: "Buuxi foomka codsiga ee khadka tooska ah" },
  uploadDocuments: { en: "Upload required documents", so: "Soo geli dukumiintiyada loo baahan yahay" },
  payApplicationFee: { en: "Pay application fee (if applicable)", so: "Bixi kharashka codsiga (haddii ay khuseyso)" },
  receiveConfirmation: { en: "Receive confirmation email", so: "Hel iimayl xaqiijin" },
  reviewAcademicRecords: { en: "Review of academic records", so: "Dib u eegista diiwaangelinta waxbarashada" },
  verificationDocuments: { en: "Verification of documents", so: "Xaqiijinta dukumiintiyada" },
  assessmentEligibility: { en: "Assessment of eligibility", so: "Qiimaynta u qalmitaanka" },
  initialScreening: { en: "Initial screening", so: "Baarista hore" },
  studentInterview: { en: "Student interview", so: "Wareysiga ardayga" },
  parentMeeting: { en: "Parent/Guardian meeting", so: "Kulanka waalidka/Mas'uulka" },
  academicAssessment: { en: "Academic assessment (if required)", so: "Qiimaynta waxbarashada (haddii loo baahdo)" },
  tourFacilities: { en: "Tour of facilities", so: "Booqashada xarumaha" },
  admissionDecision: { en: "Admission decision communicated", so: "Go'aanka qalabsanaanta la gaadhsiiyay" },
  acceptanceLetter: { en: "Acceptance letter issued", so: "Warqadda aqbalida la bixiyay" },
  enrollmentDocuments: { en: "Enrollment documents", so: "Dukumiintiyada isdiiwaangelinta" },
  feePayment: { en: "Fee payment", so: "Lacag bixinta" },
  day1: { en: "1 Day", so: "1 Maalin" },
  days2to3: { en: "2-3 Days", so: "2-3 Maalmood" },

  // ===== REQUIREMENTS PAGE =====
  requirementsHeroDesc: {
    en: "Everything you need to prepare for a successful application to Ablaal Schools.",
    so: "Wax kasta oo aad u baahan tahay inaad u diyaargarowdo codsi guul leh oo Ablaal Schools.",
  },
  requiredDocuments: { en: "Required Documents", so: "Dukumiintiyada Loo Baahan Yahay" },
  birthCertificate: { en: "Birth certificate or valid identification", so: "Shahaadada dhalashada ama aqoonsi sax ah" },
  previousSchoolRecords: { en: "Previous school records (if applicable)", so: "Diiwaangelinta dugsigii hore (haddii ay khuseyso)" },
  passportPhotos: { en: "2 passport-sized photographs", so: "2 sawir oo baasaboor ah" },
  vaccinationRecords: { en: "Vaccination records", so: "Diiwaangelinta tallaalka" },
  parentIdentification: { en: "Parent/Guardian identification", so: "Aqoonsiga waalidka/mas'uulka" },
  proofOfResidence: { en: "Proof of residence", so: "Caddaynta deegaanka" },
  primaryCompletion: { en: "Primary school completion certificate", so: "Shahaadada dhamaystirka dugsiga aasaasiga" },
  academicTranscripts: { en: "Academic transcripts from previous school", so: "Diiwaangelinta waxbarashada dugsigii hore" },
  characterReference: { en: "Character reference from previous school", so: "Tixraaca dabeecadda dugsigii hore" },
  eligibilityCriteria: { en: "Eligibility Criteria", so: "Shuruudaha U Qalmitaanka" },
  eligibilityAge: { en: "Students must meet the age requirements for their desired grade level", so: "Ardaydu waa inay buuxiyaan shuruudaha da'da fasalka ay rabaan" },
  primaryAges: { en: "Primary: Ages 6-14 years", so: "Aasaasiga: Da'da 6-14 sano" },
  secondaryAges: { en: "Secondary: Ages 14-18 years", so: "Sare: Da'da 14-18 sano" },
  academicReadiness: { en: "All students must demonstrate readiness for the academic program", so: "Dhammaan ardaydu waa inay muujiyaan diyaarnimada barnaamijka waxbarashada" },
  importantNote: { en: "Important Note", so: "Ogeysiis Muhiim Ah" },
  importantNoteDesc: {
    en: "All documents must be original or certified copies. Documents in languages other than English or Somali must be accompanied by certified translations.",
    so: "Dhammaan dukumiintiyadu waa inay ahaadaan asal ama nuqulo la xaqiijiyay. Dukumiintiyada luqado kale oo aan ahayn Ingiriisi ama Soomaali waa inay la socdaan turjumaado la xaqiijiyay.",
  },
  haveDocumentsReady: { en: "Have All Your Documents Ready?", so: "Ma Diyaar Baa Dhammaan Dukumiintiyada?" },
  haveDocumentsReadyDesc: {
    en: "Start your application now and join the Ablaal Schools family.",
    so: "Hadda bilow codsigaaga oo ku biir qoyska Ablaal Schools.",
  },

  // ===== APPLY PAGE =====
  joinGraduates: { en: "Join 5000+ Graduates", so: "Ku Biir 5000+ Ardaydii Ka Qalin Jabisay" },
  applyHeroDesc: {
    en: "Take the first step towards excellence. Fill out the form below and our admissions team will guide you through the process.",
    so: "Qaad talaabada ugu horreysa ee tayada. Buuxi foomka hoose kooxdeena qalabsanaantu waxay ku hagayaan habka.",
  },
  studentInfo: { en: "Student Info", so: "Macluumaadka Ardayga" },
  guardianInfo: { en: "Guardian Info", so: "Macluumaadka Mas'uulka" },
  review: { en: "Review", so: "Dib U Eegis" },
  studentInformation: { en: "Student Information", so: "Macluumaadka Ardayga" },
  enterFirstName: { en: "Enter first name", so: "Geli magaca hore" },
  enterLastName: { en: "Enter last name", so: "Geli magaca dambe" },
  selectGrade: { en: "Select grade", so: "Dooro fasalka" },
  previousSchool: { en: "Previous School", so: "Dugsigii Hore" },
  nameOfPreviousSchool: { en: "Name of previous school", so: "Magaca dugsigii hore" },
  parentGuardianInfo: { en: "Parent/Guardian Information", so: "Macluumaadka Waalidka/Mas'uulka" },
  parentGuardianName: { en: "Parent/Guardian Name *", so: "Magaca Waalidka/Mas'uulka *" },
  parentGuardianPhone: { en: "Parent/Guardian Phone *", so: "Telefoonka Waalidka/Mas'uulka *" },
  additionalInfo: { en: "Additional Information", so: "Macluumaad Dheeraad Ah" },
  whyJoinAblaal: {
    en: "Why do you want to join Ablaal Schools?",
    so: "Maxaad u rabta inaad ku biirto Ablaal Schools?",
  },
  whyJoinPlaceholder: {
    en: "Tell us about yourself and why you're interested in joining Ablaal Schools...",
    so: "Noo sheeg naftaada iyo sababta aad xiiseynayso inaad ku biirto Ablaal Schools...",
  },
  submitting: { en: "Submitting...", so: "Waa la gudbinayaa..." },
  termsAgree: {
    en: "By submitting this form, you agree to our terms and conditions.",
    so: "Markaad gudbiso foomkan, waxaad aqbasho shuruudaheena.",
  },
  applicationSubmitted: { en: "Application Submitted!", so: "Codsiga Waa La Gudbiyay!" },
  applicationSubmittedDesc: {
    en: "Thank you for applying to Ablaal Schools. We have received your application and will contact you within 5-7 business days.",
    so: "Waad ku mahadsan tahay codsigaaga Ablaal Schools. Waxaan helnay codsigaaga waxaanan kula soo xiriiri doonaa 5-7 maalmood shaqo gudahood.",
  },
  confirmationSent: {
    en: "A confirmation has been sent to your email address.",
    so: "Xaqiijin ayaa loo diray cinwaankaaga iimaylka.",
  },

  // ===== NEWS PAGE =====
  newsHeroDesc: {
    en: "Keep up with the latest happenings at Ablaal Schools",
    so: "La soco dhacdooyinka ugu dambeeyay ee Ablaal Schools",
  },
  schoolCalendar: { en: "School Calendar", so: "Jadwalka Dugsiga" },
  downloadCalendar: { en: "Download Calendar", so: "Soo Dejiso Jadwalka" },
  downloadCalendarDesc: {
    en: "Download our complete academic calendar for important dates.",
    so: "Soo dejiso jadwalkeena waxbarashada oo dhamaystiran ee taariikhaha muhiimka ah.",
  },

  // ===== FOOTER =====
  footerDescription: {
    en: "Ablaal Schools: A legacy of academic excellence and affordable education, serving the Somali community since 1988.",
    so: "Ablaal Schools: Taariikhda tayada waxbarashada iyo waxbarasho la awoodo, oo u adeegaysa bulshada Soomaaliyeed tan iyo 1988.",
  },
  saturdayThursday: { en: "Saturday - Thursday", so: "Sabti - Khamiis" },
  timeRange: { en: "7:00 AM - 6:00 PM", so: "7:00 Subax - 6:00 Galabnimo" },
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
