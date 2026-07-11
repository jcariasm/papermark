export function BrandingSocialPreviewReadonly({
  title,
  description,
  image,
  favicon,
}: {
  title?: string | null;
  description?: string | null;
  image?: string | null;
  favicon?: string | null;
}) {
  return (
    <div className="overflow-hidden rounded-lg border bg-white dark:bg-gray-900">
      {image ? (
        <img className="h-40 w-full object-cover" src={image} alt="" />
      ) : (
        <div className="h-40 bg-gray-100 dark:bg-gray-800" />
      )}
      <div className="space-y-2 p-4">
        <div className="flex items-center gap-2">
          {favicon ? <img className="h-4 w-4" src={favicon} alt="" /> : null}
          <p className="text-xs uppercase text-muted-foreground">
            vault.abargon.com
          </p>
        </div>
        <p className="font-medium">{title || "Shared link"}</p>
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {description || "Preview how this link will appear when shared."}
        </p>
      </div>
    </div>
  );
}
