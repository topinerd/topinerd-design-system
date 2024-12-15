import React from "react";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

import { useUploadIcons } from "../../hooks/use-upload-icons";
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
import type { FileData } from "../../../shared/types/data";

const ExtractIcon: FC = () => {
  const { isUploading, upload } = useUploadIcons();
  const [accessToken, setAccessToken] = useState("");
  const [iconData, setIconData] = useState<FileData<string>[] | undefined>(
    undefined,
  );

  useEffect(() => {
    window.onmessage = async (
      event: MessageEvent<
        PluginMessage<
          ActionTypeMap["extract-icons"],
          ActionPayloadMap["extract-icons"]
        >
      >,
    ) => {
      const { type, payload } = event.data.pluginMessage;
      if (type === ACTION.EXTRACT_ICON && payload) {
        setIconData(payload);
      } else {
        setIconData(undefined);
      }
    };
  }, [accessToken]);

  return (
    <div className="flex flex-col gap-2 mx-3 my-2">
      <p className="text-xs">
        You will need a token with access rights to upload to the GitHub
        repository.
      </p>
      <Label htmlFor="icon">Icon</Label>
      <Input
        id="icon"
        value={accessToken}
        onChange={e => setAccessToken(e.target.value)}
      />
      <Button
        disabled={isUploading || !accessToken || iconData === undefined}
        onClick={() => upload(accessToken, iconData as FileData<string>[])}
        size="sm"
      >
        {isUploading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Uploading
          </>
        ) : (
          "Extract"
        )}
      </Button>
      <p className="text-xs text-red-600">
        {iconData === undefined
          ? "Please select an icon frame."
          : `Ready to extract ${iconData.length} icons.`}
      </p>
    </div>
  );
};

export default ExtractIcon;
