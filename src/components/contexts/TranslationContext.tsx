/* eslint-disable react-refresh/only-export-components */
// contexts/TranslationContext.tsx
import FrenchSvg from '@/assets/svg/FrenchSvg'
import SpanishSvg from '@/assets/svg/SpanishSvg'
import UkSvg from '@/assets/svg/Uksvg'
import GermanSvg from '@/assets/svg/GermanSvg'
import ArabicSvg from '@/assets/svg/ArabicSvg'
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'

// Define supported languages
export type Language = 'ENG' | 'FRA' | 'ESP' | 'DEU' | 'ARA'

// Define translation keys structure
interface Translations {
  // Navigation
  availableForWork: string
  designerLocation: string
  aboutMe: string
  projects: string
  myResume: string
  contactMe: string
  
  // Hero section
  heroTitle: string
  heroDescription: string
  
  // About section
  aboutTitle: string
  aboutDescription: string
  
  // Projects section
  projectsTitle: string
  projectsDescription: string
  
  // Experience section
  currently: string
  previously: string
  startupIdeaExploration: string
  
  // Footer
  footerText: string
  footerCallToAction: string
  thanksForVisiting: string
  
  // Project data
  nimbleTitle: string
  nimbleDescription1: string
  nimbleDescription2: string
  nimbleDescription3: string
  
  sikerhubTitle: string
  sikerhubDescription1: string
  sikerhubDescription2: string
  sikerhubDescription3: string
  sikerhubDescription4: string
  
  breezaTitle: string
  breezaDescription1: string
  breezaDescription2: string
  breezaDescription3: string
  
  cloudclinicTitle: string
  cloudclinicDescription1: string
  cloudclinicDescription2: string
  cloudclinicDescription3: string
}

// Translation data
const translations: Record<Language, Translations> = {
  ENG: {
    availableForWork: "Available for work",
    designerLocation: "Designer based in Lagos, Nigeria",
    aboutMe: "About Me",
    projects: "Projects",
    myResume: "My Resume",
    contactMe: "Contact Me",
    heroTitle: "Mobile & Web Design Expert",
    heroDescription: "Hey, I'm KayBams — Product Designer for Startups & Scaling Businesses. I design thoughtful web and mobile experiences that solve real problems and move businesses forward. From healthtech to eCommerce, logistics to SaaS — I help founders and teams turn big ideas into user-friendly, high-impact products.",
    aboutTitle: "About",
    aboutDescription: "Learn more about my background and experience",
    projectsTitle: "Projects",
    projectsDescription: "Explore my latest work and case studies",
    currently: "CURRENTLY",
    previously: "PREVIOUSLY",
    startupIdeaExploration: "STARTUP IDEA EXPLORATION",
    footerText: "© 2024 Kayode Bamidele. All rights reserved.",
    footerCallToAction: "Let's work on something great together!🤝",
    thanksForVisiting: "Thanks for visiting",
    
    // Project descriptions
    nimbleTitle: "NIMBLE",
    nimbleDescription1: "A grocery shopping app that allows users checkout all in under 30 seconds. Snap photo of products, pay instantly and quickly walk out of crowded stores.",
    nimbleDescription2: "I contributed to the design of the Recipes and Veggies features, and refined key existing components of the mobile app ahead of launch. By the time the app went live, it had already been downloaded by over 100 users.",
    nimbleDescription3: "Currently collaborating closely with the founder to shape features focused on customer retention, scalable growth, and achieving product-market fit.",
    
    sikerhubTitle: "SIKERHUB",
    sikerhubDescription1: "SikerHub is a development and marketing agency that offers businesses and brands cutting edge digital solutions ranging from creative design, web development to data analysis.",
    sikerhubDescription2: "Designed a mobile-responsive website for SikerHub to establish a strong digital presence and effectively convert visitors into paying customers.",
    sikerhubDescription3: "The result was a fully responsive website, strategically designed with conversion rate optimization in mind to boost user engagement and drive conversions.",
    sikerhubDescription4: "Ahead of launch, I projected an 80%+ session duration and daily traffic of 100-300 visitors. The site was designed with performance and conversion in mind, tracking key metrics like bounce rate, engagement time, and conversion rate to measure success.",
    
    breezaTitle: "BREEZA",
    breezaDescription1: "Breeza is platform where beauty and wellness professionals connect with customers, provides tools to manage bookings, that offers a wider range of services, including home service, promotes community engagement and helps professionals grow their business. Offers personalized e-commerce shops and franchise-ready features.",
    breezaDescription2: "Redesigned Breeza's website to align with its new product direction, and contributed to the design of both the client-facing and customer-facing mobile apps.",
    breezaDescription3: "Due to difficulties onboarding beauty professionals, the team made a strategic decision to temporarily pause regular operations and reassess the platform's onboarding approach.",
    
    cloudclinicTitle: "CLOUDCLINIC",
    cloudclinicDescription1: "CloudClinic is a telehealth app that connects people with licensed doctors, specialists, and health facilities in real-time, bring the full, but more convenient hospital experience to your home or office.",
    cloudclinicDescription2: "As the sole designer on the project, I led the end-to-end design of the web app, admin portal, and key user-facing features like \"Find Me a Doctor.\" I also revamped the partners' app used by healthcare providers, redesigned the onboarding and sign-up flow, and improved multiple core experiences — delivering a cohesive, user-centered product across the board.",
    cloudclinicDescription3: "Boosted user sign-ups by 25% through a redesigned onboarding flow, which reduced friction by shifting patients health data collection to the doctors' end and contributed to 1K+ app downloads on Google Play Store by simplifying the user journey."
  },
  FRA: {
    availableForWork: "Disponible pour le travail",
    designerLocation: "Designer basé à Lagos, Nigeria",
    aboutMe: "À propos de moi",
    projects: "Projets",
    myResume: "Mon CV",
    contactMe: "Me contacter",
    heroTitle: "Expert en conception mobile et web",
    heroDescription: "Salut, je suis KayBams — Designer produit pour les startups et les entreprises en croissance. Je conçois des expériences web et mobiles réfléchies qui résolvent de vrais problèmes et font avancer les entreprises. De la healthtech à l'eCommerce, de la logistique au SaaS — j'aide les fondateurs et les équipes à transformer de grandes idées en produits conviviaux et à fort impact.",
    aboutTitle: "À propos",
    aboutDescription: "En savoir plus sur mon parcours et mon expérience",
    projectsTitle: "Projets",
    projectsDescription: "Découvrez mes derniers travaux et études de cas",
    currently: "ACTUELLEMENT",
    previously: "PRÉCÉDEMMENT",
    startupIdeaExploration: "EXPLORATION D'IDÉES DE STARTUP",
    footerText: "© 2024 Kayode Bamidele. Tous droits réservés.",
    footerCallToAction: "Travaillons ensemble sur quelque chose de formidable !🤝",
    thanksForVisiting: "Merci de votre visite",
    
    // Project descriptions
    nimbleTitle: "NIMBLE",
    nimbleDescription1: "Une application d'épicerie qui permet aux utilisateurs de passer à la caisse en moins de 30 secondes. Prenez une photo des produits, payez instantanément et sortez rapidement des magasins bondés.",
    nimbleDescription2: "J'ai contribué à la conception des fonctionnalités Recettes et Légumes, et affiné les composants clés existants de l'application mobile avant le lancement. Au moment du lancement, l'application avait déjà été téléchargée par plus de 100 utilisateurs.",
    nimbleDescription3: "Je collabore actuellement étroitement avec le fondateur pour façonner des fonctionnalités axées sur la rétention des clients, la croissance évolutive et l'atteinte de l'adéquation produit-marché.",
    
    sikerhubTitle: "SIKERHUB",
    sikerhubDescription1: "SikerHub est une agence de développement et de marketing qui offre aux entreprises et aux marques des solutions numériques de pointe allant de la conception créative au développement web en passant par l'analyse de données.",
    sikerhubDescription2: "J'ai conçu un site web adaptatif pour SikerHub afin d'établir une forte présence numérique et de convertir efficacement les visiteurs en clients payants.",
    sikerhubDescription3: "Le résultat fut un site web entièrement responsive, stratégiquement conçu avec l'optimisation du taux de conversion à l'esprit pour stimuler l'engagement des utilisateurs et générer des conversions.",
    sikerhubDescription4: "Avant le lancement, j'ai projeté une durée de session de 80%+ et un trafic quotidien de 100-300 visiteurs. Le site a été conçu avec la performance et la conversion à l'esprit, en suivant des métriques clés comme le taux de rebond, le temps d'engagement et le taux de conversion pour mesurer le succès.",
    
    breezaTitle: "BREEZA",
    breezaDescription1: "Breeza est une plateforme où les professionnels de la beauté et du bien-être se connectent avec les clients, fournit des outils pour gérer les réservations, offre une gamme plus large de services, y compris le service à domicile, favorise l'engagement communautaire et aide les professionnels à développer leur entreprise. Offre des boutiques e-commerce personnalisées et des fonctionnalités prêtes pour la franchise.",
    breezaDescription2: "J'ai repensé le site web de Breeza pour l'aligner sur sa nouvelle direction produit, et contribué à la conception des applications mobiles côté client et côté client.",
    breezaDescription3: "En raison des difficultés d'intégration des professionnels de la beauté, l'équipe a pris la décision stratégique de suspendre temporairement les opérations régulières et de réévaluer l'approche d'intégration de la plateforme.",
    
    cloudclinicTitle: "CLOUDCLINIC",
    cloudclinicDescription1: "CloudClinic est une application de télésanté qui connecte les gens avec des médecins agréés, des spécialistes et des établissements de santé en temps réel, apportant l'expérience hospitalière complète, mais plus pratique, à votre domicile ou bureau.",
    cloudclinicDescription2: "En tant que seul designer sur le projet, j'ai dirigé la conception de bout en bout de l'application web, du portail admin et des fonctionnalités clés orientées utilisateur comme \"Trouvez-moi un médecin\". J'ai également revampé l'application partenaires utilisée par les prestataires de soins, repensé le flux d'onboarding et d'inscription, et amélioré plusieurs expériences principales — livrant un produit cohérent et centré sur l'utilisateur à tous les niveaux.",
    cloudclinicDescription3: "J'ai augmenté les inscriptions d'utilisateurs de 25% grâce à un flux d'onboarding repensé, qui a réduit les frictions en déplaçant la collecte de données de santé des patients vers les médecins et contribué à 1K+ téléchargements d'applications sur Google Play Store en simplifiant le parcours utilisateur."
  },
  ESP: {
    availableForWork: "Disponible para trabajo",
    designerLocation: "Diseñador con base en Lagos, Nigeria",
    aboutMe: "Acerca de mí",
    projects: "Proyectos",
    myResume: "Mi currículum",
    contactMe: "Contáctame",
    heroTitle: "Experto en diseño móvil y web",
    heroDescription: "Hola, soy KayBams — Diseñador de productos para startups y empresas en crecimiento. Diseño experiencias web y móviles reflexivas que resuelven problemas reales y hacen avanzar los negocios. Desde healthtech hasta eCommerce, logística hasta SaaS — ayudo a fundadores y equipos a convertir grandes ideas en productos fáciles de usar y de alto impacto.",
    aboutTitle: "Acerca de",
    aboutDescription: "Conoce más sobre mi experiencia y antecedentes",
    projectsTitle: "Proyectos",
    projectsDescription: "Explora mis trabajos más recientes y casos de estudio",
    currently: "ACTUALMENTE",
    previously: "ANTERIORMENTE",
    startupIdeaExploration: "EXPLORACIÓN DE IDEAS DE STARTUP",
    footerText: "© 2024 Kayode Bamidele. Todos los derechos reservados.",
    footerCallToAction: "¡Trabajemos juntos en algo genial!🤝",
    thanksForVisiting: "Gracias por visitar",
    
    // Project descriptions
    nimbleTitle: "NIMBLE",
    nimbleDescription1: "Una aplicación de compras de abarrotes que permite a los usuarios finalizar la compra en menos de 30 segundos. Toma una foto de los productos, paga instantáneamente y sal rápidamente de las tiendas abarrotadas.",
    nimbleDescription2: "Contribuí al diseño de las funciones de Recetas y Verduras, y refiné componentes clave existentes de la aplicación móvil antes del lanzamiento. Para cuando la aplicación se lanzó, ya había sido descargada por más de 100 usuarios.",
    nimbleDescription3: "Actualmente colaboro estrechamente con el fundador para dar forma a funciones enfocadas en la retención de clientes, el crecimiento escalable y el logro del ajuste producto-mercado.",
    
    sikerhubTitle: "SIKERHUB",
    sikerhubDescription1: "SikerHub es una agencia de desarrollo y marketing que ofrece a empresas y marcas soluciones digitales de vanguardia que van desde diseño creativo, desarrollo web hasta análisis de datos.",
    sikerhubDescription2: "Diseñé un sitio web responsive para SikerHub para establecer una fuerte presencia digital y convertir efectivamente a los visitantes en clientes de pago.",
    sikerhubDescription3: "El resultado fue un sitio web completamente responsive, estratégicamente diseñado con optimización de tasa de conversión en mente para impulsar el engagement del usuario y generar conversiones.",
    sikerhubDescription4: "Antes del lanzamiento, proyecté una duración de sesión del 80%+ y tráfico diario de 100-300 visitantes. El sitio fue diseñado con rendimiento y conversión en mente, rastreando métricas clave como tasa de rebote, tiempo de engagement y tasa de conversión para medir el éxito.",
    
    breezaTitle: "BREEZA",
    breezaDescription1: "Breeza es una plataforma donde profesionales de belleza y bienestar se conectan con clientes, proporciona herramientas para gestionar reservas, ofrece una gama más amplia de servicios, incluyendo servicio a domicilio, promueve el engagement comunitario y ayuda a los profesionales a hacer crecer su negocio. Ofrece tiendas de e-commerce personalizadas y funciones listas para franquicia.",
    breezaDescription2: "Rediseñé el sitio web de Breeza para alinearlo con su nueva dirección de producto, y contribuí al diseño de ambas aplicaciones móviles orientadas al cliente y al consumidor.",
    breezaDescription3: "Debido a las dificultades para incorporar profesionales de belleza, el equipo tomó una decisión estratégica de pausar temporalmente las operaciones regulares y reevaluar el enfoque de incorporación de la plataforma.",
    
    cloudclinicTitle: "CLOUDCLINIC",
    cloudclinicDescription1: "CloudClinic es una aplicación de telesalud que conecta a las personas con médicos licenciados, especialistas e instalaciones de salud en tiempo real, trayendo la experiencia hospitalaria completa, pero más conveniente, a tu hogar u oficina.",
    cloudclinicDescription2: "Como el único diseñador en el proyecto, lideré el diseño de extremo a extremo de la aplicación web, portal de administración y funciones clave orientadas al usuario como \"Encuéntrame un médico\". También renové la aplicación de socios utilizada por proveedores de atención médica, rediseñé el flujo de incorporación e inscripción, y mejoré múltiples experiencias centrales — entregando un producto cohesivo y centrado en el usuario en todos los ámbitos.",
    cloudclinicDescription3: "Aumenté las inscripciones de usuarios en un 25% a través de un flujo de incorporación rediseñado, que redujo la fricción al cambiar la recolección de datos de salud de los pacientes al lado de los médicos y contribuyó a 1K+ descargas de aplicaciones en Google Play Store al simplificar el recorrido del usuario."
  },
  DEU: {
    availableForWork: "Verfügbar für Arbeit",
    designerLocation: "Designer mit Sitz in Lagos, Nigeria",
    aboutMe: "Über mich",
    projects: "Projekte",
    myResume: "Mein Lebenslauf",
    contactMe: "Kontaktiere mich",
    heroTitle: "Mobile & Web Design Experte",
    heroDescription: "Hey, ich bin KayBams — Produktdesigner für Startups und wachsende Unternehmen. Ich entwerfe durchdachte Web- und Mobile-Erlebnisse, die echte Probleme lösen und Unternehmen voranbringen. Von Healthtech bis eCommerce, Logistik bis SaaS — ich helfe Gründern und Teams dabei, große Ideen in benutzerfreundliche, wirkungsvolle Produkte zu verwandeln.",
    aboutTitle: "Über mich",
    aboutDescription: "Erfahre mehr über meinen Hintergrund und meine Erfahrungen",
    projectsTitle: "Projekte",
    projectsDescription: "Entdecke meine neuesten Arbeiten und Fallstudien",
    currently: "DERZEIT",
    previously: "ZUVOR",
    startupIdeaExploration: "STARTUP-IDEEN ERKUNDUNG",
    footerText: "© 2024 Kayode Bamidele. Alle Rechte vorbehalten.",
    footerCallToAction: "Lass uns zusammen an etwas Großartigem arbeiten!🤝",
    thanksForVisiting: "Danke für deinen Besuch",
    
    // Project descriptions
    nimbleTitle: "NIMBLE",
    nimbleDescription1: "Eine Lebensmittel-Shopping-App, die es Benutzern ermöglicht, in unter 30 Sekunden auszuchecken. Mache ein Foto von Produkten, zahle sofort und verlasse schnell überfüllte Geschäfte.",
    nimbleDescription2: "Ich habe zum Design der Rezepte- und Gemüse-Features beigetragen und wichtige bestehende Komponenten der mobilen App vor dem Launch verfeinert. Zum Zeitpunkt des Launches war die App bereits von über 100 Benutzern heruntergeladen worden.",
    nimbleDescription3: "Arbeite derzeit eng mit dem Gründer zusammen, um Features zu gestalten, die auf Kundenbindung, skalierbare Wachstum und die Erreichung des Produkt-Markt-Fits fokussiert sind.",
    
    sikerhubTitle: "SIKERHUB",
    sikerhubDescription1: "SikerHub ist eine Entwicklungs- und Marketing-Agentur, die Unternehmen und Marken modernste digitale Lösungen anbietet, von kreativem Design über Webentwicklung bis hin zur Datenanalyse.",
    sikerhubDescription2: "Entwarf eine mobile-responsive Website für SikerHub, um eine starke digitale Präsenz zu etablieren und Besucher effektiv in zahlende Kunden zu verwandeln.",
    sikerhubDescription3: "Das Ergebnis war eine vollständig responsive Website, strategisch entworfen mit Conversion-Rate-Optimierung im Hinterkopf, um Benutzerengagement zu steigern und Conversions zu fördern.",
    sikerhubDescription4: "Vor dem Launch prognostizierte ich eine 80%+ Sitzungsdauer und täglichen Traffic von 100-300 Besuchern. Die Website wurde mit Performance und Conversion im Hinterkopf entworfen, verfolgt wichtige Metriken wie Bounce-Rate, Engagement-Zeit und Conversion-Rate, um den Erfolg zu messen.",
    
    breezaTitle: "BREEZA",
    breezaDescription1: "Breeza ist eine Plattform, auf der sich Schönheits- und Wellness-Profis mit Kunden verbinden, bietet Tools zur Verwaltung von Buchungen, bietet eine größere Auswahl an Dienstleistungen, einschließlich Hausservice, fördert Community-Engagement und hilft Profis beim Wachstum ihres Geschäfts. Bietet personalisierte E-Commerce-Shops und franchise-ready Features.",
    breezaDescription2: "Redesignte Breezas Website, um sie mit ihrer neuen Produktrichtung zu synchronisieren, und trug zum Design sowohl der kunden- als auch der verbraucherorientierten mobilen Apps bei.",
    breezaDescription3: "Aufgrund von Schwierigkeiten beim Onboarding von Schönheitsprofis traf das Team eine strategische Entscheidung, den regulären Betrieb vorübergehend zu pausieren und den Onboarding-Ansatz der Plattform zu überdenken.",
    
    cloudclinicTitle: "CLOUDCLINIC",
    cloudclinicDescription1: "CloudClinic ist eine Telehealth-App, die Menschen mit lizenzierten Ärzten, Spezialisten und Gesundheitseinrichtungen in Echtzeit verbindet und die vollständige, aber bequemere Krankenhauserfahrung nach Hause oder ins Büro bringt.",
    cloudclinicDescription2: "Als einziger Designer im Projekt leitete ich das End-to-End-Design der Web-App, des Admin-Portals und wichtiger benutzerorientierter Features wie \"Finde mir einen Arzt\". Ich überarbeitete auch die Partner-App, die von Gesundheitsdienstleistern verwendet wird, redesignte den Onboarding- und Anmeldefluss und verbesserte mehrere Kernerfahrungen — lieferte ein kohärentes, benutzerzentriertes Produkt rundum.",
    cloudclinicDescription3: "Steigerte Benutzeranmeldungen um 25% durch einen redesignten Onboarding-Flow, der Reibung reduzierte, indem die Sammlung von Patientengesundheitsdaten auf die Ärzte verlagert wurde und zu 1K+ App-Downloads im Google Play Store beitrug, indem die Benutzerreise vereinfacht wurde."
  },
  ARA: {
    availableForWork: "متاح للعمل",
    designerLocation: "مصمم مقيم في لاجوس، نيجيريا",
    aboutMe: "نبذة عني",
    projects: "المشاريع",
    myResume: "سيرتي الذاتية",
    contactMe: "تواصل معي",
    heroTitle: "خبير تصميم الهواتف المحمولة والويب",
    heroDescription: "مرحباً، أنا KayBams — مصمم منتجات للشركات الناشئة والشركات المتنامية. أصمم تجارب ويب وهاتف محمول مدروسة تحل مشاكل حقيقية وتقدم الأعمال إلى الأمام. من تكنولوجيا الصحة إلى التجارة الإلكترونية، من اللوجستيات إلى SaaS — أساعد المؤسسين والفرق على تحويل الأفكار الكبيرة إلى منتجات سهلة الاستخدام وعالية التأثير.",
    aboutTitle: "نبذة",
    aboutDescription: "تعرف أكثر على خلفيتي وخبرتي",
    projectsTitle: "المشاريع",
    projectsDescription: "اكتشف أحدث أعمالي ودراسات الحالة",
    currently: "حالياً",
    previously: "سابقاً",
    startupIdeaExploration: "استكشاف أفكار الشركات الناشئة",
    footerText: "© 2024 كايود باميديلي. جميع الحقوق محفوظة.",
    footerCallToAction: "دعنا نعمل معاً على شيء رائع!🤝",
    thanksForVisiting: "شكراً لزيارتك",
    
    // Project descriptions
    nimbleTitle: "نيمبل",
    nimbleDescription1: "تطبيق تسوق بقالة يسمح للمستخدمين بالدفع في أقل من 30 ثانية. التقط صورة للمنتجات، ادفع فوراً واخرج بسرعة من المتاجر المزدحمة.",
    nimbleDescription2: "ساهمت في تصميم ميزات الوصفات والخضروات، وحسّنت المكونات الأساسية الموجودة في التطبيق المحمول قبل الإطلاق. بحلول وقت إطلاق التطبيق، كان قد تم تنزيله بالفعل من قبل أكثر من 100 مستخدم.",
    nimbleDescription3: "أتعاون حالياً بشكل وثيق مع المؤسس لتشكيل ميزات تركز على الاحتفاظ بالعملاء، والنمو القابل للتوسع، وتحقيق ملائمة المنتج للسوق.",
    
    sikerhubTitle: "سيكرهب",
    sikerhubDescription1: "SikerHub هي وكالة تطوير وتسويق تقدم للشركات والعلامات التجارية حلول رقمية متطورة تتراوح من التصميم الإبداعي وتطوير الويب إلى تحليل البيانات.",
    sikerhubDescription2: "صممت موقع ويب متجاوب مع الهاتف المحمول لـ SikerHub لتأسيس حضور رقمي قوي وتحويل الزوار بفعالية إلى عملاء يدفعون.",
    sikerhubDescription3: "كانت النتيجة موقع ويب مستجيب بالكامل، مصمم استراتيجياً مع تحسين معدل التحويل في الاعتبار لتعزيز مشاركة المستخدم وقيادة التحويلات.",
    sikerhubDescription4: "قبل الإطلاق، توقعت مدة جلسة 80%+ وحركة مرور يومية من 100-300 زائر. تم تصميم الموقع مع الأداء والتحويل في الاعتبار، وتتبع المقاييس الرئيسية مثل معدل الارتداد ووقت المشاركة ومعدل التحويل لقياس النجاح.",
    
    breezaTitle: "بريزا",
    breezaDescription1: "Breeza هي منصة حيث يتصل محترفو الجمال والعافية مع العملاء، توفر أدوات لإدارة الحجوزات، تقدم مجموعة أوسع من الخدمات، بما في ذلك الخدمة المنزلية، تعزز المشاركة المجتمعية وتساعد المحترفين على تنمية أعمالهم. تقدم متاجر التجارة الإلكترونية المخصصة وميزات جاهزة للامتياز.",
    breezaDescription2: "أعدت تصميم موقع Breeza لمواءمته مع اتجاه منتجه الجديد، وساهمت في تصميم كل من التطبيقات المحمولة الموجهة للعملاء والعملاء.",
    breezaDescription3: "بسبب الصعوبات في إدماج محترفي الجمال، اتخذ الفريق قراراً استراتيجياً لإيقاف العمليات العادية مؤقتاً وإعادة تقييم نهج الإدماج في المنصة.",
    
    cloudclinicTitle: "كلاودكلينك",
    cloudclinicDescription1: "CloudClinic هو تطبيق صحة إلكترونية يربط الناس بأطباء مرخصين ومتخصصين ومرافق صحية في الوقت الفعلي، يجلب تجربة المستشفى الكاملة ولكن الأكثر راحة إلى منزلك أو مكتبك.",
    cloudclinicDescription2: "كوني المصمم الوحيد في المشروع، قدت التصميم من النهاية إلى النهاية لتطبيق الويب وبوابة الإدارة والميزات الرئيسية الموجهة للمستخدم مثل \"ابحث لي عن طبيب\". كما قمت بتجديد تطبيق الشركاء المستخدم من قبل مقدمي الرعاية الصحية، وأعدت تصميم تدفق الإدماج والتسجيل، وحسّنت تجارب أساسية متعددة — مقدماً منتجاً متماسكاً ومتمحوراً حول المستخدم في جميع الجوانب.",
    cloudclinicDescription3: "عززت تسجيلات المستخدمين بنسبة 25% من خلال تدفق إدماج معاد تصميمه، مما قلل الاحتكاك بنقل جمع بيانات صحة المرضى إلى جانب الأطباء وساهم في 1K+ تنزيل تطبيق على متجر Google Play بتبسيط رحلة المستخدم."
  }
}

interface TranslationContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: keyof Translations) => string
  translations: Translations
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

interface TranslationProviderProps {
  children: ReactNode
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Try to get saved language from localStorage, fallback to 'ENG'
    const savedLanguage = localStorage.getItem('selectedLanguage') as Language
    return savedLanguage && ['ENG', 'FRA', 'ESP', 'DEU', 'ARA'].includes(savedLanguage) ? savedLanguage : 'ENG'
  })

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem('selectedLanguage', language)
  }, [language])

  const t = (key: keyof Translations): string => {
    return translations[language][key] || translations['ENG'][key] || String(key)
  }

  const contextValue: TranslationContextType = {
    language,
    setLanguage,
    t,
    translations: translations[language]
  }

  return (
    <TranslationContext.Provider value={contextValue}>
      {children}
    </TranslationContext.Provider>
  )
}

// Custom hook to use translation context
export const useTranslation = () => {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider')
  }
  return context
}

// Language configuration
export const languageConfig = [
  { code: 'ENG' as Language, name: 'English', flag: <UkSvg/> },
  { code: 'FRA' as Language, name: 'Français', flag: <FrenchSvg/> },
  { code: 'ESP' as Language, name: 'Español', flag: <SpanishSvg/> },
  { code: 'DEU' as Language, name: 'Deutsch', flag: <GermanSvg/> },
  { code: 'ARA' as Language, name: 'Arabic', flag: <ArabicSvg/> }
]