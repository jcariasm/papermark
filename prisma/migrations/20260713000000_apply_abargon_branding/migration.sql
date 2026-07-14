WITH target_team AS (
  SELECT "id"
  FROM "Team"
  WHERE
    "id" = 'cmrh6dxd60000jp04mh7l6y10'
    OR "name" IN ('Abargon', 'Ábargon')
  ORDER BY
    CASE WHEN "id" = 'cmrh6dxd60000jp04mh7l6y10' THEN 0 ELSE 1 END
  LIMIT 1
)
INSERT INTO "Brand" (
  "id",
  "logo",
  "brandColor",
  "accentColor",
  "accentButtonColor",
  "applyAccentColorToDataroomView",
  "welcomeMessage",
  "customLinkPreviewEnabled",
  "linkPreviewTitle",
  "linkPreviewDescription",
  "linkPreviewImage",
  "linkPreviewFavicon",
  "defaultLanguage",
  "teamId",
  "createdAt",
  "updatedAt"
)
SELECT
  'abargon_global_brand_default',
  'https://vault.abargon.com/_static/abargon-logo-transparent.png',
  '#304050',
  '#C8D8F8',
  '#304050',
  false,
  'Bienvenido al vault seguro de Abargon.',
  true,
  'Abargon Vault',
  'Documentos seguros compartidos por Abargon.',
  'https://vault.abargon.com/_static/abargon-logo-transparent.png',
  'https://vault.abargon.com/favicon.ico',
  'es',
  target_team."id",
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
FROM target_team
ON CONFLICT ("teamId") DO UPDATE SET
  "logo" = EXCLUDED."logo",
  "brandColor" = EXCLUDED."brandColor",
  "accentColor" = EXCLUDED."accentColor",
  "accentButtonColor" = EXCLUDED."accentButtonColor",
  "applyAccentColorToDataroomView" = EXCLUDED."applyAccentColorToDataroomView",
  "welcomeMessage" = EXCLUDED."welcomeMessage",
  "customLinkPreviewEnabled" = EXCLUDED."customLinkPreviewEnabled",
  "linkPreviewTitle" = EXCLUDED."linkPreviewTitle",
  "linkPreviewDescription" = EXCLUDED."linkPreviewDescription",
  "linkPreviewImage" = EXCLUDED."linkPreviewImage",
  "linkPreviewFavicon" = EXCLUDED."linkPreviewFavicon",
  "defaultLanguage" = EXCLUDED."defaultLanguage",
  "updatedAt" = CURRENT_TIMESTAMP;
