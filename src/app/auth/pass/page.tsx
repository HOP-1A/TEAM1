"use client";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import Link from 'next/link'
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";


const formSchema = z.object({
    phoneNumber: z.string().regex(/^\d{8}$/gi, {
        message: "must be a valid phone number."
    }),
    password: z.string().optional(),
    remindPhone: z.boolean().default(false).optional()
})

const handleRequest = (items: z.infer<typeof formSchema>) => {
    console.log(items);
    /*
    REQUEST TO SERVER
    */
}
export default function Home() {
    const [formIsValid, setFormIsValid] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState<string>();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            phoneNumber: phoneNumber,
            password: "",
            remindPhone: false
        }
    })

    const { formState: { isValid } } = form;

    useEffect(() => {
        setFormIsValid(!isValid);
    }, [isValid]);

    useEffect(() => {
        setPhoneNumber(localStorage.getItem("temp-number") ?? '');
        console.log(phoneNumber);

    }, []);

    return (
        <div className="h-screen flex flex-col justify-between items-center">
            <div>
                {/* navbar */}
            </div>
            <div className="flex flex-col justify-center items-center p-5 m-5 border w-[450px] rounded-xl shadow-sm">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleRequest)} className="flex flex-col">
                        <div className="mb-6 flex justify-center">
                            <span className="font-semibold text-2xl">
                                Нэвтрэх
                            </span>
                        </div>
                        <div className="flex flex-col justify-center gap-3">
                            <FormField

                                control={form.control}
                                name="phoneNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="ml-1 text-[#888a99] text-sm">Утасны дугаар</FormLabel>
                                        <FormControl>
                                            {/* <Input {...field} onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} /> */}
                                            <Input {...field} defaultValue={phoneNumber} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField

                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="ml-1 text-[#888a99] text-sm">password</FormLabel>
                                        <FormControl>
                                            {/* <Input {...field} onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} /> */}
                                            <Input {...field} defaultValue={phoneNumber} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" disabled={formIsValid}
                                className={`py-6 shadow-none 
                                    ${formIsValid ? "bg-[#EEEFF2] hover:bg-[#EEEFF2]" :
                                        "bg-[#ff3467] hover:bg-[#ff3467]"}`}>
                                <Link
                                    href={{
                                        pathname: '/auth/pass',
                                    }}
                                    className={`text-sm font-semibold ${formIsValid ? "text-[#BBBECD]" : "text-white"}`}>
                                    Нэвтрэх
                                </Link>
                            </Button>
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