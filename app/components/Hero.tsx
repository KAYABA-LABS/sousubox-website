export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden dark-hero-bg">
      <div className="organic-blob w-[600px] h-[600px] bg-primary/20 -top-20 -left-20"></div>
      
      <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-24 pb-32">
        {/* Left Side: Copy */}
        <div className="space-y-10">
          <div className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full bg-white/5 border border-white/10">
            <span className="w-2.5 h-2.5 rounded-full bg-primary-fixed animate-pulse"></span>
            <span className="text-primary-fixed font-headline text-xs uppercase tracking-[0.15em] font-bold">
              The Next-Gen Financial Ecosystem
            </span>
          </div>
          
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-white">
            Social finance made <span className="gold-text-gradient italic font-black">Simple,</span>
            <br />
            <span className="text-white/90 font-extrabold">save together,</span>
            <br />
            <span className="text-white/90 font-extrabold">thrive together.</span>
          </h1>
          
          <p className="text-lg text-white/70 max-w-lg leading-relaxed font-body">
            A community saving app that manages your savings, groups and network. Transforming a traditional saving model into a digital, effortless experience that enforces trust with communities.
          </p>
          
          <div className="flex flex-wrap gap-5 pt-2">
            <button className="bg-primary text-on-primary px-10 py-5 rounded-2xl font-headline font-bold hover:savio-shadow transition-all flex items-center gap-3 group shadow-2xl hover:bg-primary-container">
              Get Started Free
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
            <button className="bg-white/10 text-white px-10 py-5 rounded-2xl font-headline font-bold border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm">
              View Demo
            </button>
          </div>
        </div>

        {/* Right Side: Floating Devices */}
        <div className="relative h-[550px] lg:h-[650px] flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center gap-4 md:gap-8 pt-10">
            {/* Left Phone */}
            <div
              className="relative w-[180px] sm:w-[220px] md:w-[240px] floating-anim z-10 hidden sm:block"
              style={{ animationDelay: "-2s" }}
            >
              <div className="relative mx-auto border-gray-800 bg-gray-800 border-[10px] md:border-[12px] rounded-[2rem] md:rounded-[2.5rem] h-[360px] sm:h-[440px] md:h-[480px] w-full shadow-xl">
                <div className="rounded-[1.5rem] md:rounded-[2rem] overflow-hidden w-full h-full bg-white">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu0kBfizZK6HSPOpFssEVIP5FPOtyoKRIeCwW4bCQBMoIl0gO_hwQ136H6CRjhlXhdf_DkmJAEgj2Z0wodaLQigWvt1MS8kJkwJcpzZeBbOZ5Z7NbHzUQH8AN4eyzZ8grxiHZE3g066ZDcTrqkqEIukXfI10A-5DiNSKWl9mjkVXbrdeaI450ewXNXngYJ4CXZOsNXZBBdywi-POhJqWFnc8Rvct0fw8baBy7HLlf5B5THm7G7E8gV-UKXocSOWOuKtIvY7qEuDLmK"
                    alt="SusuBox App Left Screen"
                    loading="eager"
                  />
                </div>
              </div>
            </div>

            {/* Center Phone */}
            <div
              className="relative w-[200px] sm:w-[240px] md:w-[260px] floating-anim z-30"
              style={{ animationDelay: "-1s" }}
            >
              <div className="relative mx-auto border-gray-800 bg-gray-800 border-[12px] md:border-[14px] rounded-[2rem] md:rounded-[2.5rem] h-[400px] sm:h-[480px] md:h-[520px] w-full shadow-2xl">
                <div className="rounded-[1.5rem] md:rounded-[2rem] overflow-hidden w-full h-full bg-white">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9V6JXL_z4eNYkuSiSK6wtSraKcypcQfw_q8neaolop-4FPSDEDzd1Ra83HfksOx4bYOAD4RBQOnUMlNOaA1nRzVn16DYnaqCpePK3stZ4CJrE__wPq1McflPjVFEC__N-WCg2VhKG0jDI0MfZglJfI2wSM9OsmZ636Eo-VyV9NSbPRy-d1h3o-IRbS0ePMnog7sSW2tHpOE-lK6cmN8gXEWkGpP99DaDktl--2ALmRDm7wrOfuglAbw1j-5CrTX7XR47w8Te_cVuo"
                    alt="SusuBox App Center Screen"
                    loading="eager"
                  />
                </div>
              </div>
            </div>

            {/* Right Phone */}
            <div
              className="relative w-[180px] sm:w-[220px] md:w-[240px] floating-anim z-20 hidden md:block"
              style={{ animationDelay: "-3s" }}
            >
              <div className="relative mx-auto border-gray-800 bg-gray-800 border-[10px] md:border-[12px] rounded-[2rem] md:rounded-[2.5rem] h-[360px] sm:h-[440px] md:h-[480px] w-full shadow-xl">
                <div className="rounded-[1.5rem] md:rounded-[2rem] overflow-hidden w-full h-full bg-white">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxC15q8a2jTN7jR42ldULJYQXTEyE6el6c_WY477QyhjGkGopmEZ8D5uGkWpLTrTwUFsLTb3wCz71Kfunz8TM9K5B37CRHNoTvgHb73oWQcyGh1I_qrxy4qJ0wqsTOf5Tgu3oSoZyHBIHW-i_auI2YfOZjynfr67f4Dlz_YpkscNCYfNTeUP1yNvX9EuXw09btmDO25aV-BeGouTrb3KfcsEA5kl27EwyqfVhWRwuFMDsYXxLQajvKV8eLfKChFCVB5pZbWE6Zddz2"
                    alt="SusuBox App Right Screen"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
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
