"use client";
import { deleteProspect } from "@/actions/collect-prospect";
import { Prospect } from "@prisma/client";
import { Check, Copy, Trash } from "lucide-react";
import moment from "moment";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./alert-dialog";
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

const DeleteAction = ({ data }: Props) => {
  const [open, setOpen] = useState<true | false>(false);
  const [isLoading, setLoading] = useState<true | false>(false);
  const router = useRouter();

  const handleDelete = async () => {
    setLoading(true);

    try {
      await deleteProspect(data?.email);
      toast.success("Prospect deleted successfully! ✅");
      router.refresh();
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete prospect. Please try again. ❌");
    } finally {
      setLoading(false);
    }
  };
  return (
    <AlertDialog open={open} onOpenChange={(val) => setOpen(val)}>
      <AlertDialogTrigger>
        <Button size="icon" className="bg-red-500 hover:bg-red-500/80">
          <Trash />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            prospect and remove email from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button onClick={handleDelete} disabled={isLoading}>
            Continue
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
