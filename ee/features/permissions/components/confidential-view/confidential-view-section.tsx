import { useEffect, useState } from "react";

import { DEFAULT_LINK_TYPE } from "@/components/links/link-sheet";
import LinkItem from "@/components/links/link-sheet/link-item";
import { LinkUpgradeOptions } from "@/components/links/link-sheet/link-options";

export default function ConfidentialViewSection({
  data,
  setData,
  isAllowed,
  handleUpgradeStateChange,
}: {
  data: DEFAULT_LINK_TYPE;
  setData: React.Dispatch<React.SetStateAction<DEFAULT_LINK_TYPE>>;
  isAllowed: boolean;
  handleUpgradeStateChange: ({
    state,
    trigger,
    plan,
    highlightItem,
  }: LinkUpgradeOptions) => void;
}) {
  const [enabled, setEnabled] = useState<boolean>(false);

  useEffect(() => {
    setEnabled(Boolean(data.enableConfidentialView));
  }, [data.enableConfidentialView]);

  const toggleConfidentialView = () => {
    const nextEnabled = !enabled;
    setData({
      ...data,
      enableConfidentialView: nextEnabled,
    });
    setEnabled(nextEnabled);
  };

  return (
    <div className="pb-5">
      <LinkItem
        title="Confidential view"
        tooltipContent="Add a visible confidentiality layer over viewed content."
        link="https://www.papermark.com/help"
        enabled={enabled}
        action={toggleConfidentialView}
        isAllowed={isAllowed}
        requiredPlan="business"
        upgradeAction={() =>
          handleUpgradeStateChange({
            state: true,
            trigger: "link_sheet_confidential_view_section",
            plan: "Business",
            highlightItem: ["confidential-view"],
          })
        }
      />
    </div>
  );
}
