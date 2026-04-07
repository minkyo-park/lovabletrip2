import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
  code: string;
  label?: string;
}

const CopyButton = ({ code, label }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button onClick={handleCopy} className="copy-btn" title={`${code} 복사`}>
      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      {copied ? "복사됨!" : label || code}
    </button>
  );
};

export default CopyButton;
