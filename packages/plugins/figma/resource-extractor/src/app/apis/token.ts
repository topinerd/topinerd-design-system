import { Octokit } from "@octokit/rest";
import {
  getLatestCommitSha,
  createNewBranch,
  getBaseTreeSha,
  createTree,
  createCommit,
  updateBranch,
  createPullRequest,
} from "./github";
import { tokenConfig } from "../config";

import type { FileData } from "../../shared/types/data";
import type { TokenBody } from "../../shared/types/token";

export async function uploadTokens(
  accessToken: string,
  designTokenFiles: FileData<TokenBody>[],
) {
  const octokit = new Octokit({ auth: accessToken });

  try {
    const latestCommitSha = await getLatestCommitSha(octokit, tokenConfig);

    const newBranch = await createNewBranch(
      octokit,
      tokenConfig,
      latestCommitSha,
    );

    const baseTreeSha = await getBaseTreeSha(
      octokit,
      tokenConfig,
      latestCommitSha,
    );

    const files: FileData<string>[] = designTokenFiles.map(file => ({
      fileName: file.fileName,
      body: JSON.stringify(file.body, null, 2),
    }));

    const newTreeSha = await createTree(
      octokit,
      tokenConfig,
      baseTreeSha,
      files,
    );

    const newCommitSha = await createCommit(
      octokit,
      tokenConfig,
      newTreeSha,
      latestCommitSha,
    );

    await updateBranch(octokit, tokenConfig, newBranch, newCommitSha);

    const pullRequestUrl = await createPullRequest(
      octokit,
      tokenConfig,
      newBranch,
    );

    console.log(`Pull request created: ${pullRequestUrl}`);
    return pullRequestUrl;
  } catch (error) {
    console.error("An error occurred during the upload process:", error);
    throw error;
  }
}
