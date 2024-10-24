import { Button, PasswordInput, TextInput } from "@mantine/core";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";

// Zod schema for validation
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(4, "Password must be at least 4 characters long"),
});

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  // React Hook Form setup with Zod resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  };

  return (
    <div className="w-full h-[91vh]">
      <div className="flex justify-center items-center w-ful h-full">
        <div className="rounded-lg border-2 border-gray-50 w-[20rem] p-4 sm:w-96 md:w-[34rem] sm:p-6 md:p-8 lg:p-10 bg-gradient-to-bl from-[#f3f3f3]  to-[#ffffff]  shadow-white ">
          <h1 className="text-3xl text-center mb-4">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
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
              <Button
                className="w-full rounded-lg mt-5 bg-gradient-to-r from-sky-300 to-blue-500 px-10 "
                type="submit"
              >
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
