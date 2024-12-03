"use client";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

const EmailCopy = () => {
  const [isCopied, setIsCopied] = useState<true | false>(false);

  const onCopy = () => {
    setIsCopied(true);
    navigator.clipboard.writeText("support@ein.saidurrahman.org");

    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  };
  return (
    <div>
      <h3 className="font-semibold">Email:</h3>
      <p className="">
        support@ein.saidurrahman.org
        <Button size="icon" variant="outline" className="ml-2" onClick={onCopy}>
          {isCopied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-3" />
          )}
        </Button>
      </p>
    </div>
  );
};

export default EmailCopy;
