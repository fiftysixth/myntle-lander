import { Closing } from "@/components/site/Closing";
import { Hero } from "@/components/site/Hero";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Questions } from "@/components/site/Questions";
import { Roadmap } from "@/components/site/Roadmap";
import { SourceMap } from "@/components/site/SourceMap";
import { SitePageShell } from "@/components/site/SitePageShell";
import { Verification } from "@/components/site/Verification";
import { WalletSection } from "@/components/site/WalletSection";

export default function Home() {
  return (
    <SitePageShell>
      <Hero />
      <SourceMap />
      <HowItWorks />
      <Verification />
      <WalletSection />
      <Roadmap />
      <Questions />
      <Closing />
    </SitePageShell>
  );
}
