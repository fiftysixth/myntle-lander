import type { LegalSection } from "@/components/site/LegalPage";
import {
  IdentityVisual,
  OutcomesVisual,
  ProofVisual,
  RebuildVisual,
  SettlementTimeline,
  SwapToolsVisual,
  WalletsVisual,
} from "@/components/blog/BlogVisuals";
import { DOCS_URL, NEAR_INTENTS_URL, VERIFICATION_URL } from "@/lib/site";

const linkClass =
  "text-accent-ink underline decoration-accent/30 underline-offset-4 transition-colors duration-150 hover:text-ink";

function Tool({ children }: { children: React.ReactNode }) {
  return (
    <code className="font-mono text-[12.5px] text-ink">{children}</code>
  );
}

export const POSTS: Record<string, LegalSection[]> = {
  "why-the-assistant-never-signs": [
    {
      id: "the-useful-part",
      title: "The useful part is the conversation",
      content: (
        <>
          <p>
            A language model is good at turning a sentence into a concrete
            request and explaining the result. It is not a good place to keep a
            key.
          </p>
          <p>
            The easiest way to give an assistant power over money is to give it
            a wallet or a signing endpoint. Both make the model part of the
            security boundary, and a model can be persuaded by text. Myntle
            takes the opposite route: the model works on language and read-only
            data, and the money path never passes through it.
          </p>
        </>
      ),
    },
    {
      id: "swap-tools",
      title: "The swap path has six tools, and one proposes",
      content: (
        <>
          <p>
            The swap path uses six tools. Five read:{" "}
            <Tool>get_wallet_balances</Tool>, <Tool>get_supported_assets</Tool>,{" "}
            <Tool>get_quote</Tool>, <Tool>get_transaction_status</Tool>, and{" "}
            <Tool>get_transaction_history</Tool>. The sixth,{" "}
            <Tool>prepare_swap</Tool>, proposes a swap.
          </p>
          <p>
            None of the five returns the connected wallet or a signature, and
            the six do not include a generic signing tool or a generic RPC tool.
            That is deliberate. A narrow set lets the assistant do useful work
            without acquiring a capability that is hard to take back.
          </p>
          <SwapToolsVisual />
        </>
      ),
    },
    {
      id: "the-application-rebuilds",
      title: "The application rebuilds the trade",
      content: (
        <>
          <p>
            When the assistant proposes a swap, the server validates the
            amount, asset, destination, and slippage against the account that
            is connected. It builds the transaction from its own stored quote
            instead of accepting the transaction the model described.
          </p>
          <p>
            The approval is bound to the exact parameters shown in the card. If
            the amount changes in the browser, the server rejects the trade
            before a wallet is asked to sign. The approval response itself is
            checked against a server-held secret, so a modified client cannot
            invent an approval.
          </p>
          <RebuildVisual />
        </>
      ),
    },
    {
      id: "wallet-authority",
      title: "The wallet is the only authority",
      content: (
        <>
          <p>
            A person approves the trade, and the connected wallet or passkey
            signs it. The application never holds a private key or a balance,
            and the assistant never sees an address or a signature.
          </p>
          <p>
            The first release keeps a human in every movement of money. A
            bounded autonomous mode can be added later, but it is an additional
            mode, not a replacement for the boundary.
          </p>
        </>
      ),
    },
    {
      id: "why-the-boundary",
      title: "Why the boundary is the feature",
      content: (
        <>
          <p>
            The assistant can still be useful when it is wrong. It can misread
            a ticker or miss a route. The application can refuse a malformed
            trade, and the settlement record can disagree with the assistant’s
            sentence.
          </p>
          <p>
            That is the design: the model is an interface to a ledger, not a
            signer for it. You can read the code and the verification notes in
            the{" "}
            <a
              href={DOCS_URL}
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              repository
            </a>
            .
          </p>
        </>
      ),
    },
  ],
  "the-settlement-record-decides": [
    {
      id: "three-things",
      title: "Three things that look like proof",
      content: (
        <>
          <p>
            The wallet signed. The HTTP response was 200. The assistant said the
            swap completed. Each feels like evidence that money moved, and none
            of them is.
          </p>
          <p>
            A signature proves that a wallet authorised a request. A 200 proves
            that a service accepted something. A sentence proves that a model
            produced text. None of those events is a settlement.
          </p>
          <ProofVisual />
        </>
      ),
    },
    {
      id: "what-we-read",
      title: "What we read instead",
      content: (
        <>
          <p>
            Settlement is read from{" "}
            <a
              href={NEAR_INTENTS_URL}
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              NEAR Intents
            </a>
            . The status endpoint reports the settlement inside the verifier
            contract, and Myntle writes that record next to the transaction.
          </p>
          <p>
            The timeline is built from the record, not from the conversation
            stream. It moves through quoted, approved, submitted, deposit
            confirmed, processing, and then settled or the relevant failure. The
            interface does not advance a step because the assistant wrote a
            confident sentence.
          </p>
          <SettlementTimeline />
        </>
      ),
    },
    {
      id: "what-can-go-wrong",
      title: "What can go wrong",
      content: (
        <>
          <p>
            A deposit can arrive and the swap can fail to fill. The record
            reports a refund, and the screen says the money is coming back
            instead of showing a green check for one step of the story.
          </p>
          <p>
            A failed status poll is retried. A settlement that failed on chain
            is final and is not retried. Retrying a payment is not the same as
            retrying a request, and the application treats them differently.
          </p>
          <OutcomesVisual />
        </>
      ),
    },
    {
      id: "why-it-matters",
      title: "Why the distinction matters",
      content: (
        <>
          <p>
            When someone asks whether a trade went through, the only useful
            answer is the record&apos;s answer. A signature means the user
            authorised a request. A 200 means a service accepted something. The
            record means the settlement happened.
          </p>
          <p>
            That difference is not pedantry. It is the difference between a
            confident interface and an honest one.
          </p>
        </>
      ),
    },
    {
      id: "the-record-is-the-product",
      title: "The record is the product",
      content: (
        <>
          <p>
            The conversation makes the trade approachable, and the record makes
            it verifiable. If the two disagree, the record wins. The rest of
            the interface is built around that rule.
          </p>
          <p>
            The verification notes, including the sources behind every external
            claim, are in the{" "}
            <a
              href={VERIFICATION_URL}
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              repository
            </a>
            .
          </p>
        </>
      ),
    },
  ],
  "any-wallet-is-enough": [
    {
      id: "the-wallet-you-have",
      title: "The wallet you already have",
      content: (
        <>
          <p>
            An EVM, Solana, or NEAR wallet can sign the intent that settles a
            trade. The conversation stays the same across all three, and no one
            needs a new account on a new chain.
          </p>
          <p>
            The application connects through three adapters behind one
            interface: wagmi and viem for EVM, the Wallet Standard for Solana,
            and near-connect for NEAR. The differences between them belong to
            the signer, not to the person signing.
          </p>
          <WalletsVisual />
        </>
      ),
    },
    {
      id: "a-message",
      title: "A message, not a transaction",
      content: (
        <>
          <p>
            The wallet signs a message rather than a transaction on a new
            network. The trade settles inside the verifier contract, so the
            user does not need gas on a new chain or a faucet to begin.
          </p>
          <p>
            The application never holds keys or funds, and the wallet is the
            only place a signature happens. A successful signature still does
            not mean the trade filled; that answer belongs to the settlement
            record.
          </p>
        </>
      ),
    },
    {
      id: "identity",
      title: "Identity is chain plus address",
      content: (
        <>
          <p>
            The same wallet on two chains is two accounts with two sets of
            balances. Assets are addressed by chain and full contract id,
            because a ticker is not identity.
          </p>
          <p>
            That sounds like a detail until a trade is about to be signed. Then
            it is the difference between the right USDC and the wrong one.
          </p>
          <IdentityVisual />
        </>
      ),
    },
    {
      id: "passkeys",
      title: "A passkey is another signer",
      content: (
        <>
          <p>
            A passkey account starts without a wallet. The credential stays on
            the device, the account is derived from it, and the same approval
            boundary applies.
          </p>
          <p>
            The model still proposes, the application still validates, and the
            passkey or wallet still signs. Starting without a wallet does not
            change the trust model.
          </p>
        </>
      ),
    },
    {
      id: "any-wallet",
      title: "Any wallet is enough",
      content: (
        <>
          <p>
            The point of supporting three chains is not a badge list. It is
            that someone can start with the thing they already have and still
            get the same readable, verifiable trade.
          </p>
          <p>
            The wallet is the authority, and the record is the proof. You can
            read the wallet notes in the{" "}
            <a
              href={DOCS_URL}
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              repository
            </a>
            .
          </p>
        </>
      ),
    },
  ],
};
