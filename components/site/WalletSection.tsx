import { LoginDialog } from "@/components/preview/LoginDialog";
import { Reveal } from "@/components/site/Reveal";

export function WalletSection() {
  return (
    <section
      id="wallets"
      className="scroll-mt-24 border-t border-line bg-canvas"
      aria-labelledby="wallets-title"
    >
      <div className="mx-auto grid w-full max-w-[1120px] grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:gap-16 lg:px-8 lg:py-24">
        <Reveal className="lg:order-2">
        <div className="max-w-[520px]">
          <h2
            id="wallets-title"
            className="text-[clamp(1.5rem,2.6vw,1.75rem)] font-semibold leading-[1.25] tracking-[-0.02em] text-ink"
          >
            Get started even without a wallet.
          </h2>
          <p className="mt-5 max-w-[46ch] text-[13.5px] leading-[1.65] text-ink-2">
            Create a passkey and start with your device, or connect a wallet you
            already have.
          </p>
        </div>
        </Reveal>

        <Reveal className="lg:order-1" delay={100}>
          <LoginDialog />
        </Reveal>
      </div>
    </section>
  );
}
