"use client";

import { useState } from "react";
import { IconPlus } from "@tabler/icons-react";
import { Reveal } from "@/components/site/Reveal";

const QUESTIONS = [
  {
    q: "How do I get started on Myntle?",
    a: "Create an account with a passkey or a web3 wallet in under 30 seconds.",
  },
  {
    q: "Does Myntle ever hold my keys or my funds?",
    a: "No, the application never receives a private key and never holds a balance.",
  },
  {
    q: "What happens if a trade does not fill?",
    a: "Funds stay in your account until execution. If a trade fails, nothing is deducted.",
  },
  {
    q: "What does the assistant actually see?",
    a: "It sees the conversation and the public sources it reads, but never your private keys, authentication details, or other sensitive information.",
  },
];

export function Questions() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="scroll-mt-24 border-t border-line"
      aria-labelledby="faq-title"
    >
      <div className="mx-auto grid w-full max-w-[1120px] grid-cols-1 items-center gap-10 px-6 py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)] lg:gap-16 lg:px-8 lg:py-24">
        <Reveal>
          <div className="max-w-[460px]">
            <h2
              id="faq-title"
              className="text-[clamp(1.5rem,2.6vw,1.75rem)] font-semibold leading-[1.25] tracking-[-0.02em] text-ink"
            >
              Before you connect a wallet, here is what happens.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
        <div className="grid border-t border-line">
          <div className="col-start-1 row-start-1">
            {QUESTIONS.map((item, index) => {
              const open = openIndex === index;
              const buttonId = `question-${index}-button`;
              const panelId = `question-${index}-panel`;

              return (
                <div key={item.q} className="border-b border-line">
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() =>
                      setOpenIndex((current) =>
                        current === index ? null : index,
                      )
                    }
                    className="flex w-full items-center justify-between gap-4 py-4 text-left text-[14px] font-medium text-ink"
                  >
                    {item.q}
                    <IconPlus
                      size={15}
                      stroke={2}
                      className={`shrink-0 text-ink-2 transition-transform duration-200 motion-reduce:transition-none ${
                        open ? "rotate-45" : ""
                      }`}
                      aria-hidden
                    />
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    aria-hidden={!open}
                    className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="max-w-[46ch] pb-4 text-[13.5px] leading-[1.65] text-ink-2">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Reserved height: the list keeps the height of its tallest answer
              so opening or closing a question never moves the section. */}
          <div aria-hidden className="invisible col-start-1 row-start-1">
            {QUESTIONS.map((item) => (
              <div key={item.q} className="border-b border-line">
                <div className="flex w-full items-center justify-between gap-4 py-4 text-left text-[14px] font-medium text-ink">
                  {item.q}
                  <IconPlus
                    size={15}
                    stroke={2}
                    className="shrink-0 text-ink-2"
                  />
                </div>
              </div>
            ))}
            <div className="grid">
              {QUESTIONS.map((item) => (
                <p
                  key={item.q}
                  className="col-start-1 row-start-1 max-w-[46ch] pb-4 text-[13.5px] leading-[1.65] text-ink-2"
                >
                  {item.a}
                </p>
              ))}
            </div>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
