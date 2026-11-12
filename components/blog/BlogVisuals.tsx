import Image from "next/image";
import { Chip } from "@/components/atoms/Chip";
import { TokenChip } from "@/components/finance/TokenChip";
import {
  AppStatusPill,
  type AppStatusTone,
} from "@/components/preview/AppStatusPill";

const READ_TOOLS = [
  "get_wallet_balances",
  "get_supported_assets",
  "get_quote",
  "get_transaction_status",
  "get_transaction_history",
];

const REBUILD_STEPS = [
  {
    title: "The assistant proposes",
    body: "It returns the trade as a sentence with an amount and a pair.",
  },
  {
    title: "The server rebuilds it",
    body: "Amount, asset, destination, and slippage come from the stored quote.",
  },
  {
    title: "You approve the card",
    body: "The approval is bound to the parameters you saw.",
  },
  {
    title: "The wallet signs",
    body: "The signature happens outside the model's reach.",
  },
];

const PROOF_ROWS = [
  { what: "The wallet signed", proves: "A request was authorised." },
  { what: "The response was 200", proves: "A service accepted something." },
  { what: "The assistant said so", proves: "A model produced text." },
];

const TIMELINE = [
  "Quoted",
  "Approved",
  "Submitted",
  "Deposit confirmed",
  "Processing",
  "Settled",
];

const OUTCOMES: Array<{
  label: string;
  tone: AppStatusTone;
  body: string;
}> = [
  { label: "Executed", tone: "green", body: "The swap filled." },
  {
    label: "Refunded",
    tone: "neutral",
    body: "The deposit is on its way back.",
  },
  {
    label: "Failed",
    tone: "red",
    body: "Settlement failed on chain.",
  },
];

const WALLETS = [
  {
    chain: "EVM",
    icon: "/wallets/evm.webp",
    names: "MetaMask · Coinbase · Rainbow · Rabby",
  },
  {
    chain: "Solana",
    icon: "/wallets/solana.webp",
    names: "Phantom · Solflare · Backpack",
  },
  {
    chain: "NEAR",
    icon: "/wallets/near.webp",
    names: "NEAR Wallet · HOT · Meteor",
  },
];

export function SwapToolsVisual() {
  return (
    <div className="overflow-hidden rounded-card bg-surface shadow-card">
      <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
        <p className="text-[12.5px] font-semibold text-ink">The swap path</p>
        <span className="text-[11.5px] text-ink-2">Five reads, one proposal</span>
      </div>

      <p className="bg-inset px-4 py-2 text-[11px] font-medium text-ink-2">
        Read only
      </p>
      <div className="grid grid-cols-1 gap-2 p-4 sm:grid-cols-2">
        {READ_TOOLS.map((tool) => (
          <Chip key={tool} className="justify-self-start text-[11.5px]">
            {tool}
          </Chip>
        ))}
      </div>

      <div className="border-t border-line px-4 pb-4 pt-3">
        <p className="text-[11px] font-medium text-ink-2">Approval</p>
        <div className="mt-2 flex items-center justify-between gap-3">
          <Chip className="text-[11.5px]">prepare_swap</Chip>
          <span className="text-[11.5px] text-ink-2">
            Waits for your approval
          </span>
        </div>
      </div>
    </div>
  );
}

export function RebuildVisual() {
  return (
    <div className="overflow-hidden rounded-card bg-surface shadow-card">
      <div className="border-b border-line px-4 py-3">
        <p className="text-[12.5px] font-semibold text-ink">
          From sentence to signature
        </p>
      </div>

      <ol className="divide-y divide-line">
        {REBUILD_STEPS.map((step, index) => (
          <li
            key={step.title}
            className="grid grid-cols-[24px_minmax(0,1fr)] gap-3 px-4 py-3"
          >
            <span className="text-[11px] font-medium tabular-nums text-ink-3">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="text-[12.5px] font-medium text-ink">{step.title}</p>
              <p className="mt-0.5 text-[12px] leading-relaxed text-ink-2">
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function ProofVisual() {
  return (
    <div className="overflow-hidden rounded-card bg-surface shadow-card">
      <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-4 border-b border-line bg-inset px-4 py-2 text-[11px] font-medium text-ink-2">
        <span>What happened</span>
        <span>What it proves</span>
      </div>

      <div className="divide-y divide-line">
        {PROOF_ROWS.map((row) => (
          <div
            key={row.what}
            className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-4 px-4 py-3"
          >
            <span className="text-[12.5px] font-medium text-ink">
              {row.what}
            </span>
            <span className="text-[12px] leading-relaxed text-ink-2">
              {row.proves}
            </span>
          </div>
        ))}
      </div>

      <p className="border-t border-line px-4 py-2.5 text-[11.5px] leading-relaxed text-ink-2">
        None of these is a settlement.
      </p>
    </div>
  );
}

export function SettlementTimeline() {
  return (
    <div className="overflow-hidden rounded-card bg-surface shadow-card">
      <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
        <p className="text-[12.5px] font-semibold text-ink">
          The record&apos;s timeline
        </p>
        <span className="text-[11.5px] text-ink-2">Read from settlement</span>
      </div>

      <div className="flex flex-wrap items-center gap-2 p-4">
        {TIMELINE.map((step, index) => (
          <span key={step} className="inline-flex items-center gap-2">
            {index > 0 ? (
              <span aria-hidden className="text-[12px] text-ink-3">
                →
              </span>
            ) : null}
            <AppStatusPill tone={step === "Settled" ? "green" : "neutral"}>
              {step}
            </AppStatusPill>
          </span>
        ))}
      </div>
    </div>
  );
}

export function OutcomesVisual() {
  return (
    <div className="overflow-hidden rounded-card bg-surface shadow-card">
      <p className="border-b border-line px-4 py-3 text-[12.5px] font-semibold text-ink">
        Three outcomes the record can report
      </p>
      <div className="divide-y divide-line">
        {OUTCOMES.map((outcome) => (
          <div
            key={outcome.label}
            className="flex items-start gap-3 px-4 py-3"
          >
            <AppStatusPill tone={outcome.tone} className="mt-0.5">
              {outcome.label}
            </AppStatusPill>
            <p className="text-[12px] leading-relaxed text-ink-2">
              {outcome.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function WalletsVisual() {
  return (
    <div className="overflow-hidden rounded-card bg-surface shadow-card">
      <div className="border-b border-line px-4 py-3">
        <p className="text-[12.5px] font-semibold text-ink">
          The same intent on every chain
        </p>
        <p className="mt-0.5 text-[11.5px] leading-relaxed text-ink-2">
          The signer changes; the trade and the record do not.
        </p>
      </div>

      <div className="divide-y divide-line">
        {WALLETS.map((row) => (
          <div
            key={row.chain}
            className="grid grid-cols-[20px_minmax(0,1fr)] gap-3 px-4 py-3"
          >
            <Image
              src={row.icon}
              alt=""
              width={20}
              height={20}
              className="mt-0.5 size-5 rounded-full object-contain"
            />
            <div>
              <p className="text-[12.5px] font-medium text-ink">{row.chain}</p>
              <p className="mt-0.5 text-[12px] leading-relaxed text-ink-2">
                {row.names}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function IdentityVisual() {
  const assets = [
    { chain: "Base", address: "0x8335…2913" },
    { chain: "Solana", address: "EPjF…Dt1v" },
  ];

  return (
    <div className="overflow-hidden rounded-card bg-surface shadow-card">
      <div className="border-b border-line px-4 py-3">
        <p className="text-[12.5px] font-semibold text-ink">
          The ticker is not the asset
        </p>
        <p className="mt-0.5 text-[11.5px] leading-relaxed text-ink-2">
          The same symbol can point at two contracts on two chains.
        </p>
      </div>

      <div className="divide-y divide-line">
        {assets.map((asset) => (
          <div
            key={asset.chain}
            className="flex items-center justify-between gap-3 px-4 py-3"
          >
            <span className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-ink">
              <TokenChip symbol="USDC" iconSize={16} /> on {asset.chain}
            </span>
            <span className="text-[11.5px] tabular-nums text-ink-2">
              {asset.address}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
