export default function Journey() {
  const steps = [
    {
      number: 1,
      title: "Create Your Profile",
      description: "Download the app and set up your secure account in under 2 minutes.",
    },
    {
      number: 2,
      title: "Join or Create a Pool",
      description: "Connect with trusted friends or join verified public savings circles.",
    },
    {
      number: 3,
      title: "Watch Your Wealth Grow",
      description: "Automated contributions and payouts ensure your goals are always met.",
    },
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="organic-blob w-[500px] h-[500px] bg-primary/5 -right-20 -top-20 blur-[120px]" />
      
      <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Left Column: Copy & Steps */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-black text-on-surface">
                Your Path to <br />
                <span className="text-primary font-black">Prosperity</span>
              </h2>
              <p className="text-on-surface-variant text-lg font-body max-w-lg">
                We've simplified the journey to financial freedom into three effortless steps.
              </p>
            </div>
            
            <div className="space-y-10">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary text-on-primary rounded-full flex items-center justify-center font-headline font-black text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-headline font-bold text-xl text-on-surface">
                      {step.title}
                    </h4>
                    <p className="text-on-surface-variant leading-relaxed text-sm md:text-base font-body">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Dashboard Mockup */}
          <div className="relative flex justify-center">
            <div className="relative border-gray-800 bg-gray-800 border-[14px] rounded-[3rem] h-[550px] md:h-[650px] w-[270px] md:w-[320px] shadow-2xl floating-anim">
              <div className="rounded-[2.2rem] md:rounded-[2.5rem] overflow-hidden w-full h-full bg-white animate-pulse-slow">
                <img
                  alt="SousuBox App Dashboard"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZylr6XOeRgf75cYDdYi56yHD0BiH0LXynYOblY2buNPy8V_Ue1jyfen4Ipk5J5S1WtTUQPS6HI6ntoo4Ki5ZglSKIJeuGRmKRdAJsF7P7xQRmMM1yHb3yJDwqGu18TE1WPNUcAJTLgY3oNAvOh3GZwnOVYbyCK92w8zXKgJ9ZSmew_JPAjwq1hYOS-NsuqrG1wc0ZCchYfRPhMRhuVJcl0_7kwMUfSlVFpYH3gztQNP7g0VrIwqwr0v_zwXlkM1wB3Z8V826tyz_n"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="absolute -bottom-10 -left-10 bg-primary/10 w-40 h-40 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
