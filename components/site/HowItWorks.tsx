import { Composer } from "@/components/preview/Composer";
import { InteractiveTradeCard } from "@/components/preview/InteractiveTradeCard";
import { AppStatusPill } from "@/components/preview/AppStatusPill";
import { DetailRow } from "@/components/preview/DetailRow";
import { SWAPS } from "@/lib/swaps";
import { Reveal } from "@/components/site/Reveal";

function Visual({ children }: { children: React.ReactNode }) {
  return (
    <div className="dark flex min-h-[280px] w-full items-center justify-center rounded-window bg-canvas p-6">
      <div className="w-full max-w-[380px]">{children}</div>
    </div>
  );
}

function RecordVisual() {
  return (
    <div className="w-full overflow-hidden rounded-card bg-surface shadow-card">
      <div className="flex items-center justify-between gap-3 border-b border-line px-3.5 py-2.5">
        <span className="text-[12px] font-semibold text-ink">Details</span>
        <AppStatusPill tone="green">Executed</AppStatusPill>
      </div>
      <div className="px-3.5 py-2">
        <div className="grid grid-cols-[max-content_minmax(0,1fr)] items-baseline gap-x-3">
          <DetailRow label="Recipient">0x4849…34e7</DetailRow>
          <DetailRow label="Minimum received">20.005 SOL</DetailRow>
          <DetailRow label="Slippage">1.00%</DetailRow>
          <DetailRow label="Price held until">12:42:18</DetailRow>
        </div>
      </div>
    </div>
  );
}

const STEPS = [
  {
    index: "01",
    title: "You ask in your own words.",
    body: "Write the trade the way you would explain it to a person.",
    visual: (
      <Visual>
        <Composer
          compact
          placeholder="Ask for a trade, or ask what you hold"
          draft="Swap 1 ETH to SOL"
        />
      </Visual>
    ),
    reverse: false,
  },
  {
    index: "02",
    title: "You approve the trade.",
    body: "The amount, asset, destination, and expiry are bound to what you saw.",
    visual: (
      <Visual>
        <InteractiveTradeCard swap={SWAPS.ethToSol} />
      </Visual>
    ),
    reverse: true,
  },
  {
    index: "03",
    title: "The record tells you what happened.",
    body: "The assistant's account is not the evidence; the settlement record is.",
    visual: (
      <Visual>
        <RecordVisual />
      </Visual>
    ),
    reverse: false,
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 border-t border-line"
      aria-labelledby="how-it-works-title"
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 py-20 lg:px-8 lg:py-24">
        <Reveal>
          <h2
            id="how-it-works-title"
            className="max-w-[22ch] text-[clamp(1.5rem,2.6vw,1.75rem)] font-semibold leading-[1.25] tracking-[-0.02em] text-ink"
          >
            Every trade is a conversation, a signature, and a record.
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col gap-12">
          {STEPS.map((step, index) => (
            <Reveal key={step.index} delay={index * 70}>
              <article className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[minmax(0,480px)_minmax(0,1fr)] lg:gap-12">
                <div className={step.reverse ? "lg:order-2" : "lg:order-1"}>
                  {step.visual}
                </div>
                <div
                  className={`max-w-[440px] ${
                    step.reverse ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-[17px] font-normal text-ink-2">
                      {step.index}
                    </span>
                    <h3 className="text-[17px] font-semibold tracking-[-0.01em] text-ink">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-[13.5px] leading-[1.65] text-ink-2">
                    {step.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
