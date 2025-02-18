"use client";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import Link from 'next/link'
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";




const formSchema = z.object({
    phoneNumber: z.string().regex(/^\d{8}$/gi, {
        message: "must be a valid phone number."
    }),
    remindPhone: z.boolean().default(false).optional()
})

const handleRequest = (items: z.infer<typeof formSchema>) => {
    console.log(items);
}
export default function Home() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            phoneNumber: "",
            remindPhone: false
        }
    })
    return (
        <div className="h-screen flex flex-col justify-between items-center">
            <div>
                {/* navbar */}
            </div>
            <div className="flex flex-col justify-center items-center p-5 m-5 border w-[450px]">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleRequest)} className="flex flex-col">
                        <div className="mb-10">
                            <span>
                                Нэвтрэх
                            </span>
                        </div>
                        <div className="flex flex-col justify-center gap-3">
                            <FormField

                                control={form.control}
                                name="phoneNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Утасны дугаар</FormLabel>
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
                                                pathname: '/signup',
                                            }}
                                            className="text-[#888a99] text-sm font-semibold">
                                            
                                            Нууц үг мартсан?
                                        </Link>
                                    </FormItem>
                                )}
                            />

                            <Button type="submit" className="bg-[#ff3467] py-6">Нэвтрэх</Button>
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
                                <Button className="bg-[#ff3467] px-40 py-6">
                                    <Link
                                        href={{
                                            pathname: '/signup',
                                        }}>
                                        Бүхтгүүлэх
                                    </Link>
                                </Button>
                            </div>
                            <div>
                                <p className="text-center">
                                    Утасны дугаараа оруулан нэвтрэх эсвэл бүртгүүлэх товчийг дарж zary.mn вебсайтад нэвтэрснээр таныг тус вебсайтынүйлчилгээний нөхцөлболоннууцлалын бодлогыгхүлээн зөвшөөрсөнд тооцно.
                                </p>
                            </div>
                        </div>

                    </form>
                </Form>
            </div>
            <div>
                { /*footer*/}
            </div>
        </div>
    );
}
