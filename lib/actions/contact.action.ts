"use server";

import { revalidatePath } from "next/cache";
import Contact from "@/database/contact.model";
export const submitContact = async (formData: FormData) => {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!message) {
      throw new Error("Message is required");
    }

    await Contact.create({
      name: name || "Anonymous",
      email: email || "No email provided",
      message,
    });

    revalidatePath("/Home"); // Update with your actual path if needed
    return { success: true };
  } catch (error) {
    console.error("Submission error:", error);
    return {
      error:
        error instanceof Error ? error.message : "Failed to submit message",
    };
  }
};
