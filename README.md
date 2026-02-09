# Indie Kit - The AI-Native Next.js SaaS Starter

![Indie Kit](public/hero.png)

**Build your SaaS 10x faster with the "Best Vibe Coding Starter Kit" designed for AI Code Editors (Cursor, Windsurf, Claude).**

This is the **Lite Version** of [Indie Kit Pro](https://indiekit.pro/?utm_source=github-starter&utm_medium=readme&utm_campaign=lite). It comes pre-configured with "AI Navigation Rules" that allow LLMs to understand your codebase context, follow best practices, and bootstrap features autonomously.

[![Get Pro Version](https://img.shields.io/badge/Get%20Pro%20Version-Indie%20Kit-blue?style=for-the-badge)](https://indiekit.pro/?utm_source=github-starter&utm_medium=readme&utm_campaign=lite)
[![Join Discord](https://img.shields.io/badge/Discord-Join%20Community-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://indiekit.pro/app/discord)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge)](https://www.typescriptlang.org/)

## 🤖 AI-First Architecture

Unlike other starters, this kit includes a dedicated "Brain" for your AI editor. We have mapped the entire project structure into rules that help AI agents navigate, understand, and build safely.

- **`.cursor/rules`**: Context-aware rules for Cursor.
- **`.windsurf/rules`**: Guidelines for Windsurf IDE.
- **`.claude/skills`**: Specialized skills for Claude/Cursor Desktop (Auth, DB, Stripe, UI).
- **`/bootstrap` command**: A special prompt to have the AI build your entire MVP plan.

💡 **Pro Tip**: To use this kit with Google's Antigravity or other AI agents that expect a `.agent` folder, simply rename `.claude` to `.agent`:
```bash
mv .claude .agent
```

## 🚀 Features

### Core Stack - The Right Architecture
- 🏗️ **Next.js 16** (App Router) - Staying ahead of the curve.
- 🎨 **Tailwind CSS v4** + **Shadcn UI** - Beautiful, accessible UI.
- 🔐 **Better Auth** (Social + Magic Link) - Secure and simple.
- 🗄️ **Drizzle ORM** + **Bring Your Own Database** - Connect to **Supabase**, **Neon**, or any Postgres provider.
- 💳 **Stripe** Subscription Webhooks - Ready for monetization.
- 📁 **UploadThing** for file storage - Easy file uploads.
- 🌙 **Dark Mode** built-in - Because developers love it.

### Pre-built Pages
- 🏠 **Landing Page** (Hero, Features, Pricing, FAQ)
- 🔐 **Auth Pages** (Sign In, Sign Up)
- ⚙️ **App Layout** (Sidebar, Header, User Profile)
- 📄 **Legal Pages** (Privacy, Terms)

## 🛠️ Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/Indie-Kit/nextjs-saas-starter.git my-saas
cd my-saas
pnpm install
```

### 2. Environment Setup

Copy the example environment file and fill in your secrets:

```bash
cp .env.example .env
```

You will need:
- **Database URL**: Use **Supabase**, **NeonDB**, or any PostgreSQL provider.
- **Better Auth Secret**: Run `npx auth secret` to generate.
- **Stripe Keys**: For payment processing.
- **Social Keys**: (Google/GitHub, optional).

### 3. Database Setup

```bash
# Sync database schema to the database after adding new tables or modifying existing tables
pnpm run db:push
```

### 4. Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

## 🧠 How to use with AI

This is where the magic happens. Open this project in **Cursor** or **Windsurf**.

### The Bootstrap Command

Open your AI chat (Cmd+L or Cmd+K) and type:

```
/bootstrap
```

The AI will read `.claude/commands/bootstrap.md` and guide you through:
1.  **Requirements Gathering**: Defining your SaaS idea.
2.  **Schema Design**: Creating your database tables.
3.  **API Implementation**: Building secure routes.
4.  **UI Construction**: Generating forms and pages.

### Available Skills

The AI has access to specialized "skills" in `.claude/skills/`:
- **`auth-handler`**: Correctly implement `withAuthRequired` and user sessions.
- **`db-handler`**: Manage Drizzle schemas and migrations.
- **`stripe-handler`**: Handle webhooks and checkouts.
- **`ui-handler`**: Add Shadcn components and style them.
- **`form-creator`**: Build Zod-validated forms.

## 📦 Project Structure

```
src/
├── app/
│   ├── (auth)/          # Authentication pages (public)
│   ├── (marketing)/     # Landing page, blog, legal (public)
│   ├── (in-app)/        # Dashboard & App (protected)
│   ├── api/             # API Routes & Webhooks
├── components/
│   ├── ui/              # Shadcn UI primitives
│   ├── layout/          # Headers, Footers, Sidebars
│   └── ...
├── db/
│   └── schema/          # Drizzle schema definitions
├── lib/
│   ├── auth/            # Auth helpers & wrappers
│   ├── stripes.ts       # Payment utilities
│   └── ...
```

## 💎 Indie Kit Pro vs Starter

This starter is perfect for learning and building simple MVPs. For serious production apps, check out **[Indie Kit Pro](https://indiekit.pro/?utm_source=github-starter&utm_medium=readme&utm_campaign=table)**.

| Feature | Starter (Free) | Indie Kit Pro |
| :--- | :---: | :---: |
| **Next.js 16 App Router** | ✅ | ✅ |
| **Better Auth** | ✅ | ✅ |
| **Postgres + Drizzle** | ✅ | ✅ |
| **Stripe Subscriptions** | ✅ | ✅ |
| **AI Navigation Rules** | ✅ | ✅ |
| **Multi-Tenancy (Teams/Orgs)** | ❌ | ✅ |
| **Role-Based Access Control** | ❌ | ✅ |
| **User Impersonation** | ❌ | ✅ |
| **Super Admin Dashboard** | ❌ | ✅ |
| **Credit System (Usage Based)** | ❌ | ✅ |
| **Waitlist System** | ❌ | ✅ |
| **Blog & Docs (MDX)** | ❌ | ✅ |
| **Email Sequences (Inngest)** | ❌ | ✅ |
| **Documentation Site** | ❌ | ✅ |
| **Priority Support** | ❌ | ✅ |

[**👉 Upgrade to Pro**](https://indiekit.pro/?utm_source=github-starter&utm_medium=readme&utm_campaign=upgrade)

## 🤝 Community & Support

- **[Free Discord Community](https://indiekit.pro/app/discord)**: Join our community of indie hackers to ask questions and share your progress!
- **Twitter**: Follow [@cjsingg](https://x.com/cjsingg) for updates.
- **Issues**: Open a GitHub issue for bugs in the starter.

---

Built with ❤️ by [CJ](https://x.com/cjsingg).
