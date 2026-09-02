import type { SupabaseClient, User } from "@supabase/supabase-js";

export async function ensureUserProfile(
  supabase: SupabaseClient,
  user: User,
  fullName?: string,
) {
  const metadataName = user.user_metadata?.full_name;
  const name = fullName?.trim() || (typeof metadataName === "string" ? metadataName.trim() : "");

  return supabase.from("profiles").upsert(
    {
      id: user.id,
      full_name: name || user.email || "Splitly user",
      email: user.email ?? "",
    },
    { onConflict: "id" },
  );
}
