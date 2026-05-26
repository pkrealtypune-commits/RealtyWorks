"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Upload, ArrowRight, CheckCircle2, AlertCircle, Building2 } from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  role: string;
  portfolio: string;
  experience: string;
}

export default function CareersPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    role: "Pre-Sales Relationship Manager",
    portfolio: "",
    experience: "1-3 Years",
  });

  const [resume, setResume] = useState<File | null>(null);
  const [status, setStatus] = useState<{ type: "idle" | "loading" | "success" | "error"; message: string }>({
    type: "idle",
    message: "",
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Focus shifted directly to Real Estate Sales Architecture positions
  const roles = [
    "Pre-Sales Relationship Manager",
    "Direct Sales & Closing Consultant",
    "Real Estate Investment Advisor",
    "CRM & Post-Sales Coordinator",
    "Business Development Head (Realty)",
  ];

  const experienceLevels = ["Fresher / Entry Level", "1-3 Years", "3-5 Years", "5+ Years"];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.size > 5 * 1024 * 1024) {
        setStatus({ type: "error", message: "File size must be under 5MB" });
        return;
      }
      setResume(selectedFile);
      setStatus({ type: "idle", message: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resume) {
      setStatus({ type: "error", message: "Please upload your resume / CV." });
      return;
    }

    setStatus({ type: "loading", message: "Submitting application..." });

    try {
      const data = new FormData();
      data.append("fullName", formData.fullName);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("role", formData.role);
      data.append("portfolio", formData.portfolio);
      data.append("experience", formData.experience);
      data.append("resume", resume);

      // Simulation timeline matching high-end async response architecture
      await new Promise((resolve) => setTimeout(resolve, 1800));
      
      setStatus({
        type: "success",
        message: "Application submitted successfully! Our realty talent acquisition division will analyze your profile and connect soon.",
      });
      
      setFormData({ fullName: "", email: "", phone: "", role: "Pre-Sales Relationship Manager", portfolio: "", experience: "1-3 Years" });
      setResume(null);
    } catch (err) {
      setStatus({ type: "error", message: "Something went wrong. Please try again or email us directly." });
    }
  };

  return (
    <main className="relative w-full min-h-screen bg-[#030712] text-white flex flex-col items-center justify-start select-none pt-24 pb-28 px-6 overflow-x-hidden">
      
      {/* Cinematic Studio Background Layers */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] animate-pulse duration-[8000ms]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-3xl w-full mx-auto relative z-10 flex flex-col">
        
        {/* Header Introduction Block */}
        <div className="text-center md:text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 shadow-xl">
            <Building2 className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 font-medium">Realty Sales Division</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Scale High-Value Real Estate <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
              With Our Closers Team.
            </span>
          </h1>
          <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed max-w-xl">
            We are looking for elite relationship builders, high-ticket closers, and strategic minds ready to dominate lead conversions across premium real estate projects.
          </p>
        </div>

        {/* Core Submission Interface Area */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-transparent border border-white/10 rounded-2xl p-6 md:p-10 relative overflow-hidden"
        >
          {status.type === "success" ? (
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center text-center py-12"
            >
              <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-6 stroke-[1.5]" />
              <h3 className="text-2xl font-bold mb-2">Application Received</h3>
              <p className="text-zinc-400 text-sm max-w-md font-light leading-relaxed mb-6">{status.message}</p>
              <button 
                onClick={() => setStatus({ type: "idle", message: "" })}
                className="px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs uppercase tracking-widest font-semibold transition-all duration-200"
              >
                Submit another application
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Full Name & Email Address */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Rishikesh Joshi"
                    className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 transition-all duration-200"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="sales@yourdomain.com"
                    className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Row 2: Phone Number & Portfolio Link (LinkedIn Preferred for Sales Specialists) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 transition-all duration-200"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold">LinkedIn Profile / Track Record</label>
                  <input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                    placeholder="https://linkedin.com/in/username"
                    className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Row 3: Target Role Selection & Experience Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold">Target Position</label>
                  <div className="relative">
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full bg-[#030712] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-indigo-500/50 appearance-none transition-all duration-200 cursor-pointer"
                    >
                      {roles.map((role) => (
                        <option key={role} value={role} className="bg-[#030712] text-white">{role}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-zinc-500 text-xs">▼</div>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold">Relevant Experience</label>
                  <div className="relative">
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full bg-[#030712] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-indigo-500/50 appearance-none transition-all duration-200 cursor-pointer"
                    >
                      {experienceLevels.map((level) => (
                        <option key={level} value={level} className="bg-[#030712] text-white">{level}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-zinc-500 text-xs">▼</div>
                  </div>
                </div>
              </div>

              {/* Document Area: Drag and Drop Resume Vault Layout */}
              <div className="flex flex-col space-y-2">
                <label className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold">Upload Resume / CV (PDF Under 5MB)</label>
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className={`border border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-200 flex flex-col items-center justify-center group ${
                    resume ? "border-indigo-500/50 bg-indigo-500/[0.02]" : "border-white/10 hover:border-white/20 bg-transparent"
                  }`}
                >
                  <input 
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                  />
                  <Upload className={`w-8 h-8 mb-3 transition-transform duration-200 group-hover:-translate-y-0.5 ${resume ? "text-indigo-400" : "text-zinc-500"}`} />
                  {resume ? (
                    <div className="text-sm font-medium text-zinc-200">
                      Selected: <span className="text-indigo-400 font-semibold">{resume.name}</span>
                    </div>
                  ) : (
                    <>
                      <p className="text-sm font-medium text-zinc-300">Click to attach document</p>
                      <p className="text-xs text-zinc-600 mt-1">PDF, DOCX variants accepted</p>
                    </>
                  )}
                </div>
              </div>

              {/* System Validation Error Messaging Banner */}
              {status.type === "error" && (
                <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <p>{status.message}</p>
                </div>
              )}

              {/* Main Call to Action Core Interaction Trigger */}
              <button
                type="submit"
                disabled={status.type === "loading"}
                className="w-full inline-flex items-center justify-center bg-white text-black px-6 py-4 rounded-xl font-bold text-[11px] uppercase tracking-widest transition-all duration-300 hover:bg-zinc-100 transform active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none shadow-xl gap-2 mt-4"
              >
                {status.type === "loading" ? "Processing Submission..." : "Submit Application"}
                <ArrowRight className="w-4 h-4" />
              </button>

            </form>
          )}
        </motion.div>
      </div>
    </main>
  );
}