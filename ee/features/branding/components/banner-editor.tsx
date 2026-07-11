import { ReactNode, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function BannerEditor({
  banner,
  setBanner,
  setBannerBlobUrl,
  sizeHint,
  defaultBannerImage,
  onUrlApplied,
  dropZone,
}: {
  banner: string | null;
  setBanner: (value: string | null) => void;
  setBannerBlobUrl: (value: string | null) => void;
  sizeHint?: string;
  defaultBannerImage?: string;
  onUrlApplied?: () => void;
  dropZone?: ReactNode;
}) {
  const [url, setUrl] = useState(
    banner && banner !== "no-banner" && !banner.startsWith("data:")
      ? banner
      : "",
  );

  const applyUrl = () => {
    const trimmed = url.trim();
    if (!trimmed) return;
    setBanner(trimmed);
    setBannerBlobUrl(null);
    onUrlApplied?.();
  };

  return (
    <div className="space-y-3">
      {dropZone}
      <div className="flex flex-col gap-2 sm:flex-row">
        <Input
          value={url}
          onChange={(event) => setUrl(event.target.value)}
          placeholder="Paste image, video, or YouTube URL"
        />
        <Button type="button" variant="outline" onClick={applyUrl}>
          Apply URL
        </Button>
      </div>
      <div className="flex flex-wrap gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            setBanner(defaultBannerImage ?? null);
            setBannerBlobUrl(null);
          }}
        >
          Reset
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            setBanner("no-banner");
            setBannerBlobUrl(null);
          }}
        >
          Hide banner
        </Button>
      </div>
      {sizeHint ? <p className="text-xs text-muted-foreground">{sizeHint}</p> : null}
    </div>
  );
}
