import Image from "next/image";

export default function Problem() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-black text-primary">
            We've all been there.
          </h2>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto font-body">
            Tracking money between friends is awkward. It shouldn't disrupt or
            end relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Image */}
          <div className="relative flex justify-center">
            <div className="rounded-[2.5rem] overflow-hidden shadow-xl max-w-md lg:max-w-full">
              {/* <img
                scr="/frustrate.png"
                alt="Friends tracking money illustration"
                className="w-full h-auto object-cover"
                loading="lazy"
              /> */}

              <Image
                src="/frustrate.png"
                alt="SusuBox App — community savings made simple"
                width={0}
                height={0}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="w-full h-auto rounded-[3rem] shadow-md"
              />
            </div>
          </div>

          {/* Right Column: Chat Mockup */}
          <div className="space-y-6">
            <div className="glass-card p-8 rounded-[2.5rem] bg-white shadow-sm border border-outline-variant/10">
              <p className="font-headline text-xs text-on-surface-variant uppercase tracking-widest font-black mb-6">
                Group Chat
              </p>
              <div className="space-y-4 font-body">
                <div className="flex justify-start">
                  <div className="bg-surface-container-low px-6 py-3 rounded-2xl rounded-bl-none max-w-[80%] text-on-surface font-medium">
                    Did everyone contribute?
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-primary text-on-primary px-6 py-3 rounded-2xl rounded-br-none max-w-[80%] font-medium shadow-md">
                    I can't find the payment.
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-surface-container-low px-6 py-3 rounded-2xl rounded-bl-none max-w-[80%] text-on-surface font-medium">
                    Who's receiving the payout?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-surface-container-low px-6 py-3 rounded-2xl rounded-bl-none max-w-[80%] text-on-surface font-medium">
                    Can someone send the updated spreadsheet?
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <p className="font-headline text-2xl md:text-3xl font-black gold-text-gradient italic">
                Sound familiar?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
