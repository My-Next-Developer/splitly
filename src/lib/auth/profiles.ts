import type { SupabaseClient, User } from "@supabase/supabase-js";

type Profile = {
  id: string;
  full_name: string | null;
  email: string | null;
};

export async function ensureUserProfile(
  supabase: SupabaseClient,
  user: User,
  fullName?: string,
) {
  const metadataName = user.user_metadata?.full_name;
  const name = fullName?.trim() || (typeof metadataName === "string" ? metadataName.trim() : "");
  const profile = {
    id: user.id,
    full_name: name || user.email || "Splitly user",
    email: user.email ?? "",
  };

  const existingProfile = await supabase
    .from("profiles")
    .select("id, full_name, email")
    .eq("id", user.id)
    .maybeSingle<Profile>();

  if (existingProfile.error) {
    return existingProfile;
  }

  if (existingProfile.data) {
    return existingProfile;
  }

  const createdProfile = await supabase
    .from("profiles")
    .insert(profile)
    .select("id, full_name, email")
    .single<Profile>();

  if (createdProfile.error?.code === "23505") {
    return supabase
      .from("profiles")
      .select("id, full_name, email")
      .eq("id", user.id)
      .maybeSingle<Profile>();
  }

  return createdProfile;
}
