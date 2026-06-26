export default function Testimonials() {
  const reviews = [
    {
      text: "SusuBox is the most robust implementation of ROSCA I've seen in any fintech app. The automation layer is flawless.",
      name: "Alex Thompson",
      role: "Fintech Consultant",
      isFeatured: false,
    },
    {
      text: "The reputation score system is revolutionary. It finally brings the trust of village saving groups to the global digital stage.",
      name: "Sarah Mensah",
      role: "Venture Partner",
      isFeatured: true,
    },
    {
      text: "Managing family savings used to be a headache. Now, SusuBox handles the reminders and payouts automatically. Incredible.",
      name: "Dr. James Boateng",
      role: "Community Advocate",
      isFeatured: false,
    },
  ];

  return (
    <section className="py-32 bg-[#F9F9FF]" id="testimonials">
      <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
        <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-black text-center mb-24 text-on-surface">
          Voices from the Community
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`glass-card p-12 rounded-[3rem] bg-white flex flex-col justify-between transition-all duration-300 ${
                review.isFeatured
                  ? "border-2 border-primary relative shadow-xl scale-105 z-10"
                  : "border-outline-variant/5 shadow-sm hover:border-primary/20"
              }`}
            >
              {review.isFeatured && (
                <div className="absolute -top-4 right-10">
                  <span className="bg-primary text-on-primary px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                    Featured Review
                  </span>
                </div>
              )}
              
              <div>
                {/* Stars */}
                <div className="flex gap-1 text-[#D4AF37] mb-8 select-none">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined font-black"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      star
                    </span>
                  ))}
                </div>
                
                <p className="text-on-surface-variant mb-10 text-base md:text-lg leading-relaxed italic font-body">
                  "{review.text}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-outline-variant/10 pt-6">
                <div className="w-12 h-12 rounded-full bg-surface-dim flex items-center justify-center font-headline font-bold text-primary bg-primary/10 select-none">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-headline font-black text-on-surface text-base">{review.name}</p>
                  <p className="font-headline text-xs text-on-surface-variant font-bold">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
