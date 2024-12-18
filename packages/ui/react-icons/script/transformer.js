import { transform } from "@svgr/core";
import { readdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "path";

function toPascalCase(str) {
  return str
    .replace(/(^\w|-\w)/g, match =>
      match.charAt(match.length - 1).toUpperCase(),
    )
    .replace(/-/g, "");
}

const iconDir = resolve(
  import.meta.dirname,
  "../../../resources/design-icons/src",
);
const outputDir = resolve(import.meta.dirname, "../src/components");
const indexPath = resolve(outputDir, "../index.tsx");

let importStatements = "";
let exportComponents = [];

const files = await readdir(iconDir);

for (const file of files) {
  if (file.endsWith(".svg")) {
    const data = await readFile(resolve(iconDir, file), "utf-8");

    const name = `${toPascalCase(file.replace(/\.svg$/, ""))}`;

    const component = await transform(
      data,
      {
        typescript: true,
        plugins: ["@svgr/plugin-jsx"],
      },
      { componentName: name },
    );

    const path = resolve(outputDir, `${name}.tsx`);

    await writeFile(path, component);

    importStatements += `import ${name} from './components/${name}';\n`;
    exportComponents.push(name);
  }
}

const indexContent = `${importStatements}\nexport { ${exportComponents.join(", ")} };\n`;

await writeFile(indexPath, indexContent);
