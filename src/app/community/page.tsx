import type { Metadata } from "next";
import { generateCommunityMetadata } from "@/utilities/communityMetadata";
import CommunityPageContent from "@/components/CommunityPageContent";

type Props = {
  searchParams: Promise<{ city?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = await searchParams;
  return generateCommunityMetadata(params.city);
}

export default async function CommunityPage() {
  return <CommunityPageContent />;
}
