import { z } from "zod";

export const DATAROOM_CARD_LAYOUTS = ["LIST", "GRID", "COMPACT"] as const;
export const DATAROOM_VIEWER_LAYOUT_PRESETS = [
  "STANDARD",
  "STRICT",
  "MODERN",
  "NOTION",
] as const;
export const DATAROOM_VIEWER_HEADER_STYLES = [
  "DEFAULT",
  "SPLIT",
  "NOTION",
] as const;

export type DataroomCardLayout = (typeof DATAROOM_CARD_LAYOUTS)[number];
export type DataroomViewerLayoutPreset =
  (typeof DATAROOM_VIEWER_LAYOUT_PRESETS)[number];
export type DataroomViewerHeaderStyle =
  (typeof DATAROOM_VIEWER_HEADER_STYLES)[number];
export type DataroomLayoutCardId = DataroomViewerLayoutPreset;

export const DataroomCardLayoutSchema = z.enum(DATAROOM_CARD_LAYOUTS);
export const DataroomViewerLayoutPresetSchema = z.enum(
  DATAROOM_VIEWER_LAYOUT_PRESETS,
);
export const DataroomViewerHeaderStyleSchema = z.enum(
  DATAROOM_VIEWER_HEADER_STYLES,
);

export const CARD_LAYOUT_OPTIONS: {
  value: DataroomCardLayout;
  label: string;
  description: string;
}[] = [
  {
    value: "LIST",
    label: "List",
    description: "Classic file list with folders and documents.",
  },
  {
    value: "GRID",
    label: "Grid",
    description: "Visual cards for browsable rooms.",
  },
  {
    value: "COMPACT",
    label: "Compact",
    description: "Dense table-style layout for larger rooms.",
  },
];

export function asDataroomCardLayout(
  value: string | null | undefined,
): DataroomCardLayout {
  return DataroomCardLayoutSchema.safeParse(value).success
    ? (value as DataroomCardLayout)
    : "LIST";
}

export function asDataroomViewerLayoutPreset(
  value: string | null | undefined,
): DataroomViewerLayoutPreset {
  return DataroomViewerLayoutPresetSchema.safeParse(value).success
    ? (value as DataroomViewerLayoutPreset)
    : "STANDARD";
}

export function asDataroomViewerHeaderStyle(
  value: string | null | undefined,
): DataroomViewerHeaderStyle {
  return DataroomViewerHeaderStyleSchema.safeParse(value).success
    ? (value as DataroomViewerHeaderStyle)
    : "DEFAULT";
}

export function inferDataroomViewerLayoutPreset({
  cardLayout,
  showFolderTree,
  hideFolderIconsInMain,
  viewerHeaderStyle,
}: {
  cardLayout: DataroomCardLayout;
  showFolderTree: boolean;
  hideFolderIconsInMain: boolean;
  viewerHeaderStyle: DataroomViewerHeaderStyle;
}): DataroomViewerLayoutPreset {
  if (viewerHeaderStyle === "NOTION") return "NOTION";
  if (viewerHeaderStyle === "SPLIT") return "MODERN";
  if (cardLayout === "COMPACT" && !showFolderTree && hideFolderIconsInMain) {
    return "STRICT";
  }
  return "STANDARD";
}
