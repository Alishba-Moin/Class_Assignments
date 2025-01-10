"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FiUser, FiLock } from "react-icons/fi";

const formSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must contain at least 3 characters!" })
    .max(50, { message: "Username can only contain up to 50 characters!" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long!" }),
});

type FormType = z.infer<typeof formSchema>;

const LogicForm = () => {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form Submitted:", values); // Logs the data with the required format
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8 space-y-6">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center">Login</h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 text-center"
          >
            {/* Username Field */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <div className="relative">
                    <FiUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                    <FormControl>
                      <Input
                        placeholder="Username"
                        className="pl-10 py-3 border rounded-md focus:ring focus:ring-teal-500"
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="relative">
                    <FiLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 font-mono" />
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Password"
                        className="pl-10 py-3 border rounded-md focus:ring focus:ring-teal-500 font-mono"
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-gray-800 hover:bg-gray-600 text-white font-bold py-3 rounded-md"
            >
              Login
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LogicForm;
