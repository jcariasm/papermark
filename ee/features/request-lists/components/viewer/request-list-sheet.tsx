"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

type RequestListSheetProps = {
  linkId: string;
  dataroomId: string;
  viewId: string;
  viewerId?: string;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

export function RequestListSheet({
  isOpen,
  onOpenChange,
}: RequestListSheetProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Request List</SheetTitle>
          <SheetDescription>
            Request lists are not enabled in this open-source deployment.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
