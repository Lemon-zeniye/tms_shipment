import { Button, PasswordInput, TextInput } from "@mantine/core";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";

// Zod schema for validation
const registerSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters long"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z
      .string()
      .min(6, "Confirm Password must be at least 6 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords don't match",
  });

function RegisterPage() {
  // React Hook Form setup with Zod resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log("Registration Form Submitted", data);
  };

  return (
    <div className="w-full h-[91vh]">
      <div className="flex justify-center items-center h-full">
        <div className="rounded-lg border-2 border-gray-50 w-[20rem] p-4 sm:w-96 md:w-[34rem] sm:p-6 md:p-8 lg:p-10 bg-gradient-to-bl from-[#f3f3f3]  to-[#ffffff]  shadow-white">
          <h1 className="text-3xl text-center mb-4">Register</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <TextInput
                label="Name"
                placeholder="Name"
                className="block w-full p-2 mb-2 text-sm text-gray-700 bg-gray"
                {...register("name")}
                error={errors.name ? errors.name.message : null}
              />
              <TextInput
                label="Email"
                placeholder="Email"
                className="block w-full p-2 mb-2 text-sm text-gray-700 bg-gray"
                {...register("email")}
                error={errors.email ? errors.email.message : null}
              />
              <PasswordInput
                label="Password"
                placeholder="Password"
                className="block w-full p-2 mb-2 text-sm text-gray-700 bg-gray"
                {...register("password")}
                error={errors.password ? errors.password.message : null}
              />
              <PasswordInput
                label="Confirm Password"
                placeholder="Confirm Password"
                className="block w-full p-2 mb-2 text-sm text-gray-700 bg-gray"
                {...register("confirmPassword")}
                error={
                  errors.confirmPassword ? errors.confirmPassword.message : null
                }
              />
              <Button
                className="w-full rounded-lg mt-5 bg-gradient-to-r from-sky-300 to-blue-500 px-10"
                type="submit"
              >
                Register
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
