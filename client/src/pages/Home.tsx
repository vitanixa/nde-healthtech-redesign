import React, { useState } from "react";
import { 
  Shield, 
  Search, 
  Layout as LayoutIcon, 
  CheckCircle, 
  AlertTriangle, 
  ArrowRight, 
  ExternalLink, 
  FileText, 
  Users, 
  Phone, 
  BookOpen, 
  Layers, 
  Sliders, 
  Clock, 
  Check, 
  X,
  Filter
} from "lucide-react";

// Types for our Audit Items
interface AuditItem {
  id: string;
  page: string;
  section: string;
  currentWording: string;
  problem: string;
  recommendedWording: string;
  whyNeeded: string;
  seoImprovement: string;
  priority: "High" | "Medium" | "Low";
}

export default function Home() {
  const [priorityFilter, setPriorityFilter] = useState<string>("All");
  const [pageFilter, setPageFilter] = useState<string>("All");

  // Meticulous audit data matching the live Wix site page-by-page
  const auditData: AuditItem[] = [
    // Global Header & Navigation
    {
      id: "global-1",
      page: "Global Navigation",
      section: "Header Menu",
      currentWording: "Home | Services | Healthcare IT | Federal Services | Why Us | Team | Contact Us | Blog",
      problem: "Having both 'Services' and 'Healthcare IT' is highly redundant and confusing because Healthcare IT is your primary offering. 'Federal Services' is a generic term rather than the industry-standard procurement term.",
      recommendedWording: "Home | Services | Federal Capabilities | Why Choose Us | Our Team | Contact | Blog",
      whyNeeded: "Consolidating the menu reduces cognitive load for visitors, cleans up your site architecture, and guides prospects down clear, logical pathways.",
      seoImprovement: "Funnels search engine crawler authority (link equity) directly to your core service pages instead of splitting it across duplicate links.",
      priority: "High"
    },
    {
      id: "global-2",
      page: "Global Navigation",
      section: "Header CTA",
      currentWording: "No prominent Call-to-Action (CTA) button in the global header.",
      problem: "Prospects must search the menu to find the contact link, resulting in lost conversion opportunities.",
      recommendedWording: "Add a high-contrast, professional 'Schedule Consultation' button on the far right of the header.",
      whyNeeded: "Prominent, sticky header CTAs are a B2B industry standard that significantly increases conversion rates.",
      seoImprovement: "Reduces immediate bounces and increases time-on-site, which are positive user-engagement signals for search rankings.",
      priority: "Medium"
    },
    // Home Page
    {
      id: "home-1",
      page: "Home Page",
      section: "Hero Title (H1)",
      currentWording: "Healthcare IT, Cloud & Digital Solutions",
      problem: "Lacks a security or trust modifier. It is too broad for a new firm attempting to establish immediate clinical and operational authority.",
      recommendedWording: "Secure Healthcare IT, Cloud & Digital Solutions",
      whyNeeded: "Adding 'Secure' immediately addresses the primary concern of healthcare providers: security, compliance, and data protection.",
      seoImprovement: "Optimizes your primary H1 tag for the high-value search phrase 'Secure Healthcare IT.'",
      priority: "High"
    },
    {
      id: "home-2",
      page: "Home Page",
      section: "Hero Subtitle",
      currentWording: "For Everyone Out There",
      problem: "Extremely generic, conversational, and unprofessional. A highly specialized healthcare IT consulting firm cannot serve 'everyone'; it must target clinical practices, hospitals, and federal agencies.",
      recommendedWording: "Enterprise-grade IT consulting, cloud engineering, and cybersecurity designed for clinical workflows and federal compliance.",
      whyNeeded: "Establishes immediate niche authority. Clinical managers and procurement officers instantly recognize that your services are built specifically for their requirements.",
      seoImprovement: "Injects critical semantic keywords like 'IT consulting,' 'clinical workflows,' and 'federal compliance' directly above the fold.",
      priority: "High"
    },
    {
      id: "home-3",
      page: "Home Page",
      section: "Hero CTA Button",
      currentWording: "Contact Us",
      problem: "Low-engagement, passive phrasing. 'Contact Us' feels like an administrative chore rather than a value-driven next step.",
      recommendedWording: "Schedule a Free Consultation -or- Get a Free IT Assessment",
      whyNeeded: "Focuses on the immediate value the user receives rather than the action of reaching out.",
      seoImprovement: "Improves organic Click-Through Rate (CTR) and user flow metrics, boosting overall search rankings.",
      priority: "Medium"
    },
    {
      id: "home-4",
      page: "Home Page",
      section: "Services Grid Blocks",
      currentWording: "9 redundant blocks including both 'Healthcare IT & Informatics Solutions' and 'Health IT Informatics Services.'",
      problem: "Listing the exact same service twice under slightly different names looks unpolished and unorganized.",
      recommendedWording: "Consolidate into 6 clean, distinct service blocks: 1. Clinical Informatics & EHR Support | 2. Managed IT & Helpdesk | 3. Cloud & Infrastructure | 4. Cybersecurity & HIPAA Compliance | 5. Backup & Disaster Recovery | 6. IT Strategy & Virtual CIO.",
      whyNeeded: "A clean, structured list of services establishes clinical authority and makes your consulting business look highly organized and professional.",
      seoImprovement: "Organizes your site's semantic structure for clean crawling and avoids keyword stuffing of the word 'Informatics.'",
      priority: "High"
    },
    {
      id: "home-5",
      page: "Home Page",
      section: "Testimonials",
      currentWording: "Caleb Hicherson - CEO of Premier Stay Residentials LLC (Real estate company)",
      problem: "While positive, a residential real estate testimonial on a specialized 'HealthTech' website reduces industry-specific credibility.",
      recommendedWording: "Retain Caleb's testimonial but label it clearly under a 'Commercial IT Success' badge, and actively seek a clinical or medical practice testimonial to place alongside it.",
      whyNeeded: "Demonstrates that while you are healthcare specialists, your enterprise IT standards are highly scalable for any modern commercial business.",
      seoImprovement: "Enables Local Business Review schema markup with diverse client profiles to build high E-E-A-T scores.",
      priority: "Medium"
    },
    // Services Page
    {
      id: "services-1",
      page: "Services Page",
      section: "Learn More Buttons",
      currentWording: "Every 'Learn More' button on the Services page redirects back to the /healthcare-it-consulting page.",
      problem: "Critical UX/SEO Bug: Creating a circular redirect loop where buttons for different services all point to the exact same page. This frustrates users and search crawlers.",
      recommendedWording: "Create dedicated sub-pages or distinct anchor sections for each service, and rewrite the buttons to point to those specific sections.",
      whyNeeded: "Clicking 'Learn More' on Cloud Solutions must actually lead to Cloud Solutions content, not a generic Healthcare IT list.",
      seoImprovement: "Eliminates circular redirect loops and soft-404 behaviors, which search engines penalize.",
      priority: "High"
    },
    // Healthcare IT Page
    {
      id: "hit-1",
      page: "Healthcare IT Page",
      section: "EHR Support Bullet",
      currentWording: "Support EHR/EMR systems, integrations, and data exchange",
      problem: "Too passive and vague. It does not specify which platforms or modern interoperability standards you support.",
      recommendedWording: "EHR/EMR Support & Interoperability: Seamless integration and secure data exchange for leading platforms, including Epic, Cerner, and eClinicalWorks, utilizing HL7 and FHIR standards.",
      whyNeeded: "Demonstrates deep technical competency. Naming specific platforms and standards builds instant clinical trust.",
      seoImprovement: "Adds high-value Latent Semantic Indexing (LSI) terms like 'Epic integration,' 'HL7,' and 'FHIR standards.'",
      priority: "High"
    },
    {
      id: "hit-2",
      page: "Healthcare IT Page",
      section: "Cybersecurity Bullet",
      currentWording: "Implement security frameworks aligned with industry standards",
      problem: "Too generic. 'Industry standards' is not authoritative enough for healthcare, which is legally bound by strict federal laws.",
      recommendedWording: "HIPAA-Compliant Security Frameworks: Implementation of rigorous administrative, physical, and technical safeguards aligned with NIST SP 800-66 and HHS security guidelines.",
      whyNeeded: "HIPAA compliance is a non-negotiable pain point for clinics. Naming exact frameworks (NIST, HHS) proves you are a qualified partner.",
      seoImprovement: "Satisfies Google's YMYL (Your Money or Your Life) quality guidelines by referencing official regulatory frameworks.",
      priority: "High"
    },
    // Federal Services Page
    {
      id: "fed-1",
      page: "Federal Services",
      section: "Differentiators",
      currentWording: "Federal contracting readiness",
      problem: "Since you are now fully approved and registered on SAM.gov, 'readiness' is outdated. It sounds like you are still preparing rather than active.",
      recommendedWording: "Active Federal Registration: Fully registered and active on SAM.gov with established CAGE Code (209X4) and UEI (G7YUFGEZBHP4), prepared for immediate prime or subcontracting engagements.",
      whyNeeded: "Reflects your actual, newly approved status. It removes any perception of being 'in-progress.'",
      seoImprovement: "Aligns your website's exact contracting claims with your live federal SAM.gov profile.",
      priority: "High"
    },
    {
      id: "fed-2",
      page: "Federal Services",
      section: "Capability Statement",
      currentWording: "A small PDF icon linking directly to your hosted PDF file.",
      problem: "While functional, the PDF link is easy to miss and has no active lead capture mechanism.",
      recommendedWording: "Design a prominent, professional 'Request Capability Statement' section with a simple form (Name, Agency, Email) that instantly sends the PDF.",
      whyNeeded: "Allows you to capture high-value government and prime contractor leads who are interested in your credentials.",
      seoImprovement: "Improves page Conversion Rate Optimization (CRO) and turns a passive document into an active lead generator.",
      priority: "High"
    },
    // Why Choose Us Page
    {
      id: "why-1",
      page: "Why Choose Us",
      section: "Cost Conscious Block",
      currentWording: "Cost Conscious... we offer transparent, flexible pricing tailored to your needs—with no hidden fees.",
      problem: "'Cost Conscious' can sound 'cheap' rather than 'high-value.' In healthcare IT, quality and security are valued far above low cost.",
      recommendedWording: "Predictable, High-Value Pricing: We deliver enterprise-grade solutions with transparent, predictable pricing models designed to maximize your technology investment.",
      whyNeeded: "Shifting the focus from 'cheap' to 'value and predictability' aligns better with healthcare administration budgets.",
      seoImprovement: "Protects your premium, professional brand positioning in search results.",
      priority: "Medium"
    },
    // Team Page
    {
      id: "team-1",
      page: "Meet Our Team",
      section: "Team Bios",
      currentWording: "Only names, roles, and raw personal email addresses are listed. No bios or backgrounds.",
      problem: "A new consulting firm must prove the technical and clinical capability of its team. Without brief bios, the team looks unverified.",
      recommendedWording: "Add brief, 3-sentence professional bios for each team member highlighting certifications (e.g., CISSP, DevOps, Health Informatics degrees) and years of experience.",
      whyNeeded: "Healthcare providers and federal agencies hire expertise. Showing your team's background builds immense trust.",
      seoImprovement: "Directly satisfies Google's E-E-A-T guidelines regarding showing verified author/team expertise.",
      priority: "High"
    },
    {
      id: "team-2",
      page: "Meet Our Team",
      section: "Email Privacy",
      currentWording: "Raw personal emails displayed directly in plain text (e.g., AlexisNde@...).",
      problem: "Security & Spam Risk: Plain-text emails are easily scraped by spam bots and phishing networks. It also looks slightly unpolished.",
      recommendedWording: "Replace raw emails with a secure 'Contact' button that opens a secure contact form, or use obfuscated mailto links.",
      whyNeeded: "Protects your team from phishing attacks and keeps your corporate communication channels secure.",
      seoImprovement: "Adheres to standard corporate security hygiene, building trust with security-conscious clients.",
      priority: "Medium"
    },
    // Blog Page
    {
      id: "blog-1",
      page: "Insights Blog",
      section: "Placeholder Content",
      currentWording: "Design a Stunning Blog (Default Wix placeholder post)",
      problem: "Having default template placeholders on a live site severely damages professional credibility.",
      recommendedWording: "Delete the placeholder post immediately.",
      whyNeeded: "Ensures that every piece of content on your live site is authentic and professional.",
      seoImprovement: "Prevents search engines from penalizing your site for duplicate or default template content.",
      priority: "High"
    },
    {
      id: "blog-2",
      page: "Insights Blog",
      section: "Out-of-Scope Post",
      currentWording: "Install Windows from a USB Flash Drive",
      problem: "This is a generic consumer IT support topic. It does not align with 'Healthcare IT Consulting' or enterprise-grade cloud solutions.",
      recommendedWording: "Archive or replace this post with a healthcare-focused technical topic (e.g., 'Best Practices for Secure Clinical Workstation Configuration').",
      whyNeeded: "Keeps your content strategy strictly aligned with your target audience: clinical administrators and compliance officers.",
      seoImprovement: "Strengthens your topical authority. Search engines rank you higher when your blog stays highly focused on your core niche.",
      priority: "High"
    },
    {
      id: "blog-3",
      page: "Insights Blog",
      section: "Author Name",
      currentWording: "Author displayed as 'ndealexis'",
      problem: "'ndealexis' looks like a default system username rather than a professional author.",
      recommendedWording: "Display the author's full professional name: 'Alexis Nde, DevOps & Security Engineer'.",
      whyNeeded: "Aligns with the E-E-A-T guideline of showing real, qualified experts behind the content.",
      seoImprovement: "Directly satisfies Google's requirement for verified author profiles in YMYL (Your Money or Your Life) niches.",
      priority: "High"
    }
  ];

  // Filter logic
  const filteredData = auditData.filter(item => {
    const priorityMatch = priorityFilter === "All" || item.priority === priorityFilter;
    const pageMatch = pageFilter === "All" || item.page === pageFilter;
    return priorityMatch && pageMatch;
  });

  // Get unique pages for filter dropdown
  const pages = ["All", ...Array.from(new Set(auditData.map(item => item.page)))];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Top Bar / Sticky Trust Indicator */}
      <div className="bg-slate-900 text-slate-100 py-2.5 px-6 text-xs md:text-sm font-medium border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-amber-500 rounded-full"></span>
            <span>NDE HealthTech Solutions — Wix Site Audit & Copywriting Blueprint [2026]</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>SAM.gov Active</span>
            <span>•</span>
            <span>CAGE Code: 209X4</span>
            <span>•</span>
            <span>UEI: G7YUFGEZBHP4</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-slate-200/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-white font-bold text-lg">
              N
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900">NDE</span>
              <span className="font-semibold text-lg text-slate-500 ml-1">HealthTech</span>
              <span className="ml-2.5 px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-xs font-bold">Audit Dashboard</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://ndehealthtech.com" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              View Live Wix Site <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-10">
        {/* Intro Section */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-8 shadow-sm space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold">
              <Search className="w-3.5 h-3.5" /> Meticulous Page-by-Page Audit
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Wix Website Audit & Strategic Alignment Report
            </h1>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-4xl">
              This report delivers a section-by-section analysis of your current live Wix website. It outlines current wording, identifies layout and copywriting problems, and provides optimized recommendations to establish immediate trust, clinical credibility, and federal procurement readiness—<strong>without applying any changes to your live site</strong>.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-xs font-bold text-slate-500 block uppercase tracking-wider">Total Audit Items</span>
              <span className="text-2xl font-extrabold text-slate-900 block mt-1">{auditData.length}</span>
            </div>
            <div className="p-4 bg-red-50/50 rounded-xl border border-red-100">
              <span className="text-xs font-bold text-red-600 block uppercase tracking-wider">High Priority Fixes</span>
              <span className="text-2xl font-extrabold text-red-700 block mt-1">
                {auditData.filter(i => i.priority === "High").length}
              </span>
            </div>
            <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100">
              <span className="text-xs font-bold text-blue-600 block uppercase tracking-wider">Target Pages Audited</span>
              <span className="text-2xl font-extrabold text-blue-700 block mt-1">{pages.length - 1} Pages</span>
            </div>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-500" />
            <span className="font-bold text-sm text-slate-700">Filter Audit Report:</span>
          </div>
          <div className="flex flex-wrap gap-4 w-full md:w-auto">
            {/* Page Filter */}
            <div className="flex items-center gap-2 flex-1 md:flex-initial">
              <span className="text-xs font-bold text-slate-500">Page:</span>
              <select 
                value={pageFilter} 
                onChange={(e) => setPageFilter(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-900"
              >
                {pages.map(page => (
                  <option key={page} value={page}>{page}</option>
                ))}
              </select>
            </div>

            {/* Priority Filter */}
            <div className="flex items-center gap-2 flex-1 md:flex-initial">
              <span className="text-xs font-bold text-slate-500">Priority:</span>
              <select 
                value={priorityFilter} 
                onChange={(e) => setPriorityFilter(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-900"
              >
                <option value="All">All Priorities</option>
                <option value="High">🔴 High Priority</option>
                <option value="Medium">🟡 Medium Priority</option>
                <option value="Low">🟢 Low Priority</option>
              </select>
            </div>
          </div>
        </div>

        {/* Interactive Comparison Cards */}
        <div className="space-y-6">
          {filteredData.length === 0 ? (
            <div className="bg-white rounded-xl border border-slate-200/80 p-12 text-center">
              <AlertTriangle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <p className="text-slate-500 text-sm font-semibold">No audit items match your active filters.</p>
            </div>
          ) : (
            filteredData.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-xl border border-slate-200/80 shadow-sm overflow-hidden hover:border-slate-300 transition-all"
              >
                {/* Card Header */}
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex flex-wrap justify-between items-center gap-3">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded bg-slate-200 text-slate-800 text-[11px] font-bold uppercase tracking-wider">
                      {item.page}
                    </span>
                    <span className="text-sm font-bold text-slate-700">
                      Section: <span className="text-slate-900">{item.section}</span>
                    </span>
                  </div>
                  <div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      item.priority === "High" 
                        ? "bg-red-100 text-red-800" 
                        : item.priority === "Medium" 
                        ? "bg-amber-100 text-amber-800" 
                        : "bg-emerald-100 text-emerald-800"
                    }`}>
                      {item.priority} Priority
                    </span>
                  </div>
                </div>

                {/* Card Body - Side-by-Side Comparison */}
                <div className="p-6 grid md:grid-cols-2 gap-6 border-b border-slate-100">
                  {/* Current State */}
                  <div className="space-y-3 bg-red-50/20 p-5 rounded-lg border border-red-100/40">
                    <div className="flex items-center gap-2 text-red-800">
                      <X className="w-4 h-4" />
                      <h4 className="font-bold text-xs uppercase tracking-wider">Current State & Wording</h4>
                    </div>
                    <p className="text-sm font-mono text-slate-800 bg-white/80 p-3 rounded border border-slate-100 leading-relaxed whitespace-pre-line">
                      {item.currentWording}
                    </p>
                    <div className="pt-2">
                      <span className="font-bold text-xs text-red-900 block">Problem with current state:</span>
                      <p className="text-xs text-red-800 mt-1 leading-relaxed">
                        {item.problem}
                      </p>
                    </div>
                  </div>

                  {/* Recommended State */}
                  <div className="space-y-3 bg-emerald-50/20 p-5 rounded-lg border border-emerald-100/40">
                    <div className="flex items-center gap-2 text-emerald-800">
                      <Check className="w-4 h-4" />
                      <h4 className="font-bold text-xs uppercase tracking-wider">Recommended Wording & Design</h4>
                    </div>
                    <p className="text-sm font-semibold text-emerald-900 bg-white/80 p-3 rounded border border-slate-100 leading-relaxed whitespace-pre-line">
                      {item.recommendedWording}
                    </p>
                    <div className="pt-2">
                      <span className="font-bold text-xs text-emerald-900 block">Why this change is needed:</span>
                      <p className="text-xs text-emerald-800 mt-1 leading-relaxed">
                        {item.whyNeeded}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Footer - SEO & Impact */}
                <div className="px-6 py-4 bg-slate-50/50 flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-blue-100 text-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <div>
                    <span className="font-bold text-xs text-blue-900 block">SEO Improvement:</span>
                    <p className="text-xs text-blue-800 mt-0.5 leading-relaxed">
                      {item.seoImprovement}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Strategic Guidelines */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Key Guidelines */}
          <div className="bg-white rounded-xl border border-slate-200/80 p-6 shadow-sm space-y-4">
            <h3 className="font-extrabold text-lg text-slate-900 flex items-center gap-2">
              <Shield className="w-5 h-5 text-slate-700" /> Strategic Credibility Guidelines
            </h3>
            <ul className="space-y-3 text-xs text-slate-600">
              <li className="flex gap-2 items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-1.5 flex-shrink-0"></span>
                <span><strong>Clinical Context:</strong> Transition copy away from generic IT support terms to clinical and informatics terminology (e.g., HL7, FHIR, EHR optimization).</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-1.5 flex-shrink-0"></span>
                <span><strong>NIST SP 800-66 Focus:</strong> Explicitly mention compliance frameworks to satisfy HIPAA-regulated decision-makers.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-1.5 flex-shrink-0"></span>
                <span><strong>Active Federal Status:</strong> Clearly show active SAM.gov status, CAGE Code, and UEI to attract government prime contractors.</span>
              </li>
            </ul>
          </div>

          {/* Next Steps */}
          <div className="bg-white rounded-xl border border-slate-200/80 p-6 shadow-sm space-y-4">
            <h3 className="font-extrabold text-lg text-slate-900 flex items-center gap-2">
              <ArrowRight className="w-5 h-5 text-slate-700" /> Implementation Next Steps
            </h3>
            <ul className="space-y-3 text-xs text-slate-600">
              <li className="flex gap-2 items-start">
                <span className="font-bold text-slate-900">1.</span>
                <span>Review this comparison blueprint and approve the specific copywriting modifications.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="font-bold text-slate-900">2.</span>
                <span>Apply the approved text changes directly inside your Wix Editor (non-destructively).</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="font-bold text-slate-900">3.</span>
                <span>Delete default Wix placeholder blog posts and update personal email addresses for spam protection.</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 text-xs mt-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-white font-bold text-sm">
              N
            </div>
            <span className="font-extrabold text-base tracking-tight text-white">NDE HealthTech Solutions</span>
          </div>
          <div className="text-center md:text-right">
            <p>This audit is designed to let you <strong>explore data more intuitively</strong>, <strong>understand trends better</strong>, and <strong>easily save or share</strong> the findings.</p>
            <p className="text-slate-600 mt-2">© 2026 NDE HealthTech Solutions LLC. Audit Report compiled by Manus AI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
