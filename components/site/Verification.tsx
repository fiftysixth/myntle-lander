import { IconUser } from "@tabler/icons-react";
import { Chip } from "@/components/atoms/Chip";
import { ApprovalControl } from "@/components/site/ApprovalControl";
import { Reveal } from "@/components/site/Reveal";

const READ_TOOLS = [
  "get_wallet_balances",
  "get_supported_assets",
  "get_quote",
  "get_transaction_status",
  "get_transaction_history",
];

export function Verification() {
  return (
    <section
      className="border-t border-line bg-canvas"
      aria-labelledby="verification-title"
    >
      <div className="mx-auto grid w-full max-w-[1120px] grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,430px)] lg:gap-16 lg:px-8 lg:py-24">
        <Reveal>
        <div className="max-w-[560px]">
          <h2
            id="verification-title"
            className="text-[clamp(1.5rem,2.6vw,1.75rem)] font-semibold leading-[1.25] tracking-[-0.02em] text-ink"
          >
            The assistant proposes, and{" "}
            <span className="whitespace-nowrap">
              <span
                aria-hidden
                className="mr-1.5 inline-grid size-[1.06em] place-items-center rounded-full border border-line bg-inset align-middle"
              >
                <IconUser
                  className="size-[0.66em] text-ink-2"
                  stroke={1.8}
                />
              </span>
              you
            </span>{" "}
            decide.
          </h2>
          <p className="mt-5 max-w-[46ch] text-[13.5px] leading-[1.65] text-ink-2">
            The model can read balances and propose a trade, but it never sees
            your address, your keys, or your signature.
          </p>
        </div>
        </Reveal>

        <Reveal delay={100}>
        <div className="w-full overflow-hidden rounded-card bg-surface shadow-raised">
          <div className="border-b border-line px-4 py-3">
            <h3 className="text-[13px] font-semibold text-ink">
              The tools behind this swap
            </h3>
          </div>

          <ul className="divide-y divide-line">
            <li className="bg-inset px-4 py-2 text-[11.5px] font-medium text-ink-2">
              Read only
            </li>
            {READ_TOOLS.map((tool) => (
              <li key={tool} className="px-4 py-2.5">
                <Chip tone="neutral" className="text-[11.5px]">
                  {tool}
                </Chip>
              </li>
            ))}
            <li className="bg-inset px-4 py-2 text-[11.5px] font-medium text-ink-2">
              Approval
            </li>
            <li className="flex items-center justify-between gap-3 px-4 py-2.5">
              <Chip tone="neutral" className="text-[11.5px]">
                prepare_swap
              </Chip>
              <ApprovalControl />
            </li>
          </ul>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
