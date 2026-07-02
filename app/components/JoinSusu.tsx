import Image from "next/image";

export default function JoinSusu() {
  const circles = [
    {
      id: "rotating",
      title: "Rotating Circles",
      badge: "Traditional Susu style",
      image: "/circle.png",
      description:
        "Take turns, win together. Here's how it works: a group of people agree on a fixed contribution — say GH ¢ 200 per week. Each week, every member contributes except the one whose turn it is to receive. That member gets the full pot amount. Next week, someone else receives. The cycle continues until everyone has had their turn. No banks. No interest. No debt. Just your community pooling resources so everyone gets a lump sum when they need it.",
      quote: "Adjoa got her payout in week 3 and finally took that trip home.",
      icon: "loop",
      gradient: "from-[#006d43] to-[#59de9b]",
    },
    {
      id: "target",
      title: "Target",
      badge: "Save toward a goal",
      image: "/target.png",
      description:
        "Set a savings goal. ¢ 25,000 for a wedding, ¢ 10,000 for a group vacation, ¢ 7,000 for an emergency fund. Contributes on a schedule: weekly, biweekly, or monthly. Track your progress in real time as the goal gets closer. When the target is reached, the funds are available for transfer to your checking account. The full amount is yours. No interest. No debt. Just disciplined saving toward something that matters.",
      quote: "Was able to fund the wedding of our dreams.",
      quoteAuthor: "Kojo",
      icon: "track_changes",
      gradient: "from-[#D4AF37] to-[#F3CF65]",
    },
    // {
    //   id: "community",
    //   title: "Community Fund",
    //   badge: "Ongoing support, full transparency",
    //   image: "/community.jpeg",
    //   description:
    //     "Built for communities that want to pool resources over time. Members contribute on a schedule. Anyone can donate through your shareable link — even people outside the circle. Every contribution is visible. Every disbursement is tracked. Add co-organizers to help manage. Support up to 200 members. The fund runs as long as you need it: for a neighborhood emergency fund, a mosque renovation, a school fundraiser, or anything your community cares about.",
    //   quote: "Our neighborhood fund helped 3 families this year alone.",
    //   icon: "diversity_3",
    //   gradient: "from-[#003321] to-[#006d43]",
    // },
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden" id="join-susu">
      <div className="organic-blob w-[600px] h-[600px] bg-primary/5 -left-40 top-20 blur-[150px]" />
      <div className="organic-blob w-[400px] h-[400px] bg-gold/5 right-0 bottom-0 blur-[120px]" />

      <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-28">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/5 border border-primary/10">
            <span className="material-symbols-outlined text-primary text-base">groups</span>
            <span className="font-headline text-xs font-black uppercase tracking-[0.18em] text-primary">
              Join Susu.
            </span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black text-on-surface leading-tight">
            Where saving together <br />
            <span className="gold-text-gradient italic">actually works.</span>
          </h2>
          <p className="text-on-surface-variant text-lg md:text-xl font-body max-w-2xl mx-auto">
            Three circles. Endless possibilities.
          </p>
        </div>

        {/* Circles */}
        <div className="space-y-32">
          {circles.map((circle, index) => (
            <div
              key={circle.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Image Column */}
              <div
                className={`relative flex justify-center ${
                  index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="relative w-full max-w-md">
                  {/* Decorative halo */}
                  <div className="absolute inset-0 bg-primary-fixed/5 rounded-[3rem] blur-3xl scale-90 pointer-events-none" />

                  {/* Card Image */}
                  <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3] ring-1 ring-primary/20">
                    <Image
                      src={circle.image}
                      alt={circle.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Green gradient overlay for color consistency */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-primary/5 to-transparent pointer-events-none" />
                    {/* Bottom accent bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-fixed via-primary to-primary-fixed" />
                  </div>

                  {/* Floating badge */}
                  <div
                    className={`absolute -bottom-4 -right-4 hidden sm:block ${
                      index % 2 === 1 ? "lg:-left-4 lg:-right-auto" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2 px-4 py-3 rounded-2xl shadow-xl bg-white/90 backdrop-blur-md border border-white/80">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      <span className="font-headline text-xs font-bold text-deep-emerald">
                        {circle.badge}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Content Column */}
              <div
                className={`space-y-8 ${
                  index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10">
                    <span className="material-symbols-outlined text-primary text-sm">
                      {circle.icon}
                    </span>
                    <span className="font-headline text-xs font-black uppercase tracking-[0.15em] text-primary">
                      {circle.badge}
                    </span>
                  </div>
                  <h3 className="font-headline text-3xl md:text-4xl font-black text-on-surface">
                    {circle.title}
                  </h3>
                </div>

                <p className="text-on-surface-variant font-body text-base md:text-lg leading-relaxed">
                  {circle.description}
                </p>

                {/* Quote */}
                {/* <div className="relative pl-8 border-l-4 border-primary/30 py-2">
                  <span className="absolute -top-1 left-2 material-symbols-outlined text-primary/20 text-4xl">
                    format_quote
                  </span>
                  <p className="font-headline text-lg font-bold text-on-surface italic relative z-10">
                    &ldquo;{circle.quote}&rdquo;
                  </p>
                  {circle.quoteAuthor && (
                    <p className="font-headline text-sm font-bold text-primary mt-2">
                      — {circle.quoteAuthor}
                    </p>
                  )}
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-primary text-on-primary px-10 py-5 rounded-2xl font-headline font-black text-lg hover:brightness-110 transition-all shadow-xl group"
          >
            Start Your Circle
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
          <p className="text-on-surface-variant/60 text-sm font-body mt-5">
            No banks. No interest. No debt. Just your community.
          </p>
        </div>
      </div>
    </section>
  );
}
