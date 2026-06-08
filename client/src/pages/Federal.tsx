import React from "react";
import Layout from "../components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Shield, Download, FileText, CheckCircle, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export default function Federal() {
  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Federal Capability Statement downloaded! (Demo Mode)");
  };

  return (
    <Layout>
      <div className="bg-slate-900 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold tracking-wide">
              <Building className="w-3.5 h-3.5" /> Government Contracting
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              Federal Healthcare IT Solutions
            </h1>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl">
              NDE HealthTech Solutions LLC is fully registered on SAM.gov and certified to deliver secure, mission-critical healthcare IT, cloud architecture, and data engineering to federal agencies and prime contractors.
            </p>
          </div>
          <div className="lg:col-span-4 bg-slate-950 border border-slate-800 rounded-xl p-6 space-y-4 shadow-xl">
            <h3 className="font-bold text-sm uppercase tracking-wider text-slate-400">Contracting Credentials</h3>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between border-b border-slate-800 pb-1.5">
                <span className="text-slate-500">CAGE CODE</span>
                <span className="text-white font-bold">209X4</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-1.5">
                <span className="text-slate-500">UEI</span>
                <span className="text-white font-bold">G7YUFGEZBHP4</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-1.5">
                <span className="text-slate-500">SAM.gov STATUS</span>
                <span className="text-emerald-400 font-bold">Active / Registered</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">BUSINESS TYPE</span>
                <span className="text-white font-bold">Small Business</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-800">
              Federal Capabilities & Compliance
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We understand that federal agencies operate under strict compliance and cybersecurity mandates. Our technical consultants are fully certified to design and support secure environments meeting the highest federal guidelines.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 border border-border rounded-xl bg-white shadow-sm space-y-2">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center">
                <Shield className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-slate-800 text-sm">NIST SP 800-171</h4>
              <p className="text-xs text-muted-foreground">End-to-end security configurations to protect Controlled Unclassified Information (CUI).</p>
            </div>

            <div className="p-4 border border-border rounded-xl bg-white shadow-sm space-y-2">
              <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center">
                <Building className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-slate-800 text-sm">CMMC Alignment</h4>
              <p className="text-xs text-muted-foreground">Rigorous cyber hygiene protocols fully aligned with Cybersecurity Maturity Model Certification standards.</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-slate-800 text-lg">Primary NAICS Codes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-3 border border-border rounded-lg bg-white flex justify-between items-center text-xs">
                <span className="font-mono font-bold text-primary">541512</span>
                <span className="text-muted-foreground">Computer Systems Design Services</span>
              </div>
              <div className="p-3 border border-border rounded-lg bg-white flex justify-between items-center text-xs">
                <span className="font-mono font-bold text-primary">541511</span>
                <span className="text-muted-foreground">Custom Computer Programming</span>
              </div>
              <div className="p-3 border border-border rounded-lg bg-white flex justify-between items-center text-xs">
                <span className="font-mono font-bold text-primary">541519</span>
                <span className="text-muted-foreground">Other Computer Related Services</span>
              </div>
              <div className="p-3 border border-border rounded-lg bg-white flex justify-between items-center text-xs">
                <span className="font-mono font-bold text-primary">541611</span>
                <span className="text-muted-foreground">Administrative & General Management</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <Card className="border-border shadow-lg sticky top-24">
            <CardHeader className="bg-slate-50 border-b border-border">
              <CardTitle className="text-lg font-bold text-primary flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" /> Capability Statement
              </CardTitle>
              <CardDescription className="text-xs">
                Download NDE HealthTech's full federal capability brief to review past performances and contracting vehicles.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleDownload} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    required
                    className="w-full border border-border rounded-lg p-2 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">Government Email</label>
                  <input 
                    type="email" 
                    placeholder="jdoe@agency.gov" 
                    required
                    className="w-full border border-border rounded-lg p-2 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">Agency / Organization</label>
                  <input 
                    type="text" 
                    placeholder="Defense Health Agency (DHA)" 
                    required
                    className="w-full border border-border rounded-lg p-2 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <button type="submit" className="cursor-pointer w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-lg py-3 text-sm flex justify-center items-center gap-2 transition-all">
                  <Download className="w-4 h-4" /> Download Capability Statement (PDF)
                </button>
                <div className="pt-2 border-t border-border mt-4">
                  <div className="p-3 bg-secondary/20 rounded-lg text-xs text-secondary-foreground flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span><strong>Lead Capture Tip:</strong> This form captures high-intent procurement leads by providing them immediate contracting collateral.</span>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
