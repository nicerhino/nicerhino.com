"use server";

import { createTransport } from "nodemailer";
import { env } from "process";
import { z } from "zod";

const EMAIL_TO = "hello@nicerhino.com";
const SMTP_HOST = "smtp.mail.us-east-1.awsapps.com";
const SMTP_PORT = 465;
const SMTP_USER = env.SMTP_USER!;
const SMTP_PASSWORD = env.SMTP_PASSWORD!;

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

  const body = `
    Name: ${validatedFields.data.name}
    Organisation: ${validatedFields.data.organisation}
    Email: ${validatedFields.data.email}
    Message:
    ${validatedFields.data.message}
  `;

  try {
    await send("Message from website", body);
  } catch (err) {
    console.error(err);

    return {
      success: false,
      message: "Server error",
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
      message: "Invalid form data",
    };
  }

  const body = `
    Timezone: ${validatedFields.data.timezone}
    Country: ${validatedFields.data.country}
    Phone: ${validatedFields.data.phone}
  `;

  try {
    await send("Call request from website", body);
  } catch (err) {
    console.error(err);

    return {
      success: false,
      message: "Server error",
    };
  }

  return {
    success: true,
    message: "",
  };
}

async function send(subject: string, body: string) {
  const transporter = createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: true,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: '"Nice Rhino Website" <web@nicerhino.com>',
    to: EMAIL_TO,
    subject,
    text: body,
  });

  console.log("Message sent: %s", info.messageId);
}
