import { FormEvent, useState } from "react";
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
  Send
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
      beforeDesktopUrl: beforeUrls.home.desktop,
      beforeMobileUrl: beforeUrls.home.mobile,
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
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663731165120/FYofXj8dB8gc5JadLn5roz/nde_logo_high_res-MVfT3LLsgmzzKmAqEC7BKc.png" 
              alt="NDE HealthTech Logo" 
              className="w-11 h-11 object-contain rounded-lg border border-slate-800/80 bg-slate-950 p-1 shadow-inner"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight text-white">NDE</span>
                <span className="font-semibold text-base text-slate-400">HealthTech Solutions</span>
              </div>
              <p className="text-[10px] text-orange-500 font-bold uppercase tracking-wider">Premium Visual Redesign Mockups</p>
            </div>
            <a 
              href="https://d2xsxph8kpxj0f.cloudfront.net/310519663731165120/FYofXj8dB8gc5JadLn5roz/nde_logo_high_res-MVfT3LLsgmzzKmAqEC7BKc.png" 
              target="_blank" 
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white text-[10px] font-bold rounded-lg border border-slate-800 transition-all shadow-inner ml-2"
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
            <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">Review the high-fidelity redesign side-by-side with your current Wix site.</p>
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
                <span className="text-[10px] font-black uppercase tracking-widest text-orange-500">Currently Reviewing</span>
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
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-red-950/80 text-red-400 font-bold border border-red-900/50 uppercase tracking-wider">BEFORE</span>
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
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-emerald-950/80 text-emerald-400 font-bold border border-emerald-900/50 uppercase tracking-wider">AFTER (CONCEPT)</span>
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

  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL as string | undefined;

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setContactSubmitting(true);

    try {
      if (formspreeEndpoint) {
        const response = await fetch(formspreeEndpoint, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" }
        });

        if (!response.ok) {
          throw new Error("Form submission failed");
        }
      } else {
        const subject = encodeURIComponent("New consultation request from NDEHealthTech.com");
        const body = encodeURIComponent(
          `Name: ${data.get("name") || ""}
` +
          `Email: ${data.get("email") || ""}
` +
          `Organization: ${data.get("organization") || ""}
` +
          `Technical Need: ${data.get("need") || ""}
` +
          `Message: ${data.get("message") || ""}`
        );
        window.location.href = `mailto:contracts@ndehealthtech.com?subject=${subject}&body=${body}`;
      }

      setContactSubmitted(true);
      form.reset();
    } catch (error) {
      alert("We could not submit the form automatically. Please email contracts@ndehealthtech.com.");
    } finally {
      setContactSubmitting(false);
    }
  };

  // Global Header Redesign
  const renderHeader = () => (
    <div className="bg-white border-b border-slate-100 text-slate-900 py-3.5 px-6 flex justify-between items-center shrink-0 shadow-sm sticky top-0 z-40">
      <div className="flex items-center gap-2.5">
        <img 
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663731165120/FYofXj8dB8gc5JadLn5roz/nde_logo_high_res-MVfT3LLsgmzzKmAqEC7BKc.png" 
          alt="NDE HealthTech Logo" 
          className="w-8 h-8 object-contain rounded bg-slate-50 border border-slate-100 p-0.5 shadow-sm"
        />
        <div className="leading-none">
          <span className="font-black text-sm tracking-tight text-slate-900 block">NDE HealthTech</span>
        </div>
      </div>
      {!isMobile ? (
        <div className="flex items-center gap-5 text-xs font-bold text-slate-600">
          <Link href="/">
            <span className={`pb-0.5 transition-all cursor-pointer ${pageId === 'home' ? 'text-slate-900 border-b-2 border-slate-900' : 'hover:text-slate-900'}`}>Home</span>
          </Link>
          <Link href="/services">
            <span className={`pb-0.5 transition-all cursor-pointer ${pageId === 'services' ? 'text-slate-900 border-b-2 border-slate-900' : 'hover:text-slate-900'}`}>Services</span>
          </Link>
          <Link href="/healthcare-it">
            <span className={`pb-0.5 transition-all cursor-pointer ${pageId === 'healthcare_it' ? 'text-slate-900 border-b-2 border-slate-900' : 'hover:text-slate-900'}`}>Healthcare IT</span>
          </Link>
          <Link href="/federal">
            <span className={`pb-0.5 transition-all cursor-pointer ${pageId === 'federal' ? 'text-slate-900 border-b-2 border-slate-900' : 'hover:text-slate-900'}`}>Federal</span>
          </Link>
          <Link href="/why-us">
            <span className={`pb-0.5 transition-all cursor-pointer ${pageId === 'why_us' ? 'text-slate-900 border-b-2 border-slate-900' : 'hover:text-slate-900'}`}>Why Choose Us</span>
          </Link>
          <Link href="/team">
            <span className={`pb-0.5 transition-all cursor-pointer ${pageId === 'team' ? 'text-slate-900 border-b-2 border-slate-900' : 'hover:text-slate-900'}`}>Our Team</span>
          </Link>
          <Link href="/blog">
            <span className={`pb-0.5 transition-all cursor-pointer ${pageId === 'blog' ? 'text-slate-900 border-b-2 border-slate-900' : 'hover:text-slate-900'}`}>Blog</span>
          </Link>
          <Link href="/academy">
            <span className={`pb-0.5 transition-all cursor-pointer ${pageId === 'academy' ? 'text-slate-900 border-b-2 border-slate-900' : 'hover:text-slate-900'}`}>Academy</span>
          </Link>
          <Link href="/contact">
            <button className="bg-slate-900 text-white text-[11px] px-4 py-2 rounded-lg font-bold hover:bg-slate-800 transition-colors shadow-sm cursor-pointer">
              Contact
            </button>
          </Link>
        </div>
      ) : (
        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-50 cursor-pointer border border-slate-100">
          <Menu className="w-4 h-4 text-slate-700" />
        </div>
      )}
    </div>
  );

  // Global Footer Redesign
  const renderFooter = () => (
    <div className="bg-slate-950 text-slate-400 py-10 px-6 border-t border-slate-900 text-[11px] space-y-6 shrink-0 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex items-center gap-2.5">
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663731165120/FYofXj8dB8gc5JadLn5roz/nde_logo_high_res-MVfT3LLsgmzzKmAqEC7BKc.png" 
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
          <div className="flex items-center gap-3 text-[10px] text-slate-500 pt-1">
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
        <div className="flex-1 flex flex-col bg-white text-slate-800">
          {renderHeader()}
          
          {/* SAM.gov Active Banner */}
          <div className="bg-slate-900 text-slate-100 py-3 px-6 text-[10px] md:text-xs font-semibold flex flex-wrap justify-between items-center gap-2 border-b border-slate-800 shrink-0 shadow-inner">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow shadow-emerald-500/50"></span>
              <span>SAM.gov Active Federal Contractor</span>
            </div>
            <div className="flex items-center gap-4 text-slate-400 font-mono text-[10px]">
              <span>CAGE Code: 209X4</span>
              <span>UEI: G7YUFGEZBHP4</span>
            </div>
          </div>

          {/* Premium Overlapping Hero Section with High-Resolution Background */}
          <div className="relative bg-slate-950 overflow-hidden shrink-0">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl"></div>

            <div className="max-w-5xl mx-auto px-6 py-12 md:py-16 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Premium Value Proposition */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 text-orange-400 text-[10px] font-bold uppercase tracking-widest border border-slate-800 shadow-inner">
                  <Shield className="w-3.5 h-3.5 text-orange-500" /> Clinical Precision & Enterprise Security
                </div>
                <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-white">
                  Securing Healthcare IT & Enterprise Infrastructure
                </h1>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-xl">
                  Enterprise-grade consulting, secure cloud engineering, and cybersecurity safeguards designed specifically for healthcare environments and federal compliance.
                </p>
                
                {/* Value Pillars Badges */}
                <div className="grid grid-cols-2 gap-3 pt-2 text-[10px] md:text-xs font-bold text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-500" />
                    <span>NIST SP 800-66 Aligned</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-500" />
                    <span>Active SAM.gov Registered</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  <button className="bg-orange-600 text-white text-xs font-bold px-6 py-3.5 rounded-lg shadow-lg shadow-orange-950/20 hover:bg-orange-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
                    Schedule a Free Consultation
                  </button>
                  <button className="bg-slate-900 text-slate-200 text-xs font-bold px-6 py-3.5 rounded-lg border border-slate-800 hover:bg-slate-800 transition-all duration-200">
                    View Federal Capabilities
                  </button>
                </div>
              </div>

              {/* Right Column: Stunning Overlapping 3D Render Graphics */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-[340px] aspect-square rounded-2xl overflow-hidden border border-slate-800/80 shadow-2xl shadow-blue-950/20 group">
                  <img 
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663731165120/FYofXj8dB8gc5JadLn5roz/premium_clinical_hero-3BcwJiUAHqZvAoqJqmcrMJ.png" 
                    alt="Premium Healthcare IT Network" 
                    className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Floating Glassmorphism Cards to add high-end visual appeal */}
                  <div className="absolute top-4 left-4 right-4 bg-slate-950/75 backdrop-blur-md p-3.5 rounded-xl border border-white/10 shadow-lg space-y-1">
                    <span className="text-[8px] font-bold text-orange-400 uppercase tracking-widest">Active Verification</span>
                    <p className="text-[10px] font-extrabold text-white">CAGE Code: 209X4 | UEI: G7YUFGEZBHP4</p>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-950/75 backdrop-blur-md p-3.5 rounded-xl border border-white/10 shadow-lg flex items-center justify-between">
                    <div className="space-y-0.5">
                      <span className="text-[8px] font-bold text-blue-400 uppercase tracking-widest">Cybersecurity Safeguard</span>
                      <p className="text-[10px] font-extrabold text-white">HIPAA & NIST SP 800-66</p>
                    </div>
                    <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Categorized Core Solutions Grid - High-Fidelity Modern Light Design with Custom Images */}
          <div className="py-12 px-6 space-y-8 bg-slate-50 relative border-y border-slate-100">
            <div className="text-center space-y-2 max-w-xl mx-auto">
              <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest">Consulting Excellence</span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                Our Dual-Force Capabilities
              </h2>
              <p className="text-slate-500 text-xs leading-relaxed max-w-md mx-auto">
                Specialized Clinical Health IT combined with robust, enterprise-grade General IT Infrastructure & Security.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Category A: Clinical Health IT Solutions - Rebuilt with premium imagery */}
              <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-300 flex flex-col justify-between">
                <div>
                  {/* Premium Image Header */}
                  <div className="h-44 relative overflow-hidden bg-slate-900">
                    <img 
                      src="https://d2xsxph8kpxj0f.cloudfront.net/310519663731165120/FYofXj8dB8gc5JadLn5roz/clinical_informatics-8YnapsSMi9EKqazMDR9PQd.webp" 
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
                  <div className="p-5 space-y-4">
                    {[
                      { title: "Clinical Informatics & EHR Support", desc: "Expert HL7/FHIR compliant support for Epic, Cerner, and eClinicalWorks to optimize clinical workflows." },
                      { title: "System & Software Integrations", desc: "Aligning technical systems directly with nursing and physician pathways to prevent charting friction." },
                      { title: "Health IT Consulting & Strategy", desc: "Strategic advisory on software selections, database design, and HIPAA regulatory compliance frameworks." }
                    ].map((srv, idx) => (
                      <div key={idx} className="space-y-1 hover:bg-slate-50 p-2.5 rounded-xl transition-colors duration-200">
                        <h4 className="font-extrabold text-xs text-slate-900 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-orange-600 rounded-full"></span> {srv.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 leading-relaxed pl-3.5">{srv.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Category B: Enterprise IT & Security - Rebuilt with premium imagery */}
              <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 flex flex-col justify-between">
                <div>
                  {/* Premium Image Header */}
                  <div className="h-44 relative overflow-hidden bg-slate-900">
                    <img 
                      src="https://d2xsxph8kpxj0f.cloudfront.net/310519663731165120/FYofXj8dB8gc5JadLn5roz/service_cybersecurity-L7t8ZSMq9EKpazMDR9PQd.webp" 
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
                  <div className="p-5 space-y-4">
                    {[
                      { title: "Managed Helpdesk Support (24/7)", desc: "Proactive network administration, troubleshooting, and continuous systems monitoring to eliminate downtime." },
                      { title: "Cloud & Infrastructure Engineering", desc: "Secure clinical cloud migrations, server virtualization, and robust database administration." },
                      { title: "Cybersecurity & Risk Safeguards", desc: "Advanced threat detection, penetration testing, and compliance configurations protecting networks." }
                    ].map((srv, idx) => (
                      <div key={idx} className="space-y-1 hover:bg-slate-50 p-2.5 rounded-xl transition-colors duration-200">
                        <h4 className="font-extrabold text-xs text-slate-900 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> {srv.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 leading-relaxed pl-3.5">{srv.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Reviews & Testimonials Section - Tightened Spacing */}
          <div className="bg-slate-50 py-10 px-6 border-y border-slate-100 space-y-6 shrink-0">
            <div className="text-center space-y-2 max-w-lg mx-auto">
              <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest">Client Feedback</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900">What Our Clients Say</h2>
              <p className="text-slate-500 text-xs leading-relaxed">
                Professional testimonials demonstrating our commitment to secure, reliable, and compliant healthcare and commercial IT operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Review 1: Caleb (Commercial success) */}
              <div className="p-6 rounded-2xl border border-slate-100 bg-white space-y-4 shadow-sm flex flex-col justify-between">
                <p className="text-[11px] md:text-xs font-medium italic text-slate-600 leading-relaxed">
                  "I have never had peace of mind about my IT services provider until I called NDE HealthTech Solutions. They transformed our infrastructure security and streamlined our operational support."
                </p>
                <div className="flex justify-between items-center pt-3 border-t border-slate-100">
                  <div>
                    <h4 className="font-black text-xs text-slate-900">Caleb Hicherson</h4>
                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">CEO, Premier Stay Residentials LLC</p>
                  </div>
                  <span className="text-[9px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-bold border border-slate-200 uppercase tracking-wider">Commercial IT</span>
                </div>
              </div>

              {/* Review 2: Clinical Practice Review Placeholder */}
              <div className="p-6 rounded-2xl border border-dashed border-slate-200 bg-white/60 space-y-4 flex flex-col justify-between relative group">
                <div className="space-y-2">
                  <div className="flex items-center gap-1 text-orange-500">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <p className="text-[11px] md:text-xs font-medium italic text-slate-400 leading-relaxed">
                    "This is a designated slot for a clinical client testimonial. Adding a review from a clinic manager or medical practice director here will immediately establish high-trust credibility for your specialized Health IT services."
                  </p>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-dashed border-slate-200">
                  <div>
                    <h4 className="font-black text-xs text-slate-400">Clinical Partner (Placeholder)</h4>
                    <p className="text-[9px] text-slate-300 font-bold uppercase tracking-widest mt-0.5">Practice Manager, Medical Group</p>
                  </div>
                  <span className="text-[9px] px-2 py-0.5 rounded bg-orange-50 text-orange-600 font-bold border border-orange-100 uppercase tracking-wider">Clinical Health IT</span>
                </div>
              </div>
            </div>
          </div>

          {renderFooter()}
        </div>
      );

    case "services":
      return (
        <div className="flex-1 flex flex-col bg-white text-slate-800">
          {renderHeader()}
          
          {/* Services Hero with Premium Banner Background */}
          <div 
            className="relative py-14 px-6 bg-cover bg-center text-white text-center space-y-3 shrink-0"
            style={{ 
              backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.92)), url("https://d2xsxph8kpxj0f.cloudfront.net/310519663731165120/FYofXj8dB8gc5JadLn5roz/why_us_banner-7YnzpsSMi9EKpazMDR9PQd.webp")` 
            }}
          >
            <div className="relative z-10 max-w-2xl mx-auto space-y-2">
              <span className="text-[9px] px-2.5 py-0.5 rounded bg-orange-600 text-white font-bold uppercase tracking-wider">Consulting Suite</span>
              <h1 className="text-xl md:text-3xl font-black tracking-tight leading-tight">
                Healthcare IT & Enterprise IT Services
              </h1>
              <p className="text-slate-300 text-[11px] md:text-xs leading-relaxed max-w-lg mx-auto">
                Dual-force consulting delivering specialized Clinical Health IT alongside robust, enterprise-grade General IT Infrastructure & Security.
              </p>
            </div>
          </div>

          {/* Complete 8 Services Categorized */}
          <div className="py-10 px-6 space-y-10 max-w-5xl mx-auto w-full">
            {/* Category 1: Clinical Health IT */}
            <div className="space-y-5">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-[9px] px-2.5 py-0.5 rounded bg-orange-50 text-orange-700 font-bold uppercase tracking-wider border border-orange-100">Category 01</span>
                <h2 className="text-lg font-black text-slate-900 mt-1 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-orange-600" /> Clinical Health IT Specializations
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { 
                    title: "Healthcare IT & Informatics", 
                    desc: "Comprehensive support for medical workflows, EHR data interoperability, and platform-specific management (Epic, Cerner, eClinicalWorks) ensuring seamless patient care pathways.", 
                    icon: Cpu,
                    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663731165120/FYofXj8dB8gc5JadLn5roz/clinical_informatics-8YnapsSMi9EKqazMDR9PQd.webp"
                  },
                  { 
                    title: "Clinical System Integrations", 
                    desc: "Aligning technical software systems directly with nursing and physician workflows, optimizing database structures, and enabling HL7/FHIR compliant data pipelines.", 
                    icon: Layers,
                    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663731165120/FYofXj8dB8gc5JadLn5roz/service_clinical_informatics-4YnypsSMi9EKpazMDR9PQd.webp"
                  },
                  { 
                    title: "Health IT Consulting Services", 
                    desc: "Strategic advisory on clinical software selections, long-term system optimization, regulatory compliance pathways, and specialized healthcare technology architectures.", 
                    icon: Briefcase,
                    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663731165120/FYofXj8dB8gc5JadLn5roz/healthcare_hero_bg-8YnzpsSMi9EKpazMDR9PQd.webp"
                  },
                  { 
                    title: "Medical Data Management", 
                    desc: "Secure storage, migration, and management of Protected Health Information (PHI) and clinical imaging records with strict technical safeguard compliance.", 
                    icon: Database,
                    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663731165120/FYofXj8dB8gc5JadLn5roz/service_cybersecurity-L7t8ZSMq9EKpazMDR9PQd.webp"
                  }
                ].map((srv, idx) => {
                  const Icon = srv.icon;
                  return (
                    <div key={idx} className="rounded-2xl border border-slate-150 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-300 flex flex-col justify-between">
                      <div>
                        <div className="h-32 relative overflow-hidden bg-slate-900">
                          <img src={srv.img} alt={srv.title} className="w-full h-full object-cover opacity-75" />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                          <div className="absolute bottom-3 left-4 flex items-center gap-2">
                            <div className="w-7 h-7 rounded-lg bg-orange-500/15 backdrop-blur-md flex items-center justify-center border border-orange-500/20">
                              <Icon className="w-4 h-4 text-orange-500" />
                            </div>
                            <h3 className="font-extrabold text-xs md:text-sm text-white leading-tight">{srv.title}</h3>
                          </div>
                        </div>
                        <div className="p-4">
                          <p className="text-[11px] text-slate-500 leading-relaxed">{srv.desc}</p>
                        </div>
                      </div>
                      <div className="px-4 pb-4 pt-2 border-t border-slate-50 mt-1 flex justify-between items-center">
                        <button className="text-[10px] font-bold text-slate-900 hover:text-slate-600 flex items-center gap-1">
                          Request Details <ArrowRight className="w-3.5 h-3.5 text-orange-600" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Category 2: General IT & Security */}
            <div className="space-y-5">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-[9px] px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 font-bold uppercase tracking-wider border border-slate-200">Category 02</span>
                <h2 className="text-lg font-black text-slate-900 mt-1 flex items-center gap-2">
                  <Network className="w-5 h-5 text-slate-700" /> Enterprise IT & Security Infrastructure
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { 
                    title: "Managed IT & Helpdesk Support", 
                    desc: "Proactive 24/7/365 helpdesk, network administration, and systems monitoring designed to eliminate technical friction and ensure operational continuity.", 
                    icon: Laptop,
                    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663731165120/FYofXj8dB8gc5JadLn5roz/contact_support-5YnypsSMi9EKpazMDR9PQd.webp"
                  },
                  { 
                    title: "Cloud & Infrastructure Engineering", 
                    desc: "Secure medical cloud architecture, server migrations, virtualization, and robust database administration ensuring optimal performance and scalability.", 
                    icon: Cloud,
                    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663731165120/FYofXj8dB8gc5JadLn5roz/federal_hero-dNZVKZWu7bkqToPGdUrWop.webp"
                  },
                  { 
                    title: "Cybersecurity & Risk Management", 
                    desc: "Technical, physical, and administrative safeguards protecting clinical networks from advanced threats, including automated threat detection and penetration testing.", 
                    icon: Lock,
                    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663731165120/FYofXj8dB8gc5JadLn5roz/service_cybersecurity-L7t8ZSMq9EKpazMDR9PQd.webp"
                  },
                  { 
                    title: "Backup & Disaster Recovery Planning", 
                    desc: "Automated off-site backup protocols, redundancy configurations, and rigorous business continuity blueprints to protect operations during critical outages.", 
                    icon: Shield,
                    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663731165120/FYofXj8dB8gc5JadLn5roz/clinical_informatics-8YnapsSMi9EKqazMDR9PQd.webp"
                  }
                ].map((srv, idx) => {
                  const Icon = srv.icon;
                  return (
                    <div key={idx} className="rounded-2xl border border-slate-150 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 flex flex-col justify-between">
                      <div>
                        <div className="h-32 relative overflow-hidden bg-slate-900">
                          <img src={srv.img} alt={srv.title} className="w-full h-full object-cover opacity-75" />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                          <div className="absolute bottom-3 left-4 flex items-center gap-2">
                            <div className="w-7 h-7 rounded-lg bg-blue-500/15 backdrop-blur-md flex items-center justify-center border border-blue-500/20">
                              <Icon className="w-4 h-4 text-blue-400" />
                            </div>
                            <h3 className="font-extrabold text-xs md:text-sm text-white leading-tight">{srv.title}</h3>
                          </div>
                        </div>
                        <div className="p-4">
                          <p className="text-[11px] text-slate-500 leading-relaxed">{srv.desc}</p>
                        </div>
                      </div>
                      <div className="px-4 pb-4 pt-2 border-t border-slate-50 mt-1 flex justify-between items-center">
                        <button className="text-[10px] font-bold text-slate-900 hover:text-slate-600 flex items-center gap-1">
                          Request Details <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
                        </button>
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
        <div className="flex-1 flex flex-col bg-white text-slate-800">
          {renderHeader()}

          {/* Healthcare IT Banner with Background Image */}
          <div 
            className="relative py-14 px-6 bg-cover bg-center text-white space-y-4 shrink-0"
            style={{ 
              backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.92)), url("https://d2xsxph8kpxj0f.cloudfront.net/310519663731165120/FYofXj8dB8gc5JadLn5roz/clinical_informatics-8YnapsSMi9EKqazMDR9PQd.webp")` 
            }}
          >
            <div className="relative z-10 space-y-2 max-w-2xl">
              <span className="text-[9px] px-2.5 py-0.5 rounded bg-orange-600 text-white font-bold uppercase tracking-wider">Clinical Specialization</span>
              <h1 className="text-xl md:text-3xl font-black tracking-tight leading-tight">
                Clinical Informatics & HIPAA-Compliant Security
              </h1>
              <p className="text-slate-300 text-[11px] md:text-xs leading-relaxed">
                We align medical technology with rigorous federal regulations to protect clinical data, support care delivery, and optimize system uptime.
              </p>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="py-10 px-6 space-y-8 max-w-4xl mx-auto w-full">
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
                    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663731165120/FYofXj8dB8gc5JadLn5roz/service_clinical_informatics-4YnypsSMi9EKpazMDR9PQd.webp"
                  },
                  { 
                    title: "HIPAA-Compliant Security", 
                    desc: "Implementation of rigorous administrative, physical, and technical safeguards aligned with NIST SP 800-66 and HHS security guidelines.", 
                    icon: Lock,
                    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663731165120/FYofXj8dB8gc5JadLn5roz/service_cybersecurity-L7t8ZSMq9EKpazMDR9PQd.webp"
                  },
                  { 
                    title: "Clinical Workflow Optimization", 
                    desc: "Mapping technical systems directly to nursing and physician workflows to eliminate slowness, lag, and charting friction.", 
                    icon: Layers,
                    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663731165120/FYofXj8dB8gc5JadLn5roz/clinical_informatics-8YnapsSMi9EKqazMDR9PQd.webp"
                  }
                ].map((cap, idx) => {
                  const Icon = cap.icon;
                  return (
                    <div key={idx} className="rounded-xl border border-slate-150 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-300 flex flex-col justify-between">
                      <div>
                        <div className="h-28 relative overflow-hidden bg-slate-900">
                          <img src={cap.img} alt={cap.title} className="w-full h-full object-cover opacity-75" />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                          <div className="absolute bottom-3 left-4 flex items-center gap-2">
                            <div className="w-6.5 h-6.5 rounded-lg bg-orange-500/15 backdrop-blur-md flex items-center justify-center border border-orange-500/20">
                              <Icon className="w-3.5 h-3.5 text-orange-500" />
                            </div>
                            <h4 className="font-extrabold text-xs text-white leading-tight">{cap.title}</h4>
                          </div>
                        </div>
                        <div className="p-4">
                          <p className="text-[11px] text-slate-500 leading-relaxed">{cap.desc}</p>
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
        <div className="flex-1 flex flex-col bg-white text-slate-800">
          {renderHeader()}

          {/* Federal Hero with Secure Compliance Image Background */}
          <div 
            className="relative py-14 px-6 bg-cover bg-center text-white space-y-4 shrink-0"
            style={{ 
              backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.92)), url("https://d2xsxph8kpxj0f.cloudfront.net/310519663731165120/FYofXj8dB8gc5JadLn5roz/federal_hero-dNZVKZWu7bkqToPGdUrWop.webp")` 
            }}
          >
            <div className="relative z-10 space-y-2 max-w-2xl">
              <span className="text-[9px] px-2.5 py-0.5 rounded bg-slate-800 text-orange-400 font-bold uppercase tracking-wider border border-slate-700/50">Federal Procurement</span>
              <h1 className="text-xl md:text-3xl font-black tracking-tight leading-tight">
                Federal Healthcare IT & Systems Engineering
              </h1>
              <p className="text-slate-300 text-[11px] md:text-xs leading-relaxed">
                Active SAM.gov Registered Small Business delivering secure, NIST-compliant systems design and informatics support to federal agencies.
              </p>
            </div>
          </div>

          {/* Federal Registration details */}
          <div className="py-10 px-6 space-y-8 max-w-4xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* SAM.gov Card */}
              <div className="p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-black text-xs text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-3 flex items-center justify-between">
                    <span>Contractor Information</span>
                    <span className="text-[9px] px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold border border-emerald-200">ACTIVE REGISTRATION</span>
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-[11px] mt-4">
                    <div>
                      <span className="text-slate-400 block font-bold uppercase text-[9px] tracking-wider">CAGE Code</span>
                      <span className="text-slate-900 font-mono font-bold text-sm">209X4</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-bold uppercase text-[9px] tracking-wider">Unique Entity ID</span>
                      <span className="text-slate-900 font-mono font-bold text-sm">G7YUFGEZBHP4</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-bold uppercase text-[9px] tracking-wider">Business Type</span>
                      <span className="text-slate-900 font-bold">Small Business</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-bold uppercase text-[9px] tracking-wider">Location</span>
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
                <span className="text-[9px] px-2.5 py-0.5 rounded bg-slate-800 text-orange-400 font-bold uppercase tracking-wider border border-slate-700/50">Capability Statement</span>
                <h4 className="font-black text-base text-white">Download Capability Statement</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Access our official, 1-page Capabilities Brief detailing our core competencies, differentiators, and NAICS codes (Primary 541512).
                </p>
              </div>
              <div className="p-6 md:p-8 bg-slate-900/60 border-t md:border-t-0 md:border-l border-slate-900 md:w-1/2 flex flex-col justify-center space-y-3">
                <div className="space-y-2.5">
                  <a 
                    href="/manus-storage/Capability_d6d878a7.pdf" 
                    download="NDE_HealthTech_Solutions_Capability_Statement.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-orange-600 text-white text-xs font-bold py-3 rounded-lg hover:bg-orange-500 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 shadow-md text-center block flex items-center justify-center gap-2"
                  >
                    <FileText className="w-4 h-4" /> Download Capability Statement (PDF)
                  </a>
                  <p className="text-[9px] text-slate-400 text-center">
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
        <div className="flex-1 flex flex-col bg-white text-slate-800">
          {renderHeader()}

          {/* Why Us Hero with Background */}
          <div 
            className="relative py-14 px-6 bg-cover bg-center text-white text-center space-y-3 shrink-0"
            style={{ 
              backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.92)), url("https://d2xsxph8kpxj0f.cloudfront.net/310519663731165120/FYofXj8dB8gc5JadLn5roz/why_us_banner-Mx8QYC7ho2oi6zcuEhdMQt.webp")` 
            }}
          >
            <div className="relative z-10 space-y-2 max-w-2xl mx-auto">
              <span className="text-[9px] px-2.5 py-0.5 rounded bg-orange-600 text-white font-bold uppercase tracking-wider">Our Philosophy</span>
              <h1 className="text-xl md:text-3xl font-black tracking-tight leading-tight">
                Enterprise Standards, Clinical Precision
              </h1>
              <p className="text-slate-300 text-[11px] md:text-xs max-w-lg mx-auto leading-relaxed">
                We combine enterprise-grade technical support with a specialized clinical consulting approach to ensure continuous medical operations.
              </p>
            </div>
          </div>

          {/* Core Pillars */}
          <div className="py-10 px-6 space-y-6 max-w-4xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  title: "Predictable, High-Value Pricing", 
                  desc: "We deliver enterprise-grade solutions with transparent, predictable pricing models designed to maximize your technology investment and protect your clinical budgets.",
                  img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663731165120/FYofXj8dB8gc5JadLn5roz/healthcare_hero_bg-8YnzpsSMi9EKpazMDR9PQd.webp"
                },
                { 
                  title: "24/7/365 Proactive Support", 
                  desc: "We identify security risks and technical issues early, preventing outages before they disrupt clinical care. Our support team is always available.",
                  img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663731165120/FYofXj8dB8gc5JadLn5roz/contact_support-5YnypsSMi9EKpazMDR9PQd.webp"
                },
                { 
                  title: "Specialized Clinical Informatics", 
                  desc: "We are not just IT support. Our team understands medical billing, charting, and patient care workflows, allowing us to build systems that work for medical staff.",
                  img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663731165120/FYofXj8dB8gc5JadLn5roz/clinical_informatics-8YnapsSMi9EKqazMDR9PQd.webp"
                }
              ].map((plr, idx) => (
                <div key={idx} className="rounded-xl border border-slate-150 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="h-28 relative overflow-hidden bg-slate-900">
                      <img src={plr.img} alt={plr.title} className="w-full h-full object-cover opacity-75" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                      <div className="absolute bottom-3 left-4 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-orange-500/15 backdrop-blur-md flex items-center justify-center font-bold text-xs border border-orange-500/20 text-orange-400">0{idx + 1}</span>
                        <h3 className="font-extrabold text-xs text-white leading-tight">{plr.title}</h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-[11px] text-slate-500 leading-relaxed">{plr.desc}</p>
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
        <div className="flex-1 flex flex-col bg-white text-slate-800">
          {renderHeader()}

          {/* Team Hero */}
          <div className="py-10 px-6 bg-slate-50 border-b border-slate-100 text-center space-y-3 shrink-0">
            <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest">Our Leadership</span>
            <h1 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
              Our Technology & Informatics Leadership
            </h1>
            <p className="text-slate-500 text-[11px] md:text-xs max-w-lg mx-auto leading-relaxed">
              Experienced systems engineers and health informatics experts committed to securing clinical environments.
            </p>
          </div>

          {/* Team Members with Bios */}
          <div className="py-10 px-6 space-y-6 max-w-4xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  name: "Alexis Nde", 
                  role: "DevOps & Security Engineer", 
                  bio: "Alexis specializes in secure cloud architecture and DevOps automation. He oversees technical compliance and infrastructure security.", 
                  img: "/manus-storage/Alex_33bb8029.jpeg",
                  linkedin: "https://www.linkedin.com/company/123453939/"
                },
                { 
                  name: "Nicoline Nde", 
                  role: "Health Informatics & DevSecOps", 
                  bio: "Nicoline combines a background in healthcare administration with clinical informatics. She maps technical systems directly to nursing and physician workflows.", 
                  img: "/manus-storage/Nico_11d1a477.jpeg",
                  linkedin: "https://www.linkedin.com/company/123453939/"
                },
                { 
                  name: "Abbi Stephen", 
                  role: "Cloud Engineer & Health IT", 
                  bio: "Abbi focuses on secure database migrations and clinical systems support, ensuring seamless database performance and zero downtime.", 
                  img: "/manus-storage/WhatsAppImage2026-06-03at13.21.29_02031f35.jpeg",
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
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-extrabold text-xs text-slate-900">{mem.name}</h3>
                        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">{mem.role}</p>
                      </div>
                      <a href={mem.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed pt-2.5 border-t border-slate-100">
                      {mem.bio}
                    </p>
                  </div>
                  <button className="w-full bg-slate-900 text-white text-[10px] font-bold py-1.5 rounded-lg hover:bg-slate-800 transition-colors mt-2 shadow-sm">
                    Contact Professional
                  </button>
                </div>
              ))}
            </div>
          </div>

          {renderFooter()}
        </div>
      );


    case "academy":
      return (
        <div className="flex-1 flex flex-col bg-white text-slate-800">
          {renderHeader()}

          <div className="relative py-16 px-6 bg-slate-950 text-white text-center overflow-hidden shrink-0">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,#f97316,transparent_35%),radial-gradient(circle_at_bottom_right,#2563eb,transparent_35%)]" />
            <div className="relative z-10 space-y-4 max-w-3xl mx-auto">
              <span className="text-[9px] px-2.5 py-0.5 rounded bg-orange-600 text-white font-bold uppercase tracking-wider">Training Division</span>
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
                  <div key={idx} className="p-5 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md hover:border-orange-200 transition-all space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center border border-orange-100">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-black text-sm text-slate-900">{path.title}</h3>
                    <p className="text-[11px] text-slate-500 leading-relaxed">{path.desc}</p>
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
        <div className="flex-1 flex flex-col bg-white text-slate-800">
          {renderHeader()}

          {/* Contact Hero with S3 Background */}
          <div 
            className="relative py-16 px-6 bg-cover bg-center text-white text-center space-y-3 shrink-0"
            style={{ 
              backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.94)), url("https://d2xsxph8kpxj0f.cloudfront.net/310519663731165120/FYofXj8dB8gc5JadLn5roz/contact_support-Qq8CLLgN5DPd2eVUqbDe7G.webp")` 
            }}
          >
            <div className="relative z-10 space-y-3 max-w-2xl mx-auto">
              <span className="text-[9px] px-2.5 py-0.5 rounded bg-orange-600 text-white font-bold uppercase tracking-wider">Discovery Session</span>
              <h1 className="text-xl md:text-3xl font-black tracking-tight leading-tight">
                Schedule Your Free Consultation
              </h1>
              <p className="text-slate-300 text-[11px] md:text-xs max-w-lg mx-auto leading-relaxed">
                Schedule a complimentary 20-minute consultation. We'll learn about your clinical needs, answer compliance questions, and explore our IT solutions.
              </p>
            </div>
          </div>

          {/* Contact Details & Lead Qualifying Form */}
          <div className="py-12 px-6 space-y-8 max-w-4xl mx-auto w-full">
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
                    <button onClick={() => setContactSubmitted(false)} className="text-[10px] font-bold text-orange-700 hover:underline">
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                        <input name="name" type="text" required placeholder="Your name" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-[11px] focus:outline-none focus:ring-2 focus:ring-orange-500/30" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                        <input name="email" type="email" required placeholder="you@company.com" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-[11px] focus:outline-none focus:ring-2 focus:ring-orange-500/30" />
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Organization Type</label>
                      <select name="organization" required className="w-full border border-slate-200 rounded-lg px-3 py-2 text-[11px] bg-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500/30">
                        <option value="">Select organization...</option>
                        <option>Clinical Practice / Clinic</option>
                        <option>Hospital / Health System</option>
                        <option>Government Agency</option>
                        <option>Commercial Enterprise</option>
                        <option>Small Business</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Primary Technical Need</label>
                      <select name="need" required className="w-full border border-slate-200 rounded-lg px-3 py-2 text-[11px] bg-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500/30">
                        <option value="">Select primary interest...</option>
                        <option>HIPAA Cybersecurity Audit</option>
                        <option>EHR Support & Interoperability</option>
                        <option>Medical Cloud Migration</option>
                        <option>24/7 Managed IT Support</option>
                        <option>Federal Contracting / Subcontracting</option>
                        <option>Training / NDE HealthTech Academy</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Brief Message</label>
                      <textarea name="message" rows={4} placeholder="Tell us what you need help with..." className="w-full border border-slate-200 rounded-lg px-3 py-2 text-[11px] focus:outline-none focus:ring-2 focus:ring-orange-500/30 resize-none" />
                    </div>

                    <button type="submit" disabled={contactSubmitting} className="w-full bg-orange-600 text-white text-xs font-bold py-2.5 rounded-lg hover:bg-orange-500 mt-2 transition-colors shadow-md flex items-center justify-center gap-2 disabled:opacity-60">
                      <Send className="w-3.5 h-3.5" /> {contactSubmitting ? "Sending..." : "Request Free Assessment"}
                    </button>
                    {!formspreeEndpoint && (
                      <p className="text-[10px] text-slate-400 leading-relaxed">
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
                  <p className="text-[10px] text-slate-400 leading-relaxed">
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
        <div className="flex-1 flex flex-col bg-white text-slate-800">
          {renderHeader()}

          {/* Blog Hero with S3 Background */}
          <div 
            className="relative py-16 px-6 bg-cover bg-center text-white text-center space-y-3 shrink-0"
            style={{ 
              backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.94)), url("https://d2xsxph8kpxj0f.cloudfront.net/310519663731165120/FYofXj8dB8gc5JadLn5roz/blog_insights-UfKSJs3HcKy66PrDSwEtHD.webp")` 
            }}
          >
            <div className="relative z-10 space-y-3 max-w-2xl mx-auto">
              <span className="text-[9px] px-2.5 py-0.5 rounded bg-orange-600 text-white font-bold uppercase tracking-wider">Thought Leadership</span>
              <h1 className="text-xl md:text-3xl font-black tracking-tight leading-tight">
                Clinical Informatics & Security Insights
              </h1>
              <p className="text-slate-300 text-[11px] md:text-xs max-w-lg mx-auto leading-relaxed">
                Expert articles and industry best practices regarding healthcare technology, cloud engineering, and federal cybersecurity.
              </p>
            </div>
          </div>

          {/* Cleaned up articles */}
          <div className="py-12 px-6 space-y-6 max-w-4xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "The Benefits of Using Managed IT Services in Healthcare", date: "April 24, 2026", author: "Nicoline Nde, Health Informatics", desc: "How medical clinics and healthcare providers reduce technical downtime and optimize patient charting workflows through proactive technical monitoring." },
                { title: "Best Practices for Secure Clinical Workstation Configuration", date: "June 2, 2026", author: "Alexis Nde, DevOps & Security", desc: "An overview of the technical and physical safeguards required under NIST SP 800-66 to secure clinical workstations handling PHI." }
              ].map((art, idx) => (
                <div key={idx} className="p-5 rounded-xl border border-slate-100 bg-white shadow-sm space-y-3 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <div className="flex justify-between items-center text-[10px] text-slate-400">
                      <span>{art.date}</span>
                      <span className="font-bold text-slate-500">{art.author}</span>
                    </div>
                    <h3 className="font-black text-xs md:text-sm text-slate-900 hover:text-slate-700 cursor-pointer leading-snug">{art.title}</h3>
                    <p className="text-[11px] text-slate-500 leading-relaxed">{art.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-50 mt-4">
                    <span className="text-[10px] font-bold text-slate-900 cursor-pointer hover:underline">Read Article →</span>
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
