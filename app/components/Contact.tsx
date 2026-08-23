"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section className="py-32 bg-[#F9F9FF]" id="contact">
      <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* Left Column: Heading and Details */}
        <div className="space-y-10">
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-black text-on-surface">
            Join the Future of <br />
            <span className="text-primary font-black">Social Finance</span>
          </h2>
          <p className="text-on-surface-variant text-lg font-body leading-relaxed max-w-lg">
            Have questions about setting up a pool for your organization? Our experts are here to help.
          </p>
          <div className="space-y-8 font-body">
            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm border border-outline-variant/10 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                <span className="material-symbols-outlined text-3xl">mail</span>
              </div>
              <div>
                <p className="font-headline font-black text-on-surface text-base">Email Us</p>
                <a
                  href="mailto:infos@sousubox.com"
                  className="text-on-surface-variant hover:text-primary transition-colors font-medium text-sm md:text-base"
                >
                  infos@sousubox.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Card */}
        <div className="glass-card p-8 md:p-12 rounded-[3.5rem] bg-white shadow-2xl relative border border-outline-variant/10">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-12 text-center space-y-6 animate-fade-in">
              <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center shadow-md animate-bounce">
                <span className="material-symbols-outlined text-5xl font-black">done</span>
              </div>
              <h3 className="font-headline text-2xl font-black text-on-surface">Message Sent!</h3>
              <p className="text-on-surface-variant max-w-sm font-body">
                Thank you for reaching out. A SousuBox community representative will contact you shortly.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="bg-primary text-on-primary px-8 py-3 rounded-xl font-headline font-bold text-sm shadow-md hover:brightness-110 transition-all"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="font-headline text-xs text-on-surface-variant uppercase tracking-widest font-black">
                    First Name
                  </label>
                  <input
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full bg-surface-container-low border border-outline-variant/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary outline-none transition-all font-medium text-on-surface"
                    placeholder="John"
                    type="text"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label className="font-headline text-xs text-on-surface-variant uppercase tracking-widest font-black">
                    Last Name
                  </label>
                  <input
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full bg-surface-container-low border border-outline-variant/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary outline-none transition-all font-medium text-on-surface"
                    placeholder="Doe"
                    type="text"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="font-headline text-xs text-on-surface-variant uppercase tracking-widest font-black">
                  Work Email
                </label>
                <input
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-surface-container-low border border-outline-variant/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary outline-none transition-all font-medium text-on-surface"
                  placeholder="john@company.com"
                  type="email"
                  required
                />
              </div>
              <div className="space-y-3">
                <label className="font-headline text-xs text-on-surface-variant uppercase tracking-widest font-black">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-surface-container-low border border-outline-variant/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary outline-none transition-all font-medium text-on-surface"
                  placeholder="How can we help your community?"
                  rows={4}
                  required
                />
              </div>
              
              {status === "error" && (
                <p className="text-error font-body text-sm font-bold">
                  Please fill out all required fields.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-primary text-on-primary py-5 rounded-2xl font-headline font-black text-lg hover:savio-shadow transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {status === "submitting" ? (
                  <>
                    <span className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
