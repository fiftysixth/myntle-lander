"use client";

import { useState } from "react";
import { IconLoader2 } from "@tabler/icons-react";
import { Button } from "@/components/atoms/Button";
import {
  AppStatusPill,
  type AppStatusTone,
} from "@/components/preview/AppStatusPill";
import { DetailRow } from "@/components/preview/DetailRow";
import {
  TokenChip,
  VenueChip,
} from "@/components/finance/TokenChip";
import { SWAPS, type Swap } from "@/lib/swaps";
import { cn } from "@/lib/utils";

export type TradeState =
  | "awaiting"
  | "submitting"
  | "executed"
  | "rejected"
  | "refunded"
  | "failed";

const STATE: Record<
  Exclude<TradeState, "awaiting">,
  { label: string; tone: AppStatusTone }
> = {
  submitting: { label: "Submitting", tone: "accent" },
  executed: { label: "Executed", tone: "green" },
  rejected: { label: "Rejected", tone: "red" },
  refunded: { label: "Refunded", tone: "neutral" },
  failed: { label: "Failed", tone: "red" },
};

function Amount({ children }: { children: React.ReactNode }) {
  return (
    <strong className="font-semibold tabular-nums text-ink">{children}</strong>
  );
}

/**
 * The app's sentence card. The drawer uses a grid-row transition so every
 * expansion animates the card's height instead of snapping the layout.
 */
export function TradeCard({
  state,
  swap = SWAPS.usdcToNear,
  className,
  initialDetailsOpen = false,
  onApprove,
  onReject,
}: {
  state: TradeState;
  swap?: Swap;
  className?: string;
  initialDetailsOpen?: boolean;
  onApprove?: () => void;
  onReject?: () => void;
}) {
  const [detailsOpen, setDetailsOpen] = useState(initialDetailsOpen);
  const terminal = state !== "awaiting" ? STATE[state] : null;
  const interactive = Boolean(onApprove && onReject);
  const loading = state === "submitting" && interactive;

  return (
    <div
      className={cn(
        "w-full max-w-[380px] overflow-hidden rounded-card bg-surface shadow-card",
        className,
      )}
    >
      <div className="px-3.5 py-3.5">
        <div
          data-sentence
          className="flex flex-wrap items-center gap-x-1.5 text-[15px] leading-[2] text-ink"
        >
          <span>Swap</span>
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
            <Amount>{swap.fromAmount}</Amount>
            <TokenChip symbol={swap.from} />
          </span>
          <span>for</span>
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
            <Amount>{swap.toAmount}</Amount>
            <TokenChip symbol={swap.to} />
          </span>
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
            <span>on</span>
            <VenueChip />
          </span>
        </div>
      </div>

      <div
        aria-hidden={!detailsOpen}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none",
          detailsOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="border-t border-line px-3.5 py-2">
            <div className="grid grid-cols-[max-content_minmax(0,1fr)] items-baseline gap-x-3">
              <DetailRow label="Recipient">0x4849…34e7</DetailRow>
              <DetailRow label="Minimum received">{swap.minimumReceived}</DetailRow>
              <DetailRow label="Slippage">1.00%</DetailRow>
              <DetailRow label="Price held until">12:42:18</DetailRow>
            </div>
          </div>
        </div>
      </div>

      <div className="flex min-h-[39px] items-center justify-between gap-3 px-2.5 py-1.5">
        <Button
          type="button"
          variant="secondary"
          size="sm"
          className="px-2.5 text-xs"
          aria-expanded={detailsOpen}
          onClick={() => setDetailsOpen((open) => !open)}
        >
          Details
        </Button>

        <span className="flex min-w-0 items-center gap-1.5" aria-live="polite">
          {loading ? (
            <>
              <Button type="button" variant="secondary" size="sm" disabled>
                Reject
              </Button>
              <Button
                type="button"
                variant="accent"
                size="sm"
                disabled
                className="gap-1.5 disabled:opacity-100"
              >
                <IconLoader2
                  size={13}
                  stroke={2}
                  className="animate-spin motion-reduce:animate-none"
                  aria-hidden
                />
                Approve
              </Button>
            </>
          ) : state === "awaiting" && interactive ? (
            <>
              <Button type="button" variant="secondary" size="sm" onClick={onReject}>
                Reject
              </Button>
              <Button type="button" variant="accent" size="sm" onClick={onApprove}>
                Approve
              </Button>
            </>
          ) : state === "awaiting" ? (
            <AppStatusPill tone="orange">Pending Approval</AppStatusPill>
          ) : (
            <AppStatusPill tone={terminal?.tone}>{terminal?.label}</AppStatusPill>
          )}
        </span>
      </div>
    </div>
  );
}
