import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden dark-hero-bg">
      <div className="organic-blob w-[600px] h-[600px] bg-primary/20 -top-20 -left-20"></div>

      <div className="container-fluid mx-auto px-6 md:px-margin-desktop w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-24 pb-32">
        {/* Left Side: Copy */}
        <div className="space-y-10">
          <div className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full bg-white/5 border border-white/10">
            <span className="w-2.5 h-2.5 rounded-full bg-primary-fixed animate-pulse"></span>
            <span className="text-primary-fixed font-headline text-xs uppercase tracking-[0.15em] font-bold">
              The Next-Gen Financial Ecosystem
            </span>
          </div>

          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-white">
            Social finance made{" "}
            <span className="gold-text-gradient italic font-black">Simple,</span>
            <br />
            <span className="text-white/90 font-extrabold">save together,</span>
            <br />
            <span className="text-white/90 font-extrabold">thrive together.</span>
          </h1>

          <p className="text-lg text-white/70 max-w-lg leading-relaxed font-body">
            A community saving app that manages your savings, groups and network.
            Transforming a traditional saving model into a digital, effortless
            experience that enforces trust with communities.
          </p>

        <div className="flex flex-wrap gap-5 pt-2">
          <a
            href="https://app.sousubox.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-on-primary px-10 py-5 rounded-2xl font-headline font-bold hover:savio-shadow transition-all flex items-center gap-3 group shadow-2xl hover:bg-primary-container"
          >
            Get Early Access
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>

          <button className="bg-white/10 text-white px-10 py-5 rounded-2xl font-headline font-bold border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm">
            Get InTouch
          </button>
        </div>
        </div>

        {/* Right Side: Full image, no cropping, no phone frame */}
        <div className="relative w-full flex items-center justify-center">
          {/* Ambient glow layer */}
          <div className="absolute inset-0 rounded-[3rem] bg-primary/15 blur-3xl scale-95 pointer-events-none" />

          <div className="relative w-full lg:w-[115%] lg:-ml-[7.5%] h-full floating-anim">
            <Image
              src="/hero.png"
              alt="SousuBox App — community savings made simple"
              width={0}
              height={0}
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="w-full h-auto rounded-[3rem] shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="wave-divider">
        <svg
          data-name="Layer 1"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#F9F9FF"
          ></path>
        </svg>
      </div>
    </section>
  );
}
