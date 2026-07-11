import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LANGUAGE_OPTIONS = [
  { value: "en", label: "English" },
  { value: "es", label: "Spanish" },
  { value: "fr", label: "French" },
  { value: "de", label: "German" },
  { value: "pt", label: "Portuguese" },
];

export function VisitorLanguageCard({
  defaultLanguage,
  onDefaultLanguageChange,
  hasAccess,
}: {
  defaultLanguage: string;
  onDefaultLanguageChange: (value: string) => void;
  hasAccess: boolean;
}) {
  return (
    <div className="space-y-2">
      <Label>Visitor language</Label>
      <Select
        value={defaultLanguage || "en"}
        onValueChange={onDefaultLanguageChange}
        disabled={!hasAccess}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent>
          {LANGUAGE_OPTIONS.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {!hasAccess ? (
        <p className="text-sm text-muted-foreground">
          Visitor language customization requires a Data Rooms plan.
        </p>
      ) : null}
    </div>
  );
}
