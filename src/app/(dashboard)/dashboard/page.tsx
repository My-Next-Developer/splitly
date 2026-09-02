import { redirect } from "next/navigation";
import { ensureUserProfile } from "@/lib/auth/profiles";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login?redirectTo=/dashboard");

  const { error: profileError } = await ensureUserProfile(supabase, user);

  if (profileError) {
    console.warn("Supabase profile setup failed on dashboard", {
      code: profileError.code,
      message: profileError.message,
    });
  }

  return (
    <main className="min-h-screen bg-background px-4 py-12 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-secondary text-foreground-muted">Welcome back</p>
            <h1 className="text-page-heading">Your Splitly dashboard</h1>
          </div>
          <form action="/auth/logout" method="post">
            <button type="submit" className="text-label text-primary hover:text-primary-hover">Log out</button>
          </form>
        </div>
      </section>
    </main>
  );
}
