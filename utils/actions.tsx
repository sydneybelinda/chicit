"use server";

import { z } from "zod";
import { sendMail } from "./send-email";



// CREATE TABLE todos (
//   id SERIAL PRIMARY KEY,
//   text TEXT NOT NULL
// );

export async function submitEnquiry(
  prevState: {
    message: string;
  },
  formData: FormData,
) {
  const schema = z.object({
    name: z.string().min(1),
    email: z.string().min(1),
    phone: z.string().min(1),
    msg: z.string().min(1),
  });
  const parse = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    msg: formData.get("msg"),
  });

  if (!parse.success) {
    return { message: "Failed to send message" };
  }

  const data = parse.data;

  const mailText = `Name: ${data.name}\n  Email: ${data.email}\n  Phone: ${data.phone}\n Message: ${data.msg}`;

  const response =  await sendMail({
      email: data.email,
      subject: 'New Contact Us Form',
      text: mailText,
    });

    if (response?.messageId) {
      return { message: `success` };
    } else {
      return { message: 'failed'};
    }

}

