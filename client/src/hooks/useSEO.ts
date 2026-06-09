import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
}

const BASE_TITLE = "NDE HealthTech Solutions";

export function useSEO({ title, description, canonical }: SEOProps) {
  useEffect(() => {
    document.title = `${title} | ${BASE_TITLE}`;

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        (metaDesc as HTMLMetaElement).name = "description";
        document.head.appendChild(metaDesc);
      }
      (metaDesc as HTMLMetaElement).content = description;
    }

    if (canonical) {
      let canonicalTag = document.querySelector('link[rel="canonical"]');
      if (!canonicalTag) {
        canonicalTag = document.createElement("link");
        (canonicalTag as HTMLLinkElement).rel = "canonical";
        document.head.appendChild(canonicalTag);
      }
      (canonicalTag as HTMLLinkElement).href = canonical;
    }
  }, [title, description, canonical]);
}
