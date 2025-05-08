'use client';

import React, {useState} from "react";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Send, SendHorizonal, Loader} from "lucide-react";

const formSchema = z.object({
    email: z.string().email({message: "E-mail inválido"}),
});

const Newsletter: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<true | undefined>(undefined);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "aaa",
        },
    });

    const onSubmit = ({email}: { email: string }) => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
        }, 1000);
    }

    return (
        <article className="w-[333px]">
            <h3 className="text-white">Newsletter</h3>

            <Form {...form}>
                <form
                    className="mt-3"
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className={success ? "text-green-300" : "text-white"}>Email</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="user@email.com" className={success ? "text-green-300 border-green-300" : "text-white"}/>
                                </FormControl>

                                <FormDescription>
                                    Ao enviar, você concorda com a nossa <a href="#" className="underline">política de
                                    privacidade</a>.
                                </FormDescription>

                                {
                                    success && <p className="text-green-300 text-sm">Sucesso!</p>
                                }
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="mt-4 flex gap-3">
                        Enviar

                        {!loading ? <SendHorizonal className="w-[16px]"/> :
                            <div className="loader w-[16px]" style={{borderColor: "white"}}/>}
                    </Button>
                </form>
            </Form>
        </article>
    );
};

export default Newsletter;