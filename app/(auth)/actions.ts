"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { createClient } from "@/utils/supabase/server";
// Schemas
import { loginSchema, registerSchema } from "./schemas";

export async function login(formData: z.infer<typeof loginSchema>) {
  // Validate the form data
  const validData = loginSchema.parse(formData);
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword(validData);
  // Log the error to services like Sentry
  console.log(error);
  if (error) return error.code;
  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData: z.infer<typeof registerSchema>) {
  // Validate the form data
  const validData = registerSchema.parse(formData);
  const supabase = await createClient();
  const { error } = await supabase.auth.signUp({
    email: validData.email,
    password: validData.password,
    options: {
      data: {
        first_name: validData.name,
        last_name: validData.lastName,
        display_name: `${validData.name} ${validData.lastName}`,
        suspended: false,
      },
    },
  });
  // Log the error to services like Sentry
  console.log(error);
  if (error) return error.code;
  revalidatePath("/", "layout");
  redirect("/exito-registro");
}
