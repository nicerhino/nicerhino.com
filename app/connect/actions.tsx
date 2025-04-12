"use server";

import { z } from "zod";

export interface ConnectResult {
  success: boolean;
  message: string;
}

const messageSchema = z.object({
  name: z.string().min(2),
  organisation: z.string().min(2),
  email: z.string().email().min(5),
  message: z.string().min(10),
});

const callSchema = z.object({
  timezone: z.string().startsWith("UTC").min(3).max(9),
  country: z.string().startsWith("+").min(2).max(5),
  phone: z.string().min(6),
});

export async function sendMessage(
  state: ConnectResult,
  formData: FormData,
): Promise<ConnectResult> {
  // Only allow a single send
  if (state.success) {
    return {
      success: false,
      message: "Already sent",
    };
  }

  const validatedFields = messageSchema.safeParse({
    name: formData.get("name"),
    organisation: formData.get("organisation"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  // Check validation result
  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid form data",
    };
  }

  return {
    success: true,
    message: "",
  };
}

export async function requestCall(
  state: ConnectResult,
  formData: FormData,
): Promise<ConnectResult> {
  // Only allow a single send
  if (state.success) {
    return {
      success: false,
      message: "Already requested",
    };
  }

  const validatedFields = callSchema.safeParse({
    timezone: formData.get("timezone"),
    country: formData.get("country"),
    phone: formData.get("phone"),
  });

  // Check validation result
  if (!validatedFields.success) {
    return {
      success: false,
      message: JSON.stringify(validatedFields.error.errors), //"Invalid form data",
    };
  }

  return {
    success: true,
    message: "",
  };
}
