import { Octokit } from "@octokit/rest";
import {
  createCommit,
  createNewBranch,
  createPullRequest,
  createTree,
  getBaseTreeSha,
  getLatestCommitSha,
  updateBranch,
} from "./github";
import { iconConfig } from "../config";

import type { FileData } from "../../shared/types/data";

export async function uploadIcons(
  accessToken: string,
  designIconFiles: FileData<string>[],
) {
  const octokit = new Octokit({ auth: accessToken });

  try {
    const latestCommitSha = await getLatestCommitSha(octokit, iconConfig);

    const newBranch = await createNewBranch(
      octokit,
      iconConfig,
      latestCommitSha,
    );

    const baseTreeSha = await getBaseTreeSha(
      octokit,
      iconConfig,
      latestCommitSha,
    );

    const files: FileData<string>[] = designIconFiles.map(file => ({
      fileName: file.fileName,
      body: file.body,
    }));

    const newTreeSha = await createTree(
      octokit,
      iconConfig,
      baseTreeSha,
      files,
    );

    const newCommitSha = await createCommit(
      octokit,
      iconConfig,
      newTreeSha,
      latestCommitSha,
    );

    await updateBranch(octokit, iconConfig, newBranch, newCommitSha);

    const pullRequestUrl = await createPullRequest(
      octokit,
      iconConfig,
      newBranch,
    );

    console.log(`Pull request created: ${pullRequestUrl}`);
    return pullRequestUrl;
  } catch (error) {
    console.error("An error occurred during the upload process:", error);
    throw error;
  }
}
