"use client";

import { useState } from "react";

type Step = {
  num: number;
  title: string;
  desc?: string;
};

type Flow = {
  id: string;
  tabLabel: string;
  title: string;
  badge: string;
  theme: "green" | "white";
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
      theme: "white",
      steps: [
        { num: 1, title: "Register account", desc: "Using your phone number" },
        { num: 2, title: "Verify identity", desc: "KYC verification under 2 mins" },
        { num: 3, title: "Follow friends & family", desc: "Build your trust contacts" },
      ],
    },
    {
      id: "rosca",
      tabLabel: "ROSCA Pools",
      title: "ROSCA Pools",
      badge: "B",
      theme: "green",
      steps: [
        { num: 1, title: "Discover available pools", desc: "Search trusted public circles" },
        { num: 2, title: "Join pool", desc: "Easily share links to join friends" },
        { num: 3, title: "Start saving", desc: "Schedule automatic contributions" },
        { num: 4, title: "Collect payout", desc: "Rotational automatic direct deposits" },
      ],
    },
    {
      id: "personal",
      tabLabel: "Personal Savings",
      title: "Personal Savings",
      badge: "C",
      theme: "white",
      steps: [
        { num: 1, title: "Time-lock save", desc: "Lock funds for 10 to 1,000 days" },
        { num: 2, title: "Target save", desc: "Set daily, weekly, or monthly goals" },
      ],
    },
  ];

  return (
    <section className="py-32 bg-surface-container-low" id="how-it-works">
      <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-black text-on-background">
            How It Works
          </h2>
          <p className="text-on-surface-variant text-lg font-body">
            Seamlessly transition to digital social finance. Click a flow below to see the steps.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-white/60 backdrop-blur-md p-1.5 rounded-2xl border border-outline-variant/10 shadow-sm">
            {flows.map((flow) => (
              <button
                key={flow.id}
                onClick={() => setActiveTab(flow.id)}
                className={`px-6 py-3 rounded-xl font-headline text-sm font-bold transition-all duration-300 ${
                  activeTab === flow.id
                    ? "bg-primary text-on-primary shadow-md scale-105"
                    : "text-on-surface-variant hover:text-primary hover:bg-primary/5"
                }`}
              >
                {flow.tabLabel}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="max-w-3xl mx-auto">
          {flows.map((flow) => {
            if (flow.id !== activeTab) return null;
            const isGreen = flow.theme === "green";
            return (
              <div
                key={flow.id}
                className={`p-10 md:p-12 rounded-[3rem] shadow-xl transition-all duration-500 transform scale-100 ${
                  isGreen
                    ? "bg-primary text-on-primary border border-primary-container/20"
                    : "bg-white text-on-surface border border-outline-variant/10"
                }`}
              >
                <div className="flex items-center gap-6 mb-10">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center font-headline font-black text-2xl shadow-md ${
                      isGreen ? "bg-white text-primary" : "bg-primary text-on-primary"
                    }`}
                  >
                    {flow.badge}
                  </div>
                  <h3 className="font-headline text-2xl md:text-3xl font-black">{flow.title}</h3>
                </div>

                <div className="relative border-l border-current/20 pl-8 ml-8 space-y-12">
                  {flow.steps.map((step, sIdx) => (
                    <div key={sIdx} className="relative group">
                      {/* Step Number Dot */}
                      <span
                        className={`absolute -left-[45px] top-1.5 w-8 h-8 rounded-full flex items-center justify-center font-headline font-black text-xs shadow-md border ${
                          isGreen
                            ? "bg-white text-primary border-primary"
                            : "bg-primary text-on-primary border-white"
                        }`}
                      >
                        {step.num}
                      </span>
                      <div className="space-y-1">
                        <h4 className="font-headline text-lg font-bold">{step.title}</h4>
                        {step.desc && (
                          <p
                            className={`text-sm font-body ${
                              isGreen ? "text-white/80" : "text-on-surface-variant"
                            }`}
                          >
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
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
          {flows.map((flow) => {
            const isGreen = flow.theme === "green";
            return (
              <div
                key={flow.id}
                onClick={() => setActiveTab(flow.id)}
                className={`p-8 rounded-[2.5rem] shadow-sm cursor-pointer border hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between ${
                  activeTab === flow.id
                    ? isGreen
                      ? "bg-primary text-on-primary border-transparent ring-4 ring-primary-fixed/30 scale-102"
                      : "bg-white text-on-surface border-primary ring-4 ring-primary/20 scale-102"
                    : isGreen
                    ? "bg-primary/80 text-on-primary border-transparent"
                    : "bg-white text-on-surface border-outline-variant/10"
                }`}
              >
                <div className="space-y-6">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-headline font-black text-lg ${
                      isGreen ? "bg-white text-primary" : "bg-primary text-on-primary"
                    }`}
                  >
                    {flow.badge}
                  </div>
                  <h4 className="font-headline font-bold text-xl">{flow.title}</h4>
                  <ul className="space-y-3 font-body text-sm">
                    {flow.steps.slice(0, 3).map((s, idx) => (
                      <li key={idx} className="flex gap-2 items-center">
                        <span className="opacity-60">{s.num}.</span>
                        <span className="truncate">{s.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-current/10 text-xs font-bold font-headline flex items-center justify-between">
                  <span>View Details</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
