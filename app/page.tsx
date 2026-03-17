import { HeroSection } from "@/components/home/HeroSection";
import { ServiceCards } from "@/components/home/ServiceCards";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PricingCards } from "@/components/home/PricingCards";
import { TrustBlock } from "@/components/home/TrustBlock";
import { FaqPreview } from "@/components/home/FaqPreview";
import { LatestPosts } from "@/components/home/LatestPosts";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <WebSiteJsonLd />
      <HeroSection />
      <ServiceCards />
      <HowItWorks />
      <PricingCards />
      <TrustBlock />
      <FaqPreview />
      <LatestPosts />
    </>
  );
}
