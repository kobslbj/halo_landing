"use server";

import { createClient } from "@/utils/supabase/server";

export async function joinWaitlist(email: string) {
  const supabase = await createClient();

  const { error } = await supabase.from("waitlist_entries").insert([{ email }]);

  if (error) {
    if (error.code === "23505") {
      // Unique constraint violation
      return { success: false, error: "Email already registered" };
    }
    return { success: false, error: error.message };
  }

  return { success: true };
}

export async function submitMentorApplication(data: {
  email: string;
  full_name: string;
  profile_url: string;
  topics_preview: string[];
}) {
  const supabase = await createClient();

  const { error } = await supabase.from("mentor_applications").insert([data]);

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}

export async function submitFeedback(feedback: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("landing_page_feedback")
    .insert([{ feedback }]);

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}
