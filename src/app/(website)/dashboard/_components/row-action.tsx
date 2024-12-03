"use client";
import { Button } from "@/components/ui/button";
import { Prospect } from "@prisma/client";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import DeleteAction from "./delete-action";

interface Props {
  data: Prospect;
}

const RowAction = ({ data }: Props) => {
  const [isCopied, setCopied] = useState<true | false>(false);

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(data?.email);

    setTimeout(() => {
      setCopied(false);
    }, 6000);
  };
  return (
    <div className="flex items-center gap-x-2">
      <Button
        size="icon"
        variant="outline"
        onClick={handleCopy}
        disabled={isCopied}
      >
        {isCopied ? <Check /> : <Copy />}
      </Button>
      <DeleteAction data={data} />
    </div>
  );
};

export default RowAction;
