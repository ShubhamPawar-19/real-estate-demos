import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { RealEstateDemo } from "@/components/real-estate/RealEstateDemo";
import { realEstateDemos } from "@/data/real-estate";
import { getDemo } from "@/lib/real-estate/getDemo";
type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return realEstateDemos.map((demo) => ({
    slug: demo.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const demo = getDemo(slug);

  if (!demo) {
    return {};
  }

  return {
    title: `${demo.business.name} | Real Estate`,
    description: demo.business.description,
  };
}

export default async function DemoPage({ params }: Props) {
  const { slug } = await params;
  const demo = getDemo(slug);

  if (!demo) {
    notFound();
  }

  return <RealEstateDemo demo={demo} />;
}