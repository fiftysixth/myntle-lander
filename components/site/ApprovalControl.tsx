"use client";

import { useEffect, useState } from "react";
import { IconCheck } from "@tabler/icons-react";
import { Button } from "@/components/atoms/Button";

type Stage = "idle" | "granted" | "processing" | "complete";

const LABELS: Record<Exclude<Stage, "idle">, string> = {
  granted: "Approval granted.",
  processing: "Processing swap.",
  complete: "Swap complete.",
};

/**
 * The one write tool in the registry. Approving it runs the reader through
 * the same state sequence the product reports: approval, submission, and a
 * settled swap. Each label enters with a blur, and the final label is green.
 */
export function ApprovalControl() {
  const [stage, setStage] = useState<Stage>("idle");

  useEffect(() => {
    if (stage === "granted") {
      const timer = setTimeout(() => setStage("processing"), 900);
      return () => clearTimeout(timer);
    }
    if (stage === "processing") {
      const timer = setTimeout(() => setStage("complete"), 1200);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  if (stage === "idle") {
    return (
      <Button
        type="button"
        variant="accent"
        size="sm"
        onClick={() => setStage("granted")}
        className="h-6 gap-1 px-2.5 text-[12px]"
      >
        <IconCheck size={13} stroke={2.2} aria-hidden />
        Approve
      </Button>
    );
  }

  return (
    <span
      role="status"
      aria-live="polite"
      className="inline-flex h-6 min-w-[132px] items-center justify-end text-[12px] font-medium"
    >
      <span className="sr-only">{LABELS[stage]}</span>
      <span
        key={stage}
        aria-hidden="true"
        className={`approval-blur-in ${
          stage === "complete" ? "text-green" : "text-attention"
        }`}
      >
        {LABELS[stage]}
      </span>
    </span>
  );
}
