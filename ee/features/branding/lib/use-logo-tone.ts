import { ImgHTMLAttributes, useMemo } from "react";

export type LogoTone = "light" | "dark" | "unknown";

export function useLogoTone(_src: string | null | undefined): {
  tone: LogoTone;
  imgProps: ImgHTMLAttributes<HTMLImageElement>;
} {
  return useMemo(
    () => ({
      tone: "dark",
      imgProps: {},
    }),
    [],
  );
}
