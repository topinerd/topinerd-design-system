import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadTokens } from "../apis/token";
import { postMessageToPlugin } from "../lib/messaging";
import { ACTION } from "../../shared/constants";

import type { FileData } from "../../shared/types/data";
import type { TokenBody } from "../../shared/types/token";
import type { ActionTypeMap } from "../../shared/types/action";

export function useUploadTokens() {
  const [isUplaoding, setIsUploading] = useState(false);
  const navigate = useNavigate();

  const upload = async (
    accessToken: string,
    designTokens: FileData<TokenBody>[],
  ) => {
    const url = await uploadTokens(accessToken, designTokens);
    setIsUploading(false);
    navigate(`/complete?url=${url}`);
  };

  const requestDesignTokens = () => {
    setIsUploading(true);
    postMessageToPlugin<ActionTypeMap["extract-tokens"]>({
      type: ACTION.EXTRACT_TOKEN,
    });
  };

  return {
    isUplaoding,
    requestDesignTokens,
    upload,
  };
}
