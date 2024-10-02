"use client";
import { useCopyToClipboard } from "./useCopyToClipboard";

const CopyToClipboardButton = () => {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <div className="h-screen w-full flex justify-center items-center bg-red-200">
      <button
        onClick={() => copyToClipboard("Hello World")}
        className="bg-gray-950 text-white rounded-2xl px-4 py-2"
      >
        {isCopied ? "Copied!" : "Copy to Clipboard"}
      </button>
    </div>
  );
};

export default CopyToClipboardButton;
