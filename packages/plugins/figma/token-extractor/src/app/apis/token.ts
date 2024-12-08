import { Octokit } from "@octokit/rest";
import {
  getLatestCommitSha,
  createNewBranch,
  getBaseTreeSha,
  createTree,
  createCommit,
  updateBranch,
  createPullRequest,
} from "./github-utils";
import { tokenConfig } from "../config";

import type { FileData } from "../../shared/types/data";
import type { TokenBody } from "../../shared/types/token";

export async function uploadTokens(
  accessToken: string,
  designTokenFiles: FileData<TokenBody>[],
) {
  const octokit = new Octokit({ auth: accessToken });

  try {
    // 최신 커밋 SHA 가져오기
    const latestCommitSha = await getLatestCommitSha(octokit, tokenConfig);

    // 새 브랜치 생성
    const newBranch = await createNewBranch(
      octokit,
      tokenConfig,
      latestCommitSha,
    );

    // 기본 트리 SHA 가져오기
    const baseTreeSha = await getBaseTreeSha(
      octokit,
      tokenConfig,
      latestCommitSha,
    );

    const files: FileData<string>[] = designTokenFiles.map(file => ({
      fileName: file.fileName,
      body: JSON.stringify(file.body, null, 2),
    }));

    // 새 트리 생성
    const newTreeSha = await createTree(
      octokit,
      tokenConfig,
      baseTreeSha,
      files,
    );

    // const jsonContent = JSON.stringify(file.body, null, 2);

    // 커밋 생성
    const newCommitSha = await createCommit(
      octokit,
      tokenConfig,
      newTreeSha,
      latestCommitSha,
    );

    // 브랜치 업데이트
    await updateBranch(octokit, tokenConfig, newBranch, newCommitSha);

    // Pull Request 생성
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
