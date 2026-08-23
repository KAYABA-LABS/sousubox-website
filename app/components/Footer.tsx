export default function Footer() {
  const links = {
    Product: [ "How It Works", "Roadmap"],
    Company: ["About Us", "Careers" ],
    // Community: ["Blog", "Forum", "Events", "Ambassadors"],
    Legal: ["Privacy Policy", "Terms of Service"],
  };

  return (
    <footer className="bg-[#002B1B] text-white py-24 relative overflow-hidden">
      <div className="organic-blob w-[400px] h-[400px] bg-primary/10 -bottom-10 -right-20" />

      <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
        {/* Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 pb-16 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-8">
            <span className="font-headline text-3xl font-extrabold tracking-tighter text-white">
              Sousu<span className="gold-text-gradient font-black">Box</span>
            </span>
            <p className="text-white/60 text-sm md:text-base leading-relaxed font-body max-w-xs">
              Transforming a traditional saving model into a digital, effortless experience
              that enforces trust with communities.
            </p>
            {/* Social Icons */}
            {/* <div className="flex gap-4">
              {["twitter", "linkedin", "facebook", "instagram"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="w-11 h-11 rounded-xl bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300 text-white/60 hover:text-white"
                >
                  <span className="material-symbols-outlined text-xl">link</span>
                </a>
              ))}
            </div> */}
          </div>

          {/* Link Columns */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section} className="space-y-6">
              <h4 className="font-headline text-sm font-black uppercase tracking-[0.15em] text-white/40">
                {section}
              </h4>
              <ul className="space-y-4 font-body">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 font-body text-sm">
          <p>© 2025 SousuBox. All rights reserved.</p>
          <p>Built with trust, for communities.</p>
        </div>
      </div>
    </footer>
  );
}
