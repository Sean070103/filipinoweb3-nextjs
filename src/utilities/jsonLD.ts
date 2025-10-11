// utilities/Json_LD.ts
import setting from "@/config/setting.json";

export default function Json_LD() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "",
    "url": setting.domain__links,
    "publisher": {
      "@type": "Person",
      "name": "",
      "sameAs": [
        setting.links__src,
      ]
    },
    "logo": {
      "@type": "ImageObject",
      "url": setting.openGraph
    }
  };
}