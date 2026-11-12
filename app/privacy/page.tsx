import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/site/LegalPage";
import { SitePageShell } from "@/components/site/SitePageShell";
import { ISSUES_URL, NEAR_INTENTS_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What the Myntle prototype stores, who processes it, and what the application never receives.",
};

const linkClass =
  "text-accent-ink underline decoration-accent/30 underline-offset-4 transition-colors duration-150 hover:text-ink";

const SECTIONS: LegalSection[] = [
  {
    id: "what-we-store",
    title: "What we store",
    content: (
      <p>
        When you connect a wallet, we store the address and its chain. When you
        use a passkey, we store the credential id, public key, and the account
        id derived from it. We store the messages you send, the
        assistant&apos;s replies, the quotes you see, the approvals you grant,
        and the transaction records needed to run the service. We keep basic
        technical logs, such as request times and errors, to operate and secure
        the service.
      </p>
    ),
  },
  {
    id: "what-we-never-receive",
    title: "What we never receive",
    content: (
      <p>
        We never receive your private keys, seed phrase, or wallet password,
        and Myntle does not hold your funds. The assistant never receives your
        address, your signature, or your keys. The application uses the session
        and the wallet only to prepare and sign an action you approved.
      </p>
    ),
  },
  {
    id: "how-we-use-data",
    title: "How we use data",
    content: (
      <p>
        We use data to authenticate your session, read balances, quote trades,
        show approvals, submit approved trades, and read settlement status. We
        also use it to keep the service reliable and secure and to comply with
        applicable law.
      </p>
    ),
  },
  {
    id: "service-providers",
    title: "Who processes data",
    content: (
      <p>
        NEAR AI Cloud provides the model that generates the assistant&apos;s
        replies. NEAR Intents and 1Click provide quotes and settlement.
        Supabase stores conversations and transaction records. Vercel hosts the
        application. These providers process data on our behalf to run the
        service. We do not sell personal data. We share it only with service
        providers that process it for the service, or when the law requires it.
        You can read more about settlement in the{" "}
        <a
          href={NEAR_INTENTS_URL}
          target="_blank"
          rel="noreferrer"
          className={linkClass}
        >
          NEAR Intents documentation
        </a>
        .
      </p>
    ),
  },
  {
    id: "retention",
    title: "Retention",
    content: (
      <p>
        We retain conversation and transaction records for as long as needed to
        provide the service and meet legal obligations. Records written to a
        public chain cannot be deleted by Myntle.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and local storage",
    content: (
      <p>
        The application uses a session cookie to keep you signed in and local
        storage for your theme preference. These are used to operate the
        interface, not to advertise to you. This landing page does not use
        analytics or advertising cookies.
      </p>
    ),
  },
  {
    id: "security",
    title: "Security",
    content: (
      <p>
        Data is sent over TLS. Approvals are validated on the server, and
        Myntle does not hold keys or funds. No system is perfectly secure, so
        protect your wallet and your passkey.
      </p>
    ),
  },
  {
    id: "your-choices",
    title: "Your choices",
    content: (
      <p>
        You can disconnect your wallet or sign out at any time. You can ask for
        access, correction, or deletion of stored data by opening a request in
        the repository. Some on-chain records may not be removable. We will
        explain what can be changed when you contact us.
      </p>
    ),
  },
  {
    id: "changes-and-contact",
    title: "Changes and contact",
    content: (
      <p>
        We may update this policy as the product changes. The date at the top
        of this page shows the current version. For a privacy request, open an
        issue in the{" "}
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

export default function PrivacyPage() {
  return (
    <SitePageShell>
      <LegalPage
        title="Privacy Policy"
        intro="This policy describes what the Myntle prototype stores, why it stores it, and what the application never receives."
        updated="Last updated 12 November 2026"
        banner={{ src: "/privacy-policy.webp", alt: "" }}
        sections={SECTIONS}
      />
    </SitePageShell>
  );
}
