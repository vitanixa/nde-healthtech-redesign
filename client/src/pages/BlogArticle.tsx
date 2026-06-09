import { Link, useParams } from "wouter";
import { ArrowLeft, Calendar, User, Clock, Share2, ShieldCheck, HeartPulse, Cloud, Server, BookOpen, Lock } from "lucide-react";
import { useSEO } from "../hooks/useSEO";

export const BLOG_POSTS: Record<string, {
  slug: string;
  title: string;
  date: string;
  author: string;
  role: string;
  readTime: string;
  category: string;
  categoryColor: string;
  excerpt: string;
  heroImg: string;
  icon: typeof ShieldCheck;
  body: { type: "p" | "h2" | "h3" | "ul" | "callout"; content: string | string[] }[];
}> = {
  "managed-it-services-healthcare": {
    slug: "managed-it-services-healthcare",
    title: "The Benefits of Using Managed IT Services in Healthcare",
    date: "April 24, 2026",
    author: "Nicoline Nde",
    role: "Health Informatics Specialist",
    readTime: "6 min read",
    category: "Healthcare IT",
    categoryColor: "bg-blue-50 text-blue-700 border-blue-100",
    excerpt: "How medical clinics and healthcare providers reduce technical downtime and optimize patient charting workflows through proactive technical monitoring.",
    heroImg: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80",
    icon: HeartPulse,
    body: [
      { type: "p", content: "For clinical practices managing patient care alongside daily IT challenges, downtime is not just an inconvenience — it directly impacts patient safety and staff productivity. Managed IT services provide healthcare organizations with a proactive, strategic partner that monitors, maintains, and secures their technology infrastructure around the clock." },
      { type: "h2", content: "What Are Managed IT Services?" },
      { type: "p", content: "Managed IT services involve outsourcing day-to-day IT operations to a specialized provider who takes responsibility for system uptime, security, backups, and helpdesk support. Unlike break-fix models — where you call someone after something breaks — managed services are preventive and continuous." },
      { type: "h2", content: "Key Benefits for Healthcare Providers" },
      { type: "ul", content: [
        "Reduced EHR downtime — proactive monitoring catches failures before they disrupt charting or scheduling",
        "HIPAA compliance support — managed providers implement technical safeguards required under the Security Rule",
        "Predictable monthly costs — flat-rate contracts replace unpredictable emergency repair bills",
        "24/7 helpdesk — clinical staff get support when they need it, including nights and weekends",
        "Faster onboarding — new workstations and user accounts provisioned systematically"
      ]},
      { type: "h2", content: "Reducing Downtime in Clinical Environments" },
      { type: "p", content: "The average cost of IT downtime in a medical practice is estimated at several thousand dollars per hour when accounting for lost appointments, staff idle time, and the risk of delayed care. A managed IT partner maintains patch schedules, monitors hardware health, and implements redundancy so that single points of failure don't become clinic-wide outages." },
      { type: "callout", content: "NDE HealthTech Solutions offers Healthcare Managed IT packages including 24/7 monitoring, HIPAA-aligned security controls, EHR helpdesk, and monthly compliance reporting. Contact us to learn more." },
      { type: "h2", content: "Optimizing EHR Workflows" },
      { type: "p", content: "A properly maintained IT environment directly translates to faster, more reliable EHR performance. Slow workstations, outdated browsers, and misconfigured network settings are among the most common complaints from clinical staff — and all are preventable with routine managed maintenance." },
      { type: "h3", content: "Common EHR Performance Improvements" },
      { type: "ul", content: [
        "Workstation imaging and standardization across all clinical endpoints",
        "Network segmentation to prioritize EHR traffic",
        "Regular OS and browser updates tested for EHR compatibility",
        "Single Sign-On (SSO) to reduce login friction at the point of care"
      ]},
      { type: "h2", content: "Choosing the Right Partner" },
      { type: "p", content: "Not all managed IT providers understand the unique compliance and workflow demands of clinical environments. Look for a partner with demonstrated experience in healthcare IT, familiarity with your EHR platform (Epic, Cerner, eClinicalWorks, etc.), and a clear understanding of HIPAA technical safeguard requirements. The right provider becomes an extension of your team — not just a vendor you call when something breaks." },
    ]
  },

  "secure-clinical-workstation-configuration": {
    slug: "secure-clinical-workstation-configuration",
    title: "Best Practices for Secure Clinical Workstation Configuration",
    date: "June 2, 2026",
    author: "Alexis Nde",
    role: "DevOps & Security Engineer",
    readTime: "7 min read",
    category: "Cybersecurity",
    categoryColor: "bg-orange-50 text-orange-700 border-orange-100",
    excerpt: "An overview of the technical and physical safeguards required under NIST SP 800-66 to secure clinical workstations handling PHI.",
    heroImg: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",
    icon: ShieldCheck,
    body: [
      { type: "p", content: "Clinical workstations are among the most targeted endpoints in any healthcare network. They handle Protected Health Information (PHI) continuously, are often shared between multiple users, and must remain operational under demanding clinical conditions. Securing them properly is both a HIPAA obligation and a patient safety imperative." },
      { type: "h2", content: "The NIST SP 800-66 Framework" },
      { type: "p", content: "NIST Special Publication 800-66 provides guidance on implementing the HIPAA Security Rule. It breaks technical safeguards into access controls, audit controls, integrity controls, and transmission security — all of which apply directly to workstation configuration." },
      { type: "h2", content: "Access Control Hardening" },
      { type: "ul", content: [
        "Enforce unique user credentials — no shared logins across clinical staff",
        "Implement automatic screen lock after 5–10 minutes of inactivity",
        "Use role-based access to limit what each user can access on the EHR",
        "Enable Multi-Factor Authentication (MFA) for remote access and administrative accounts",
        "Disable USB ports or restrict them to approved devices only"
      ]},
      { type: "h2", content: "Endpoint Protection" },
      { type: "p", content: "Every clinical workstation should run enterprise-grade endpoint detection and response (EDR) software, not just consumer antivirus. EDR tools provide behavioral analysis, threat isolation, and centralized alerting that consumer tools simply don't offer. Pair this with centralized patch management so that critical OS and software updates are deployed across all endpoints within your defined SLA window." },
      { type: "callout", content: "NDE HealthTech Solutions deploys and manages EDR, patch management, and HIPAA-aligned workstation hardening for clinical environments of all sizes. Reach out for a free security assessment." },
      { type: "h2", content: "Physical Safeguards" },
      { type: "p", content: "HIPAA's physical safeguard standards require workstations to be positioned so that unauthorized individuals cannot view PHI screens, and that access to workstations handling PHI is limited. Practical steps include privacy screen filters for monitors in patient-facing areas, workstation placement reviews during facility walkthroughs, and cable locks for portable devices." },
      { type: "h3", content: "Workstation Baseline Checklist" },
      { type: "ul", content: [
        "OS fully patched and enrolled in centralized patch management",
        "EDR agent installed and reporting to central console",
        "Full-disk encryption (BitLocker or FileVault) enabled",
        "Automatic screen lock configured at ≤10 minutes",
        "Unused ports (USB, Bluetooth) disabled via Group Policy or MDM",
        "PHI screen not visible from public areas",
        "Local admin accounts disabled for standard clinical users"
      ]},
      { type: "h2", content: "Audit Logging" },
      { type: "p", content: "HIPAA requires covered entities to implement hardware, software, and procedural mechanisms that record and examine activity in information systems that contain or use PHI. At minimum, workstation audit logs should capture login/logout events, failed authentication attempts, and file access to PHI repositories. Logs should be retained for a minimum of six years and reviewed periodically." },
    ]
  },

  "hipaa-security-rule-small-practice": {
    slug: "hipaa-security-rule-small-practice",
    title: "HIPAA Security Rule Essentials for Small Medical Practices",
    date: "May 15, 2026",
    author: "Nicoline Nde",
    role: "Health Informatics Specialist",
    readTime: "8 min read",
    category: "Compliance",
    categoryColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
    excerpt: "A practical, plain-language breakdown of HIPAA Security Rule requirements that every small practice owner and office manager should understand.",
    heroImg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    icon: Lock,
    body: [
      { type: "p", content: "Many small medical practices assume HIPAA's Security Rule is primarily a concern for large hospital systems. In reality, small practices face the same enforcement obligations — and in some ways are more vulnerable because they often lack dedicated IT staff to manage compliance controls. This guide breaks down the essentials in plain language." },
      { type: "h2", content: "What the Security Rule Covers" },
      { type: "p", content: "The HIPAA Security Rule applies specifically to electronic Protected Health Information (ePHI) — any patient health data stored or transmitted digitally. This includes your EHR, email, billing systems, patient portal, and any cloud storage where patient data lives. If it's electronic and contains patient info, the Security Rule applies." },
      { type: "h2", content: "The Three Safeguard Categories" },
      { type: "ul", content: [
        "Administrative safeguards — policies, training, risk assessments, and workforce management",
        "Physical safeguards — facility access controls, workstation security, and device disposal",
        "Technical safeguards — access controls, audit logs, encryption, and transmission security"
      ]},
      { type: "h2", content: "The Risk Assessment: Your First Obligation" },
      { type: "p", content: "The single most important HIPAA requirement that small practices neglect is the Security Risk Assessment (SRA). The SRA is not optional — it is required by the Security Rule and is the first thing HHS auditors look for during an investigation. It must identify where ePHI lives in your organization, what threats exist, what your current controls are, and what gaps remain." },
      { type: "callout", content: "NDE HealthTech Solutions conducts HIPAA Security Risk Assessments for small and mid-sized practices. We deliver a written report, risk register, and remediation roadmap. Contact us to schedule yours." },
      { type: "h2", content: "Five Controls Every Small Practice Should Have Today" },
      { type: "ul", content: [
        "Unique login credentials for every staff member — no shared passwords",
        "Encrypted email for any communication containing patient information",
        "Automatic workstation screen lock (5–10 minutes of inactivity)",
        "Regular, tested backups of all ePHI stored off-site or in the cloud",
        "A written sanction policy for staff who violate HIPAA — and documented training records"
      ]},
      { type: "h2", content: "Common Violations in Small Practices" },
      { type: "p", content: "The most common HIPAA findings in small practices are not sophisticated cyberattacks — they are basic control failures: shared login credentials, unencrypted laptops, no Business Associate Agreements (BAAs) with vendors, and staff using personal email to send patient information. All of these are preventable with straightforward policy and technology controls." },
      { type: "h2", content: "Business Associate Agreements" },
      { type: "p", content: "Every vendor who handles ePHI on your behalf — your EHR vendor, your billing company, your cloud storage provider, your IT support firm — must have a signed BAA with your practice before they access any patient data. Failing to execute BAAs is one of the most commonly cited violations in HHS enforcement actions." },
    ]
  },

  "aws-cloud-migration-healthcare": {
    slug: "aws-cloud-migration-healthcare",
    title: "Planning a HIPAA-Compliant AWS Cloud Migration for Healthcare",
    date: "May 3, 2026",
    author: "Alexis Nde",
    role: "DevOps & Cloud Engineer",
    readTime: "9 min read",
    category: "Cloud Engineering",
    categoryColor: "bg-violet-50 text-violet-700 border-violet-100",
    excerpt: "A step-by-step framework for healthcare organizations moving workloads to AWS while maintaining HIPAA compliance and data integrity.",
    heroImg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80",
    icon: Cloud,
    body: [
      { type: "p", content: "Moving clinical workloads to the cloud offers healthcare organizations significant advantages — cost reduction, scalability, disaster recovery, and access to advanced analytics capabilities. But healthcare cloud migrations require careful planning around HIPAA compliance, data integrity, and business continuity. This guide walks through the key phases of a HIPAA-compliant AWS migration." },
      { type: "h2", content: "Before You Start: AWS BAA and HIPAA Eligibility" },
      { type: "p", content: "AWS supports HIPAA workloads and will sign a Business Associate Agreement (BAA), but not all AWS services are covered under the BAA. Before you migrate any ePHI, confirm that every AWS service you plan to use — EC2, RDS, S3, Lambda, etc. — is listed in AWS's current HIPAA-eligible services documentation. Services not on that list cannot process or store ePHI." },
      { type: "h2", content: "Phase 1: Discovery and Classification" },
      { type: "ul", content: [
        "Inventory all systems and data stores that contain ePHI",
        "Classify data by sensitivity (ePHI, financial, operational)",
        "Identify dependencies between systems that need to migrate together",
        "Document current backup, RTO, and RPO requirements for each system"
      ]},
      { type: "h2", content: "Phase 2: Architecture Design" },
      { type: "p", content: "A well-designed HIPAA AWS architecture separates ePHI workloads from general workloads using VPC segmentation, enforces encryption at rest (KMS) and in transit (TLS 1.2+), restricts access using IAM least-privilege policies, and enables CloudTrail and AWS Config for continuous audit logging. Your architecture should be reviewed against the HIPAA Security Rule technical safeguard requirements before any data moves." },
      { type: "callout", content: "NDE HealthTech Solutions designs and implements HIPAA-compliant AWS environments for healthcare organizations. We handle architecture, migration, security controls, and ongoing managed cloud operations." },
      { type: "h3", content: "Core Architecture Components" },
      { type: "ul", content: [
        "Dedicated VPC with private subnets for ePHI workloads",
        "AWS KMS encryption for all S3 buckets, RDS databases, and EBS volumes",
        "IAM roles with least-privilege access — no long-lived access keys",
        "AWS CloudTrail enabled in all regions with log file integrity validation",
        "AWS Config rules for continuous compliance monitoring",
        "AWS Backup for centralized, policy-driven backup management"
      ]},
      { type: "h2", content: "Phase 3: Migration Execution" },
      { type: "p", content: "Use the AWS Migration Hub to track migration status across workloads. For databases containing ePHI, AWS Database Migration Service (DMS) handles schema conversion and data replication with minimal downtime. Schedule cutovers during low-census periods and have a tested rollback plan documented before any migration window begins." },
      { type: "h2", content: "Phase 4: Validation and Documentation" },
      { type: "p", content: "Post-migration validation should confirm data integrity (row counts, checksums), verify all access controls are enforced, test backup and restore procedures, and update your HIPAA Security Risk Assessment to reflect the new environment. Documentation of all controls is essential — both for your own operational continuity and for any future HHS audit." },
    ]
  },

  "ehr-interoperability-fhir": {
    slug: "ehr-interoperability-fhir",
    title: "EHR Interoperability in 2026: FHIR, APIs, and What It Means for Your Practice",
    date: "April 10, 2026",
    author: "Nicoline Nde",
    role: "Health Informatics Specialist",
    readTime: "7 min read",
    category: "Healthcare IT",
    categoryColor: "bg-blue-50 text-blue-700 border-blue-100",
    excerpt: "How the HL7 FHIR standard and ONC interoperability rules are changing the way patient data moves between EHR systems — and what practices need to do now.",
    heroImg: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1400&q=80",
    icon: HeartPulse,
    body: [
      { type: "p", content: "Interoperability — the ability of different health IT systems to exchange and use patient data — has been a long-standing challenge in healthcare. The 21st Century Cures Act and ONC's interoperability rules have dramatically accelerated progress, and the HL7 FHIR standard has emerged as the technical foundation for modern health data exchange." },
      { type: "h2", content: "What Is HL7 FHIR?" },
      { type: "p", content: "FHIR (Fast Healthcare Interoperability Resources) is a standard developed by HL7 International for exchanging healthcare information electronically. Unlike older HL7 standards, FHIR is built on modern web technologies — RESTful APIs, JSON, and OAuth 2.0 — making it far more accessible to developers and easier to integrate with modern applications." },
      { type: "h2", content: "The ONC Information Blocking Rule" },
      { type: "p", content: "Since April 2021, healthcare providers are prohibited from engaging in practices that unreasonably interfere with access, exchange, or use of electronic health information. This means your EHR vendor must provide FHIR-compliant patient access APIs, and your practice must not create unnecessary barriers to patients or other providers accessing health records." },
      { type: "callout", content: "NDE HealthTech Solutions helps practices configure FHIR APIs, test patient access applications, and document information blocking compliance policies. Contact us for a FHIR readiness assessment." },
      { type: "h2", content: "Practical Implications for Your Practice" },
      { type: "ul", content: [
        "Patient right of access — patients can use third-party apps to pull their data via FHIR APIs",
        "Care coordination — referring providers can query your EHR for patient records directly",
        "Prior authorization — payers are moving toward FHIR APIs to automate prior auth workflows",
        "Population health — analytics platforms can query aggregated patient data for reporting"
      ]},
      { type: "h2", content: "Steps to FHIR Readiness" },
      { type: "ul", content: [
        "Confirm your EHR vendor's FHIR R4 compliance certification with ONC",
        "Enable and test the patient access FHIR API endpoint in your EHR",
        "Update your Notice of Privacy Practices to reflect third-party app data sharing",
        "Train front desk and clinical staff on patient FHIR app requests",
        "Review your data sharing agreements with any connected health information exchanges"
      ]},
      { type: "h2", content: "What's Coming Next" },
      { type: "p", content: "CMS finalized rules requiring payers to implement FHIR APIs for prior authorization, and the industry is moving toward SMART on FHIR for secure app authorization. Practices that build FHIR fluency now will be better positioned as these requirements expand to cover more workflows over the next few years." },
    ]
  },

  "federal-it-contracting-small-business": {
    slug: "federal-it-contracting-small-business",
    title: "Breaking Into Federal IT Contracting as a Small Business",
    date: "March 28, 2026",
    author: "Alexis Nde",
    role: "Federal IT & Business Development",
    readTime: "8 min read",
    category: "Federal IT",
    categoryColor: "bg-slate-100 text-slate-700 border-slate-200",
    excerpt: "A practical guide to SAM.gov registration, NAICS codes, set-aside programs, and winning your first federal IT contract as a small business.",
    heroImg: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1400&q=80",
    icon: Server,
    body: [
      { type: "p", content: "The federal government is the world's largest buyer of IT services, spending over $90 billion annually. Small businesses have access to a significant portion of that through set-aside programs, subcontracting opportunities, and agency small business goals. But navigating the federal acquisition process requires understanding a system that operates very differently from commercial sales." },
      { type: "h2", content: "Step 1: SAM.gov Registration" },
      { type: "p", content: "System for Award Management (SAM.gov) is the primary database of vendors eligible to receive federal contracts. Registration is free but requires your Unique Entity Identifier (UEI), CAGE code, business information, and representations and certifications. Your registration must be renewed annually — a lapsed registration means you cannot be awarded a contract." },
      { type: "h2", content: "Step 2: NAICS Codes and PSC Codes" },
      { type: "p", content: "North American Industry Classification System (NAICS) codes define your industry category. For IT services, the most common codes include 541511 (Custom Computer Programming), 541512 (Computer Systems Design), and 541519 (Other Computer Related Services). Product and Service Codes (PSCs) further categorize what you sell. Select codes that accurately reflect your capabilities — agencies search these codes when looking for vendors." },
      { type: "callout", content: "NDE HealthTech Solutions is actively seeking subcontracting partnerships with prime contractors in healthcare IT and federal systems engineering. Our SAM.gov registration is active with CAGE 209X4 and UEI G7YUFGEZBHP4. Contact us at contracts@ndehealthtech.com." },
      { type: "h2", content: "Small Business Set-Aside Programs" },
      { type: "ul", content: [
        "8(a) Business Development — for socially and economically disadvantaged businesses",
        "HUBZone — for businesses in historically underutilized business zones",
        "WOSB/EDWOSB — for women-owned small businesses",
        "SDVOSB — for service-disabled veteran-owned small businesses",
        "General small business set-asides — reserved for businesses below the NAICS size standard"
      ]},
      { type: "h2", content: "Finding Opportunities" },
      { type: "p", content: "SAM.gov Contract Opportunities (formerly FedBizOpps) lists all federal solicitations above the simplified acquisition threshold. Set up automated searches by NAICS code and agency to receive notifications. USASpending.gov shows historical contract awards — research which agencies are buying what you sell and who is currently winning those contracts." },
      { type: "h2", content: "Subcontracting: The Fastest Path to Your First Award" },
      { type: "p", content: "Most small businesses win their first federal work as a subcontractor to a prime. Prime contractors on large IDIQ vehicles and GWACs (like CIO-SP4, Alliant 2, and NASA SEWP) are required to meet small business subcontracting goals. Identify primes who hold relevant contract vehicles and offer capabilities that complement theirs. A strong capabilities statement and established SAM.gov profile are your calling card." },
      { type: "h3", content: "Your Capabilities Statement Should Include" },
      { type: "ul", content: [
        "Core competencies — specific services you deliver with demonstrated results",
        "Differentiators — what makes you different from other vendors in your NAICS space",
        "Past performance — even commercial work or subcontract experience counts",
        "Company data — CAGE, UEI, NAICS codes, size standard, any certifications",
        "Contact information — a specific person, not a generic info@ address"
      ]},
    ]
  },
};

export function BlogArticlePage() {
  const params = useParams<{ slug: string }>();
  const post = params.slug ? BLOG_POSTS[params.slug] : undefined;

  useSEO(post
    ? { title: post.title, description: post.excerpt, canonical: `https://ndehealthtech.com/blog/${post.slug}` }
    : { title: "Article Not Found", description: "" }
  );

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-4 px-6">
        <BookOpen className="w-12 h-12 text-slate-300" />
        <h1 className="text-xl font-black text-slate-800">Article Not Found</h1>
        <Link href="/blog"><span className="text-sm font-bold text-blue-700 hover:underline cursor-pointer">← Back to Blog</span></Link>
      </div>
    );
  }

  const Icon = post.icon;

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">

      {/* Nav */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100 px-6 py-4 flex items-center justify-between">
        <Link href="/"><span className="font-black text-base text-slate-950 cursor-pointer">NDE HealthTech</span></Link>
        <Link href="/blog"><span className="text-sm font-bold text-slate-500 hover:text-slate-900 cursor-pointer flex items-center gap-1.5"><ArrowLeft className="w-4 h-4" /> All Articles</span></Link>
      </header>

      {/* Hero */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img src={post.heroImg} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 max-w-3xl mx-auto">
          <span className={`inline-block text-[10px] font-black px-2.5 py-1 rounded-full border uppercase tracking-widest mb-3 ${post.categoryColor}`}>{post.category}</span>
          <h1 className="text-xl md:text-3xl font-black text-white leading-tight">{post.title}</h1>
        </div>
      </div>

      {/* Meta bar */}
      <div className="border-b border-slate-100 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 py-4 flex flex-wrap items-center gap-4 text-xs text-slate-500 font-semibold">
          <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {post.author}, {post.role}</span>
          <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
          <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
        </div>
      </div>

      {/* Body */}
      <article className="max-w-3xl mx-auto px-6 py-10 space-y-6">
        {post.body.map((block, i) => {
          if (block.type === "p") return <p key={i} className="text-base text-slate-700 leading-relaxed">{block.content as string}</p>;
          if (block.type === "h2") return <h2 key={i} className="text-xl font-black text-slate-900 pt-4 border-t border-slate-100">{block.content as string}</h2>;
          if (block.type === "h3") return <h3 key={i} className="text-base font-black text-slate-800 pt-2">{block.content as string}</h3>;
          if (block.type === "ul") return (
            <ul key={i} className="space-y-2 pl-0">
              {(block.content as string[]).map((item, j) => (
                <li key={j} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          );
          if (block.type === "callout") return (
            <div key={i} className="rounded-2xl bg-blue-50 border border-blue-100 px-5 py-4 flex gap-3">
              <Icon className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
              <p className="text-sm text-blue-900 font-semibold leading-relaxed">{block.content as string}</p>
            </div>
          );
          return null;
        })}
      </article>

      {/* CTA */}
      <div className="border-t border-slate-100 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-black text-slate-900">Ready to strengthen your healthcare IT?</p>
            <p className="text-sm text-slate-500 mt-0.5">Schedule a free 20-minute consultation with our team.</p>
          </div>
          <Link href="/contact">
            <span className="shrink-0 inline-flex items-center bg-blue-800 text-white text-sm font-black px-5 py-3 rounded-xl hover:bg-blue-900 transition-colors cursor-pointer">
              Book Free Consultation
            </span>
          </Link>
        </div>
      </div>

      {/* Back link */}
      <div className="max-w-3xl mx-auto px-6 pb-12">
        <Link href="/blog"><span className="text-sm font-bold text-slate-400 hover:text-slate-700 cursor-pointer flex items-center gap-1.5"><ArrowLeft className="w-4 h-4" /> Back to all articles</span></Link>
      </div>
    </div>
  );
}
