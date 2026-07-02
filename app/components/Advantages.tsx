export default function Advantages() {
  const advantages = [
    {
      title: "REAL TIME TRACKING (FULL TRANSPARENCY)",
      description:
        "See exact statistics of what happening in your groups. Track contributions, payouts and progress at a glance.",
      icon: "monitoring",
      iconColor: "text-primary",
      iconBg: "bg-primary/5",
      hoverIconBg: "group-hover:bg-primary group-hover:text-on-primary",
      isPremium: false,
    },
    {
      title: "BUILD TRUST NETWORK (REPUTATION SCORE)",
      description:
        "Turn social activity into a powerful tool for building credit, helping you strengthen relationships and create meaningful impact.",
      icon: "verified_user",
      iconColor: "text-secondary",
      iconBg: "bg-secondary/5",
      hoverIconBg: "group-hover:bg-secondary group-hover:text-on-secondary",
      isPremium: true,
    },
    {
      title: "AUTOMATED PAYOUTS (RELIABLE 24/7)",
      description:
        "Payouts are sent automatically when cycle contributions are cleared. No chasing, No Drama.",
      icon: "payments",
      iconColor: "text-primary-container",
      iconBg: "bg-primary-container/10",
      hoverIconBg: "group-hover:bg-primary group-hover:text-on-primary",
      isPremium: false,
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
        <div className="text-center mb-24 space-y-6">
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-black text-on-surface">
            Why Communities Trust SusuBox
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg md:text-xl font-body">
            Engineered for security, built for social prosperity. Our features ensure every member succeeds.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {advantages.map((item, index) => (
            <div
              key={index}
              className={`glass-card p-10 rounded-[2.5rem] group hover:-translate-y-3 transition-all duration-500 bg-white shadow-sm relative overflow-hidden`}
            >
              {item.isPremium && (
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 rounded-bl-full" />
              )}
              
              <div
                className={`w-20 h-20 ${item.iconBg} rounded-full flex items-center justify-center mb-10 ${item.iconColor} ${item.hoverIconBg} transition-all`}
              >
                <span className="material-symbols-outlined text-4xl">{item.icon}</span>
              </div>
              
              <h3
                className={`font-headline text-lg md:text-xl font-bold mb-5 ${
                  item.isPremium ? "gold-text-gradient font-black" : "text-on-surface"
                }`}
              >
                {item.title}
              </h3>
              
              <p className="text-on-surface-variant leading-relaxed text-sm md:text-base font-body">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
