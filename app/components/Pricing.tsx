export default function Pricing() {
  const plans = [
    {
      name: "Silver",
      tagline: "Start your journey",
      price: "Gh 50",
      period: "per cycle",
      gradient: "from-slate-100 to-slate-50",
      accentColor: "text-slate-500",
      borderColor: "border-slate-200",
      badgeBg: "bg-slate-100 text-slate-500",
      iconBg: "bg-slate-100",
      iconColor: "text-slate-500",
      checkColor: "text-slate-400",
      limits: [
        { icon: "group", label: "2 Pool Groups" },
        { icon: "savings", label: "3 Personal Vaults" },
        { icon: "schedule_send", label: "Auto Contributions" },
        { icon: "notifications_active", label: "Smart Reminders" },
      ],
      isPopular: false,
    },
    {
      name: "Gold",
      tagline: "The community favourite",
      price: "Gh 100",
      period: "per cycle",
      gradient: "from-[#002B1B] to-[#004D31]",
      accentColor: "text-primary-fixed",
      borderColor: "border-primary/30",
      badgeBg: "bg-primary-fixed/20 text-primary-fixed",
      iconBg: "bg-primary-fixed/10",
      iconColor: "text-primary-fixed",
      checkColor: "text-primary-fixed",
      limits: [
        { icon: "group", label: "3 Pool Groups" },
        { icon: "savings", label: "5 Personal Vaults" },
        { icon: "schedule_send", label: "Auto Contributions" },
        { icon: "notifications_active", label: "Smart Reminders" },
        { icon: "gavel", label: "Early Payout Bid" },
      ],
      isPopular: true,
    },
    {
      name: "Platinum",
      tagline: "Built for scale",
      price: "Gh 500",
      period: "per cycle",
      gradient: "from-[#D4AF37]/10 to-[#F3CF65]/5",
      accentColor: "text-gold",
      borderColor: "border-gold/30",
      badgeBg: "bg-gold/10 text-gold-dark",
      iconBg: "bg-gold/10",
      iconColor: "text-gold-dark",
      checkColor: "text-gold",
      limits: [
        { icon: "group", label: "5 Pool Groups" },
        { icon: "savings", label: "10 Personal Vaults" },
        { icon: "schedule_send", label: "Auto & Reminders" },
        { icon: "manage_accounts", label: "Pool Moderation" },
        { icon: "gavel", label: "Early Payout Bid" },
      ],
      isPopular: false,
    },
  ];

  return (
    <section className="relative py-36 bg-[#f4f7f5] overflow-hidden" id="plans">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] blur-[120px] opacity-30"
          style={{ background: "radial-gradient(ellipse, #00a86b 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop relative z-10">
        {/* Header */}
        <div className="text-center mb-24 space-y-5">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/8 border border-primary/15">
            <span className="material-symbols-outlined text-primary text-base">workspace_premium</span>
            <span className="font-headline text-xs font-black uppercase tracking-[0.18em] text-primary">
              Simple Pricing
            </span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black text-on-surface tracking-tight">
            Choose your plan
          </h2>
          <p className="text-on-surface-variant text-lg font-body max-w-md mx-auto">
            Every tier unlocks automated savings and community trust tools.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const isDark = plan.isPopular;
            return (
              <div
                key={index}
                className={`
                  relative rounded-[2.5rem] p-8 md:p-10
                  bg-gradient-to-br ${plan.gradient}
                  border ${plan.borderColor}
                  transition-all duration-500 group
                  ${isDark
                    ? "scale-[1.04] shadow-2xl shadow-primary/30 z-10"
                    : "shadow-md hover:shadow-xl hover:-translate-y-2"
                  }
                `}
              >
                {/* Popular badge */}
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="flex items-center gap-2 bg-primary-fixed text-deep-emerald px-5 py-1.5 rounded-full shadow-lg">
                      <span
                        className="material-symbols-outlined text-sm"
                        style={{ fontVariationSettings: '"FILL" 1' }}
                      >
                        star
                      </span>
                      <span className="font-headline text-xs font-black uppercase tracking-widest">
                        Most Popular
                      </span>
                    </div>
                  </div>
                )}

                {/* Tier badge + icon */}
                <div className="flex items-center justify-between mb-8">
                  <span
                    className={`px-4 py-1.5 rounded-full text-xs font-headline font-black uppercase tracking-widest ${plan.badgeBg}`}
                  >
                    {plan.name}
                  </span>
                  <div
                    className={`w-11 h-11 rounded-2xl ${plan.iconBg} flex items-center justify-center ${plan.iconColor}`}
                  >
                    <span className="material-symbols-outlined text-xl">workspace_premium</span>
                  </div>
                </div>

                {/* Tagline */}
                <p
                  className={`font-body text-sm font-medium mb-4 ${
                    isDark ? "text-white/50" : "text-on-surface-variant"
                  }`}
                >
                  {plan.tagline}
                </p>

                {/* Price */}
                <div className="mb-10">
                  <div className="flex items-end gap-2">
                    <span
                      className={`font-headline text-5xl font-black leading-none ${
                        isDark ? "text-white" : "text-on-surface"
                      }`}
                    >
                      {plan.price}
                    </span>
                  </div>
                  <p
                    className={`font-body text-sm mt-2 ${
                      isDark ? "text-white/40" : "text-on-surface-variant/70"
                    }`}
                  >
                    {plan.period}
                  </p>
                </div>

                {/* Divider */}
                <div
                  className={`h-px mb-8 ${
                    isDark ? "bg-white/10" : "bg-on-surface/8"
                  }`}
                />

                {/* Feature list */}
                <ul className="space-y-4">
                  {plan.limits.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-4">
                      <div
                        className={`w-9 h-9 rounded-xl ${plan.iconBg} flex items-center justify-center flex-shrink-0 ${plan.iconColor}`}
                      >
                        <span className="material-symbols-outlined text-base">{feat.icon}</span>
                      </div>
                      <span
                        className={`font-body text-sm font-medium ${
                          isDark ? "text-white/80" : "text-on-surface"
                        }`}
                      >
                        {feat.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA note */}
        <p className="text-center text-on-surface-variant/60 text-sm font-body mt-16">
          All plans include end-to-end encryption, 24/7 monitoring, and zero setup fees.
          <a href="#contact" className="text-primary font-bold ml-1 hover:underline">
            Talk to us
          </a>{" "}
          for custom enterprise tiers.
        </p>
      </div>
    </section>
  );
}
