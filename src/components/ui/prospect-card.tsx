"use client";
import DeleteAction from "@/app/(website)/dashboard/_components/delete-action";
import { Prospect } from "@prisma/client";
import { Check, Copy } from "lucide-react";
import moment from "moment";
import { useState } from "react";
import { Button } from "./button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";

interface Props {
  data: Prospect;
}

const ProspectCard = ({ data }: Props) => {
  const [isCopied, setCopied] = useState<true | false>(false);

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(data?.email);

    setTimeout(() => {
      setCopied(false);
    }, 6000);
  };

  return (
    <Card className="shadow-none">
      <CardHeader>
        <div className="w-full flex justify-between">
          <CardTitle>Email</CardTitle>
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
        </div>
      </CardHeader>
      <CardContent className="text-[14px] font-medium">
        {data?.email}
      </CardContent>
      <CardFooter>
        <p className="text-[12px]">{moment(data?.createdAt).fromNow()}</p>
      </CardFooter>
    </Card>
  );
};

export default ProspectCard;
