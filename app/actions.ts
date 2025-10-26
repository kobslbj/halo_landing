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

export async function getWaitlistCount() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/rpc/get_waitlist_count`,
      {
        method: "POST",
        headers: {
          apikey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      },
    );

    if (!response.ok) {
      // 如果 RPC 不存在,回傳 0
      return { count: 0 };
    }

    const count = await response.json();
    return { count: count || 0 };
  } catch (error) {
    console.error("Error getting waitlist count:", error);
    return { count: 0 };
  }
}
