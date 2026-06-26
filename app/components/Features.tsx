export default function Features() {
  const checklists = [
    "Multiple Saving Vaults",
    "Real Time Pool Statistics",
    "Automatic Payouts & Contributions",
    "Easy payment options with MOMO",
    "Seamless Verification Process",
    "Join Pools Easily",
    "Invite friends, gain reputation",
  ];

  const mechanisms = [
    {
      title: "Auto-Pay",
      description: "Set it once. Contributions happen on schedule, automatically.",
      icon: "schedule_send",
    },
    {
      title: "Smart Reminders",
      description: "Get notified before payments, contributions, and payouts.",
      icon: "notifications_active",
    },
    {
      title: "Shared Slots",
      description: "Split a payout position with another member. Two people, one slot, shared payout.",
      icon: "group_work",
    },
    {
      title: "Position Swap",
      description: "Need your payout earlier? Request a swap with another member easily.",
      icon: "swap_horiz",
    },
  ];

  return (
    <>
      {/* Solutions & Core Features */}
      <section className="py-32 relative overflow-hidden bg-surface-container-low" id="solutions">
        <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            {/* Left Phone Mockup with Overlay */}
            <div className="relative group flex justify-center">
              <div className="absolute -inset-16 bg-primary/5 rounded-full blur-[120px] -z-10 group-hover:scale-110 transition-transform duration-700"></div>
              
              <div className="relative border-gray-800 bg-gray-800 border-[12px] md:border-[14px] rounded-[2.5rem] h-[500px] md:h-[600px] w-[260px] md:w-[300px] shadow-2xl">
                <div className="rounded-[1.8rem] md:rounded-[2rem] overflow-hidden w-full h-full bg-white">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMI5EbUkEwkRlpOotJww8f2op9bE9DH7RrPYS9Tyekvp_vfFW-kf0Q3Tu74eq2poL9pgWWwKAYRCjhryFJIE9O09Y3jT59vhP5GRMk6AWWWYJQ8muOjgnp9JBFwDdnJIMKwWlZaorsy-Ig4QFgamquy-m5QcDj7EDi3wTj912DKlsrAya7rfdw5L5lc4a8ZiBSNBtGdU0CY43mcFEfqhTbS_8belLkK5N9fxijChkuactvTs2rRlM0uvm39FZ1vO1l0xedS5i0YDKM"
                    alt="SusuBox Features Mockup"
                    loading="lazy"
                  />
                </div>
              </div>
              
              {/* Bouncing Badge */}
              <div
                className="absolute -top-6 -right-4 md:-right-10 hidden sm:block animate-bounce"
                style={{ animationDuration: "4s" }}
              >
                <div className="glass-card px-6 md:px-8 py-4 md:py-5 rounded-3xl shadow-2xl border border-white/50 bg-white/70">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-xl md:text-2xl">trending_up</span>
                    </div>
                    <div>
                      <p className="font-headline text-[10px] md:text-xs text-on-surface-variant font-bold">
                        Annual Yield
                      </p>
                      <p className="font-headline text-xl md:text-2xl font-black text-primary leading-none">
                        +12.4%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Checklist */}
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-on-background">
                  Powerful Features for <br />
                  <span className="text-primary font-black">Financial Freedom</span>
                </h2>
                <p className="text-on-surface-variant text-lg font-body">
                  Every tool you need to manage collective wealth successfully.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-body">
                {checklists.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <span className="material-symbols-outlined text-primary text-xl select-none">
                      check_circle
                    </span>
                    <p className="font-bold text-on-surface text-base">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROSCA Savings Circle Mechanisms */}
      <section className="py-32 bg-white">
        <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            {/* Left Column: Heading and Image Grid */}
            <div className="space-y-12">
              <div className="space-y-4">
                <p className="font-headline text-xs uppercase tracking-[0.2em] font-black text-[#D4AF37]">
                  NOT JUST ANOTHER APP.
                </p>
                <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-black text-deep-emerald leading-tight">
                  Built for real savings circles.
                </h2>
              </div>
              
              {/* Graphic Grids representing community trust */}
              <div className="grid grid-cols-2 gap-4 max-w-md">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#006d43]/40 to-[#59de9b]/20" />
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#59de9b]/40 to-[#9ef4d0]/20" />
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#D4AF37]/40 to-[#F3CF65]/20" />
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#003321]/40 to-[#006d43]/20" />
              </div>
            </div>

            {/* Right Column: Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mechanisms.map((mech, index) => (
                <div
                  key={index}
                  className="space-y-4 p-8 rounded-[2rem] bg-surface-container-lowest border border-outline-variant/5 hover:savio-shadow transition-all group duration-300"
                >
                  <div className="w-12 h-12 bg-secondary-container/30 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-all">
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
          
          <div className="mt-16 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300 font-headline"
            >
              See all features
              <span className="material-symbols-outlined">chevron_right</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
