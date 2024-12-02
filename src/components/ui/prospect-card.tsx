"use client";
import { Copy, Trash } from "lucide-react";
import { Button } from "./button";
import { Card, CardFooter, CardHeader, CardTitle } from "./card";

interface Props {
  email: string;
}

const ProspectCard = ({ email }: Props) => {
  return (
    <Card>
      <CardHeader>
        <div className="w-full flex justify-between">
          <CardTitle>Email</CardTitle>
          <div className="flex items-center gap-x-2">
            <Button size="icon" variant="outline">
              <Copy />
            </Button>
            <Button size="icon" className="bg-red-500 hover:bg-red-500/80">
              <Trash />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardFooter>{email}</CardFooter>
    </Card>
  );
};

export default ProspectCard;
