import {
  IconCopy,
  IconPlus,
  IconRefresh,
  IconThumbDown,
  IconThumbUp,
} from "@tabler/icons-react";
import { Composer } from "@/components/preview/Composer";
import { FocusVignette } from "@/components/preview/FocusVignette";
import { InteractiveTradeCard } from "@/components/preview/InteractiveTradeCard";
import { ResearchTrace } from "@/components/preview/ResearchTrace";
import { Sidebar } from "@/components/preview/Sidebar";

const sourceLink =
  "text-accent-ink underline decoration-accent/30 underline-offset-2 transition-colors duration-150 hover:text-ink";

/**
 * The actual app frame: canvas, 224px sidebar, and the rounded page panel
 * with its 44px title bar. The preview stays dark because that is how the
 * application opens.
 */
export function AppWindow() {
  return (
    <div className="dark relative overflow-hidden rounded-window border border-line bg-canvas p-2.5 text-ink shadow-overlay">
      <div className="flex min-h-[600px] gap-2.5 lg:min-h-[660px]">
        <Sidebar />

        <section className="flex min-w-0 flex-1 flex-col rounded-window border border-line bg-page">
          <div className="flex h-11 shrink-0 items-center justify-between border-b border-line px-3 sm:px-4">
            <span className="truncate text-[13px] font-semibold text-ink">
              What&apos;s happening with NEAR?
            </span>
            <span className="grid size-7 shrink-0 place-items-center rounded-[7px] text-ink-2">
              <IconPlus size={15} stroke={1.8} aria-hidden />
            </span>
          </div>

          <div className="flex-auto px-4 pb-4 pt-6 sm:px-8 lg:px-10">
            <div className="mx-auto flex w-full max-w-[720px] flex-col">
              <div className="flex items-center justify-center gap-2 text-[11px] tabular-nums text-ink-2">
                <span>Today</span>
                <span aria-hidden className="h-3 w-px bg-line-strong" />
                <span>04:08 PM</span>
              </div>

              <div className="mt-6 flex justify-end">
                <p className="max-w-[340px] rounded-[12px] bg-field px-3.5 py-2 text-[13px] leading-relaxed text-ink shadow-hairline">
                  What&apos;s happening with NEAR?
                </p>
              </div>

              <div className="mt-6 w-full max-w-[440px]">
                <ResearchTrace />

                <p className="mt-4 text-[14px] leading-[1.65] text-ink">
                  Most of the coverage I found is about the AI Cloud launch.
                  The announcement is from{" "}
                  <a
                    href="https://near.org/blog"
                    target="_blank"
                    rel="noreferrer"
                    className={sourceLink}
                  >
                    NEAR
                  </a>
                  , and the reaction on{" "}
                  <a
                    href="https://www.reddit.com/r/nearprotocol/"
                    target="_blank"
                    rel="noreferrer"
                    className={sourceLink}
                  >
                    Reddit
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://x.com/nearprotocol"
                    target="_blank"
                    rel="noreferrer"
                    className={sourceLink}
                  >
                    X
                  </a>{" "}
                  is more mixed.
                </p>

                <p className="mt-5 text-[14px] leading-[1.6] text-ink">
                  Proposing the 100 USDC to NEAR swap.
                </p>

                <div className="mt-3 w-fit" data-focus-target>
                  <InteractiveTradeCard className="relative z-30 shadow-raised" />
                </div>

                <div className="mt-2 flex items-center gap-3 text-ink-2">
                  {[
                    <IconCopy key="copy" size={13} stroke={1.8} />,
                    <IconRefresh key="retry" size={13} stroke={1.8} />,
                    <IconThumbUp key="up" size={13} stroke={1.8} />,
                    <IconThumbDown key="down" size={13} stroke={1.8} />,
                  ].map((icon, index) => (
                    <span
                      key={index}
                      aria-hidden
                      className="inline-flex size-5 items-center justify-center"
                    >
                      {icon}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="shrink-0 px-4 pb-4 sm:px-8 lg:px-10">
            <div className="mx-auto w-full max-w-[720px]">
              <Composer placeholder="Reply" />
            </div>
          </div>
        </section>
      </div>

      <FocusVignette />
    </div>
  );
}
