function generatePrBody(type: string, directory: string): string {
  return `> **Warning:** This PR was automatically generated.

## Changes
This pull request updates the ${type} in the \`${directory}\` directory. These changes reflect the latest designs from Figma.

### Next Steps
1. Please review the changes carefully.
2. Test the updated ${type} in your local environment.
3. If everything looks good, approve and merge this PR.

---`;
}

export type Config = {
  owner: string;
  repo: string;
  dir: string;
  baseBranch: string;
  newBranch: string;
  commitMsg: string;
  prTitle: string;
  prBody: string;
};

export const tokenConfig: Config = {
  owner: "topinerd",
  repo: "topinerd-design-system",
  dir: "packages/resources/design-tokens/src",
  baseBranch: "main",
  newBranch: "extract-tokens",
  commitMsg: "Sync design tokens with latest Figma updates",
  prTitle: "Sync design tokens with latest Figma updates",
  prBody: generatePrBody(
    "design tokens",
    "packages/resources/design-tokens/src",
  ),
};

export const iconConfig: Config = {
  owner: "topinerd",
  repo: "topinerd-design-system",
  dir: "packages/resources/design-icons/src",
  baseBranch: "main",
  newBranch: "extract-icons",
  commitMsg: "Sync design icons with latest Figma updates",
  prTitle: "Sync design icons with latest Figma updates",
  prBody: generatePrBody("design icons", "packages/resources/icons/src"),
};
