import React, { useState } from "react";
import Layout from "../components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Shield, CheckCircle, ArrowRight, UserCheck } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Consultation request submitted! We will contact you shortly.");
  };

  return (
    <Layout>
      <div className="bg-slate-50/50 py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold tracking-wide">
              <Calendar className="w-3.5 h-3.5" /> Direct Conversion Channel
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-primary">
              Schedule a Discovery Call
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Skip the generic contact forms. Book a free 15-minute technical consultation with our senior healthcare IT advisory team to audit your system security and interoperability.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-800">
            What to Expect on Your Discovery Call
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We respect your time. Our discovery calls are strictly educational, designed to provide immediate technical value rather than a high-pressure sales pitch.
          </p>

          <div className="space-y-4">
            <div className="flex gap-4 items-start p-4 border border-border rounded-xl bg-white shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-800 text-sm">1. Brief System Overview (5 Mins)</h4>
                <p className="text-xs text-muted-foreground">We review your current EHR platform, cloud infrastructure, and any active technical pain points.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-4 border border-border rounded-xl bg-white shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
                <Shield className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-800 text-sm">2. Compliance & Security Check (5 Mins)</h4>
                <p className="text-xs text-muted-foreground">We analyze potential HIPAA or federal contracting (NIST/CMMC) vulnerabilities in your setup.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-4 border border-border rounded-xl bg-white shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-800 text-sm">3. Actionable Next Steps (5 Mins)</h4>
                <p className="text-xs text-muted-foreground">We map out a custom high-level roadmap to secure your data pipelines and maximize system uptime.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <Card className="border-border shadow-lg">
            <CardHeader className="bg-slate-50 border-b border-border">
              <CardTitle className="text-lg font-bold text-primary flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" /> Book Consultation Slot
              </CardTitle>
              <CardDescription className="text-xs">
                Submit your details below to request a direct callback from a senior consultant.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 block">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe" 
                        required
                        className="w-full border border-border rounded-lg p-2.5 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 block">Work Email</label>
                      <input 
                        type="email" 
                        placeholder="jdoe@clinic.org" 
                        required
                        className="w-full border border-border rounded-lg p-2.5 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 block">Preferred Date</label>
                      <input 
                        type="date" 
                        required
                        className="w-full border border-border rounded-lg p-2.5 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 block">Time Zone</label>
                      <select 
                        required
                        className="w-full border border-border rounded-lg p-2.5 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option value="EST">Eastern Time (EST)</option>
                        <option value="CST">Central Time (CST)</option>
                        <option value="MST">Mountain Time (MST)</option>
                        <option value="PST">Pacific Time (PST)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block">Brief System Description</label>
                    <textarea 
                      placeholder="e.g., We are migrating our clinical database to Azure and require secure HIPAA pipeline consulting."
                      rows={3}
                      className="w-full border border-border rounded-lg p-2.5 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                    ></textarea>
                  </div>

                  <button type="submit" className="cursor-pointer w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-lg py-3 text-sm flex justify-center items-center gap-2 transition-all">
                    <Calendar className="w-4 h-4" /> Request Call Slot
                  </button>
                </form>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-slate-800 text-base">Request Submitted!</h4>
                    <p className="text-xs text-muted-foreground max-w-xs mx-auto">
                      Thank you for your interest. A senior technical advisor will review your system notes and contact you within 24 business hours to confirm your consultation slot.
                    </p>
                  </div>
                  <button onClick={() => setSubmitted(false)} className="cursor-pointer text-xs text-primary font-bold hover:underline">
                    Submit Another Request
                  </button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
