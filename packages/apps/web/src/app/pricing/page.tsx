import type { Metadata } from "next";
import Link from "next/link";

import { Shell } from "@/components/dashboard/shell";
import { MarketingLayout } from "@/components/layout/marketing-layout";
import { FAQs } from "@/components/marketing/faqs";
import { EnterpricePlan } from "@/components/marketing/pricing/enterprice-plan";
import { PricingWrapperSuspense } from "@/components/marketing/pricing/pricing-wrapper";
import {
  defaultMetadata,
  ogMetadata,
  twitterMetadata,
} from "../shared-metadata";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "Pricing",
  openGraph: {
    ...ogMetadata,
    title: "Pricing",
    url: "https://www.openstatus.dev/pricing",
  },
  twitter: {
    ...twitterMetadata,
    title: "Pricing",
  },
};

export default function PricingPage() {
  return (
    <MarketingLayout>
      <div className="grid w-full gap-6">
        <Shell className="grid w-full gap-8">
          <div className="grid gap-3 text-center">
            <h1 className="font-cal text-4xl text-foreground">Pricing</h1>
            <p className="text-muted-foreground">
              All plans. Start free today, upgrade later.
            </p>
          </div>
          <PricingWrapperSuspense />
          <p className="text-muted-foreground text-sm">
            Learn more about the{" "}
            <Link
              href="/blog/our-new-pricing-explained"
              className="text-foreground underline underline-offset-4 hover:no-underline"
            >
              decision behind the plans
            </Link>
            .
          </p>
        </Shell>
        <Shell>
          <EnterpricePlan />
        </Shell>
        <FAQs />
      </div>
    </MarketingLayout>
  );
}
