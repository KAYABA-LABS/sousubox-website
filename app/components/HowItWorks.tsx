"use client";

import { useState } from "react";

type Step = {
  num: number;
  title: string;
  desc?: string;
  icon: string;
};

type Flow = {
  id: string;
  tabLabel: string;
  title: string;
  badge: string;
  steps: Step[];
};

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<string>("rosca");

  const flows: Flow[] = [
    {
      id: "account",
      tabLabel: "Account Setup",
      title: "Account Setup",
      badge: "A",
      steps: [
        { num: 1, title: "Register account", desc: "Using your phone number", icon: "phone_android" },
        { num: 2, title: "Verify identity", desc: "KYC verification under 2 mins", icon: "verified" },
        { num: 3, title: "Follow friends & family", desc: "Build your trust contacts", icon: "group_add" },
      ],
    },
    {
      id: "rosca",
      tabLabel: "ROSCA Pools",
      title: "ROSCA Pools",
      badge: "B",
      steps: [
        { num: 1, title: "Discover available pools", desc: "Search trusted public circles", icon: "search" },
        { num: 2, title: "Join pool", desc: "Easily share links to join friends", icon: "link" },
        { num: 3, title: "Start saving", desc: "Schedule automatic contributions", icon: "savings" },
        { num: 4, title: "Collect payout", desc: "Rotational automatic direct deposits", icon: "payments" },
      ],
    },
    {
      id: "personal",
      tabLabel: "Personal Savings",
      title: "Personal Savings",
      badge: "C",
      steps: [
        { num: 1, title: "Time-lock save", desc: "Lock funds for 10 to 1,000 days", icon: "lock" },
        { num: 2, title: "Target save", desc: "Set daily, weekly, or monthly goals", icon: "track_changes" },
      ],
    },
  ];

  return (
    <section
      className="relative py-36 overflow-hidden"
      id="how-it-works"
      style={{
        background: "linear-gradient(135deg, #002B1B 0%, #004D31 50%, #006d43 100%)",
      }}
    >
      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Radial ambient glows */}
      <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] rounded-full bg-primary-fixed/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[5%] w-[400px] h-[400px] rounded-full bg-[#D4AF37]/8 blur-[110px] pointer-events-none" />

      <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop relative z-10">
        {/* Header Block */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10">
            <span className="material-symbols-outlined text-primary-fixed text-base animate-spin-slow">loop</span>
            <span className="font-headline text-xs font-black uppercase tracking-[0.18em] text-primary-fixed">
              Simple Flow
            </span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
            How It Works
          </h2>
          <p className="text-white/60 text-lg font-body max-w-lg mx-auto">
            Seamlessly transition to digital social finance. Click a flow below to see the interactive steps.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-white/5 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 shadow-lg">
            {flows.map((flow) => (
              <button
                key={flow.id}
                onClick={() => setActiveTab(flow.id)}
                className={`px-6 py-3 rounded-xl font-headline text-sm font-bold transition-all duration-300 ${
                  activeTab === flow.id
                    ? "bg-primary-fixed text-deep-emerald shadow-md scale-105"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {flow.tabLabel}
              </button>
            ))}
          </div>
        </div>

        {/* Active Tab Content */}
        <div className="max-w-3xl mx-auto">
          {flows.map((flow) => {
            if (flow.id !== activeTab) return null;
            return (
              <div
                key={flow.id}
                className="p-10 md:p-14 rounded-[3.5rem] bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-500 transform scale-100 relative overflow-hidden"
              >
                {/* Glowing subtle light behind card content */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-fixed/20 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center gap-6 mb-12">
                  <div className="w-16 h-16 rounded-full bg-primary-fixed text-deep-emerald flex items-center justify-center font-headline font-black text-2xl shadow-lg">
                    {flow.badge}
                  </div>
                  <h3 className="font-headline text-2xl md:text-3xl font-black text-white">
                    {flow.title}
                  </h3>
                </div>

                <div className="relative border-l border-white/10 pl-8 ml-8 space-y-12">
                  {flow.steps.map((step, sIdx) => (
                    <div key={sIdx} className="relative group flex items-start gap-4">
                      {/* Step Number Dot */}
                      <span className="absolute -left-[48px] top-1 w-9 h-9 rounded-full bg-deep-emerald text-primary-fixed border border-primary-fixed/30 flex items-center justify-center font-headline font-black text-xs shadow-md group-hover:scale-110 transition-transform">
                        {step.num}
                      </span>
                      
                      <div className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-primary-fixed flex-shrink-0 group-hover:bg-primary-fixed group-hover:text-deep-emerald transition-colors duration-300">
                        <span className="material-symbols-outlined text-lg">{step.icon}</span>
                      </div>

                      <div className="space-y-1">
                        <h4 className="font-headline text-lg font-bold text-white group-hover:text-primary-fixed transition-colors">
                          {step.title}
                        </h4>
                        {step.desc && (
                          <p className="text-sm font-body text-white/60">
                            {step.desc}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Side-by-Side Reference Preview on Big Screens (Visual Reference) */}
        {/* <div className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {flows.map((flow) => (
            <div
              key={flow.id}
              onClick={() => setActiveTab(flow.id)}
              className={`p-8 rounded-[2.5rem] shadow-lg cursor-pointer border hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between ${
                activeTab === flow.id
                  ? "bg-white/10 text-white border-primary-fixed/40 ring-4 ring-primary-fixed/20 scale-102"
                  : "bg-white/5 text-white/70 border-white/5 hover:border-white/15"
              }`}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-full bg-primary-fixed/15 text-primary-fixed flex items-center justify-center font-headline font-black text-lg">
                    {flow.badge}
                  </div>
                  <span className="material-symbols-outlined text-white/30 text-xl">flowsheet</span>
                </div>
                
                <h4 className="font-headline font-bold text-xl text-white">{flow.title}</h4>
                
                <ul className="space-y-3 font-body text-sm text-white/60">
                  {flow.steps.slice(0, 3).map((s, idx) => (
                    <li key={idx} className="flex gap-3 items-center">
                      <span className="text-primary-fixed/80 font-bold">{s.num}.</span>
                      <span className="truncate">{s.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8 pt-4 border-t border-white/10 text-xs font-bold font-headline flex items-center justify-between text-primary-fixed">
                <span>View Flow Details</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
