type UseViewerRequestListArgs = {
  linkId?: string;
  dataroomId?: string;
  viewerId?: string;
  isPreview?: boolean;
};

export function useViewerRequestList(_args: UseViewerRequestListArgs) {
  return {
    enabled: false,
    isLoading: false,
    error: null,
  };
}
