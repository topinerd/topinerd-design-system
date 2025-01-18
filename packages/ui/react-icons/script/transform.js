import { transform } from "@svgr/core";
import { readdir, readFile, writeFile } from "node:fs/promises";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

function toPascalCase(str) {
  return str
    .replace(/(^\w|-\w)/g, match =>
      match.charAt(match.length - 1).toUpperCase(),
    )
    .replace(/-/g, "");
}

const iconDir = resolve(__dirname, "../../../resources/design-icons/src");
const outputDir = resolve(__dirname, "../src/components");
const indexPath = resolve(outputDir, "../index.tsx");

let importStatements = "";
let exportComponents = [];

const files = await readdir(iconDir);

const customPlugin = {
  name: "tds/svgo",
  description: "change attribute of fill, stroke property",
  fn: () => {
    return {
      element: {
        enter: node => {
          if (node.name == "path" || node.name == "stroke") {
            if (node.attributes.fill) {
              if (node.attributes.fill !== "white") {
                node.attributes.fill = "currentColor";
              }
            }

            if (node.attributes.stroke) {
              node.attributes.stroke = "currentColor";
            }
          }
        },
      },
    };
  },
};

for (const file of files) {
  if (file.endsWith(".svg")) {
    const data = await readFile(resolve(iconDir, file), "utf-8");

    const componentName = `${toPascalCase(file.replace(/\.svg$/, ""))}`;

    const component = await transform(
      data,
      {
        typescript: true,
        plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
        svgoConfig: {
          plugins: [customPlugin],
        },
        template: ({ componentName, jsx }, { tpl }) => {
          return tpl`
        import * as React from 'react';
        import type { SVGProps } from 'react';
        
        const ${componentName} = ({ fill = "currentColor", stroke = "currentColor", ...props }: SVGProps<SVGSVGElement>) => (
          ${jsx}
        );
        
        export default ${componentName};
      `;
        },
      },
      { componentName },
    );

    const updatedComponent = component
      .replace(/fill="currentColor"/g, "fill={fill}")
      .replace(/stroke="currentColor"/g, "stroke={stroke}");

    const path = resolve(outputDir, `${componentName}.tsx`);

    await writeFile(path, updatedComponent);

    importStatements += `import ${componentName} from './components/${componentName}';\n`;
    exportComponents.push(componentName);
  }
}

const indexContent = `${importStatements}\nexport { ${exportComponents.join(", ")} };\n`;

await writeFile(indexPath, indexContent);
