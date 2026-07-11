import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

export function BrandingLinkPreviewForm({
  enabled,
  onEnabledChange,
  title,
  onTitleChange,
  description,
  onDescriptionChange,
  imageUrl,
  onImageChange,
  faviconUrl,
  onFaviconChange,
  inheritanceHint,
}: {
  enabled: boolean;
  onEnabledChange: (value: boolean) => void;
  title: string;
  onTitleChange: (value: string) => void;
  description: string;
  onDescriptionChange: (value: string) => void;
  imageUrl: string | null;
  onImageChange: (value: string | null) => void;
  faviconUrl: string | null;
  onFaviconChange: (value: string | null) => void;
  inheritanceHint?: string;
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <Label htmlFor="link-preview-enabled">Custom link preview</Label>
          {inheritanceHint ? (
            <p className="mt-1 text-sm text-muted-foreground">
              {inheritanceHint}
            </p>
          ) : null}
        </div>
        <Switch
          id="link-preview-enabled"
          checked={enabled}
          onCheckedChange={onEnabledChange}
        />
      </div>
      {enabled ? (
        <div className="space-y-3">
          <div className="space-y-1.5">
            <Label htmlFor="link-preview-title">Title</Label>
            <Input
              id="link-preview-title"
              value={title}
              onChange={(event) => onTitleChange(event.target.value)}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="link-preview-description">Description</Label>
            <Textarea
              id="link-preview-description"
              value={description}
              onChange={(event) => onDescriptionChange(event.target.value)}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="link-preview-image">Image URL</Label>
            <Input
              id="link-preview-image"
              value={imageUrl ?? ""}
              onChange={(event) => onImageChange(event.target.value || null)}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="link-preview-favicon">Favicon URL</Label>
            <Input
              id="link-preview-favicon"
              value={faviconUrl ?? ""}
              onChange={(event) => onFaviconChange(event.target.value || null)}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
