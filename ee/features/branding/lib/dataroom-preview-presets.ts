export function getDataroomPreviewDataset() {
  const folders = [
    {
      id: "preview-financials",
      name: "Financials",
      path: "Financials",
      parentId: null,
      dataroomId: "preview-room",
      orderIndex: 0,
      hierarchicalIndex: "1",
      icon: null,
      color: null,
      _count: { documents: 2, childFolders: 0 },
    },
    {
      id: "preview-legal",
      name: "Legal",
      path: "Legal",
      parentId: null,
      dataroomId: "preview-room",
      orderIndex: 1,
      hierarchicalIndex: "2",
      icon: null,
      color: null,
      _count: { documents: 1, childFolders: 0 },
    },
  ];

  const documents = [
    previewDocument("doc-overview", "Company overview.pdf", null, "1"),
    previewDocument("doc-model", "Operating model.xlsx", "Financials", "1.1"),
    previewDocument("doc-cap-table", "Cap table.pdf", "Financials", "1.2"),
    previewDocument("doc-nda", "Mutual NDA.pdf", "Legal", "2.1"),
  ];

  return { folders, documents };
}

function previewDocument(
  id: string,
  name: string,
  folderName: string | null,
  hierarchicalIndex: string,
) {
  return {
    id,
    name,
    folderName,
    dataroomDocumentId: `${id}-room`,
    downloadOnly: false,
    canDownload: true,
    hierarchicalIndex,
    versions: [
      {
        id: `${id}-version`,
        versionNumber: 1,
        type: "pdf",
        hasPages: true,
        file: null,
      },
    ],
  };
}
