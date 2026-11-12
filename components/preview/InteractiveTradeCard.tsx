"use client";

import { useEffect, useRef, useState } from "react";
import { TradeCard, type TradeState } from "@/components/preview/TradeCard";
import type { Swap } from "@/lib/swaps";

/** The hero's card: awaiting → Submitting → Executed, or Rejected. */
export function InteractiveTradeCard({
  className,
  swap,
  initialDetailsOpen = false,
}: {
  className?: string;
  swap?: Swap;
  initialDetailsOpen?: boolean;
}) {
  const [state, setState] = useState<TradeState>("awaiting");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  function approve() {
    if (state !== "awaiting") return;
    setState("submitting");
    timer.current = setTimeout(() => setState("executed"), 1400);
  }

  function reject() {
    if (state !== "awaiting") return;
    setState("rejected");
  }

  return (
    <TradeCard
      state={state}
      swap={swap}
      className={className}
      initialDetailsOpen={initialDetailsOpen}
      onApprove={approve}
      onReject={reject}
    />
  );
}
