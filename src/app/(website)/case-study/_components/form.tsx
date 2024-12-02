"use client";

import { collecProspect } from "@/actions/collect-prospect";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronsRight, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
});

const CaseStudyForm = () => {
  const [isLoading, setLoading] = useState<true | false>(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const { push } = useRouter();

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setLoading(true);
    const res = await collecProspect(values?.email);

    if (res.success) {
      setLoading(false);
      push("/video");
    } else {
      setLoading(false);
      toast.error("Failed to submit!");
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Enter your email address"
                  {...field}
                  className="h-[50px] text-[20px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button
          type="submit"
          className="bg-[#0174C7] hover:bg-blue-primary/80 w-full h-[43px] flex justify-center items-center text-[18px] font-raleway text-white font-bold gap-x-2 mt-[20px] rounded-md disabled:opacity-60"
          disabled={isLoading}
        >
          Apply for Your EIN Now{" "}
          {isLoading ? (
            <Loader2 className="animate-spin " />
          ) : (
            <ChevronsRight />
          )}
        </button>
      </form>
    </Form>
  );
};

export default CaseStudyForm;
