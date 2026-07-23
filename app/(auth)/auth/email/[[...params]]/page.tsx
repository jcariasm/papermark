import { Metadata } from "next";

import EmailVerificationClient from "./page-client";

const data = {
  description: "Verify your login to Abar Vault",
  title: "Verify Login | Abar Vault",
  url: "/auth/email",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vault.abargon.com"),
  title: data.title,
  description: data.description,
  openGraph: {
    title: data.title,
    description: data.description,
    url: data.url,
    siteName: "Abar Vault",
    images: [
      {
        url: "/_static/abargon-logo-transparent.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: data.title,
    description: data.description,
    images: ["/_static/abargon-logo-transparent.png"],
  },
};

export default async function EmailVerificationPage() {
  return <EmailVerificationClient />;
}
