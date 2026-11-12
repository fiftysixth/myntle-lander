import type { TokenSymbol } from "@/components/finance/TokenChip";

/** The figures on the card are illustrative, like every amount on the page. */
export type Swap = {
  from: TokenSymbol;
  fromAmount: string;
  to: TokenSymbol;
  toAmount: string;
  minimumReceived: string;
};

export const SWAPS = {
  usdcToNear: {
    from: "USDC",
    fromAmount: "100.00",
    to: "NEAR",
    toAmount: "41.86",
    minimumReceived: "41.61 NEAR",
  },
  ethToSol: {
    from: "ETH",
    fromAmount: "1.00",
    to: "SOL",
    toAmount: "20.156",
    minimumReceived: "20.005 SOL",
  },
  gnoToDai: {
    from: "GNO",
    fromAmount: "10.00",
    to: "DAI",
    toAmount: "1,284.00",
    minimumReceived: "1,271.16 DAI",
  },
} satisfies Record<string, Swap>;
