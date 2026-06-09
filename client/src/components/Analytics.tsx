import { useEffect } from "react";

export default function Analytics() {
  useEffect(() => {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

    if (!measurementId || document.getElementById("ga4-script")) {
      return;
    }

    const script = document.createElement("script");
    script.id = "ga4-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }

    gtag("js", new Date());
    gtag("config", measurementId);
  }, []);

  return null;
}

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}
