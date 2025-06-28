import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "../ui/form";
import ContactLoader from "../layout/load/ContactLoader";
import { useState } from "react";
import InputField from "../field/InputField";
import InputAreaField from "../field/InputAreaField";
import { cn } from "@/lib/utils";

const schemaContact = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    subject: z.string().min(2),
    message: z.string().min(2),
})

type FormSchema = z.infer<typeof schemaContact>

export default function FormContact() {
    const form = useForm<FormSchema>({
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
        resolver: zodResolver(schemaContact)
    })

    const [isLoading, setIsLoading] = useState(false);
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = form;

    const handleInput = handleSubmit(async (data) => {
        setIsLoading(true);
        try {
            console.log(data);

        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            else {
                console.log("Unexpected error");
            }
        }
        finally {
            setIsLoading(false);
        }
    });

    return (
        <div className="lg:max-w-lg w-full ">
            <Form {...form}>
                <ContactLoader isLoading={isLoading} />
                <form onSubmit={handleInput} className="border border-primary/20 p-8 md:p-12 rounded-xl">
                    <div className={cn("flex flex-col gap-4 w-full",
                        errors ? "md:gap-4" : "md:gap-8"
                    )}>
                        <InputField<FormSchema> control={control} label="Full Name" name="name" />
                        <InputField<FormSchema> control={control} label="Email Address" name="email" />
                        <InputField<FormSchema> control={control} label="Subject" name="subject" />
                        <InputAreaField<FormSchema> control={control} label="Message" name="message" />
                    </div>
                    <div className="w-full flex justify-center mt-8 sm:mt-12">
                        <Button
                            type="submit"
                            effect={"scale"}
                            className="w-full  lg:w-full"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}