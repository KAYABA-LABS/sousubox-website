"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  const perks = [
    { icon: "trending_up", label: "Weekly ROSCA insights" },
    { icon: "lock", label: "Early feature access" },
    { icon: "group", label: "Community spotlights" },
    { icon: "tips_and_updates", label: "Financial tips & guides" },
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-white">
      {/* Decorative blobs */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00a86b33 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none"
        style={{ background: "radial-gradient(circle, #D4AF3733 0%, transparent 70%)" }}
      />

      <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop relative z-10">
        <div className="relative bg-[#002B1B] rounded-[3.5rem] overflow-hidden shadow-2xl">
          {/* Inner decorative grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* Glowing orbs inside card */}
          <div className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full bg-primary/20 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[-60px] left-[10%] w-[300px] h-[300px] rounded-full bg-[#D4AF37]/10 blur-[80px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 p-12 md:p-20 items-center">
            {/* Left: Copy */}
            <div className="space-y-10">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-primary-fixed animate-pulse" />
                <span className="text-primary-fixed font-headline text-xs uppercase tracking-[0.15em] font-bold">
                  Stay Informed
                </span>
              </div>

              <h2 className="font-headline text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight">
                The insider's edge on{" "}
                <span className="gold-text-gradient italic">social finance.</span>
              </h2>

              <p className="text-white/60 text-lg font-body leading-relaxed max-w-md">
                Join 12,000+ members receiving curated insights on community savings,
                ROSCA trends, and SusuBox updates — every week, zero noise.
              </p>

              {/* Perks grid */}
              <div className="grid grid-cols-2 gap-5">
                {perks.map((perk) => (
                  <div key={perk.label} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-fixed group-hover:bg-primary group-hover:border-primary transition-all duration-300 flex-shrink-0">
                      <span className="material-symbols-outlined text-lg">{perk.icon}</span>
                    </div>
                    <span className="text-white/70 text-sm font-body font-medium">{perk.label}</span>
                  </div>
                ))}
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-4 pt-2">
                <div className="flex -space-x-3">
                  {["A", "B", "C", "D"].map((l, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full bg-primary border-2 border-[#002B1B] flex items-center justify-center font-headline font-black text-white text-xs"
                      style={{ zIndex: 4 - i }}
                    >
                      {l}
                    </div>
                  ))}
                </div>
                <p className="text-white/50 text-sm font-body">
                  <span className="text-white font-bold">12,000+</span> members already subscribed
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="relative">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-16 text-center space-y-6">
                  <div className="w-24 h-24 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center animate-bounce">
                    <span
                      className="material-symbols-outlined text-5xl text-primary-fixed"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      mark_email_read
                    </span>
                  </div>
                  <h3 className="font-headline text-2xl font-black text-white">You're in!</h3>
                  <p className="text-white/60 font-body text-sm max-w-xs">
                    Check your inbox to confirm your subscription. Welcome to the inner circle.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-primary-fixed text-sm font-headline font-bold hover:underline"
                  >
                    Subscribe another email →
                  </button>
                </div>
              ) : (
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2.5rem] p-8 md:p-12 space-y-8">
                  <div>
                    <h3 className="font-headline text-2xl font-black text-white mb-2">
                      Get the weekly digest
                    </h3>
                    <p className="text-white/50 text-sm font-body">
                      No spam. Unsubscribe at any time.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative group">
                      <span className="absolute left-5 top-1/2 -translate-y-1/2 material-symbols-outlined text-white/30 group-focus-within:text-primary-fixed transition-colors text-xl">
                        mail
                      </span>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (status === "error") setStatus("idle");
                        }}
                        placeholder="your@email.com"
                        className={`w-full bg-white/10 border ${
                          status === "error" ? "border-error" : "border-white/15"
                        } rounded-2xl pl-14 pr-6 py-5 text-white placeholder-white/30 outline-none focus:border-primary-fixed focus:bg-white/15 transition-all font-body text-base`}
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-error text-sm font-body font-medium pl-1">
                        Please enter a valid email address.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full bg-primary text-on-primary py-5 rounded-2xl font-headline font-black text-base hover:brightness-110 transition-all shadow-xl flex items-center justify-center gap-3 group disabled:opacity-60"
                    >
                      {status === "submitting" ? (
                        <>
                          <span className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                          Subscribing...
                        </>
                      ) : (
                        <>
                          Subscribe for Free
                          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                            arrow_forward
                          </span>
                        </>
                      )}
                    </button>
                  </form>

                  {/* Trust badges */}
                  <div className="flex items-center justify-center gap-6 pt-2 border-t border-white/10">
                    {[
                      { icon: "shield", label: "No spam" },
                      { icon: "lock", label: "Private" },
                      { icon: "cancel", label: "Unsubscribe anytime" },
                    ].map((badge) => (
                      <div key={badge.label} className="flex items-center gap-1.5 text-white/30">
                        <span className="material-symbols-outlined text-sm">{badge.icon}</span>
                        <span className="text-xs font-body">{badge.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
