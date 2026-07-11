export type ResolvedPublicLinkMeta = {
  enableCustomMetatag: boolean;
  metaTitle: string | null;
  metaDescription: string | null;
  metaImage: string | null;
  metaFavicon: string | null;
};

type LinkMetaInput = {
  enableCustomMetatag?: boolean | null;
  metaTitle?: string | null;
  metaDescription?: string | null;
  metaImage?: string | null;
  metaFavicon?: string | null;
};

type BrandMetaInput = {
  customLinkPreviewEnabled?: boolean | null;
  linkPreviewTitle?: string | null;
  linkPreviewDescription?: string | null;
  linkPreviewImage?: string | null;
  linkPreviewFavicon?: string | null;
} | null;

export function resolvePublicLinkMeta({
  link,
  teamBrand,
  dataroomBrand,
  defaultTitle,
}: {
  link: LinkMetaInput;
  teamBrand?: BrandMetaInput;
  dataroomBrand?: BrandMetaInput;
  defaultTitle: string;
}): ResolvedPublicLinkMeta {
  const inherited =
    dataroomBrand?.customLinkPreviewEnabled === true
      ? dataroomBrand
      : teamBrand?.customLinkPreviewEnabled === true
        ? teamBrand
        : null;

  if (link.enableCustomMetatag) {
    return {
      enableCustomMetatag: true,
      metaTitle: link.metaTitle || defaultTitle,
      metaDescription: link.metaDescription ?? null,
      metaImage: link.metaImage ?? null,
      metaFavicon: link.metaFavicon || "/favicon.ico",
    };
  }

  return {
    enableCustomMetatag: Boolean(inherited),
    metaTitle: inherited?.linkPreviewTitle || defaultTitle,
    metaDescription: inherited?.linkPreviewDescription ?? null,
    metaImage: inherited?.linkPreviewImage ?? null,
    metaFavicon: inherited?.linkPreviewFavicon || "/favicon.ico",
  };
}
