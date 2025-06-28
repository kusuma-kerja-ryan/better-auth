import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Control, FieldValues, Path } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

type InputFieldProps<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  control: Control<T>;
};

const InputAreaField = <T extends FieldValues>({ control, name, label }: InputFieldProps<T>) => {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="capitalize font-semibold mb-2 text-base">
            {name}
          </FormLabel>
          <FormControl>
            <Textarea
              {...field}
              placeholder={label}
              className="py-2 px-4 text-black text-base w-full h-32"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputAreaField;
