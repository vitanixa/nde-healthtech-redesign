import React from "react";
import Layout from "../components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Layers, Building, CheckCircle, Clock, AlertTriangle, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  return (
    <Layout>
      <div className="bg-slate-50/50 py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold tracking-wide">
              <Layers className="w-3.5 h-3.5" /> Redesigned Service Architecture
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-primary">
              Commercial Healthcare IT Services
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              We engineer secure, compliant, and highly interoperable clinical IT systems designed to optimize provider workflows and safeguard patient health information.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        {/* Section 1: Clinical Informatics & EHR */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center">
              <Layers className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-800">
              EHR Integration & Interoperability
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our clinical informatics services resolve the most common friction points in modern practice management. We bridge data silos to create seamless patient data flows while heavily reducing clinician administrative burnout.
            </p>
            
            <div className="space-y-3 bg-white p-6 rounded-xl border border-border shadow-sm">
              <h4 className="font-bold text-slate-800 text-sm">Recommended Redesign Pillars:</h4>
              <ul className="space-y-2.5 text-xs text-muted-foreground">
                <li className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span><strong>HL7 & FHIR Standards</strong>: Align patient record sharing with modern Fast Healthcare Interoperability Resources (FHIR) API frameworks.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Epic & Cerner Optimization</strong>: Tailor EHR workflows specifically to the clinic's patient intake and specialty billing patterns.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Zero-Friction Exchange</strong>: Create real-time secure patient pipelines that eliminate manual scanning and double-entry.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-5">
            <Card className="border-border shadow-md">
              <CardHeader className="bg-slate-50 border-b border-border">
                <CardTitle className="text-sm font-bold text-primary">Interoperability Pipeline Blueprint</CardTitle>
                <CardDescription className="text-xs">How we bridge the gap between patient intake and core EHR systems.</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="p-3 bg-slate-100 rounded-lg text-xs font-semibold text-slate-800 flex justify-between items-center">
                    <span>1. Patient Portal / Intake</span>
                    <span className="text-[10px] text-primary bg-blue-50 px-2 py-0.5 rounded font-mono">JSON Data</span>
                  </div>
                  <div className="text-center text-slate-400 text-xs font-bold">↓</div>
                  <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg text-xs font-semibold text-primary flex justify-between items-center">
                    <span>2. FHIR API / Interoperability Engine</span>
                    <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-mono">Secure HL7</span>
                  </div>
                  <div className="text-center text-slate-400 text-xs font-bold">↓</div>
                  <div className="p-3 bg-slate-900 rounded-lg text-xs font-semibold text-white flex justify-between items-center">
                    <span>3. Core EHR (Epic/Cerner)</span>
                    <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded font-mono">Encrypted PHI</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Section 2: Managed IT & Support */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-last lg:order-first">
            <Card className="border-border shadow-md">
              <CardHeader className="bg-slate-50 border-b border-border">
                <CardTitle className="text-sm font-bold text-primary">Managed IT Reliability Checklist</CardTitle>
                <CardDescription className="text-xs">Baseline operational goals for zero-downtime clinical networks.</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-3 text-xs text-muted-foreground">
                  <div className="flex gap-3 items-center border-b border-slate-100 pb-2">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <span className="font-bold text-slate-800 block">99.99% Network Uptime</span>
                      <p className="text-[11px]">Continuous proactive monitoring to eliminate outages before they disrupt patient care.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center border-b border-slate-100 pb-2">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <span className="font-bold text-slate-800 block">Automated Backup & DR</span>
                      <p className="text-[11px]">Secure hourly off-site cloud backups with a 15-minute recovery point objective (RPO).</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <span className="font-bold text-slate-800 block">24/7/365 Helpdesk Support</span>
                      <p className="text-[11px]">Immediate clinical tech support for workstations, tablet-based intakes, and billing.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-800">
              Proactive Managed IT & 24/7 Helpdesk
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We act as your practice's virtual CIO (vCIO). Instead of reacting when systems break, we proactively monitor your entire IT environment to guarantee uptime, maintain device compliance, and support your administrative staff around the clock.
            </p>
            <div className="pt-2">
              <Link href="/contact">
                <span className="inline-flex items-center gap-2 text-primary font-bold text-sm cursor-pointer hover:underline">
                  Schedule a Free Managed IT Audit <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Section 3: Cybersecurity & Compliance */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-800">
              HIPAA Cybersecurity & Risk Assessments
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              With healthcare data breaches costing an average of $11M in 2025/2026, compliance is no longer optional. We implement military-grade cybersecurity protocols that safeguard Protected Health Information (PHI) and fully satisfy HHS and OCR audit requirements.
            </p>
            <div className="p-4 bg-rose-50/50 border border-rose-100 rounded-xl flex gap-3 items-start">
              <AlertTriangle className="w-5 h-5 text-rose-600 mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="font-bold text-rose-900 text-sm">Critical Redesign Advisory</h5>
                <p className="text-xs text-rose-800 mt-0.5 leading-relaxed">
                  Your new website should feature a dedicated security framework page showing SOC 2 compliance badges, Business Associate Agreement (BAA) standards, and end-to-end encryption certifications to establish instant trust.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <Card className="border-border shadow-md">
              <CardHeader className="bg-slate-50 border-b border-border">
                <CardTitle className="text-sm font-bold text-primary">Cybersecurity Core Stack</CardTitle>
                <CardDescription className="text-xs">Security protocols implemented for all NDE commercial clients.</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-3">
                <div className="p-3 border border-border rounded-lg bg-white flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-800">Data Encryption</span>
                  <span className="text-slate-500">AES-256 (At Rest & In Transit)</span>
                </div>
                <div className="p-3 border border-border rounded-lg bg-white flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-800">Access Controls</span>
                  <span className="text-slate-500">Multi-Factor Authentication (MFA)</span>
                </div>
                <div className="p-3 border border-border rounded-lg bg-white flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-800">Risk Assessment</span>
                  <span className="text-slate-500">Annual HHS SRA Audits</span>
                </div>
                <div className="p-3 border border-border rounded-lg bg-white flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-800">Network Defense</span>
                  <span className="text-slate-500">Intrusion Detection & Prevention (IDS/IPS)</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
