import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/site/LegalPage";
import { SitePageShell } from "@/components/site/SitePageShell";
import { ISSUES_URL, NEAR_INTENTS_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern use of the Myntle prototype, its wallets, approvals, and settlement.",
};

const linkClass =
  "text-accent-ink underline decoration-accent/30 underline-offset-4 transition-colors duration-150 hover:text-ink";

const SECTIONS: LegalSection[] = [
  {
    id: "using-myntle",
    title: "Using Myntle",
    content: (
      <p>
        Myntle is a software prototype, a chat-first finance application. It is
        not a bank, broker, exchange, or financial adviser. You must be legally
        able to enter into a contract where you live, and you must use the
        service lawfully. If you do not agree to these terms, do not use
        Myntle.
      </p>
    ),
  },
  {
    id: "wallet-and-keys",
    title: "Your wallet and your keys",
    content: (
      <p>
        You connect a wallet you control, or create a passkey account. Myntle
        never receives your private keys, seed phrase, or funds, and it cannot
        sign for you. You are responsible for your wallet or passkey and for
        keeping it secure. If you lose access, Myntle cannot recover it for
        you.
      </p>
    ),
  },
  {
    id: "trades-and-approvals",
    title: "Trades and approvals",
    content: (
      <p>
        The assistant can read balances, quote a trade, and propose one. It
        cannot sign or execute a trade. You approve the exact amount, asset,
        destination, and expiry shown in the card. A quote is a time-limited
        offer, not a promise that a trade will fill. Prices, routes, and fees
        can change. Myntle may reject a trade if its parameters no longer match
        the stored quote.
      </p>
    ),
  },
  {
    id: "settlement",
    title: "Settlement",
    content: (
      <p>
        Trades settle through{" "}
        <a
          href={NEAR_INTENTS_URL}
          target="_blank"
          rel="noreferrer"
          className={linkClass}
        >
          NEAR Intents
        </a>
        . A transaction is complete only when the settlement record reports it
        as complete. A signature, a successful response, or a sentence from the
        assistant is not proof that money moved. If the deposit arrives but the
        trade does not fill, the record may report a refund. If settlement
        fails, the record is final and the trade is not retried.
      </p>
    ),
  },
  {
    id: "fees",
    title: "Fees",
    content: (
      <p>
        Settlement and network fees are included in the quoted amounts. The
        quote shows the amount you receive and the minimum you will accept.
        Check those figures before you approve.
      </p>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    content: (
      <>
        <p>
          Do not use Myntle to break the law, interfere with the service, or
          attempt to bypass the approval boundary. Do not present the
          assistant&apos;s output as financial, legal, or tax advice.
        </p>
      </>
    ),
  },
  {
    id: "availability",
    title: "Availability and changes",
    content: (
      <p>
        Myntle is a prototype and may change, pause, or stop. Features and
        supported chains can be added or removed. Do not rely on it for
        time-sensitive payments.
      </p>
    ),
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    content: (
      <p>
        The service is provided as it is, without a warranty. Nothing on this
        site is financial, legal, or tax advice. You are responsible for the
        decisions you approve.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    content: (
      <p>
        To the maximum extent permitted by law, Myntle is not liable for
        indirect or consequential losses, or for losses caused by a wallet,
        passkey, network, or third-party service outside its control.
      </p>
    ),
  },
  {
    id: "changes-and-contact",
    title: "Changes and contact",
    content: (
      <p>
        We may update these terms as the product changes. The date at the top
        of this page shows the current version. Continued use after an update
        means you accept the revised terms. Questions about these terms can be
        raised in the{" "}
        <a
          href={ISSUES_URL}
          target="_blank"
          rel="noreferrer"
          className={linkClass}
        >
          project issue tracker
        </a>
        .
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <SitePageShell>
      <LegalPage
        title="Terms of Service"
        intro="These terms govern your use of the Myntle prototype, including the wallet you connect, the trades you approve, and the settlement record you read."
        updated="Last updated 12 November 2026"
        banner={{ src: "/terms-of-service.webp", alt: "" }}
        sections={SECTIONS}
      />
    </SitePageShell>
  );
}
