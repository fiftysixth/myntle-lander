import { Reveal } from "@/components/site/Reveal";

type Quarter = {
  quarter: string;
  current?: boolean;
  features?: string[];
  note?: string;
};

const QUARTERS: Quarter[] = [
  {
    quarter: "Q4 2026",
    current: true,
    features: [
      "Initial MVP",
      "Create an account with a passkey",
      "Bring an EVM, Solana, or NEAR wallet",
      "Balances, watchlist, and history",
    ],
  },
  {
    quarter: "Q1 2027",
    features: [
      "Passkey management",
      "Payroll and periodic payments",
      "Automatic trades within your limits",
    ],
  },
  {
    quarter: "Q2 2027",
    features: ["Copy other users' trades", "In-app usernames"],
  },
  {
    quarter: "Q3 2027",
    note: "Plans underway",
  },
];

export function Roadmap() {
  return (
    <section
      id="roadmap"
      className="scroll-mt-24 border-t border-line"
      aria-labelledby="roadmap-title"
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 py-20 lg:px-8 lg:py-24">
        <Reveal>
          <div className="max-w-[560px]">
            <h2
              id="roadmap-title"
              className="text-[clamp(1.5rem,2.6vw,1.75rem)] font-semibold leading-[1.25] tracking-[-0.02em] text-ink"
            >
              Roadmap
            </h2>
            <p className="mt-4 max-w-[46ch] text-[13.5px] leading-[1.65] text-ink-2">
              Several features are live today, and much more is on the way.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 lg:mt-14">
            <div className="flex pb-3">
              <span className="inline-flex h-6 items-center rounded-full bg-green-tint px-2.5 text-[12px] font-medium leading-none text-green">
                Current
              </span>
            </div>

            <div className="md:border-t md:border-line">
              <div className="grid grid-cols-1 gap-y-10 md:grid-cols-4 md:gap-x-8 md:gap-y-0">
                {QUARTERS.map((item, index) => {
                  const headingId = `roadmap-quarter-${index}`;

                  return (
                    <div
                      key={item.quarter}
                      className="relative border-t border-line pt-8 md:border-t-0"
                    >
                      {index > 0 ? (
                        <span
                          aria-hidden
                          className="pointer-events-none absolute inset-y-0 -left-4 hidden w-px md:block"
                          style={{
                            backgroundImage:
                              "repeating-linear-gradient(to bottom, var(--line-strong) 0, var(--line-strong) 3px, transparent 3px, transparent 9px)",
                          }}
                        />
                      ) : null}

                      <div
                        className={`inline-flex h-11 items-center rounded-card px-4 text-[13px] font-medium tracking-[-0.01em] ${
                          item.current ? "text-ink" : "bg-ink text-canvas"
                        }`}
                        style={
                          item.current
                            ? {
                                backgroundColor:
                                  "color-mix(in oklch, var(--attention) 22%, var(--surface))",
                              }
                            : undefined
                        }
                      >
                        <h3
                          id={headingId}
                          className="whitespace-nowrap leading-none tabular-nums"
                        >
                          {item.quarter}
                        </h3>
                      </div>

                      {item.note ? (
                        <p className="mt-6 text-[12.5px] leading-[1.5] text-ink-3">
                          {item.note}
                        </p>
                      ) : (
                        <ul
                          aria-labelledby={headingId}
                          className="mt-6 flex flex-col gap-2.5"
                        >
                          {item.features?.map((feature) => (
                            <li
                              key={feature}
                              className={`flex gap-2.5 text-[12.5px] leading-[1.5] ${
                                item.current ? "text-ink" : "text-ink-2"
                              }`}
                            >
                              <span
                                aria-hidden
                                className="mt-[0.55em] size-1 shrink-0 rounded-full bg-ink-3"
                              />
                              <span
                                className={
                                  item.current ? "font-medium" : undefined
                                }
                              >
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
