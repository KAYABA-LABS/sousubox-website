import Image from "next/image";

export default function Features() {
  const checklists = [
    { label: "Real Time Pool Statistics", icon: "bar_chart" },
    { label: "Automatic Payouts & Contributions", icon: "payments" },
    { label: "Join Pools Easily", icon: "group_add" },
    { label: "Invite friends, gain reputation", icon: "stars" },
  ];

  const mechanisms = [
    {
      title: "Multiple Saving Vaults",
      description: "Create multiple savings vaults for different goals. Keep your finances organized and track progress for each goal separately.",
      icon: "savings",
    },
    {
      title: "Smart Reminders",
      description: "Get notified before payments, contributions, and payouts.",
      icon: "notifications_active",
    },
    {
      title: "Simple Payments Options",
      description: "Make deposit and withdrawal easy with mobile money, reduce friction and increase participation.",
      icon: "phone_in_talk",
    },
    {
      title: "Seamless Verification",
      description: "Verify your identity with you device and build trust with your community. Increase credibility and reduce fraud.",
      icon: "verified",
    },
  ];

  return (
    <>
      {/* ── Solutions & Core Features ── */}
      <section
        className="relative py-36 overflow-hidden"
        id="solutions"
        style={{
          background:
            "linear-gradient(135deg, #002B1B 0%, #004D31 45%, #006d43 100%)",
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

        {/* Radial glows */}
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-primary-fixed/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-80px] left-[5%] w-[350px] h-[350px] rounded-full bg-[#D4AF37]/8 blur-[100px] pointer-events-none" />

        <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop relative z-10">
          {/* Section Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-white/10" />
            <span className="font-headline text-xs font-black uppercase tracking-[0.2em] text-primary-fixed/70">
              Features
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            {/* Left: Phone + Badge */}
            <div className="relative flex justify-center">
              {/* Soft halo */}
              <div className="absolute inset-0 bg-primary-fixed/5 rounded-[3rem] blur-3xl scale-90 pointer-events-none" />

              <div className="relative border-[#1a1a1a] bg-[#1a1a1a] border-[10px] rounded-[2.5rem] w-[260px] md:w-[300px] shadow-2xl">
                <div className="rounded-[1.8rem] overflow-hidden w-full">
                  <Image
                    className="w-full h-auto object-cover"
                    src="/app-mockup.jpg"
                    alt="SusuBox App – Market Women Circle"
                    width={0}
                    height={0}
                    sizes="(max-width: 768px) 260px, 300px"
                  />
                </div>
              </div>

              {/* Yield Badge */}
              <div
                className="absolute -top-6 -right-4 md:-right-8 hidden sm:block animate-bounce"
                style={{ animationDuration: "4s" }}
              >
                <div className="flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-md border border-white/20">
                  <div className="w-10 h-10 bg-primary-fixed/20 rounded-xl flex items-center justify-center text-primary-fixed">
                    <span className="material-symbols-outlined text-xl">trending_up</span>
                  </div>
                  <div>
                    <p className="font-headline text-[10px] text-white/50 font-bold uppercase tracking-widest">
                      Trust Score
                    </p>
                    <p className="font-headline text-2xl font-black text-primary-fixed leading-none">
                      +12.4%
                    </p>
                  </div>
                </div>
              </div>

              {/* Members badge */}
              {/* <div className="absolute -bottom-6 -left-4 md:-left-8 hidden sm:block">
                <div className="flex items-center gap-3 px-5 py-4 rounded-2xl shadow-xl bg-white/10 backdrop-blur-md border border-white/15">
                  <div className="flex -space-x-2">
                    {["A", "B", "C"].map((l, i) => (
                      <div
                        key={i}
                        className="w-7 h-7 rounded-full bg-primary flex items-center justify-center font-headline font-black text-white text-[10px] border-2 border-white/10"
                        style={{ zIndex: 3 - i }}
                      >
                        {l}
                      </div>
                    ))}
                  </div>
                  <p className="text-white/70 text-xs font-body">
                    <span className="text-white font-bold">12k+</span> members
                  </p>
                </div>
              </div> */}
            </div>

            {/* Right: Copy + Checklist */}
            <div className="space-y-12">
              <div className="space-y-5">
                <h2 className="font-headline text-4xl md:text-5xl font-black leading-tight text-white">
                  Powerful Features for{" "}
                  <span className="gold-text-gradient italic">Financial Freedom</span>
                </h2>
                <p className="text-white/60 text-lg font-body">
                  Every tool you need to manage collective wealth — automated, transparent, and trusted.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {checklists.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 group px-5 py-4 rounded-2xl bg-white/5 border border-white/8 hover:bg-white/10 hover:border-primary-fixed/30 transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-xl bg-primary-fixed/10 flex items-center justify-center text-primary-fixed flex-shrink-0 group-hover:bg-primary-fixed/20 transition-colors">
                      <span className="material-symbols-outlined text-base">{item.icon}</span>
                    </div>
                    <p className="font-body font-semibold text-white/80 text-sm group-hover:text-white transition-colors">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-primary-fixed text-deep-emerald px-8 py-4 rounded-2xl font-headline font-black hover:brightness-110 transition-all shadow-lg group"
              >
                Get Early Access
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ROSCA Savings Circle Mechanisms ── */}
      <section className="py-32 bg-white">
        <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            {/* Left: Heading */}
            <div className="space-y-12">
              <div className="space-y-4">
                <p className="font-headline text-xs uppercase tracking-[0.2em] font-black text-gold">
                  NOT JUST ANOTHER APP.
                </p>
                <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-black text-deep-emerald leading-tight">
                  Built for real savings circles.
                </h2>
                <p className="text-on-surface-variant font-body text-base leading-relaxed">
                  Purpose-built mechanics that keep communities honest, automated, and on track.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 max-w-md">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#006d43]/40 to-[#59de9b]/20" />
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#59de9b]/40 to-[#9ef4d0]/20" />
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#D4AF37]/40 to-[#F3CF65]/20" />
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#003321]/40 to-[#006d43]/20" />
              </div>
            </div>

            {/* Right: Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mechanisms.map((mech, index) => (
                <div
                  key={index}
                  className="space-y-4 p-8 rounded-[2rem] bg-surface-container-lowest border border-outline-variant/5 hover:border-primary/20 hover:savio-shadow transition-all group duration-300"
                >
                  <div className="w-12 h-12 bg-primary/8 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                    <span className="material-symbols-outlined">{mech.icon}</span>
                  </div>
                  <h4 className="font-headline font-bold text-lg text-on-surface">{mech.title}</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed font-body">
                    {mech.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="mt-16 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300 font-headline"
            >
              See all features
              <span className="material-symbols-outlined">chevron_right</span>
            </a>
          </div> */}
        </div>
      </section>
    </>
  );
}
