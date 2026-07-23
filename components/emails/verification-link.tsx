import React from "react";

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Section,
  Tailwind,
  Text,
} from "react-email";

const VerificationCodeEmail = ({
  email = "user@example.com",
  code = "45PFSNUDYW",
  url,
}: {
  email?: string;
  code?: string;
  url?: string;
}) => {
  const magicLinkUrl = url ?? "";
  const isMagicLink = Boolean(magicLinkUrl);

  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-10 max-w-[600px] rounded border border-solid border-neutral-200 px-10 py-5">
            <Section className="mt-8">
              <Text className="text-2xl font-bold tracking-tighter">
                Abar Vault
              </Text>
            </Section>
            <Heading className="mx-0 my-7 p-0 text-xl font-semibold text-black">
              {isMagicLink ? "Sign in to Abar Vault" : "Your login code"}
            </Heading>
            <Text className="text-sm leading-6 text-neutral-600">
              {isMagicLink
                ? "A sign-in link was requested for Abar Vault. Use this link to continue:"
                : "A login code was requested for Abar Vault. Use this code to continue:"}
            </Text>
            {isMagicLink ? (
              <>
                <Section className="my-6 text-center">
                  <Button
                    className="rounded bg-black px-5 py-3 text-sm font-semibold text-white"
                    href={magicLinkUrl}
                  >
                    Sign in to Abar Vault
                  </Button>
                </Section>
                <Text className="text-sm leading-6 text-neutral-600">
                  Or copy and paste this link into your browser:{" "}
                  <Link className="text-black underline" href={magicLinkUrl}>
                    {magicLinkUrl}
                  </Link>
                </Text>
              </>
            ) : (
              <Section className="my-6">
                <Text
                  className="m-0 rounded-lg bg-neutral-100 px-4 py-3 text-center text-xl font-semibold text-black"
                  style={{
                    fontFamily:
                      "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
                    letterSpacing: "0.15em",
                  }}
                >
                  {code}
                </Text>
              </Section>
            )}
            <Text className="text-sm leading-6 text-neutral-600">
              {isMagicLink
                ? "This sign-in link will expire shortly."
                : "This code will expire in 15 minutes."}
            </Text>
            <Text className="mt-4 text-sm leading-5 text-neutral-500">
              This email was intended for{" "}
              <span className="text-black">{email}</span>. If you didn&apos;t
              request this code, you can safely ignore this email.
            </Text>
            <Hr className="my-6" />
            <Section className="text-gray-400">
              <Text className="text-xs text-neutral-500">
                Abar Vault
                <br />
                Ábargon
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VerificationCodeEmail;
