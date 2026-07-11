import { useEffect, useState } from "react";

type PreviewParams = Record<string, string>;

function readParams(): PreviewParams {
  if (typeof window === "undefined") return {};
  return Object.fromEntries(new URLSearchParams(window.location.search));
}

export function useBrandingPreviewParams(): PreviewParams {
  const [params, setParams] = useState<PreviewParams>(() => readParams());

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (!event.data || event.data.type !== "branding-preview:update") return;
      setParams((current) => ({
        ...current,
        ...(event.data.params ?? {}),
      }));
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return params;
}
