import { deleteProspect } from "@/actions/collect-prospect";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Prospect } from "@prisma/client";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

interface Props {
  data: Prospect;
}

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
    <AlertDialog open={open} onOpenChange={(val: boolean) => setOpen(val)}>
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

export default DeleteAction;
