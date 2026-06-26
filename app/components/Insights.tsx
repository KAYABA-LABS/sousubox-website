export default function Insights() {
  const articles = [
    {
      type: "image",
      title: "The Evolution of ROSCA in the Digital Age",
      category: "Strategy",
      imgUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD9uX9LWF8kD5jvHfS5IFr5lbOP6zJHoIOzpCVEIqtoMZBsXVhpvaYa-vr89fUFo73dJObOV7jAGx9lBMaSywcc1Xf4fG8cj2h80T7aNBPA2PXq84Qb-mkhAJTlyKbrInFz5EiGFsDscLm0KT17-85TuiJ1-MHGz9It43v9AcA2Q-TZsbdcDWpb12Xr1ajmaORCSTUdbK869oysE2bvHfUzKRLTC6BxSWSDG7XdIOCQeMj-WWZMnnTwRNxyqKiMzJ0-5g69gjWRMjxy",
    },
    {
      type: "image",
      title: "How Reputation Scores Prevent Default Risks",
      category: "Security",
      imgUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCcwZ_Rep4i-aQPhlIIaYkPjPBzyDwjSJ4rs3n77aMBHSFbpQV8ieSlq4VSWFPj-4aSWwZZdYqRkXW3DHgG1q1LyUR-VzTJpHcL6Ib1Y2JzZE04ApiW5otNHgjTXLn3qhivtE7Y6OYPU7VgJCLjyHw8d7FWQWlI_CPhhkfUyUYeu8qVSAo9o0eoZyvOzX3hq40D6LiCGu6XYhyr6FdriVl-0MAu48Z4U2lEjMNgjSPsLpO3TCVa4rckNr6jJd5H_TtpRwm49j8R1uwI",
    },
    {
      type: "image",
      title: "Building Trust-Based Networks Online",
      category: "Community",
      imgUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDlcPECXZbFjOu3PPjQ170FWt5g1Mm2SfT42aMlCcOqG4i28l_Z01SAQ95QA2L1Rk23BLtDscssMWhLhCEch3RytNxSInhcEeaNzJzQAgb1QL8c9ldAuS6zGtSZjNrOtd9nkJEf0CFKjkymSBCK_MFao2xyMZa5tN-Nnw4TfGZDwvtpg7OwxLj2FVzsfzgLMMClxz2F32H2ISwdw2WwJ6vNi07oUKysMWu2O9kH9ElF9gTVdcqLEco8j0knvLaPsvVH3O7XA29kwIwM",
    },
    {
      type: "image",
      title: "ROSCA vs Traditional Bank Loans",
      category: "Finance",
      imgUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAOm0lNvbVe8_IFWahMw17-2ncLtldbYO8yArEpIDPw8vDvf_3eX0KrHUkMs4UJaqdZOfykWI8BKcIvL1veG9X192QRiJ2x-s2_g6xP7I1HbDrabaJFJN04_MRaF3tuWQa6SSrnQ0B2fgrFMAGIJhi4NXEMeBNHOWYdC1mdEzOxRJI3O3ahpX85tJgTwVbLSscoz2qFV04NFbLBVZ1gHnXFVc0ED0VXUeW8iZYSIvQ31poS1LtyupHFxy2BjuLDYNFAA_Ia7o1ecHI",
    },
    {
      type: "icon",
      title: "Maximizing Returns in Your Savings Circle",
      category: "Tips",
      icon: "savings",
    },
    {
      type: "icon",
      title: "The Benefits of Time-Lock Savings",
      category: "Guides",
      icon: "lock",
    },
    {
      type: "icon",
      title: "How to Scale Your Community Saving Group",
      category: "Growth",
      icon: "group_add",
    },
    {
      type: "icon",
      title: "KYC Verification: Protecting Your Pool",
      category: "Security",
      icon: "verified",
    },
  ];

  return (
    <section className="py-32 bg-white" id="articles">
      <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-24 gap-8">
          <div className="text-center md:text-left">
            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-on-background">
              Financial Growth Insights
            </h2>
            <p className="text-on-surface-variant text-lg font-body">
              Expert articles on ROSCA and collective wealth.
            </p>
          </div>
          <button className="bg-primary/5 text-primary px-8 py-4 rounded-2xl font-headline font-bold flex items-center gap-3 group hover:bg-primary hover:text-on-primary transition-all duration-300">
            View All Articles
            <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform duration-300">
              trending_flat
            </span>
          </button>
        </div>

        {/* Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((art, index) => {
            if (art.type === "image") {
              return (
                <div key={index} className="group cursor-pointer">
                  <div className="aspect-video rounded-[2rem] overflow-hidden mb-6 bg-surface-container shadow-sm border border-outline-variant/10">
                    <img
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      src={art.imgUrl}
                      alt={art.title}
                      loading="lazy"
                    />
                  </div>
                  <p className="text-primary font-headline font-bold text-xs uppercase tracking-widest mb-3">
                    {art.category}
                  </p>
                  <h4 className="font-headline font-black text-lg leading-tight text-on-surface group-hover:text-primary transition-colors">
                    {art.title}
                  </h4>
                </div>
              );
            } else {
              return (
                <div key={index} className="group cursor-pointer">
                  <div className="aspect-video rounded-[2rem] overflow-hidden mb-6 bg-surface-container border border-outline-variant/10 shadow-sm transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary/5">
                    <div className="w-full h-full bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                      <span className="material-symbols-outlined text-4xl">{art.icon}</span>
                    </div>
                  </div>
                  <p className="text-primary font-headline font-bold text-xs uppercase tracking-widest mb-3">
                    {art.category}
                  </p>
                  <h4 className="font-headline font-black text-lg leading-tight text-on-surface group-hover:text-primary transition-colors">
                    {art.title}
                  </h4>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}
