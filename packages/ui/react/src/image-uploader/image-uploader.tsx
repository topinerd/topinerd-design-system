import * as React from "react";
import { imageUploader } from "./image-uploader.css";

type ImageUploaderHookOptions = {
  /**
   * Specifies whether the uploader allows selecting single or multiple files.
   */
  mode: "single" | "multiple";
};

interface UseImageUploaderProps {
  /**
   * A ref object pointing to the input element of type "file".
   */

  ref: React.RefObject<HTMLInputElement>;

  /**
   * Options to configure the behavior of the image uploader.
   */
  options: ImageUploaderHookOptions;
}

const useImageUploader = (props: UseImageUploaderProps): RenderProps => {
  const {
    ref,
    options: { mode },
  } = props;

  const [files, setFiles] = React.useState<File[]>([]);

  const handleClick = () => {
    ref.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (!selectedFiles) return;

    if (mode === "single") {
      setFiles(selectedFiles.length ? [selectedFiles[0]] : []);
    }

    if (mode === "multiple") {
      setFiles(prev => [...prev, ...Array.from(selectedFiles)]);
    }
  };

  const handleDeleteByIndex = (target: number) => {
    setFiles(prev => prev.filter((_, index) => index !== target));
  };

  const handleDeleteAll = () => {
    setFiles([]);
  };

  return {
    files,
    handleClick,
    handleChange,
    handleDeleteByIndex,
    handleDeleteAll,
  };
};

type RenderProps = {
  files: File[];
  handleClick: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDeleteByIndex: (target: number) => void;
  handleDeleteAll: () => void;
};

interface ImageUploaderProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * A render function that receives props for rendering custom UI elements.
   */
  render: (props: RenderProps) => React.ReactNode;

  /**
   * Specifies whether the uploader allows selecting single or multiple files.
   */
  mode?: "single" | "multiple";
}

const ImageUploader = React.forwardRef<HTMLInputElement, ImageUploaderProps>(
  ({ render, mode = "single", ...props }) => {
    const ref = React.useRef<HTMLInputElement | null>(null);
    const renderProps = useImageUploader({
      ref,
      options: {
        mode,
      },
    });

    return (
      <>
        <input
          className={imageUploader}
          ref={ref}
          type="file"
          multiple={mode === "multiple" ? true : false}
          onChange={renderProps.handleChange}
          {...props}
        />
        {render(renderProps)}
      </>
    );
  },
);
ImageUploader.displayName = "ImageUploader";

export { ImageUploader };
export type {
  ImageUploaderHookOptions,
  UseImageUploaderProps,
  RenderProps,
  ImageUploaderProps,
};
