import { realEstateDemos } from "@/data/real-estate";

export function getDemo(slug: string) {
  return realEstateDemos.find((demo) => demo.slug === slug);
}