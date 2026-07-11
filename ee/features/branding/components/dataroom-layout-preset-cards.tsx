import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

import type { DataroomLayoutCardId } from "../lib/dataroom-viewer-layout";

const PRESETS: {
  id: DataroomLayoutCardId;
  title: string;
  description: string;
}[] = [
  {
    id: "STANDARD",
    title: "Standard",
    description: "Classic data room navigation.",
  },
  {
    id: "STRICT",
    title: "Strict",
    description: "Compact list with less visual noise.",
  },
  {
    id: "MODERN",
    title: "Modern",
    description: "Split header with banner emphasis.",
  },
  {
    id: "NOTION",
    title: "Notion",
    description: "Cover-first room presentation.",
  },
];

export function DataroomLayoutPresetCards({
  selectedPreset,
  onSelect,
}: {
  selectedPreset: DataroomLayoutCardId;
  onSelect: (id: DataroomLayoutCardId) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {PRESETS.map((preset) => {
        const selected = preset.id === selectedPreset;
        return (
          <button
            key={preset.id}
            type="button"
            onClick={() => onSelect(preset.id)}
            className={cn(
              "flex min-h-24 items-start justify-between rounded-lg border p-4 text-left transition-colors",
              selected
                ? "border-gray-900 bg-gray-50 dark:border-gray-100 dark:bg-gray-800"
                : "border-gray-200 bg-white hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800",
            )}
          >
            <span>
              <span className="block text-sm font-medium">{preset.title}</span>
              <span className="mt-1 block text-sm text-muted-foreground">
                {preset.description}
              </span>
            </span>
            {selected ? <Check className="h-4 w-4" /> : null}
          </button>
        );
      })}
    </div>
  );
}
