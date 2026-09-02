# Splitly

## Project
Splitly is an expense-sharing application inspired by the core concept of Splitwise.

## Stack
- Next.js
- TypeScript
- Tailwind CSS
- Supabase
- PostgreSQL
- Supabase Auth
- Supabase Row Level Security (RLS)
- Vercel for deployment
- pnpm

## Architecture

Phase 1 uses a single Next.js application.

Do NOT create a separate Express/NestJS backend or microservice for Phase 1.

Architecture:

Next.js
  ↓
Supabase Auth
Supabase PostgreSQL + RLS
  ↓
Vercel deployment

## Phase 1 Features

- User registration/login
- User profiles
- Create groups
- Group members
- Add expenses
- Equal expense splitting
- Unequal expense splitting
- Select who paid
- View group expenses
- Calculate balances
- Record settlements
- Expense history

## Database

Supabase tables already exist and have RLS enabled.

Tables:

1. profiles
2. groups
3. group_members
4. expenses
5. expense_splits
6. settlements

Supabase's auth.users is managed by Supabase and is not an application-created table.

Do not recreate these tables unless explicitly requested.

## Financial semantics

- Blue = primary actions
- Green = money owed to the current user / positive balance
- Red = money the current user owes / negative balance
- Amber = warning/pending
- Gray = neutral

## Typography

Font:
Inter

Standard sizes:

- Page heading: 32px / 700
- Section heading: 24px / 600
- Card heading: 18px / 600
- Body: 16px / 400
- Label: 14px / 500
- Secondary: 14px / 400
- Caption: 12px / 400
- Amount: 20px / 600
- Large amount: 28px / 700

## UI

- Card radius: 12px
- Button/input radius: 8px
- Card padding: 24px
- Standard spacing: 4, 8, 12, 16, 24, 32, 48, 64px

Avoid arbitrary spacing and font sizes unless there is a good reason.

## Development principles

- Use TypeScript throughout.
- Prefer Server Components where appropriate.
- Use Client Components only when interactivity requires them.
- Never expose Supabase service-role credentials to the browser.
- Respect Supabase RLS.
- Keep business logic out of UI components where practical.
- Do not over-engineer Phase 1.
- Do not introduce microservices unless explicitly requested.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
