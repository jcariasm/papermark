import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type RequestListSettingsCardProps = {
  dataroomId: string;
  teamId: string;
  requestListEnabled?: boolean;
};

export function RequestListSettingsCard(_props: RequestListSettingsCardProps) {
  return (
    <Card className="bg-transparent">
      <CardHeader>
        <CardTitle>Request List</CardTitle>
        <CardDescription>
          Request lists are not enabled in this open-source deployment.
        </CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        Core data room sharing continues to work without this enterprise
        feature.
      </CardContent>
    </Card>
  );
}
