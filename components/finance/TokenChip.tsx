import Image from "next/image";
import { cn } from "@/lib/utils";

const TOKENS = {
  USDC: "/tokens/usdc.svg",
  NEAR: "/tokens/near.svg",
  ETH: "/tokens/eth.svg",
  SOL: "/tokens/sol.svg",
  GNO: "/tokens/gno.svg",
  DAI: "/tokens/dai.svg",
} as const;

const NETWORKS = {
  Base: "/networks/base.svg",
  NEAR: "/networks/near.svg",
} as const;

export type TokenSymbol = keyof typeof TOKENS;
export type NetworkName = keyof typeof NETWORKS;

export function TokenIcon({
  symbol,
  size = 18,
}: {
  symbol: TokenSymbol;
  size?: number;
}) {
  return (
    <Image
      src={TOKENS[symbol]}
      alt=""
      width={size}
      height={size}
      className="shrink-0 rounded-full"
    />
  );
}

export function NetworkIcon({
  network,
  size = 13,
}: {
  network: NetworkName;
  size?: number;
}) {
  return (
    <Image
      src={NETWORKS[network]}
      alt=""
      width={size}
      height={size}
      className="shrink-0 rounded-full"
    />
  );
}

/**
 * The app's token pill: an avatar and a ticker, no amount. The amount sits in
 * the sentence beside it, exactly as the card renders it.
 */
export function TokenChip({
  symbol,
  iconSize = 18,
  className,
}: {
  symbol: TokenSymbol;
  iconSize?: number;
  className?: string;
}) {
  return (
    <span
      data-token-chip=""
      className={cn(
        "inline-flex items-center gap-[0.4em] whitespace-nowrap rounded-full bg-field py-[0.25em] pl-[0.25em] pr-[0.7em] align-middle font-medium leading-none text-ink",
        className,
      )}
    >
      <span aria-hidden className="inline-flex shrink-0">
        <TokenIcon symbol={symbol} size={iconSize} />
      </span>
      <span>{symbol}</span>
    </span>
  );
}

/** The venue the trade settles on: the NEAR mark and the account label. */
export function VenueChip({ label = "Near Account" }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-[0.4em] whitespace-nowrap rounded-full bg-field py-[0.25em] pl-[0.25em] pr-[0.7em] align-middle font-medium leading-none text-ink">
      <span aria-hidden className="inline-flex shrink-0">
        <NetworkIcon network="NEAR" size={18} />
      </span>
      <span>{label}</span>
    </span>
  );
}
