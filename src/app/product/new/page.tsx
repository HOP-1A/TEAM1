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

const formSchema = z.object({
    price: z.number(),
    quantity: z.number(),
    description: z.string(),
    productImg: z.string(),
    category: z.array(z.string()),
    name: z.string(),
    delivery: z.boolean(),
});

const handleRequest = (items: z.infer<typeof formSchema>) => {
    console.log(items);
    /*
      REQUEST TO SERVER
      */
};



export default function newProduct() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            price: 0,
            quantity: 0,
            description: "",
            productImg: "",
            category: [""],
            name: "",
            delivery: false
        }
    });
    return (
        <div className="flex flex-col">
            <NavBar />
            <div className="mt-[155px]">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(handleRequest)}
                        className="flex flex-col"
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
                                            <Input {...field} />
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
                                            Үнэ
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
        </div>
    )
}