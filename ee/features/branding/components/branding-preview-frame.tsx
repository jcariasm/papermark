import { useEffect, useMemo, useRef } from "react";

type PreviewParams = Record<string, string | number | boolean | null | undefined>;

export function BrandingPreviewFrame({
  name,
  basePath,
  params,
}: {
  name: string;
  basePath: string;
  params: PreviewParams;
}) {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const search = useMemo(() => {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== null && typeof value !== "undefined") {
        query.set(key, String(value));
      }
    });
    return query.toString();
  }, [params]);

  useEffect(() => {
    frameRef.current?.contentWindow?.postMessage(
      { type: "branding-preview:update", params },
      "*",
    );
  }, [params]);

  return (
    <iframe
      ref={frameRef}
      title={`${name} preview`}
      className="h-full min-h-[360px] w-full border-0"
      src={`${basePath}${search ? `?${search}` : ""}`}
    />
  );
}
