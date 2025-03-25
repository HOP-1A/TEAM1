'use client';
import NavBar from "@/components/ui/navigationBar/NavBar"
import Footer from "@/app/_components/Footer"
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
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Clerk from '@clerk/nextjs/server'

const formSchema = z.object({
    price: z.string().refine((val) => !isNaN(Number(val)), {
        message: "Must be a number"
    }),
    quantity: z.string().refine((val) => !isNaN(Number(val)), {
        message: "Must be a number"
    }),
    description: z.string(),
    productImg: z.string(),
    // category: z.enum(["profile", "billing"]),
    category: z.string(),
    name: z.string(),
    delivery: z.boolean(),
    usersId: z.string(),
    categoryId: z.string()
});

export default function newProduct() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            price: "",
            quantity: "",
            description: "",
            productImg: "",
            category: "",
            name: "",
            delivery: false,
            usersId: "mocke8373849743298",
            categoryId: "34242"
        }
    });
    const handleRequest = async (items: z.infer<typeof formSchema>) => {
        console.log(window.location.host);
        const raw = await fetch(`http://${window.location.host}/api/product`, {
            method: "POST",
            body: JSON.stringify(items),
        })
        const res = await raw.json();
        console.log(res);
        
        /*
          REQUEST TO SERVER
        */
    };
    
    return (
        <div className="flex flex-col">
            <NavBar />
            <div className="mt-[255px] mb-[100px]">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(handleRequest)}
                        className="flex flex-col items-center"
                    >
                        <div>
                            <div>
                                <span>
                                    Барааны мэдээлэл
                                </span>
                            </div>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Барааны нэр
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
                                name="price"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Үнэ
                                        </FormLabel>
                                        <FormControl>
                                            <Input type="number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="delivery"
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
                                                хүргэх
                                            </span>
                                        </div>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="productImg"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            productImg
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
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            description
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
                                name="quantity"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            quantity
                                        </FormLabel>
                                        <FormControl>
                                            <Input type="number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* <FormField
                                control={form.control}
                                name="category"
                                render={({ field }) => (
                                    <FormItem className="space-y-3">
                                        <DropdownMenuTrigger>Notify me about...</DropdownMenuTrigger>
                                        <FormControl>
                                            <DropdownMenuContent>
                                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                                <DropdownMenuSeparator />

                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                        <DropdownMenuItem>Profile</DropdownMenuItem>
                                                    </FormControl>
                                                </FormItem>
                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                        <DropdownMenuItem>Billing</DropdownMenuItem>
                                                    </FormControl>
                                                </FormItem>
                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                        <DropdownMenuItem>Billing</DropdownMenuItem>
                                                    </FormControl>
                                                </FormItem>
                                            </DropdownMenuContent>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            /> */}
                             <FormField
                                control={form.control}
                                name="category"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            category
                                        </FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button type="submit" className="bg-[#ff3467] py-6">
                                Нэвтрэх
                            </Button>


                        </div>
                        <div>

                        </div>
                    </form>
                </Form>
            </div>
            <Footer />
        </div >
    )
}