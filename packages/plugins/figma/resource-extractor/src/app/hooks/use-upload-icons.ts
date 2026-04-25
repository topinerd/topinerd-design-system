import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadIcons } from "../apis/icon";

import type { FileData } from "../../shared/types/data";

export function useUploadIcons() {
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();

  const upload = async (
    accessToken: string,
    designIcons: FileData<string>[],
  ) => {
    setIsUploading(true);

    try {
      const url = await uploadIcons(accessToken, designIcons);
      navigate(`/complete?url=${url}`);
    } finally {
      setIsUploading(false);
    }
  };

  return {
    isUploading,
    upload,
  };
}
