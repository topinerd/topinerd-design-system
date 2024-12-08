const prBody = `> **Warning:** This PR was automatically generated.

## Changes
This pull request updates the design tokens in the \`packages/design-tokens/src\` directory. These changes reflect the latest designs from Figma.

### Next Steps
1. Please review the changes carefully.
2. Test the updated design tokens in your local environment.
3. If everything looks good, approve and merge this PR.

If you have any questions or concerns, please comment on this PR or contact the design team.

---
*This is an automated process. If you encounter any issues, please report them to the development team.*`;

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
  commitMsg: "sync design tokens with latest figma updates",
  prTitle: "sync design tokens with latest figma updates",
  prBody,
};

export const iconConfig: Config = {
  owner: "topinerd",
  repo: "topinerd-design-system",
  dir: "packages/resources/icons/src",
  baseBranch: "main",
  newBranch: "extract-icons",
  commitMsg: "sync design icons with latest figma updates",
  prTitle: "sync design icons with latest figma updates",
  prBody,
};
