"use client";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { isMapIterator } from "util/types";

const formSchema = z.object({
  phoneNumber: z.string().regex(/^\d{8}$/gi, {
    message: "must be a valid phone number.",
  }),
  remindPhone: z.boolean().default(false).optional(),
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handleRequest = (_items: z.infer<typeof formSchema>) => {};
export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: "",
      remindPhone: false,
    },
  });
  return (
    <div className="h-screen flex flex-col justify-between items-center">
      <div>{/* navbar */}</div>
      <div className="flex flex-col justify-center items-center p-5 m-5 border w-[450px] rounded-xl shadow-sm">
        {loading == true ? (
          <div className="flex-col gap-4 w-full flex items-center justify-center mt-72">
            <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
              <div className="w-16 h-16 border-4 border-transparent text-rose-500 text-2xl animate-spin flex items-center justify-center border-t-rose-500 rounded-full"></div>
            </div>
          </div>
        ) : (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleRequest)}
              className="flex flex-col"
            >
              <div className="mb-6 flex justify-center">
                <span className="font-semibold text-2xl">Нэвтрэх</span>
              </div>
              <div className="flex flex-col justify-center gap-3">
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="ml-1 text-[#888a99] text-sm">
                        Утасны дугаар
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="remindPhone"
                  render={({ field }) => (
                    <FormItem className="flex items-center justify-between">
                      <div>
                        <FormControl className="mt-2">
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <span className="ml-1 text-[#888a99] text-sm">
                          Утас сануулах
                        </span>
                      </div>
                      <Link
                        href={{
                          pathname: "/reset-password",
                        }}
                        className="text-[#888a99] text-sm"
                      >
                        Нууц үг мартсан?
                      </Link>
                    </FormItem>
                  )}
                />
                <Button type="submit" className="bg-[#ff3467] py-6">
                  Нэвтрэх
                </Button>
              </div>
              <div className="flex justify-between items-center my-8">
                <div className="flex-1">
                  <hr className="border-t-3 border-[#888a99]" />
                </div>
                <div className="mx-2 text-[#888a99] font-semibold text-sm">
                  эсвэл
                </div>
                <div className="flex-1">
                  <hr className="border-t-3 border-[#888a99]" />
                </div>
              </div>
              <div className="flex flex-col items-center gap-6 justify-center">
                <div>
                  <Button className="bg-[#cdcdcf] hover:bg-[#c1c1c3] px-40 py-6 text-gray-600 font-semibold shadow-none">
                    <Link
                      href={{
                        pathname: "/register",
                      }}
                    >
                      Бүхтгүүлэх
                    </Link>
                  </Button>
                </div>
                <div>
                  <p className="text-center text-sm space-x-1">
                    <span>
                      Утасны дугаараа оруулан нэвтрэх эсвэл бүртгүүлэх товчийг
                      дарж zary.mn вебсайтад нэвтэрснээр таныг тус вебсайтын{" "}
                    </span>
                    <Link
                      href={{
                        pathname: "/terms",
                      }}
                      className="text-[#ff3467]"
                    >
                      үйлчилгээний нөхцөл
                    </Link>
                    <span>болон</span>
                    <Link
                      href={{
                        pathname: "/policy",
                      }}
                      className="text-[#ff3467]"
                    >
                      нууцлалын бодлогыг
                    </Link>
                    <span>хүлээн зөвшөөрсөнд тооцно.</span>
                  </p>
                </div>
              </div>
            </form>
          </Form>
        )}
      </div>
      <div>{/*footer*/}</div>
    </div>
  );
}
