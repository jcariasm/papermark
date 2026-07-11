"use client";

import {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { cn } from "@/lib/utils";

type ConversationSidebarContextValue = {
  isOpen: boolean;
  isEnabled: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

const ConversationSidebarContext =
  createContext<ConversationSidebarContextValue | null>(null);

export function useConversationSidebar() {
  const context = useContext(ConversationSidebarContext);

  if (!context) {
    throw new Error(
      "useConversationSidebar must be used within ConversationSidebarProvider",
    );
  }

  return context;
}

export function useConversationSidebarSafe() {
  return useContext(ConversationSidebarContext);
}

export function ConversationSidebarProvider({
  children,
  enabled = false,
}: {
  children: ReactNode;
  enabled?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((current) => !current), []);

  const value = useMemo(
    () => ({
      isOpen,
      isEnabled: enabled,
      open,
      close,
      toggle,
    }),
    [close, enabled, isOpen, open, toggle],
  );

  return (
    <ConversationSidebarContext.Provider value={value}>
      {children}
    </ConversationSidebarContext.Provider>
  );
}

export function ConversationSidebarLayout({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const context = useConversationSidebarSafe();

  if (!context?.isEnabled) {
    return <>{children}</>;
  }

  return (
    <div
      className={cn(
        "transition-all duration-300",
        context.isOpen && "pr-[400px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
