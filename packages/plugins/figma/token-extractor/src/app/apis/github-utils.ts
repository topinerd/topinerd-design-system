import { Octokit } from "@octokit/rest";
import { v4 as uuidv4 } from "uuid";

import type { Config } from "../config";
import type { FileData } from "../../shared/types/data";

export async function getLatestCommitSha(
  octokit: Octokit,
  config: Config,
): Promise<string> {
  const { owner, repo, baseBranch } = config;
  const { data: refData } = await octokit.git.getRef({
    owner,
    repo,
    ref: `heads/${baseBranch}`,
  });
  return refData.object.sha;
}

export async function createNewBranch(
  octokit: Octokit,
  config: Config,
  latestCommitSha: string,
): Promise<string> {
  const { owner, repo, newBranch } = config;
  const newBranchWithId = `${newBranch}-${uuidv4()}`;
  await octokit.git.createRef({
    owner,
    repo,
    ref: `refs/heads/${newBranchWithId}`,
    sha: latestCommitSha,
  });
  return newBranchWithId;
}

export async function getBaseTreeSha(
  octokit: Octokit,
  config: Config,
  latestCommitSha: string,
): Promise<string> {
  const { owner, repo } = config;
  const { data: baseTreeData } = await octokit.git.getCommit({
    owner,
    repo,
    commit_sha: latestCommitSha,
  });
  return baseTreeData.tree.sha;
}

export async function createTree(
  octokit: Octokit,
  config: Config,
  baseTreeSha: string,
  files: FileData<string>[],
): Promise<string> {
  const { owner, repo, dir } = config;
  const tree = await Promise.all(
    files.map(async file => {
      const filePath = `${dir}/${file.fileName}`;

      const { data: blobData } = await octokit.git.createBlob({
        owner,
        repo,
        content: file.body,
        encoding: "utf-8",
      });

      return {
        path: filePath,
        mode: "100644" as const,
        type: "blob" as const,
        sha: blobData.sha,
      };
    }),
  );

  const { data: newTree } = await octokit.git.createTree({
    owner,
    repo,
    base_tree: baseTreeSha,
    tree,
  });

  return newTree.sha;
}

export async function createCommit(
  octokit: Octokit,
  config: Config,
  newTreeSha: string,
  latestCommitSha: string,
): Promise<string> {
  const { owner, repo, commitMsg } = config;
  const { data: newCommit } = await octokit.git.createCommit({
    owner,
    repo,
    message: commitMsg,
    tree: newTreeSha,
    parents: [latestCommitSha],
  });
  return newCommit.sha;
}

export async function updateBranch(
  octokit: Octokit,
  config: Config,
  newBranch: string,
  newCommitSha: string,
): Promise<void> {
  const { owner, repo } = config;
  await octokit.git.updateRef({
    owner,
    repo,
    ref: `heads/${newBranch}`,
    sha: newCommitSha,
  });
}

export async function createPullRequest(
  octokit: Octokit,
  config: Config,
  newBranch: string,
): Promise<string> {
  const { owner, repo, baseBranch, prTitle, prBody } = config;
  const { data: pullRequest } = await octokit.pulls.create({
    owner,
    repo,
    head: newBranch,
    base: baseBranch,
    title: prTitle,
    body: prBody,
  });
  return pullRequest.html_url;
}
