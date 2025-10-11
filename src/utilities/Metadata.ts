import type { Metadata } from "next";
import setting from "@/config/setting.json"; 

export default function MetadataUtils() {
    const metadata: Metadata = {
        title: "Filipino Web3",
        description: "An organization with the aim of helping our fellow Filipinos hone their skills and maximize their potential to grow in the Web3 space.",
        alternates: {
            canonical: setting.domain__links,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
            },
        },
         verification: {
            google: setting.google_verifications,
        },
        openGraph: {
            title: "Filipino Web3",
        description: "An organization with the aim of helping our fellow Filipinos hone their skills and maximize their potential to grow in the Web3 space.",
            url: setting.domain__links,
            siteName: "Filipino Web3",
            images: [
            {
                url: setting.openGraph,
                width: 800,
                height: 600,
            },
            {
                url: setting.openGraph,
                width: 1800,
                height: 1600,
                alt: "Filipino Web3",
            },
            ],
            locale: "en-US",
            type: "website",
        },
         other: {
            "article:publisher": setting.links__src,
            "twitter:creator": "",
        },                                  
    };

    return metadata;

}