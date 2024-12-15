import type { FileData } from "../../shared/types/data";

/**
 * Finds all icon nodes within a given frame node.
 * An icon node is identified by being a Component
 * and having the word "icon" in its name (case-insensitive).
 *
 * @param frameNode - The frame node to search for icon nodes.
 * @returns An array of SceneNodes that represent the icon nodes found within the frame.
 */
function findIconNodes(frameNode: FrameNode): SceneNode[] {
  return frameNode.findAll(
    node => node.type === "COMPONENT" && node.name.includes("icon"),
  );
}

/**
 * Exports the given icon nodes as SVG strings.
 *
 * @param iconNodes - An array of SceneNodes representing the icons to export.
 * @returns A promise that resolves to an array of SVG strings for each icon.
 */
async function exportIconsAsSVG(
  iconNodes: SceneNode[],
): Promise<FileData<string>[]> {
  return Promise.all(
    iconNodes.map(async icon => {
      const svgData = await icon.exportAsync({ format: "SVG_STRING" });
      return { fileName: `${icon.name}.svg`, body: svgData };
    }),
  );
}

/**
 * Extracts all icons as SVG strings from the currently selected frame node.
 *
 * If a single frame node is selected, it will search for all icon nodes
 * (components or instances with "icon" in their name) within the frame
 * and export them as SVG strings.
 *
 * @returns A promise that resolves to an array of SVG strings for the icons.
 *          Returns undefined if no valid frame node is selected.
 */
export async function extractIcons(): Promise<FileData<string>[] | undefined> {
  const selection = figma.currentPage.selection;

  // Process only if a single frame is selected
  if (selection.length === 1 && selection[0]?.type === "FRAME") {
    const frameNode = selection[0] as FrameNode;
    const iconNodes = findIconNodes(frameNode);

    return exportIconsAsSVG(iconNodes);
  }
}
