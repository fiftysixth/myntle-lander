"use client";

import { useState } from "react";
import Image from "next/image";
import {
  IconChevronRight,
  IconFingerprint,
  IconUser,
  IconWallet,
  IconX,
} from "@tabler/icons-react";

type Chain = "evm" | "solana" | "near";

const CHAINS: Array<{
  id: Chain;
  label: string;
  icon: string;
}> = [
  { id: "evm", label: "EVM", icon: "/wallets/evm.webp" },
  { id: "solana", label: "Solana", icon: "/wallets/solana.webp" },
  { id: "near", label: "Near", icon: "/wallets/near.webp" },
];

const WALLETS: Record<Chain, Array<{ name: string; icon: string }>> = {
  evm: [
    { name: "MetaMask", icon: "/wallets/metamask.webp" },
    { name: "Coinbase Wallet", icon: "/wallets/coinbase.webp" },
    { name: "Rainbow", icon: "/wallets/rainbow.webp" },
    { name: "Rabby", icon: "/wallets/rabby.webp" },
  ],
  solana: [
    { name: "Phantom", icon: "/wallets/phantom.webp" },
    { name: "Solflare", icon: "/wallets/solflare.webp" },
    { name: "Backpack", icon: "/wallets/backpack.webp" },
  ],
  near: [
    { name: "NEAR Wallet", icon: "/wallets/near.webp" },
    { name: "HOT", icon: "/wallets/hot.webp" },
    { name: "Meteor", icon: "/wallets/meteor.webp" },
  ],
};

/**
 * The app's login dialog. Its chain tabs are real: EVM, Solana, and Near each
 * show the wallets available on that chain, with the passkey entry above.
 */
export function LoginDialog() {
  const [chain, setChain] = useState<Chain>("evm");

  return (
    <div className="dark w-full max-w-[520px] overflow-hidden rounded-window border border-line bg-surface text-ink shadow-overlay">
      <div className="flex h-11 items-center justify-between border-b border-line pl-4 pr-2.5">
        <div className="flex min-w-0 items-center gap-1.5">
          <IconUser size={14} stroke={2} className="shrink-0 text-ink-2" aria-hidden />
          <span className="truncate text-[13px] font-semibold text-ink">
            Choose an option to log in.
          </span>
        </div>
        <span className="grid size-7 shrink-0 place-items-center rounded-[7px] text-ink-2">
          <IconX size={15} stroke={2} aria-hidden />
        </span>
      </div>

      <div className="border-b border-line p-2.5">
        <div className="flex items-center gap-3 rounded-card border border-line bg-page px-3.5 py-3">
          <span className="flex size-7 shrink-0 items-center justify-center text-accent">
            <IconFingerprint size={28} stroke={1.8} aria-hidden />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[13px] font-medium text-ink">
              Passkey
            </span>
            <span className="mt-0.5 block text-[12.5px] leading-relaxed text-ink-2">
              Sign in securely with your device passkey.
            </span>
          </span>
          <IconChevronRight
            size={15}
            stroke={1.8}
            className="shrink-0 text-ink-2"
            aria-hidden
          />
        </div>
      </div>

      <div className="flex min-h-[264px]">
        <div
          role="tablist"
          aria-label="Wallet chain"
          aria-orientation="vertical"
          className="w-[124px] shrink-0 border-r border-line p-1.5 sm:w-[148px]"
        >
          {CHAINS.map((item) => {
            const selected = item.id === chain;
            return (
              <button
                key={item.id}
                id={`chain-${item.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="login-wallet-panel"
                onClick={() => setChain(item.id)}
                className={`flex w-full items-center gap-2.5 rounded-control px-2.5 py-3 text-left text-[13px] font-medium transition-colors duration-100 ${
                  selected
                    ? "bg-hover-2 text-ink"
                    : "text-ink-2 hover:bg-hover hover:text-ink"
                }`}
              >
                <Image
                  src={item.icon}
                  alt=""
                  width={20}
                  height={20}
                  className="size-5 shrink-0 rounded-full object-contain"
                />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        <div
          id="login-wallet-panel"
          role="tabpanel"
          aria-labelledby={`chain-${chain}`}
          className="min-w-0 flex-1 p-1.5"
        >
          <div key={chain} className="fade-in-soft">
            <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
              {WALLETS[chain].map((wallet) => (
                <div
                  key={wallet.name}
                  className="flex min-h-[50px] min-w-0 items-center gap-2.5 rounded-control border border-line bg-page px-3.5 py-3"
                >
                  <Image
                    src={wallet.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="size-6 shrink-0 object-contain"
                  />
                  <span className="min-w-0 flex-1 break-words text-[13px] font-medium leading-tight text-ink">
                    {wallet.name}
                  </span>
                </div>
              ))}
            </div>

            {chain === "evm" ? (
              <div className="mt-2 flex justify-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-line bg-page px-4 py-1.5 text-[12.5px] font-medium text-ink-2">
                  <IconWallet size={14} stroke={1.8} aria-hidden />
                  Injected
                </span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
