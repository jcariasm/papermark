"use client";

import { ClipboardListIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import { VIEWER_TOGGLE_REQUEST_LIST_EVENT } from "../../lib/events";

export function RequestListButton({ className }: { className?: string }) {
  return (
    <Button
      type="button"
      variant="outline"
      className={cn("gap-2", className)}
      onClick={() => {
        window.dispatchEvent(new Event(VIEWER_TOGGLE_REQUEST_LIST_EVENT));
      }}
    >
      <ClipboardListIcon className="h-4 w-4" />
      Request List
    </Button>
  );
}
