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
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="text-secondary text-foreground-muted">Welcome back</p>
            <h1 className="text-page-heading">Your Splitly dashboard</h1>
          </div>
          <form action="/auth/logout" method="post">
            <button
              type="submit"
              className="min-h-11 rounded-control text-label text-primary hover:text-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:px-0"
            >
              Log out
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
