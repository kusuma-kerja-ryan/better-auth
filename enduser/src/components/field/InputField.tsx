"use client";
import React, { useState } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldValues, Path } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";

type InputFieldProps<T extends FieldValues> = {
  name: Path<T>;
  type?: "text" | "email" | "password";
  label: string;
  control: Control<T>;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
};

const InputField = <T extends FieldValues>({
  control,
  name,
  type = "text",
  label,
  placeholder,
  className,
  disabled,
}: InputFieldProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel className="capitalize font-semibold mb-2 text-base">
            {label}
          </FormLabel>
          <FormControl className="w-full">
            <div className="w-full relative">
              <Input
                {...field}
                placeholder={placeholder || label}
                type={type === "password" ? (showPassword ? "text" : "password") : type}
                disabled={disabled}
                className={`py-2 px-4 text-black ${className}`}
              />
              {type === "password" && (
                <button
                  type="button"
                  onClick={togglePassword}
                  className="absolute right-3 top-5 text-gray-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              )}
            </div>
          </FormControl>
          <FormMessage/>
        </FormItem>
      )}
    />
  );
};

export default InputField;
