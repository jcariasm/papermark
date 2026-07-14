const ABARGON_TEAM_ID = "cmrh6dxd60000jp04mh7l6y10";
const ABARGON_LOGO_URL =
  "https://vault.abargon.com/_static/abargon-logo-transparent.png";

export const ABARGON_DEFAULT_BRAND = {
  id: "abargon_global_brand_default",
  logo: ABARGON_LOGO_URL,
  banner: null,
  brandColor: "#FFFFFF",
  accentColor: "#FFFFFF",
  accentButtonColor: "#FFFFFF",
  applyAccentColorToDataroomView: false,
  welcomeMessage: "Bienvenido al vault seguro de Abargon.",
  ctaLabel: null,
  ctaUrl: null,
  cardLayout: "LIST",
  showFolderTree: true,
  viewerLayoutPreset: "STANDARD",
  viewerHeaderStyle: "DEFAULT",
  hideFolderIconsInMain: false,
  customLinkPreviewEnabled: true,
  linkPreviewTitle: "Abargon Vault",
  linkPreviewDescription: "Documentos seguros compartidos por Abargon.",
  linkPreviewImage: ABARGON_LOGO_URL,
  linkPreviewFavicon: "https://vault.abargon.com/favicon.ico",
  defaultLanguage: "es",
  teamId: ABARGON_TEAM_ID,
};

export function getAbargonDefaultBrand(
  team?: { id?: string | null; name?: string | null } | string | null,
) {
  if (!team) return null;
  if (typeof team === "string") {
    return team === ABARGON_TEAM_ID ? ABARGON_DEFAULT_BRAND : null;
  }

  return team.id === ABARGON_TEAM_ID ||
    team.name === "Abargon" ||
    team.name === "Ábargon"
    ? ABARGON_DEFAULT_BRAND
    : null;
}
