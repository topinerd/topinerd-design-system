import React from "react";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

import { useUploadTokens } from "../../hooks/use-upload-tokens";
import { Label } from "../../components/label";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { ACTION } from "../../../shared/constants";

import type { FC } from "react";
import type {
  ActionPayloadMap,
  ActionTypeMap,
} from "../../../shared/types/action";
import type { PluginMessage } from "../../../shared/types/plugin";

const ExtractToken: FC = () => {
  const { isUplaoding, requestDesignTokens, upload } = useUploadTokens();
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    window.onmessage = async (
      event: MessageEvent<
        PluginMessage<
          ActionTypeMap["extract-tokens"],
          ActionPayloadMap["extract-tokens"]
        >
      >,
    ) => {
      const { type, payload } = event.data.pluginMessage;
      if (type === ACTION.EXTRACT_TOKEN && payload) {
        upload(accessToken, payload);
      }
    };
  }, [accessToken]);

  return (
    <div className="flex flex-col gap-2 mx-3 my-2">
      <p className="text-xs">
        You will need a token with access rights to upload to the GitHub
        repository.
      </p>
      <Label htmlFor="token">Token</Label>
      <Input
        id="token"
        value={accessToken}
        onChange={e => setAccessToken(e.target.value)}
      />
      <Button
        disabled={isUplaoding || !accessToken}
        onClick={requestDesignTokens}
        size="sm"
      >
        {isUplaoding ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Uploading
          </>
        ) : (
          "Extract"
        )}
      </Button>
    </div>
  );
};

export default ExtractToken;
