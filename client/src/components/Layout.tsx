import React from "react";
import { Link, useLocation } from "wouter";
import { ExternalLink } from "lucide-react";
import { toast } from "sonner";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      {/* Top Banner / Sticky Trust Indicator */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-xs md:text-sm font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            <span>NDE HealthTech Digital Strategy Audit & Redesign Blueprint [2026]</span>
          </div>
          <div className="flex items-center gap-4 text-primary-foreground/90">
            <span>SAM.gov Registered</span>
            <span>•</span>
            <span>CAGE Code: 209X4</span>
            <span>•</span>
            <span>UEI: G7YUFGEZBHP4</span>
          </div>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <header className="border-b border-border/80 bg-background/95 backdrop-blur-md sticky top-0 z-50 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-sm">
                N
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-primary">NDE</span>
                <span className="font-semibold text-lg text-muted-foreground ml-1">HealthTech</span>
              </div>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/">
              <span className={`text-sm font-semibold cursor-pointer transition-colors ${location === "/" ? "text-primary font-bold" : "text-foreground/80 hover:text-primary"}`}>
                Strategy Dashboard
              </span>
            </Link>
            <Link href="/services">
              <span className={`text-sm font-semibold cursor-pointer transition-colors ${location.startsWith("/services") ? "text-primary font-bold" : "text-foreground/80 hover:text-primary"}`}>
                Commercial Services
              </span>
            </Link>
            <Link href="/federal">
              <span className={`text-sm font-semibold cursor-pointer transition-colors ${location === "/federal" ? "text-primary font-bold" : "text-foreground/80 hover:text-primary"}`}>
                Federal Capabilities
              </span>
            </Link>
            <Link href="/blog">
              <span className={`text-sm font-semibold cursor-pointer transition-colors ${location === "/blog" ? "text-primary font-bold" : "text-foreground/80 hover:text-primary"}`}>
                Insights Blog
              </span>
            </Link>
            <Link href="/contact">
              <span className={`text-sm font-semibold cursor-pointer transition-colors ${location === "/contact" ? "text-primary font-bold" : "text-foreground/80 hover:text-primary"}`}>
                Scheduler & Contact
              </span>
            </Link>
          </nav>
          <div>
            <Link href="/contact">
              <button className="cursor-pointer font-semibold bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-2.5 text-sm transition-all shadow-sm">
                Contact Audit Team
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 text-sm mt-auto">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                N
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">NDE HealthTech</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Secure, compliant healthcare IT consulting solutions engineered for clinical excellence and mission-critical federal operations.
            </p>
          </div>
          <div>
            <h5 className="font-bold text-white mb-4">Quick Links</h5>
            <ul className="space-y-2 text-xs">
              <li><Link href="/" className="hover:text-white transition-colors">Strategy Dashboard</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Commercial Services</Link></li>
              <li><Link href="/federal" className="hover:text-white transition-colors">Federal Capabilities</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Insights Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Scheduler</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white mb-4">Contact Info</h5>
            <p className="text-xs leading-relaxed text-slate-500">
              NDE HealthTech Solutions LLC<br />
              Venus, Texas, USA<br />
              CAGE Code: 209X4<br />
              UEI: G7YUFGEZBHP4
            </p>
          </div>
          <div>
            <h5 className="font-bold text-white mb-4">Interactive Report Benefits</h5>
            <p className="text-xs leading-relaxed text-slate-500">
              This interactive report is designed to let you <strong>explore data more intuitively</strong>, <strong>understand trends better</strong>, and <strong>easily save or share</strong> the strategic findings.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 border-t border-slate-900 mt-8 pt-8 text-center text-xs text-slate-600">
          <p>© 2026 NDE HealthTech Solutions LLC. Strategic Redesign Report compiled by Manus AI.</p>
        </div>
      </footer>
    </div>
  );
}
