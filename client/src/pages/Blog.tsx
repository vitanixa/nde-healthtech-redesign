import React from "react";
import Layout from "../components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calendar, UserCheck, Shield, CheckCircle, ExternalLink } from "lucide-react";
import { toast } from "sonner";

export default function Blog() {
  const handleReadArticle = (title: string) => {
    toast.info(`Opening article: "${title}" (Demo Mode)`);
  };

  return (
    <Layout>
      <div className="bg-slate-50/50 py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold tracking-wide">
              <BookOpen className="w-3.5 h-3.5" /> E-E-A-T Content Strategy
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-primary">
              Insights & Thought Leadership
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              We replace generic blog placeholders with highly authoritative, compliance-first research articles designed to establish domain trust with clinical directors and search engines.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-800 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" /> Q1 Editorial Article Previews
          </h2>

          <div className="space-y-6">
            {/* Article 1 */}
            <Card className="border-border shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="bg-slate-50/50 border-b border-border">
                <div className="flex justify-between items-center">
                  <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[10px] font-bold font-mono">Month 1</span>
                  <span className="text-xs text-muted-foreground">Est. Read Time: 6 min</span>
                </div>
                <CardTitle className="text-lg font-bold text-slate-800 mt-2 hover:text-primary cursor-pointer" onClick={() => handleReadArticle("Navigating HIPAA Compliance in AWS and Azure Cloud Migrations")}>
                  Navigating HIPAA Compliance in AWS and Azure Cloud Migrations
                </CardTitle>
                <CardDescription className="text-xs">
                  A deep-dive technical blueprint for securing Protected Health Information (PHI) across public cloud architectures.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Migrating clinical databases to the cloud requires more than just launching virtual servers. We unpack security groups, data-at-rest encryption protocols, and the vital Business Associate Agreement (BAA) guidelines required by AWS and Azure.
                </p>
                <div className="flex justify-between items-center text-xs pt-2 border-t border-slate-100">
                  <span className="font-semibold text-primary">Target Keyword: HIPAA compliant cloud migration</span>
                  <button onClick={() => handleReadArticle("Navigating HIPAA Compliance in AWS and Azure Cloud Migrations")} className="cursor-pointer font-bold text-primary flex items-center gap-1 hover:underline">
                    Read Article Preview <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Article 2 */}
            <Card className="border-border shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="bg-slate-50/50 border-b border-border">
                <div className="flex justify-between items-center">
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold font-mono">Month 2</span>
                  <span className="text-xs text-muted-foreground">Est. Read Time: 8 min</span>
                </div>
                <CardTitle className="text-lg font-bold text-slate-800 mt-2 hover:text-primary cursor-pointer" onClick={() => handleReadArticle("EHR Interoperability: Overcoming the Top 5 Data Exchange Hurdles")}>
                  EHR Interoperability: Overcoming the Top 5 Data Exchange Hurdles
                </CardTitle>
                <CardDescription className="text-xs">
                  How FHIR API standards and HL7 messaging are shaping the future of clinical patient matching.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Data silos prevent seamless patient care and increase clinical overhead. Learn how to implement secure, compliant FHIR pipelines to bridge the gap between patient intake portals and legacy EHR databases.
                </p>
                <div className="flex justify-between items-center text-xs pt-2 border-t border-slate-100">
                  <span className="font-semibold text-primary">Target Keyword: EHR integration services</span>
                  <button onClick={() => handleReadArticle("EHR Interoperability: Overcoming the Top 5 Data Exchange Hurdles")} className="cursor-pointer font-bold text-primary flex items-center gap-1 hover:underline">
                    Read Article Preview <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Article 3 */}
            <Card className="border-border shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="bg-slate-50/50 border-b border-border">
                <div className="flex justify-between items-center">
                  <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-800 text-[10px] font-bold font-mono">Month 3</span>
                  <span className="text-xs text-muted-foreground">Est. Read Time: 5 min</span>
                </div>
                <CardTitle className="text-lg font-bold text-slate-800 mt-2 hover:text-primary cursor-pointer" onClick={() => handleReadArticle("The Prime Contractor's Guide to Selecting Healthcare IT Subcontractors")}>
                  The Prime Contractor's Guide to Selecting Healthcare IT Subcontractors
                </CardTitle>
                <CardDescription className="text-xs">
                  Navigating CMMC, NIST compliance, and small business participation goals in federal bids.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Federal contracting bids are highly competitive. We outline what defense and technology primes look for when selecting small business subcontractors for multi-million dollar health agency contracts.
                </p>
                <div className="flex justify-between items-center text-xs pt-2 border-t border-slate-100">
                  <span className="font-semibold text-primary">Target Keyword: federal healthcare IT contractor</span>
                  <button onClick={() => handleReadArticle("The Prime Contractor's Guide to Selecting Healthcare IT Subcontractors")} className="cursor-pointer font-bold text-primary flex items-center gap-1 hover:underline">
                    Read Article Preview <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="lg:col-span-4">
          <Card className="border-border shadow-lg sticky top-24">
            <CardHeader className="bg-slate-50 border-b border-border">
              <CardTitle className="text-lg font-bold text-primary flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-primary" /> E-E-A-T Content Rules
              </CardTitle>
              <CardDescription className="text-xs">
                How our recommended blog structure satisfies Google's YMYL quality standards.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-4 text-xs text-muted-foreground">
                <div className="flex gap-3 items-start border-b border-slate-100 pb-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800 block">Author Credentials</span>
                    <p className="text-[11px] mt-0.5">Every post must show real credentials (e.g. CISSP, PMP) to satisfy search crawler trust metrics.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start border-b border-slate-100 pb-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800 block">Clinical / Security Reviews</span>
                    <p className="text-[11px] mt-0.5">Including a "Reviewed by" line demonstrates a rigorous peer-review process.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800 block">Compliance Focus</span>
                    <p className="text-[11px] mt-0.5">Linking out to official HHS, CMS, or NIST frameworks builds strong domain authority.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
