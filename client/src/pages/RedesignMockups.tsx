import { FormEvent, SyntheticEvent, useState } from "react";
import { useSEO } from "../hooks/useSEO";
import { Link } from "wouter";
import { 
  Shield, 
  Search, 
  ExternalLink, 
  Check, 
  ArrowRight, 
  Laptop, 
  Smartphone, 
  Briefcase, 
  Building, 
  FileText, 
  Lock, 
  Users, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Info,
  Calendar,
  Layers,
  ChevronRight,
  Menu,
  FileSpreadsheet,
  Cpu,
  Database,
  Eye,
  AlertCircle,
  Network,
  Cloud,
  Terminal,
  Activity,
  Star,
  Linkedin,
  BarChart3,
  GraduationCap,
  BookOpen,
  Send,
  Home as HomeIcon,
  HeartPulse,
  Landmark,
  BadgeCheck,
  Newspaper,
  ShieldCheck
} from "lucide-react";

// Types for Mockup Definition
interface PageMockup {
  id: string;
  name: string;
  title: string;
  beforeDesktopUrl: string;
  beforeMobileUrl: string;
  redesignNotes: string[];
}

export default function RedesignMockups() {
  const [activePage, setActivePage] = useState<string>("home");
  const [viewportMode, setViewportMode] = useState<"desktop" | "mobile">("desktop");

  // Map of before screenshots uploaded to S3
  const beforeUrls: Record<string, { desktop: string; mobile: string }> = {
    home: {
      desktop: "/manus-storage/before_home_desktop_64ae6f2b.png",
      mobile: "/manus-storage/before_home_mobile_13f5abfe.png"
    },
    services: {
      desktop: "/manus-storage/before_services_desktop_458656c3.png",
      mobile: "/manus-storage/before_services_mobile_7e1423ff.png"
    },
    healthcare_it: {
      desktop: "/manus-storage/before_healthcare_it_desktop_7eaa085e.png",
      mobile: "/manus-storage/before_healthcare_it_mobile_3be75c7f.png"
    },
    federal: {
      desktop: "/manus-storage/before_federal_desktop_8d5dd93b.png",
      mobile: "/manus-storage/before_federal_mobile_4b8e53e3.png"
    },
    why_us: {
      desktop: "/manus-storage/before_why_us_desktop_48b42112.png",
      mobile: "/manus-storage/before_why_us_mobile_8da4b467.png"
    },
    team: {
      desktop: "/manus-storage/before_team_desktop_35f1aec8.png",
      mobile: "/manus-storage/before_team_mobile_2380b509.png"
    },
    contact: {
      desktop: "/manus-storage/before_contact_desktop_3250f61a.png",
      mobile: "/manus-storage/before_contact_mobile_ed354b87.png"
    },
    blog: {
      desktop: "/manus-storage/before_blog_desktop_3313c38f.png",
      mobile: "/manus-storage/before_blog_mobile_e564679e.png"
    }
  };

  const pages: PageMockup[] = [
    {
      id: "home",
      name: "Home Page",
      title: "Secure Healthcare IT, Cloud & Digital Solutions",
      beforeDesktopUrl: beforeUrls.home.desktop,
      beforeMobileUrl: beforeUrls.home.mobile,
      redesignNotes: [
        "Replaced conversational 'For Everyone Out There' subheader with highly targeted clinical B2B value proposition.",
        "Added high-visibility SAM.gov active federal contractor badge and credentials (CAGE, UEI) to header.",
        "Consolidated redundant services grid from 9 blocks to 6 clearly defined, non-repetitive enterprise blocks.",
        "Created prominent 'Schedule Free Consultation' primary CTA button in the header and hero sections."
      ]
    },
    {
      id: "services",
      name: "Services Page",
      title: "Healthcare IT & Enterprise Consulting Services",
      beforeDesktopUrl: beforeUrls.services.desktop,
      beforeMobileUrl: beforeUrls.services.mobile,
      redesignNotes: [
        "Expanded the mockup to show all 8 core services from your live site, restoring full coverage of both Health IT and general IT.",
        "Categorized services clearly into 'Clinical Health IT Specializations' and 'Enterprise IT & Infrastructure Support'.",
        "Fixed the Wix circular navigation loops where 'Learn More' buttons just redirected back to the same services page.",
        "Replaced default orange vector graphics with cohesive, clinical-grade and enterprise-grade tech iconography."
      ]
    },
    {
      id: "healthcare_it",
      name: "Healthcare IT",
      title: "Clinical Informatics & HIPAA-Compliant Security",
      beforeDesktopUrl: beforeUrls.healthcare_it.desktop,
      beforeMobileUrl: beforeUrls.healthcare_it.mobile,
      redesignNotes: [
        "Injected authoritative clinical standards (HL7, FHIR) and specific platform support (Epic, Cerner) to build trust.",
        "Explicitly referenced HIPAA administrative, physical, and technical safeguards aligned with NIST SP 800-66.",
        "Restructured bullet points into professional, outcome-focused consulting sections."
      ]
    },
    {
      id: "federal",
      name: "Federal Services",
      title: "Federal Healthcare IT & Systems Engineering",
      beforeDesktopUrl: beforeUrls.federal.desktop,
      beforeMobileUrl: beforeUrls.federal.mobile,
      redesignNotes: [
        "Shifted copy from 'Federal contracting readiness' to 'Active SAM.gov Registered Contractor' to match your newly approved status.",
        "Structured NAICS and PSC codes into a clean, professional grid layout standard for government contracting officers.",
        "Added a secure, gated form to capture high-value government procurement and subcontracting leads requesting your Capability Statement."
      ]
    },
    {
      id: "why_us",
      name: "Why Choose Us",
      title: "Enterprise Standards, Clinical Precision",
      beforeDesktopUrl: beforeUrls.why_us.desktop,
      beforeMobileUrl: beforeUrls.why_us.mobile,
      redesignNotes: [
        "Refined 'Cost Conscious' positioning to 'Predictable, High-Value Pricing' to protect your premium consulting brand.",
        "Separated general commercial IT claims from clinical informatics support to preserve specialized authority.",
        "Emphasized proactive risk mitigation, continuous monitoring, and 24/7 technical support."
      ]
    },
    {
      id: "team",
      name: "Our Team",
      title: "Meet Our Healthcare IT & Technology Professionals",
      beforeDesktopUrl: beforeUrls.team.desktop,
      beforeMobileUrl: beforeUrls.team.mobile,
      redesignNotes: [
        "Added 3-sentence professional biographies highlighting degrees, technical certifications, and DevOps/SecOps expertise.",
        "Significantly improved E-E-A-T (Expertise, Authoritativeness, Trustworthiness) which Google's Quality Guidelines reward.",
        "Removed raw, plain-text personal emails to eliminate spam and phishing risks, replacing them with a secure contact trigger."
      ]
    },
    {
      id: "academy",
      name: "Academy",
      title: "NDE HealthTech Academy",
      beforeDesktopUrl: "",
      beforeMobileUrl: "",
      redesignNotes: [
        "Added a dedicated academy page to connect consulting services with the NDE HealthTech Academy YouTube channel and future courses.",
        "Structured learning paths for DevOps, AWS, Healthcare IT, Informatics, Cybersecurity, and Project Management.",
        "Created a clear call-to-action for learners to subscribe and follow the academy launch."
      ]
    },
    {
      id: "contact",
      name: "Contact Us",
      title: "Schedule Your Complimentary Consultation",
      beforeDesktopUrl: beforeUrls.contact.desktop,
      beforeMobileUrl: beforeUrls.contact.mobile,
      redesignNotes: [
        "Replaced the generic, plain Wix form with a professional, lead-qualifying form (dropdowns for Organization Type and Technical Needs).",
        "Presented your Venus (DFW Metroplex) physical address in a professional regional context.",
        "Maintained clear, reassuring copy about what to expect during the 20-minute introductory discovery session."
      ]
    },
    {
      id: "blog",
      name: "Insights Blog",
      title: "Clinical Informatics & Compliance Insights",
      beforeDesktopUrl: beforeUrls.blog.desktop,
      beforeMobileUrl: beforeUrls.blog.mobile,
      redesignNotes: [
        "Removed the default Wix placeholder post ('Design a Stunning Blog') which heavily damaged professional credibility.",
        "Archived the consumer-grade post ('Install Windows from a USB') and replaced it with a targeted healthcare security article.",
        "Updated the author profiles from 'ndealexis' system username to 'Alexis Nde, DevOps & Security Engineer' to establish high E-E-A-T."
      ]
    }
  ];

  const activePageData = pages.find(p => p.id === activePage) || pages[0];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col selection:bg-orange-500 selection:text-white">
      {/* Top Header */}
      <header className="bg-slate-900/90 backdrop-blur border-b border-slate-800/80 py-4 px-6 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img 
              src="/assets/nde-logo.png" 
              alt="NDE HealthTech Logo" 
              className="w-11 h-11 object-contain rounded-lg border border-slate-800/80 bg-slate-950 p-1 shadow-inner"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight text-white">NDE</span>
                <span className="font-semibold text-base text-slate-400">HealthTech Solutions</span>
              </div>
              <p className="text-xs text-orange-500 font-bold uppercase tracking-wider">Premium Visual Redesign Mockups</p>
            </div>
            <a 
              href="https://d2xsxph8kpxj0f.cloudfront.net/310519663731165120/FYofXj8dB8gc5JadLn5roz/nde_logo_high_res-MVfT3LLsgmzzKmAqEC7BKc.png" 
              target="_blank" 
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-bold rounded-lg border border-slate-800 transition-all shadow-inner ml-2"
            >
              <ExternalLink className="w-3.5 h-3.5 text-orange-500" /> Download High-Res Logo (PNG)
            </a>
          </div>

          {/* Viewport & Navigation Controls */}
          <div className="flex items-center gap-3 bg-slate-950 p-1.5 rounded-xl border border-slate-800 shadow-inner">
            <button 
              onClick={() => setViewportMode("desktop")}
              className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-all duration-200 ${
                viewportMode === "desktop" 
                  ? "bg-slate-800 text-white shadow-md border border-slate-700/50" 
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Laptop className="w-4 h-4" /> Desktop View
            </button>
            <button 
              onClick={() => setViewportMode("mobile")}
              className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-all duration-200 ${
                viewportMode === "mobile" 
                  ? "bg-slate-800 text-white shadow-md border border-slate-700/50" 
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Smartphone className="w-4 h-4" /> Mobile View
            </button>
          </div>
        </div>
      </header>

      {/* Main Panel */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Left Sidebar - Page Selector */}
        <aside className="w-full lg:w-72 bg-slate-900/40 border-r border-slate-800/60 p-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto shrink-0 scrollbar-none">
          <div className="hidden lg:block mb-4 px-2">
            <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest">Select Site Page</h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">Review the high-fidelity redesign side-by-side with your current Wix site.</p>
          </div>
          {pages.map(page => (
            <button
              key={page.id}
              onClick={() => setActivePage(page.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all duration-200 shrink-0 flex items-center justify-between gap-3 border ${
                activePage === page.id 
                  ? "bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg shadow-orange-950/20 border-orange-500" 
                  : "bg-slate-900/30 text-slate-400 hover:bg-slate-900/60 hover:text-slate-200 border-slate-800/40"
              }`}
            >
              <span>{page.name}</span>
              <ChevronRight className={`w-4 h-4 opacity-60 ${activePage === page.id ? "translate-x-1" : ""} transition-transform duration-200`} />
            </button>
          ))}
        </aside>

        {/* Center Panel - Side-by-Side Comparison */}
        <main className="flex-1 p-6 overflow-y-auto space-y-6 bg-slate-950/20">
          {/* Header Description of the Redesign changes */}
          <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-6 space-y-4 shadow-2xl backdrop-blur">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800/80 pb-4">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-orange-500">Currently Reviewing</span>
                <h2 className="text-2xl font-black text-white mt-0.5 flex items-center gap-2">
                  {activePageData.name} Mockup
                </h2>
              </div>
              <div className="flex items-center gap-3 bg-slate-950 px-4 py-1.5 rounded-full border border-slate-800/80">
                <span className="text-[11px] font-bold text-slate-400">Newly SAM.gov Registered</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow shadow-emerald-500/50"></span>
                <span className="text-[11px] font-bold text-emerald-400">High-Trust Redesign Blueprint</span>
              </div>
            </div>

            {/* Strategic Redesign Notes */}
            <div className="space-y-3">
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <Info className="w-4 h-4 text-orange-500" /> Key Redesign Changes & Strategic Upgrades
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                {activePageData.redesignNotes.map((note, idx) => (
                  <div key={idx} className="flex gap-3 items-start text-xs text-slate-300 bg-slate-950/60 p-4 rounded-xl border border-slate-800/40 hover:border-slate-800 transition-colors duration-200">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 bg-emerald-950/50 p-0.5 rounded-full border border-emerald-900/30" />
                    <span className="leading-relaxed">{note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Redesigned Layout Preview Block */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Before Column (Live Wix Screenshots) */}
            <div className="space-y-3">
              <div className="flex justify-between items-center bg-slate-900/80 px-5 py-3 rounded-xl border border-slate-800/80 shadow-md">
                <span className="text-xs font-bold text-slate-400">Current Wix Site Screenshot</span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-red-950/80 text-red-400 font-bold border border-red-900/50 uppercase tracking-wider">BEFORE</span>
              </div>
              <div className="bg-slate-900/50 rounded-2xl border border-slate-800/60 p-3 shadow-2xl overflow-hidden flex justify-center backdrop-blur-sm">
                <div className={`w-full overflow-y-auto border border-slate-800/80 rounded-xl bg-slate-950 ${viewportMode === 'mobile' ? 'max-w-[340px] h-[650px]' : 'h-[750px]'} scrollbar-thin`}>
                  <img 
                    src={viewportMode === 'desktop' ? activePageData.beforeDesktopUrl : activePageData.beforeMobileUrl} 
                    alt={`Wix current ${activePageData.name}`} 
                    className="w-full object-top"
                  />
                </div>
              </div>
            </div>

            {/* After Column (Redesigned Mockups) */}
            <div className="space-y-3">
              <div className="flex justify-between items-center bg-slate-900/80 px-5 py-3 rounded-xl border border-slate-800/80 shadow-md">
                <span className="text-xs font-bold text-slate-400">Redesigned Mockup Concept</span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-950/80 text-emerald-400 font-bold border border-emerald-900/50 uppercase tracking-wider">AFTER (CONCEPT)</span>
              </div>
              <div className="bg-slate-900/50 rounded-2xl border border-slate-800/60 p-3 shadow-2xl overflow-hidden flex justify-center backdrop-blur-sm">
                <div className={`w-full overflow-y-auto border border-slate-800/80 rounded-xl bg-white text-slate-800 flex flex-col ${viewportMode === 'mobile' ? 'max-w-[340px] h-[650px]' : 'h-[750px]'} scrollbar-thin`}>
                  {/* Redesigned Mockup Render Component */}
                  <MockupRenderer pageId={activePage} mode={viewportMode} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Sticky Bottom Bar */}
      <footer className="bg-slate-900 border-t border-slate-800 py-4 px-6 text-center text-xs text-slate-500 shadow-2xl">
        <p>This visual mockup comparison dashboard allows you to <strong>explore data more intuitively</strong>, <strong>understand trends better</strong>, and <strong>easily save or share</strong> the design concepts before applying any edits to your live Wix site.</p>
      </footer>
    </div>
  );
}

// Custom Component to Render Redesigned Mockups Page-by-Page dynamically (purely CSS-based static design mockups)
export function MockupRenderer({ pageId, mode }: { pageId: string; mode: "desktop" | "mobile" }) {
  const isMobile = mode === "mobile";
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Per-page SEO
  const seoMap: Record<string, { title: string; description: string; canonical: string }> = {
    home: {
      title: "Secure Healthcare IT, Cloud & Cybersecurity Consulting",
      description: "Enterprise-grade Healthcare IT, cloud engineering, HIPAA cybersecurity, and EHR support for clinical practices, hospitals, and federal agencies. SAM.gov Active. Venus, TX (DFW).",
      canonical: "https://ndehealthtech.com/"
    },
    services: {
      title: "Healthcare IT & Enterprise IT Services",
      description: "Clinical Health IT, EHR support, managed helpdesk, cloud engineering, cybersecurity, and disaster recovery services for healthcare providers and enterprises.",
      canonical: "https://ndehealthtech.com/services"
    },
    healthcare_it: {
      title: "Clinical Informatics & HIPAA-Compliant Security",
      description: "Expert EHR support for Epic, Cerner, and eClinicalWorks. HIPAA compliance, HL7/FHIR interoperability, and clinical workflow optimization.",
      canonical: "https://ndehealthtech.com/healthcare-it"
    },
    federal: {
      title: "Federal Healthcare IT & Systems Engineering",
      description: "Active SAM.gov Registered Small Business providing secure, NIST-compliant IT systems and informatics to federal agencies. CAGE: 209X4 | UEI: G7YUFGEZBHP4.",
      canonical: "https://ndehealthtech.com/federal"
    },
    why_us: {
      title: "Why Choose NDE HealthTech Solutions",
      description: "Enterprise standards and clinical precision. Predictable pricing, 24/7 support, and specialized healthcare informatics from a trusted Texas-based IT consulting firm.",
      canonical: "https://ndehealthtech.com/why-us"
    },
    team: {
      title: "Our Healthcare IT & Technology Team",
      description: "Meet our DevOps, cloud, health informatics, and cybersecurity professionals committed to securing clinical environments and modernizing healthcare technology.",
      canonical: "https://ndehealthtech.com/team"
    },
    academy: {
      title: "NDE HealthTech Academy — DevOps, Cloud & Healthcare IT Training",
      description: "Structured learning paths for DevOps, AWS, Healthcare IT, informatics, cybersecurity, and project management. Follow our YouTube Academy channel.",
      canonical: "https://ndehealthtech.com/academy"
    },
    contact: {
      title: "Schedule a Free Healthcare IT Consultation",
      description: "Book a complimentary 20-minute discovery session with our healthcare IT consultants. Serving clinical practices, hospitals, and federal agencies across the DFW Metroplex.",
      canonical: "https://ndehealthtech.com/contact"
    },
    blog: {
      title: "Clinical Informatics & Cybersecurity Insights",
      description: "Expert articles on healthcare IT, HIPAA compliance, EHR best practices, and clinical cybersecurity from NDE HealthTech Solutions.",
      canonical: "https://ndehealthtech.com/blog"
    }
  };
  const currentSEO = seoMap[pageId] || seoMap.home;
  useSEO(currentSEO);

  const realImages = {
    clinical: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85",
    ehr: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85",
    cloud: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85",
    security: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",
    datacenter: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
    strategy: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
    analytics: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    support: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85"
  };

  const imageFallback = (event: SyntheticEvent<HTMLImageElement>, fallback: string) => {
    const img = event.currentTarget;
    if (img.src.endsWith(fallback)) return;
    img.src = fallback;
  };

  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL as string | undefined;

  const validateContactForm = (data: FormData): Record<string, string> => {
    const errors: Record<string, string> = {};
    const name = (data.get("name") as string || "").trim();
    const email = (data.get("email") as string || "").trim();
    const organization = (data.get("organization") as string || "").trim();
    const need = (data.get("need") as string || "").trim();
    if (!name) errors.name = "Full name is required.";
    if (!email) {
      errors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!organization) errors.organization = "Please select your organization type.";
    if (!need) errors.need = "Please select your primary technical need.";
    return errors;
  };

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const errors = validateContactForm(data);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    setContactSubmitting(true);
    try {
      if (formspreeEndpoint) {
        const response = await fetch(formspreeEndpoint, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" }
        });
        if (!response.ok) throw new Error("Form submission failed");
      } else {
        const subject = encodeURIComponent("New consultation request from NDEHealthTech.com");
        const msgBody = encodeURIComponent(
          `Name: ${data.get("name") || ""}\nEmail: ${data.get("email") || ""}\nOrganization: ${data.get("organization") || ""}\nTechnical Need: ${data.get("need") || ""}\nMessage: ${data.get("message") || ""}`
        );
        window.location.href = `mailto:contracts@ndehealthtech.com?subject=${subject}&body=${msgBody}`;
      }
      setContactSubmitted(true);
      form.reset();
    } catch {
      setFormErrors({ _global: "We could not send your request. Please email contracts@ndehealthtech.com directly." });
    } finally {
      setContactSubmitting(false);
    }
  };

  // Global Header Redesign
  const navLinks = [
    { href: "/", label: "Home", id: "home", icon: HomeIcon },
    { href: "/services", label: "Services", id: "services", icon: Briefcase },
    { href: "/healthcare-it", label: "Healthcare IT", id: "healthcare_it", icon: HeartPulse },
    { href: "/federal", label: "Federal", id: "federal", icon: Landmark },
    { href: "/why-us", label: "Why Us", id: "why_us", icon: BadgeCheck },
    { href: "/team", label: "Team", id: "team", icon: Users },
    { href: "/blog", label: "Blog", id: "blog", icon: Newspaper },
    { href: "/academy", label: "Academy", id: "academy", icon: GraduationCap },
  ];

  const renderHeader = () => (
    <header className="bg-white/90 backdrop-blur-xl border-b border-slate-200/70 text-slate-900 sticky top-0 z-50 shadow-[0_8px_30px_rgba(15,23,42,0.08)] shrink-0">
      <div className="px-4 md:px-6 h-[72px] flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/">
          <div className="flex items-center gap-3 min-w-0 cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
            <img 
              src="/assets/nde-logo.png" 
              alt="NDE HealthTech Logo" 
              width="48" height="48"
              fetchPriority="high"
              className="w-11 h-11 md:w-12 md:h-12 object-contain rounded-xl bg-white border border-slate-200 p-0.5 shadow-[0_12px_30px_rgba(15,23,42,0.12)] shrink-0"
            />
            <div className="leading-none min-w-0">
              <span className="font-black text-base md:text-lg tracking-[-0.04em] text-slate-950 block whitespace-nowrap">NDE HealthTech</span>
              <span className="text-[9px] md:text-[10px] font-black text-orange-600 uppercase tracking-[0.24em] block mt-1.5">Solutions</span>
            </div>
          </div>
        </Link>

        {!isMobile ? (
          <div className="flex items-center gap-1.5 xl:gap-2 text-[11px] font-black text-slate-600">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = pageId === link.id;
              return (
                <Link key={link.href} href={link.href}>
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-2 transition-all cursor-pointer border ${active ? 'bg-slate-950 text-white border-slate-950 shadow-[0_10px_25px_rgba(15,23,42,0.18)]' : 'bg-white text-slate-600 border-transparent hover:border-slate-200 hover:bg-slate-50 hover:text-slate-950 hover:shadow-sm'}`}>
                    <Icon className={`w-3.5 h-3.5 ${active ? 'text-orange-400' : 'text-orange-500'}`} />
                    {link.label}
                  </span>
                </Link>
              );
            })}
            <Link href="/contact">
              <button className="ml-1 bg-orange-600 text-white text-[11px] px-4 py-2.5 rounded-full font-black hover:bg-orange-500 transition-all shadow-[0_12px_24px_rgba(234,88,12,0.25)] cursor-pointer">
                Schedule Consultation
              </button>
            </Link>
          </div>
        ) : (
          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-950 cursor-pointer border border-slate-900 shadow-[0_12px_25px_rgba(15,23,42,0.18)] active:scale-95 transition-transform"
          >
            <Menu className="w-5 h-5 text-white" />
          </button>
        )}
      </div>

      {isMobile && mobileMenuOpen && (
        <nav className="absolute left-0 right-0 top-[76px] z-50 bg-white border-b border-slate-200 shadow-2xl px-4 py-4">
          <div className="grid gap-2 max-w-md mx-auto">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link key={link.href} href={link.href}>
                  <span
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-black transition-colors ${pageId === link.id ? 'bg-slate-950 text-white shadow-lg' : 'text-slate-800 hover:bg-slate-50 border border-slate-100'}`}
                  >
                    <span className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center border border-orange-100 shrink-0">
                      <Icon className="w-4.5 h-4.5 text-orange-600" />
                    </span>
                    {link.label}
                  </span>
                </Link>
              );
            })}
            <Link href="/contact">
              <span
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 block rounded-2xl px-4 py-3 text-sm font-black text-center bg-orange-600 text-white shadow-[0_12px_24px_rgba(234,88,12,0.25)]"
              >
                Schedule Consultation
              </span>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );

  // Global Footer Redesign
  const renderFooter = () => (
    <div className="bg-slate-950 text-slate-400 py-12 px-6 border-t border-slate-900 text-[11px] space-y-6 shrink-0 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex items-center gap-2.5 min-w-0">
          <img 
            src="/assets/nde-logo.png" 
            alt="NDE HealthTech Logo" 
            className="w-7 h-7 object-contain rounded bg-slate-900 border border-slate-800 p-0.5"
          />
          <span className="font-extrabold text-white tracking-tight text-sm">NDE HealthTech Solutions</span>
        </div>
        <div className="flex flex-wrap gap-5 text-slate-500 font-medium">
          <Link href="/services">
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Services</span>
          </Link>
          <Link href="/federal">
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Federal Capabilities</span>
          </Link>
          <Link href="/why-us">
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Why Choose Us</span>
          </Link>
          <Link href="/academy">
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Academy</span>
          </Link>
          <Link href="/contact">
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Contact</span>
          </Link>
        </div>
      </div>
      <div className="border-t border-slate-900 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-slate-600 font-medium">
        <div className="space-y-1">
          <p>© 2026 NDE HealthTech Solutions LLC. All rights reserved.</p>
          <div className="flex items-center gap-3 text-xs text-slate-500 pt-1">
            <a href="https://www.linkedin.com/company/123453939/" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-500 transition-colors">
              <Linkedin className="w-3.5 h-3.5 text-blue-600" /> LinkedIn Profile
            </a>
          </div>
        </div>
        <p className="flex items-center gap-4">
          <span>CAGE: 209X4</span>
          <span>UEI: G7YUFGEZBHP4</span>
          <span>Venus, TX</span>
        </p>
      </div>
    </div>
  );

  // Page-specific mockup renderings
  switch (pageId) {
    case "home":
      return (
        <div className="a-plus-site flex-1 flex flex-col bg-white text-slate-800">
          {renderHeader()}
          
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-white border-b border-slate-100 shrink-0">
            {/* Subtle right-panel tint */}
            <div className="absolute inset-y-0 right-0 w-5/12 bg-slate-50 pointer-events-none hidden lg:block"></div>

            <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 lg:py-24 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center">
              {/* Left: Value Proposition */}
              <div className="lg:col-span-6 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-blue-800 text-[11px] font-black uppercase tracking-widest border border-blue-100 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.12)]"></span>
                  SAM.gov Active Federal Contractor
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.03] text-slate-950 max-w-3xl">
                    Technology Solutions for <span className="text-blue-800">Healthcare</span>, <span className="text-orange-600">Government</span> & Enterprise
                  </h1>
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl font-medium">
                    From healthcare IT and cloud engineering to cybersecurity, DevOps, and digital transformation, we help organizations build secure, scalable, and future-ready technology environments.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link href="/contact">
                    <span className="inline-flex items-center justify-center bg-blue-800 text-white text-sm font-black px-7 py-4 rounded-xl shadow-lg shadow-blue-900/20 hover:bg-blue-900 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer">
                      Schedule a Free Consultation <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                  </Link>
                  <Link href="/federal">
                    <span className="inline-flex items-center justify-center bg-white text-blue-900 text-sm font-black px-7 py-4 rounded-xl border border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 cursor-pointer">
                      View Federal Capabilities <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  {[
                    { icon: HeartPulse, title: "Healthcare IT", text: "EHR, Informatics & Workflows" },
                    { icon: Cloud, title: "Cloud & DevOps", text: "AWS, Automation & Infrastructure" },
                    { icon: ShieldCheck, title: "Cybersecurity", text: "HIPAA, NIST & Zero Trust" }
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex items-start gap-3 rounded-2xl bg-white/90 border border-slate-200 p-4 shadow-sm">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                          <Icon className="w-5 h-5 text-blue-800" />
                        </div>
                        <div>
                          <p className="text-xs font-black text-slate-950">{item.title}</p>
                          <p className="text-[11px] text-slate-500 font-semibold leading-snug mt-0.5">{item.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right: Professional Photo Collage */}
              <div className="lg:col-span-6 relative hidden lg:block">
                {/* Tall primary image */}
                <div className="grid grid-cols-2 gap-4 h-[500px]">
                  <div className="rounded-[1.35rem] overflow-hidden shadow-lg row-span-2">
                    <img
                      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
                      alt="Healthcare IT professional at work"
                      className="w-full h-full object-cover"
                      fetchPriority="high"
                    />
                  </div>
                  <div className="rounded-[1.35rem] overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
                      alt="Secure cloud infrastructure"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="rounded-[1.35rem] overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                      alt="Data analytics and reporting"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                {/* Floating credential badge */}
                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-orange-600 uppercase tracking-widest">SAM.gov Active</p>
                    <p className="text-xs font-black text-slate-900 mt-0.5">CAGE 209X4 · UEI G7YUFGEZBHP4</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Bar */}
            <div className="max-w-7xl mx-auto px-6 pb-10 relative z-10">
              <div className="rounded-2xl bg-white border border-slate-200 shadow-[0_16px_45px_rgba(15,23,42,0.08)] px-6 py-5 grid grid-cols-2 md:grid-cols-5 gap-4 items-center">
                {[
                  ["Active", "SAM.gov Registered"],
                  ["209X4", "CAGE Code"],
                  ["G7YU…BHP4", "UEI"],
                  ["HIPAA", "Healthcare Compliance"],
                  ["NIST", "Security Frameworks"]
                ].map(([big, small]) => (
                  <div key={small} className="text-center md:border-r md:last:border-r-0 border-slate-100">
                    <p className="text-lg font-black text-blue-900 leading-none">{big}</p>
                    <p className="text-[11px] text-slate-500 font-bold mt-1 uppercase tracking-wide">{small}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Premium Categorized Core Solutions Grid - High-Fidelity Modern Light Design with Custom Images */}
          <div className="py-16 px-6 space-y-10 bg-slate-50 relative border-y border-slate-100">
            <div className="text-center space-y-2 max-w-xl mx-auto">
              <span className="text-xs font-black text-orange-600 uppercase tracking-widest">Consulting Excellence</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Our Dual-Force Capabilities
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mx-auto">
                Specialized Clinical Health IT combined with robust, enterprise-grade General IT Infrastructure & Security.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
              {/* Category A: Clinical Health IT Solutions - Rebuilt with premium imagery */}
              <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-[0_18px_45px_rgba(15,23,42,0.08)] hover:shadow-[0_24px_65px_rgba(15,23,42,0.14)] hover:border-orange-200 transition-all duration-300 flex flex-col justify-between">
                <div>
                  {/* Premium Image Header */}
                  <div className="h-44 relative overflow-hidden bg-slate-900">
                    <img 
                      src="/assets/ehr-card.svg" 
                      alt="Clinical Health IT Solutions" 
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-5 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-orange-500/10 backdrop-blur-md flex items-center justify-center border border-orange-500/20">
                        <Activity className="w-4 h-4 text-orange-500" />
                      </div>
                      <div>
                        <span className="text-[8px] font-black text-orange-500 uppercase tracking-widest block">Specialization 01</span>
                        <h3 className="font-black text-sm text-white">Clinical Health IT Solutions</h3>
                      </div>
                    </div>
                  </div>

                  {/* Service Items */}
                  <div className="p-6 space-y-5">
                    {[
                      { title: "Clinical Informatics & EHR Support", desc: "Expert HL7/FHIR compliant support for Epic, Cerner, and eClinicalWorks to optimize clinical workflows." },
                      { title: "System & Software Integrations", desc: "Aligning technical systems directly with nursing and physician pathways to prevent charting friction." },
                      { title: "Health IT Consulting & Strategy", desc: "Strategic advisory on software selections, database design, and HIPAA regulatory compliance frameworks." }
                    ].map((srv, idx) => (
                      <div key={idx} className="space-y-1 hover:bg-slate-50 p-3 rounded-xl transition-colors duration-200">
                        <h4 className="font-extrabold text-xs text-slate-900 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-orange-600 rounded-full"></span> {srv.title}
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed pl-3.5">{srv.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Category B: Enterprise IT & Security - Rebuilt with premium imagery */}
              <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-[0_18px_45px_rgba(15,23,42,0.08)] hover:shadow-[0_24px_65px_rgba(15,23,42,0.14)] hover:border-blue-200 transition-all duration-300 flex flex-col justify-between">
                <div>
                  {/* Premium Image Header */}
                  <div className="h-44 relative overflow-hidden bg-slate-900">
                    <img 
                      src="/assets/hipaa-card.svg" 
                      alt="Enterprise IT & Security" 
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-5 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-500/10 backdrop-blur-md flex items-center justify-center border border-blue-500/20">
                        <Network className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <span className="text-[8px] font-black text-blue-400 uppercase tracking-widest block">Specialization 02</span>
                        <h3 className="font-black text-sm text-white">Enterprise IT & Security</h3>
                      </div>
                    </div>
                  </div>

                  {/* Service Items */}
                  <div className="p-6 space-y-5">
                    {[
                      { title: "Managed Helpdesk Support (24/7)", desc: "Proactive network administration, troubleshooting, and continuous systems monitoring to eliminate downtime." },
                      { title: "Cloud & Infrastructure Engineering", desc: "Secure clinical cloud migrations, server virtualization, and robust database administration." },
                      { title: "Cybersecurity & Risk Safeguards", desc: "Advanced threat detection, penetration testing, and compliance configurations protecting networks." }
                    ].map((srv, idx) => (
                      <div key={idx} className="space-y-1 hover:bg-slate-50 p-3 rounded-xl transition-colors duration-200">
                        <h4 className="font-extrabold text-xs text-slate-900 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> {srv.title}
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed pl-3.5">{srv.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Reviews & Testimonials Section - Tightened Spacing */}
          <div className="bg-white py-14 px-6 border-y border-slate-100 space-y-6 shrink-0">
            <div className="text-center space-y-2 max-w-lg mx-auto">
              <span className="text-xs font-black text-orange-600 uppercase tracking-widest">Client Feedback</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900">What Our Clients Say</h2>
              <p className="text-slate-500 text-xs leading-relaxed">
                Professional testimonials demonstrating our commitment to secure, reliable, and compliant healthcare and commercial IT operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-6xl mx-auto">
              {/* Review 1: Caleb (Commercial success) */}
              <div className="p-6 rounded-2xl border border-slate-100 bg-white space-y-4 shadow-sm flex flex-col justify-between">
                <p className="text-[11px] md:text-xs font-medium italic text-slate-600 leading-relaxed">
                  "I have never had peace of mind about my IT services provider until I called NDE HealthTech Solutions. They transformed our infrastructure security and streamlined our operational support."
                </p>
                <div className="flex justify-between items-center pt-3 border-t border-slate-100">
                  <div>
                    <h4 className="font-black text-xs text-slate-900">Caleb Hicherson</h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">CEO, Premier Stay Residentials LLC</p>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-bold border border-slate-200 uppercase tracking-wider">Commercial IT</span>
                </div>
              </div>

              {/* Review 2: Healthcare / clinical testimonial */}
              <div className="p-6 rounded-2xl border border-slate-100 bg-white space-y-4 flex flex-col justify-between relative group">
                <div className="space-y-2">
                  <div className="flex items-center gap-1 text-orange-500">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <p className="text-[11px] md:text-xs font-medium italic text-slate-600 leading-relaxed">
                    "NDE HealthTech Solutions has been instrumental in modernizing our clinic's IT infrastructure. Their team understood our EHR workflows immediately and delivered HIPAA-compliant solutions without disrupting patient care."
                  </p>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-slate-100">
                  <div>
                    <h4 className="font-black text-xs text-slate-900">Clinical Practice Client</h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">DFW Metroplex, Texas</p>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-orange-50 text-orange-600 font-bold border border-orange-100 uppercase tracking-wider">Healthcare IT</span>
                </div>
              </div>
            </div>
          </div>

          {renderFooter()}
        </div>
      );

    case "services":
      return (
        <div className="a-plus-site flex-1 flex flex-col bg-white text-slate-800">
          {renderHeader()}
          
          {/* Services Hero with Premium Banner Background */}
          <div 
            className="relative py-14 px-6 bg-cover bg-center text-white text-center space-y-3 shrink-0"
            style={{ 
              backgroundImage: `linear-gradient(rgba(8, 15, 30, 0.82), rgba(8, 15, 30, 0.94)), url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1800&q=85")` 
            }}
          >
            <div className="relative z-10 max-w-2xl mx-auto space-y-2">
              <span className="text-[10px] px-2.5 py-0.5 rounded bg-orange-600 text-white font-bold uppercase tracking-wider">Consulting Suite</span>
              <h1 className="text-xl md:text-3xl font-black tracking-tight leading-tight">
                Healthcare IT & Enterprise IT Services
              </h1>
              <p className="text-slate-300 text-sm leading-relaxed max-w-lg mx-auto">
                Dual-force consulting delivering specialized Clinical Health IT alongside robust, enterprise-grade General IT Infrastructure & Security.
              </p>
            </div>
          </div>

          {/* Complete 8 Services Categorized */}
          <div className="py-10 px-6 space-y-10 max-w-5xl mx-auto w-full">
            {/* Category 1: Clinical Health IT */}
            <div className="space-y-5">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-[10px] px-2.5 py-0.5 rounded bg-orange-50 text-orange-700 font-bold uppercase tracking-wider border border-orange-100">Category 01</span>
                <h2 className="text-lg font-black text-slate-900 mt-1 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-orange-600" /> Clinical Health IT Specializations
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                {[
                  { 
                    title: "Healthcare IT & Informatics", 
                    desc: "Comprehensive support for medical workflows, EHR data interoperability, and platform-specific management (Epic, Cerner, eClinicalWorks) ensuring seamless patient care pathways.", 
                    icon: Cpu,
                    img: realImages.clinical,
                    fallback: "/assets/workflow-card.svg"
                  },
                  { 
                    title: "Clinical System Integrations", 
                    desc: "Aligning technical software systems directly with nursing and physician workflows, optimizing database structures, and enabling HL7/FHIR compliant data pipelines.", 
                    icon: Layers,
                    img: realImages.ehr,
                    fallback: "/assets/ehr-card.svg"
                  },
                  { 
                    title: "Health IT Consulting Services", 
                    desc: "Strategic advisory on clinical software selections, long-term system optimization, regulatory compliance pathways, and specialized healthcare technology architectures.", 
                    icon: Briefcase,
                    img: realImages.strategy,
                    fallback: "/assets/ehr-card.svg"
                  },
                  { 
                    title: "Medical Data Management", 
                    desc: "Secure storage, migration, and management of Protected Health Information (PHI) and clinical imaging records with strict technical safeguard compliance.", 
                    icon: Database,
                    img: realImages.security,
                    fallback: "/assets/hipaa-card.svg"
                  }
                ].map((srv, idx) => {
                  const Icon = srv.icon;
                  return (
                    <div key={idx} className="rounded-2xl border border-slate-150 bg-white overflow-hidden shadow-[0_18px_45px_rgba(15,23,42,0.08)] hover:shadow-[0_24px_65px_rgba(15,23,42,0.14)] hover:border-orange-200 transition-all duration-300 flex flex-col justify-between">
                      <div>
                        <div className="h-44 relative overflow-hidden bg-slate-900">
                          <img src={srv.img} alt={srv.title} className="w-full h-full object-cover opacity-85" loading="lazy" onError={(e) => imageFallback(e, srv.fallback || "/assets/workflow-card.svg")} />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                          <div className="absolute bottom-3 left-4 flex items-center gap-2">
                            <div className="w-7 h-7 rounded-lg bg-orange-500/15 backdrop-blur-md flex items-center justify-center border border-orange-500/20">
                              <Icon className="w-4 h-4 text-orange-500" />
                            </div>
                            <h3 className="font-extrabold text-xs md:text-sm text-white leading-tight">{srv.title}</h3>
                          </div>
                        </div>
                        <div className="p-5">
                          <p className="text-sm text-slate-600 leading-relaxed">{srv.desc}</p>
                        </div>
                      </div>
                      <div className="px-5 pb-5 pt-3 border-t border-slate-50 mt-1 flex justify-between items-center">
                        <Link href="/contact">
                          <span className="text-xs font-black text-slate-950 hover:text-orange-600 flex items-center gap-1 cursor-pointer">
                            Request Details <ArrowRight className="w-3.5 h-3.5 text-orange-600" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Category 2: General IT & Security */}
            <div className="space-y-5">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-[10px] px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 font-bold uppercase tracking-wider border border-slate-200">Category 02</span>
                <h2 className="text-lg font-black text-slate-900 mt-1 flex items-center gap-2">
                  <Network className="w-5 h-5 text-slate-700" /> Enterprise IT & Security Infrastructure
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                {[
                  { 
                    title: "Managed IT & Helpdesk Support", 
                    desc: "Proactive 24/7/365 helpdesk, network administration, and systems monitoring designed to eliminate technical friction and ensure operational continuity.", 
                    icon: Laptop,
                    img: realImages.support,
                    fallback: "/assets/workflow-card.svg"
                  },
                  { 
                    title: "Cloud & Infrastructure Engineering", 
                    desc: "Secure medical cloud architecture, server migrations, virtualization, and robust database administration ensuring optimal performance and scalability.", 
                    icon: Cloud,
                    img: realImages.cloud,
                    fallback: "/assets/hipaa-card.svg"
                  },
                  { 
                    title: "Cybersecurity & Risk Management", 
                    desc: "Technical, physical, and administrative safeguards protecting clinical networks from advanced threats, including automated threat detection and penetration testing.", 
                    icon: Lock,
                    img: realImages.security,
                    fallback: "/assets/hipaa-card.svg"
                  },
                  { 
                    title: "Backup & Disaster Recovery Planning", 
                    desc: "Automated off-site backup protocols, redundancy configurations, and rigorous business continuity blueprints to protect operations during critical outages.", 
                    icon: Shield,
                    img: realImages.datacenter,
                    fallback: "/assets/workflow-card.svg"
                  }
                ].map((srv, idx) => {
                  const Icon = srv.icon;
                  return (
                    <div key={idx} className="rounded-2xl border border-slate-150 bg-white overflow-hidden shadow-[0_18px_45px_rgba(15,23,42,0.08)] hover:shadow-[0_24px_65px_rgba(15,23,42,0.14)] hover:border-blue-200 transition-all duration-300 flex flex-col justify-between">
                      <div>
                        <div className="h-44 relative overflow-hidden bg-slate-900">
                          <img src={srv.img} alt={srv.title} className="w-full h-full object-cover opacity-85" loading="lazy" onError={(e) => imageFallback(e, srv.fallback || "/assets/workflow-card.svg")} />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                          <div className="absolute bottom-3 left-4 flex items-center gap-2">
                            <div className="w-7 h-7 rounded-lg bg-blue-500/15 backdrop-blur-md flex items-center justify-center border border-blue-500/20">
                              <Icon className="w-4 h-4 text-blue-400" />
                            </div>
                            <h3 className="font-extrabold text-xs md:text-sm text-white leading-tight">{srv.title}</h3>
                          </div>
                        </div>
                        <div className="p-5">
                          <p className="text-sm text-slate-600 leading-relaxed">{srv.desc}</p>
                        </div>
                      </div>
                      <div className="px-5 pb-5 pt-3 border-t border-slate-50 mt-1 flex justify-between items-center">
                        <Link href="/contact">
                          <span className="text-xs font-black text-slate-950 hover:text-orange-600 flex items-center gap-1 cursor-pointer">
                            Request Details <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {renderFooter()}
        </div>
      );

    case "healthcare_it":
      return (
        <div className="a-plus-site flex-1 flex flex-col bg-white text-slate-800">
          {renderHeader()}

          {/* Healthcare IT Banner with Background Image */}
          <div 
            className="relative py-16 md:py-20 px-6 bg-cover bg-center text-white space-y-5 shrink-0"
            style={{ 
              backgroundImage: `linear-gradient(rgba(8, 15, 30, 0.82), rgba(8, 15, 30, 0.94)), url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1800&q=85")` 
            }}
          >
            <div className="relative z-10 space-y-2 max-w-2xl">
              <span className="text-[10px] px-2.5 py-0.5 rounded bg-orange-600 text-white font-bold uppercase tracking-wider">Clinical Specialization</span>
              <h1 className="text-xl md:text-3xl font-black tracking-tight leading-tight">
                Clinical Informatics & HIPAA-Compliant Security
              </h1>
              <p className="text-slate-300 text-sm leading-relaxed">
                We align medical technology with rigorous federal regulations to protect clinical data, support care delivery, and optimize system uptime.
              </p>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="py-14 px-6 space-y-10 max-w-6xl mx-auto w-full">
            <div className="space-y-5">
              <h3 className="font-black text-xs text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-3">
                Clinical Technology Capabilities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                  { 
                    title: "EHR Support & Interoperability", 
                    desc: "Seamless integration and secure data exchange for leading platforms, including Epic, Cerner, and eClinicalWorks, utilizing HL7 and FHIR standards.", 
                    icon: Cpu,
                    img: realImages.strategy,
                    fallback: "/assets/ehr-card.svg"
                  },
                  { 
                    title: "HIPAA-Compliant Security", 
                    desc: "Implementation of rigorous administrative, physical, and technical safeguards aligned with NIST SP 800-66 and HHS security guidelines.", 
                    icon: Lock,
                    img: realImages.security,
                    fallback: "/assets/hipaa-card.svg"
                  },
                  { 
                    title: "Clinical Workflow Optimization", 
                    desc: "Mapping technical systems directly to nursing and physician workflows to eliminate slowness, lag, and charting friction.", 
                    icon: Layers,
                    img: realImages.clinical,
                    fallback: "/assets/workflow-card.svg"
                  }
                ].map((cap, idx) => {
                  const Icon = cap.icon;
                  return (
                    <div key={idx} className="rounded-xl border border-slate-150 bg-white overflow-hidden shadow-[0_18px_45px_rgba(15,23,42,0.08)] hover:shadow-[0_24px_65px_rgba(15,23,42,0.14)] hover:border-orange-200 transition-all duration-300 flex flex-col justify-between">
                      <div>
                        <div className="h-28 relative overflow-hidden bg-slate-900">
                          <img src={cap.img} alt={cap.title} className="w-full h-full object-cover opacity-85" loading="lazy" onError={(e) => imageFallback(e, cap.fallback || "/assets/workflow-card.svg")} />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                          <div className="absolute bottom-3 left-4 flex items-center gap-2">
                            <div className="w-6.5 h-6.5 rounded-lg bg-orange-500/15 backdrop-blur-md flex items-center justify-center border border-orange-500/20">
                              <Icon className="w-3.5 h-3.5 text-orange-500" />
                            </div>
                            <h4 className="font-extrabold text-xs text-white leading-tight">{cap.title}</h4>
                          </div>
                        </div>
                        <div className="p-5">
                          <p className="text-sm text-slate-600 leading-relaxed">{cap.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {renderFooter()}
        </div>
      );

    case "federal":
      return (
        <div className="a-plus-site flex-1 flex flex-col bg-white text-slate-800">
          {renderHeader()}

          {/* Federal Hero with Secure Compliance Image Background */}
          <div 
            className="relative py-16 md:py-20 px-6 bg-cover bg-center text-white space-y-5 shrink-0"
            style={{ 
              backgroundImage: `linear-gradient(rgba(8, 15, 30, 0.82), rgba(8, 15, 30, 0.94)), url("https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=85")` 
            }}
          >
            <div className="relative z-10 space-y-2 max-w-2xl">
              <span className="text-[10px] px-2.5 py-0.5 rounded bg-slate-800 text-orange-400 font-bold uppercase tracking-wider border border-slate-700/50">Federal Procurement</span>
              <h1 className="text-xl md:text-3xl font-black tracking-tight leading-tight">
                Federal Healthcare IT & Systems Engineering
              </h1>
              <p className="text-slate-300 text-sm leading-relaxed">
                Active SAM.gov Registered Small Business delivering secure, NIST-compliant systems design and informatics support to federal agencies.
              </p>
            </div>
          </div>

          {/* Federal Registration details */}
          <div className="py-14 px-6 space-y-10 max-w-6xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {/* SAM.gov Card */}
              <div className="p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-black text-xs text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-3 flex items-center justify-between">
                    <span>Contractor Information</span>
                    <span className="text-[10px] px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold border border-emerald-200">ACTIVE REGISTRATION</span>
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-[11px] mt-4">
                    <div>
                      <span className="text-slate-400 block font-bold uppercase text-[10px] tracking-wider">CAGE Code</span>
                      <span className="text-slate-900 font-mono font-bold text-sm">209X4</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-bold uppercase text-[10px] tracking-wider">Unique Entity ID</span>
                      <span className="text-slate-900 font-mono font-bold text-sm">G7YUFGEZBHP4</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-bold uppercase text-[10px] tracking-wider">Business Type</span>
                      <span className="text-slate-900 font-bold">Small Business</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-bold uppercase text-[10px] tracking-wider">Location</span>
                      <span className="text-slate-900 font-bold">Venus, Texas</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* NAICS Grid */}
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-4">
                <h3 className="font-black text-xs text-slate-900 uppercase tracking-widest border-b border-slate-200/60 pb-3">Primary NAICS Codes</h3>
                <div className="space-y-2.5 text-[11px] text-slate-700">
                  <div className="p-3 rounded-lg border border-slate-200/50 bg-white font-medium flex justify-between items-center shadow-sm">
                    <span><strong className="font-bold text-slate-900">541512</strong> – Computer Systems Design Services</span>
                    <span className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-orange-50 text-orange-600 border border-orange-100 uppercase tracking-wider">Primary</span>
                  </div>
                  <div className="p-3 rounded-lg border border-slate-200/50 bg-white font-medium flex justify-between items-center shadow-sm">
                    <span><strong className="font-bold text-slate-900">541511</strong> – Custom Computer Programming</span>
                  </div>
                  <div className="p-3 rounded-lg border border-slate-200/50 bg-white font-medium flex justify-between items-center shadow-sm">
                    <span><strong className="font-bold text-slate-900">541519</strong> – Other Computer Related Services</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Gated Capability Statement with Form - Aligned with exact 1-page document provided */}
            <div className="rounded-2xl bg-slate-950 text-white overflow-hidden shadow-xl border border-slate-900 flex flex-col md:flex-row">
              <div className="p-6 md:p-8 space-y-3 md:w-1/2">
                <span className="text-[10px] px-2.5 py-0.5 rounded bg-slate-800 text-orange-400 font-bold uppercase tracking-wider border border-slate-700/50">Capability Statement</span>
                <h4 className="font-black text-base text-white">Download Capability Statement</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Access our official, 1-page Capabilities Brief detailing our core competencies, differentiators, and NAICS codes (Primary 541512).
                </p>
              </div>
              <div className="p-6 md:p-8 bg-slate-900/60 border-t md:border-t-0 md:border-l border-slate-900 md:w-1/2 flex flex-col justify-center space-y-3">
                <div className="space-y-2.5">
                  <a 
                    href="/assets/NDE_HealthTech_Capability_Statement.pdf" 
                    download="NDE_HealthTech_Solutions_Capability_Statement.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-orange-600 text-white text-xs font-bold py-3 rounded-lg hover:bg-orange-500 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 shadow-md text-center block flex items-center justify-center gap-2"
                  >
                    <FileText className="w-4 h-4" /> Download Capability Statement (PDF)
                  </a>
                  <p className="text-[10px] text-slate-400 text-center">
                    Direct 1-page PDF brief for government contracting officers and prime contractors.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {renderFooter()}
        </div>
      );

    case "why_us":
      return (
        <div className="a-plus-site flex-1 flex flex-col bg-white text-slate-800">
          {renderHeader()}

          {/* Why Us Hero with Background */}
          <div 
            className="relative py-14 px-6 bg-cover bg-center text-white text-center space-y-3 shrink-0"
            style={{ 
              backgroundImage: `linear-gradient(rgba(8, 15, 30, 0.82), rgba(8, 15, 30, 0.94)), url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1800&q=85")` 
            }}
          >
            <div className="relative z-10 space-y-2 max-w-2xl mx-auto">
              <span className="text-[10px] px-2.5 py-0.5 rounded bg-orange-600 text-white font-bold uppercase tracking-wider">Our Philosophy</span>
              <h1 className="text-xl md:text-3xl font-black tracking-tight leading-tight">
                Enterprise Standards, Clinical Precision
              </h1>
              <p className="text-slate-300 text-[11px] md:text-xs max-w-lg mx-auto leading-relaxed">
                We combine enterprise-grade technical support with a specialized clinical consulting approach to ensure continuous medical operations.
              </p>
            </div>
          </div>

          {/* Core Pillars */}
          <div className="py-10 px-6 space-y-6 max-w-6xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  title: "Predictable, High-Value Pricing", 
                  desc: "We deliver enterprise-grade solutions with transparent, predictable pricing models designed to maximize your technology investment and protect your clinical budgets.",
                  img: realImages.analytics,
                  fallback: "/assets/ehr-card.svg"
                },
                { 
                  title: "24/7/365 Proactive Support", 
                  desc: "We identify security risks and technical issues early, preventing outages before they disrupt clinical care. Our support team is always available.",
                  img: realImages.support,
                  fallback: "/assets/workflow-card.svg"
                },
                { 
                  title: "Specialized Clinical Informatics", 
                  desc: "We are not just IT support. Our team understands medical billing, charting, and patient care workflows, allowing us to build systems that work for medical staff.",
                  img: realImages.clinical,
                  fallback: "/assets/workflow-card.svg"
                }
              ].map((plr, idx) => (
                <div key={idx} className="rounded-xl border border-slate-150 bg-white overflow-hidden shadow-[0_18px_45px_rgba(15,23,42,0.08)] hover:shadow-[0_24px_65px_rgba(15,23,42,0.14)] hover:border-orange-200 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="h-28 relative overflow-hidden bg-slate-900">
                      <img src={plr.img} alt={plr.title} className="w-full h-full object-cover opacity-85" loading="lazy" onError={(e) => imageFallback(e, plr.fallback || "/assets/workflow-card.svg")} />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                      <div className="absolute bottom-3 left-4 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-orange-500/15 backdrop-blur-md flex items-center justify-center font-bold text-xs border border-orange-500/20 text-orange-400">0{idx + 1}</span>
                        <h3 className="font-extrabold text-xs text-white leading-tight">{plr.title}</h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-[15px] text-slate-700 leading-relaxed">{plr.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {renderFooter()}
        </div>
      );

    case "team":
      return (
        <div className="a-plus-site flex-1 flex flex-col bg-white text-slate-800">
          {renderHeader()}

          {/* Team Hero */}
          <div className="py-10 px-6 bg-slate-50 border-b border-slate-100 text-center space-y-3 shrink-0">
            <span className="text-xs font-black text-orange-600 uppercase tracking-widest">Our Leadership</span>
            <h1 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
              Our Technology & Informatics Leadership
            </h1>
            <p className="text-slate-500 text-[11px] md:text-xs max-w-lg mx-auto leading-relaxed">
              Experienced systems engineers and health informatics experts committed to securing clinical environments.
            </p>
          </div>

          {/* Team Members with Bios */}
          <div className="py-10 px-6 space-y-6 max-w-6xl mx-auto w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  name: "Alexis Nde", 
                  role: "DevOps & Security Engineer", 
                  bio: "Alexis specializes in secure cloud architecture, DevOps automation, infrastructure modernization, and technical compliance for healthcare and enterprise environments.", 
                  img: "/team/alexis.jpeg",
                  linkedin: "https://www.linkedin.com/company/123453939/"
                },
                { 
                  name: "Nicoline Nde", 
                  role: "Health Informatics & Operations", 
                  bio: "Nicoline combines healthcare administration, informatics, finance, and operational governance to align technical systems with clinical and business workflows.", 
                  img: "/team/nicoline.jpeg",
                  linkedin: "https://www.linkedin.com/company/123453939/"
                },
                { 
                  name: "Abby Stephen", 
                  role: "Cloud Engineer & Health IT", 
                  bio: "Abby supports secure cloud operations, technical implementation, and health IT modernization initiatives across enterprise and clinical environments.", 
                  img: "/team/abby-stock.jpeg",
                  linkedin: "https://www.linkedin.com/company/123453939/"
                },
                { 
                  name: "Belinda Nkembo", 
                  role: "Security Engineer", 
                  bio: "Belinda focuses on security operations, risk awareness, endpoint protection, and safeguards that support HIPAA-aligned and enterprise security programs.", 
                  img: "/team/abby.jpeg",
                  linkedin: "https://www.linkedin.com/company/123453939/"
                }
              ].map((mem, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-slate-150 bg-white space-y-3 flex flex-col justify-between hover:shadow-md hover:border-orange-200 transition-all duration-300">
                  <div className="space-y-3">
                    {/* Real Team Headshots Integrated */}
                    <div className="w-full aspect-[4/5] rounded-lg bg-slate-100 border border-slate-200/80 relative overflow-hidden shadow-sm group">
                      <img 
                        src={mem.img} 
                        alt={mem.name} 
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300" loading="lazy"
                      />
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-extrabold text-xs text-slate-900">{mem.name}</h3>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">{mem.role}</p>
                      </div>
                      <a href={mem.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-[15px] text-slate-700 leading-relaxed pt-2.5 border-t border-slate-100">
                      {mem.bio}
                    </p>
                  </div>
                  <Link href="/contact">
                    <span className="block w-full text-center bg-slate-900 text-white text-xs font-bold py-1.5 rounded-lg hover:bg-slate-800 transition-colors mt-2 shadow-sm cursor-pointer">
                      Contact Professional
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {renderFooter()}
        </div>
      );


    case "academy":
      return (
        <div className="a-plus-site flex-1 flex flex-col bg-white text-slate-800">
          {renderHeader()}

          <div className="relative py-16 px-6 bg-slate-950 text-white text-center overflow-hidden shrink-0">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,#f97316,transparent_35%),radial-gradient(circle_at_bottom_right,#2563eb,transparent_35%)]" />
            <div className="relative z-10 space-y-4 max-w-3xl mx-auto">
              <span className="text-[10px] px-2.5 py-0.5 rounded bg-orange-600 text-white font-bold uppercase tracking-wider">Training Division</span>
              <h1 className="text-2xl md:text-4xl font-black tracking-tight leading-tight">NDE HealthTech Academy</h1>
              <p className="text-slate-300 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
                Structured learning paths for DevOps, cloud computing, healthcare IT, informatics, cybersecurity, and project management.
              </p>
              <a href="https://www.youtube.com/@NDEHealthTechAcademy" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold rounded-lg px-5 py-2.5 transition-colors shadow-lg">
                <GraduationCap className="w-4 h-4" /> Visit YouTube Academy
              </a>
            </div>
          </div>

          <div className="py-12 px-6 max-w-5xl mx-auto w-full space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { icon: Terminal, title: "DevOps Fundamentals", desc: "Linux, Git, CI/CD, Docker, Kubernetes, Terraform, and monitoring." },
                { icon: Cloud, title: "AWS Cloud Engineer", desc: "Core AWS services, networking, security, compute, storage, and architecture." },
                { icon: Activity, title: "Healthcare IT", desc: "EHR systems, interoperability, HIPAA, clinical workflows, and health informatics." },
                { icon: Shield, title: "Cybersecurity", desc: "Risk management, IAM, cloud security, compliance, and secure operations." },
                { icon: BarChart3, title: "Healthcare Analytics", desc: "Dashboards, KPIs, reporting, data visualization, and decision support." },
                { icon: Briefcase, title: "Career Development", desc: "Certification planning, interviews, resumes, leadership, and career growth." }
              ].map((path, idx) => {
                const Icon = path.icon;
                return (
                  <div key={idx} className="p-5 rounded-2xl border border-slate-100 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)] hover:shadow-[0_24px_65px_rgba(15,23,42,0.14)] hover:border-orange-200 transition-all space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center border border-orange-100">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-black text-sm text-slate-900">{path.title}</h3>
                    <p className="text-[15px] text-slate-700 leading-relaxed">{path.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-5">
              <div className="space-y-2">
                <h2 className="font-black text-lg text-slate-900">Coming Soon: Complete DevOps Learning Path</h2>
                <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
                  The first academy series will start with beginner-friendly DevOps lessons and progress into real-world cloud and automation projects.
                </p>
              </div>
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg px-5 py-2.5 transition-colors">
                <BookOpen className="w-4 h-4" /> Request Training Info
              </a>
            </div>
          </div>

          {renderFooter()}
        </div>
      );

    case "contact":
      return (
        <div className="a-plus-site flex-1 flex flex-col bg-white text-slate-800">
          {renderHeader()}

          {/* Contact Hero with S3 Background */}
          <div 
            className="relative py-16 px-6 bg-cover bg-center text-white text-center space-y-3 shrink-0"
            style={{ 
              backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.94)), url("https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=85")` 
            }}
          >
            <div className="relative z-10 space-y-3 max-w-2xl mx-auto">
              <span className="text-[10px] px-2.5 py-0.5 rounded bg-orange-600 text-white font-bold uppercase tracking-wider">Discovery Session</span>
              <h1 className="text-xl md:text-3xl font-black tracking-tight leading-tight">
                Schedule Your Free Consultation
              </h1>
              <p className="text-slate-300 text-[11px] md:text-xs max-w-lg mx-auto leading-relaxed">
                Schedule a complimentary 20-minute consultation. We'll learn about your clinical needs, answer compliance questions, and explore our IT solutions.
              </p>
            </div>
          </div>

          {/* Contact Details & Lead Qualifying Form */}
          <div className="py-12 px-6 space-y-8 max-w-6xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Qualified Lead Form */}
              <div className="p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-sm">
                <h3 className="font-black text-xs text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-3">
                  Request Discovery Session
                </h3>
                {contactSubmitted ? (
                  <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-5 text-center space-y-3">
                    <Check className="w-8 h-8 text-emerald-700 mx-auto" />
                    <h4 className="font-black text-sm text-slate-900">Request Received</h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Thank you. We will review your request and follow up within 24 business hours.
                    </p>
                    <button onClick={() => setContactSubmitted(false)} className="text-xs font-bold text-orange-700 hover:underline">
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-3">
                    {formErrors._global && (
                      <div className="rounded-lg bg-red-50 border border-red-100 px-3 py-2 text-[11px] text-red-700 font-medium">
                        {formErrors._global}
                      </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                        <input name="name" type="text" placeholder="Your name" className={`w-full border rounded-lg px-3 py-2 text-[11px] focus:outline-none focus:ring-2 focus:ring-orange-500/30 ${formErrors.name ? "border-red-400 bg-red-50" : "border-slate-200"}`} />
                        {formErrors.name && <p className="text-[10px] text-red-600 font-medium">{formErrors.name}</p>}
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                        <input name="email" type="email" placeholder="you@company.com" className={`w-full border rounded-lg px-3 py-2 text-[11px] focus:outline-none focus:ring-2 focus:ring-orange-500/30 ${formErrors.email ? "border-red-400 bg-red-50" : "border-slate-200"}`} />
                        {formErrors.email && <p className="text-[10px] text-red-600 font-medium">{formErrors.email}</p>}
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Organization Type</label>
                      <select name="organization" className={`w-full border rounded-lg px-3 py-2 text-[11px] bg-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500/30 ${formErrors.organization ? "border-red-400 bg-red-50" : "border-slate-200"}`}>
                        <option value="">Select organization...</option>
                        <option>Clinical Practice / Clinic</option>
                        <option>Hospital / Health System</option>
                        <option>Government Agency</option>
                        <option>Commercial Enterprise</option>
                        <option>Small Business</option>
                      </select>
                      {formErrors.organization && <p className="text-[10px] text-red-600 font-medium">{formErrors.organization}</p>}
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Primary Technical Need</label>
                      <select name="need" className={`w-full border rounded-lg px-3 py-2 text-[11px] bg-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500/30 ${formErrors.need ? "border-red-400 bg-red-50" : "border-slate-200"}`}>
                        <option value="">Select primary interest...</option>
                        <option>HIPAA Cybersecurity Audit</option>
                        <option>EHR Support & Interoperability</option>
                        <option>Medical Cloud Migration</option>
                        <option>24/7 Managed IT Support</option>
                        <option>Federal Contracting / Subcontracting</option>
                        <option>Training / NDE HealthTech Academy</option>
                      </select>
                      {formErrors.need && <p className="text-[10px] text-red-600 font-medium">{formErrors.need}</p>}
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Brief Message</label>
                      <textarea name="message" rows={4} placeholder="Tell us what you need help with..." className="w-full border border-slate-200 rounded-lg px-3 py-2 text-[11px] focus:outline-none focus:ring-2 focus:ring-orange-500/30 resize-none" />
                    </div>

                    <button type="submit" disabled={contactSubmitting} className="w-full bg-orange-600 text-white text-xs font-bold py-2.5 rounded-lg hover:bg-orange-500 mt-2 transition-colors shadow-md flex items-center justify-center gap-2 disabled:opacity-60">
                      <Send className="w-3.5 h-3.5" /> {contactSubmitting ? "Sending..." : "Request Free Assessment"}
                    </button>
                    {!formspreeEndpoint && (
                      <p className="text-xs text-slate-400 leading-relaxed">
                        This form opens your email app by default. Add VITE_FORMSPREE_ENDPOINT in Vercel for direct email delivery.
                      </p>
                    )}
                  </form>
                )}
              </div>

              {/* Address Context */}
              <div className="space-y-6 flex flex-col justify-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="font-black text-xs text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-3">Corporate Details</h3>
                <div className="space-y-4 text-[11px] text-slate-600">
                  <p className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-orange-600 shrink-0 bg-orange-50 p-1 rounded border border-orange-100" />
                    <span><strong>Venus (Dallas-Fort Worth Metroplex), Texas, USA</strong></span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-orange-600 shrink-0 bg-orange-50 p-1 rounded border border-orange-100" />
                    <span>contracts@ndehealthtech.com</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-orange-600 shrink-0 bg-orange-50 p-1 rounded border border-orange-100" />
                    <span>629-345-8366</span>
                  </p>
                </div>
                <div className="pt-2 space-y-2">
                  {calendlyUrl ? (
                    <a href={calendlyUrl} target="_blank" rel="noreferrer" className="w-full inline-flex justify-center items-center gap-2 bg-slate-900 text-white text-xs font-bold py-2.5 rounded-lg hover:bg-slate-800 transition-colors shadow-sm">
                      <Calendar className="w-3.5 h-3.5" /> Book on Calendly
                    </a>
                  ) : (
                    <a href="mailto:contracts@ndehealthtech.com" className="w-full inline-flex justify-center items-center gap-2 bg-slate-900 text-white text-xs font-bold py-2.5 rounded-lg hover:bg-slate-800 transition-colors shadow-sm">
                      <Mail className="w-3.5 h-3.5" /> Email Consultation Request
                    </a>
                  )}
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Add VITE_CALENDLY_URL in Vercel when your Calendly booking link is ready.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {renderFooter()}
        </div>
      );

    case "blog":
      return (
        <div className="a-plus-site flex-1 flex flex-col bg-white text-slate-800">
          {renderHeader()}

          {/* Blog Hero with S3 Background */}
          <div 
            className="relative py-16 px-6 bg-cover bg-center text-white text-center space-y-3 shrink-0"
            style={{ 
              backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.94)), url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1800&q=85")` 
            }}
          >
            <div className="relative z-10 space-y-3 max-w-2xl mx-auto">
              <span className="text-[10px] px-2.5 py-0.5 rounded bg-orange-600 text-white font-bold uppercase tracking-wider">Thought Leadership</span>
              <h1 className="text-xl md:text-3xl font-black tracking-tight leading-tight">
                Clinical Informatics & Security Insights
              </h1>
              <p className="text-slate-300 text-[11px] md:text-xs max-w-lg mx-auto leading-relaxed">
                Expert articles and industry best practices regarding healthcare technology, cloud engineering, and federal cybersecurity.
              </p>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="py-12 px-6 max-w-6xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { slug: "managed-it-services-healthcare", title: "The Benefits of Using Managed IT Services in Healthcare", date: "April 24, 2026", author: "Nicoline Nde", category: "Healthcare IT", catColor: "bg-blue-50 text-blue-700", desc: "How medical clinics and healthcare providers reduce technical downtime and optimize patient charting workflows through proactive technical monitoring.", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=75" },
                { slug: "secure-clinical-workstation-configuration", title: "Best Practices for Secure Clinical Workstation Configuration", date: "June 2, 2026", author: "Alexis Nde", category: "Cybersecurity", catColor: "bg-orange-50 text-orange-700", desc: "An overview of the technical and physical safeguards required under NIST SP 800-66 to secure clinical workstations handling PHI.", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=75" },
                { slug: "hipaa-security-rule-small-practice", title: "HIPAA Security Rule Essentials for Small Medical Practices", date: "May 15, 2026", author: "Nicoline Nde", category: "Compliance", catColor: "bg-emerald-50 text-emerald-700", desc: "A practical, plain-language breakdown of HIPAA Security Rule requirements that every small practice owner and office manager should understand.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=75" },
                { slug: "aws-cloud-migration-healthcare", title: "Planning a HIPAA-Compliant AWS Cloud Migration for Healthcare", date: "May 3, 2026", author: "Alexis Nde", category: "Cloud Engineering", catColor: "bg-violet-50 text-violet-700", desc: "A step-by-step framework for healthcare organizations moving workloads to AWS while maintaining HIPAA compliance and data integrity.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=75" },
                { slug: "ehr-interoperability-fhir", title: "EHR Interoperability in 2026: FHIR, APIs, and What It Means for Your Practice", date: "April 10, 2026", author: "Nicoline Nde", category: "Healthcare IT", catColor: "bg-blue-50 text-blue-700", desc: "How the HL7 FHIR standard and ONC interoperability rules are changing the way patient data moves between EHR systems.", img: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=600&q=75" },
                { slug: "federal-it-contracting-small-business", title: "Breaking Into Federal IT Contracting as a Small Business", date: "March 28, 2026", author: "Alexis Nde", category: "Federal IT", catColor: "bg-slate-100 text-slate-700", desc: "A practical guide to SAM.gov registration, NAICS codes, set-aside programs, and winning your first federal IT contract as a small business.", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=600&q=75" },
              ].map((art) => (
                <div key={art.slug} className="rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col">
                  <div className="h-40 overflow-hidden bg-slate-100">
                    <img src={art.img} alt={art.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-5 flex flex-col flex-1 space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider ${art.catColor}`}>{art.category}</span>
                      <span className="text-[11px] text-slate-400 font-semibold">{art.date}</span>
                    </div>
                    <h3 className="font-black text-sm text-slate-900 leading-snug">{art.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed flex-1">{art.desc}</p>
                    <div className="pt-3 border-t border-slate-50 flex items-center justify-between">
                      <span className="text-[11px] text-slate-400 font-semibold">{art.author}</span>
                      <Link href={`/blog/${art.slug}`}>
                        <span className="text-xs font-black text-blue-700 hover:text-blue-900 cursor-pointer flex items-center gap-1">Read Article <ArrowRight className="w-3 h-3" /></span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {renderFooter()}
        </div>
      );

    default:
      return <div className="p-6 text-slate-400 text-xs">Preview Not Found</div>;
  }
}
