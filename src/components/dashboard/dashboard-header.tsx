import Image from "next/image";
import Link from "next/link";

type DashboardHeaderProps = {
  userName: string;
  avatarUrl?: string | null;
};

function Brand() {
  return (
    <Link href="/dashboard" className="flex items-center gap-3 rounded-control text-card-heading focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
      <span className="flex size-9 items-center justify-center rounded-control bg-primary text-label text-white" aria-hidden="true">S</span>
      <span>Splitly</span>
    </Link>
  );
}

function UserAvatar({ name, src }: { name: string; src?: string | null }) {
  const initial = name.trim().charAt(0).toUpperCase() || "S";
  return src ? (
    <Image className="size-9 rounded-full object-cover" src={src} alt="" width={36} height={36} unoptimized />
  ) : (
    <span className="flex size-9 items-center justify-center rounded-full bg-primary-subtle text-label text-primary" aria-hidden="true">{initial}</span>
  );
}

function LogoutButton() {
  return (
    <form action="/auth/logout" method="post">
      <button type="submit" className="min-h-11 w-full rounded-control px-3 text-left text-label text-danger hover:bg-danger-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Log out</button>
    </form>
  );
}

export function DashboardHeader({ userName, avatarUrl }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-surface">
      <nav className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <Brand />
        <div className="hidden items-center gap-2 md:flex">
          <Link href="/dashboard" aria-current="page" className="rounded-control bg-primary-subtle px-4 py-2 text-label text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Dashboard</Link>
          <Link href="/groups" className="rounded-control px-4 py-2 text-label text-foreground-muted hover:bg-surface-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Groups</Link>
        </div>
        <details className="group relative hidden md:block">
          <summary className="flex min-h-11 cursor-pointer list-none items-center gap-3 rounded-control px-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            <UserAvatar name={userName} src={avatarUrl} />
            <span className="max-w-36 truncate text-label">{userName}</span>
            <span className="text-foreground-muted transition-transform group-open:rotate-180" aria-hidden="true">⌄</span>
          </summary>
          <div className="absolute right-0 mt-2 w-44 rounded-card border border-border bg-surface p-2 shadow-sm"><LogoutButton /></div>
        </details>
        <details className="group relative md:hidden">
          <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-control px-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            <UserAvatar name={userName} src={avatarUrl} />
            <span className="sr-only">Open navigation menu</span>
            <span className="text-amount" aria-hidden="true">☰</span>
          </summary>
          <div className="absolute right-0 mt-2 w-56 rounded-card border border-border bg-surface p-2 shadow-sm">
            <p className="truncate px-3 py-2 text-label">{userName}</p>
            <Link href="/dashboard" aria-current="page" className="block min-h-11 rounded-control bg-primary-subtle px-3 py-3 text-label text-primary">Dashboard</Link>
            <Link href="/groups" className="block min-h-11 rounded-control px-3 py-3 text-label text-foreground-muted hover:bg-surface-muted">Groups</Link>
            <div className="mt-1 border-t border-border pt-1"><LogoutButton /></div>
          </div>
        </details>
      </nav>
    </header>
  );
}
