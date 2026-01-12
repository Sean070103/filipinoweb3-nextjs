import type { Metadata } from "next";
import setting from "@/config/setting.json";

type CommunityInfo = {
  name: string;
  region: 'Luzon' | 'Visayas' | 'Mindanao';
  description: string;
  slug: string;
};

// Helper function to convert city name to URL slug (matching InteractivePhilippinesMap logic)
const getCitySlug = (cityName: string): string => {
  const name = cityName.split('•')[0].trim();
  return name.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

// Community data matching InteractivePhilippinesMap
const communities: CommunityInfo[] = [
  {
    name: 'Cebu City',
    region: 'Visayas',
    description: 'Empowering Cebu\'s Web3 ecosystem through education, networking, and innovation. Building a vibrant community of developers, entrepreneurs, and blockchain enthusiasts in the Queen City of the South.',
    slug: getCitySlug('Cebu City'), // 'cebu-city'
  },
  {
    name: 'Iloilo City',
    region: 'Visayas',
    description: 'Fostering Web3 innovation in Iloilo City. Connecting local builders, hosting workshops, and creating opportunities for the next generation of decentralized technology leaders in Western Visayas.',
    slug: getCitySlug('Iloilo City'), // 'iloilo-city'
  },
  {
    name: 'Kabankalan City',
    region: 'Visayas',
    description: 'Growing the Web3 community in Kabankalan City. Dedicated to educating and empowering local builders while bridging the gap between traditional tech and decentralized innovation.',
    slug: getCitySlug('Kabankalan City'), // 'kabankalan-city'
  },
  {
    name: 'Rizal',
    region: 'Luzon',
    description: 'Championing Web3 adoption in Rizal province. Creating a collaborative space for developers, creators, and entrepreneurs to explore blockchain technology and build the future of decentralized applications.',
    slug: getCitySlug('Rizal'), // 'rizal'
  },
  {
    name: 'San Carlos City',
    region: 'Visayas',
    description: 'Building a strong Web3 presence in San Carlos City. Empowering local innovators through education, mentorship, and community-driven initiatives in the heart of Negros Occidental.',
    slug: getCitySlug('San Carlos City'), // 'san-carlos-city'
  },
];

// Find community by slug
export function findCommunityBySlug(slug: string): CommunityInfo | undefined {
  // Try exact match first
  let community = communities.find(c => c.slug === slug);
  
  // If not found, try matching by converting name to slug
  if (!community) {
    const getCitySlug = (cityName: string): string => {
      const name = cityName.split('•')[0].trim();
      return name.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
    };
    community = communities.find(c => getCitySlug(c.name) === slug);
  }
  
  return community;
}

// Generate metadata for community page
export function generateCommunityMetadata(citySlug?: string | null): Metadata {
  const baseUrl = setting.domain__links;
  const defaultTitle = "Filipino Web3 - Communities";
  const defaultDescription = "Explore Web3 communities across the Philippines. Connect with local builders, developers, and innovators in cities like Cebu, Iloilo, Rizal, and more.";

  if (!citySlug) {
    return {
      title: defaultTitle,
      description: defaultDescription,
      alternates: {
        canonical: `${baseUrl}community`,
      },
      openGraph: {
        title: defaultTitle,
        description: defaultDescription,
        url: `${baseUrl}community`,
        siteName: "Filipino Web3",
        images: [
          {
            url: setting.openGraph,
            width: 800,
            height: 600,
          },
        ],
        locale: "en-US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: defaultTitle,
        description: defaultDescription,
      },
    };
  }

  const community = findCommunityBySlug(citySlug);
  
  if (!community) {
    return {
      title: defaultTitle,
      description: defaultDescription,
      alternates: {
        canonical: `${baseUrl}community`,
      },
      openGraph: {
        title: defaultTitle,
        description: defaultDescription,
        url: `${baseUrl}community`,
        siteName: "Filipino Web3",
        images: [
          {
            url: setting.openGraph,
            width: 800,
            height: 600,
          },
        ],
        locale: "en-US",
        type: "website",
      },
    };
  }

  const title = `Web3 ${community.name} - Filipino Web3`;
  const description = `${community.description} Join the ${community.name} Web3 community and be part of the future of decentralized technology in the ${community.region} region.`;
  const url = `${baseUrl}community?city=${citySlug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Filipino Web3",
      images: [
        {
          url: setting.openGraph,
          width: 800,
          height: 600,
        },
      ],
      locale: "en-US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
