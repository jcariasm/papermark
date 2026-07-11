export type DataroomBannerKind = "none" | "image" | "video" | "youtube";

export type ClassifiedDataroomBanner = {
  kind: DataroomBannerKind;
  src: string | null;
  youtubeId?: string;
};

const VIDEO_EXTENSIONS = [".mp4", ".webm", ".mov", ".m4v"];

function extractYoutubeId(value: string): string | null {
  try {
    const url = new URL(value);
    if (url.hostname.includes("youtu.be")) {
      return url.pathname.split("/").filter(Boolean)[0] ?? null;
    }
    if (url.hostname.includes("youtube.com")) {
      return url.searchParams.get("v") || url.pathname.split("/").pop() || null;
    }
  } catch {
    return null;
  }
  return null;
}

export function classifyDataroomBanner(
  value: string | null | undefined,
): ClassifiedDataroomBanner {
  const src = value?.trim();
  if (!src || src === "no-banner") {
    return { kind: "none", src: null };
  }

  const youtubeId = extractYoutubeId(src);
  if (youtubeId) {
    return { kind: "youtube", src, youtubeId };
  }

  const pathname = (() => {
    try {
      return new URL(src).pathname.toLowerCase();
    } catch {
      return src.toLowerCase();
    }
  })();

  if (VIDEO_EXTENSIONS.some((extension) => pathname.endsWith(extension))) {
    return { kind: "video", src };
  }

  return { kind: "image", src };
}
