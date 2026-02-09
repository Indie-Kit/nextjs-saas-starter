---
name: auth-handler
description: Manage authentication using Better Auth. Use when dealing with login, sign-up, API protection, middleware, or user data fetching.
tools: Read, Write, Edit
model: inherit
---

# Auth Handler

## Instructions

### 1. API Route Protection
- **User Routes**: Use `withAuthRequired`.
  ```typescript
  import { withAuthRequired } from "@/lib/auth/withAuthRequired";
  
  export const GET = withAuthRequired(async (req, { session, user, getDbUser }) => {
     // getDbUser() is available to fetch fresh user data from DB if needed
     const dbUser = await getDbUser();
  });
  ```
- **Defense in Depth**: Do NOT rely solely on middleware. Always implement individual route protection using `withAuthRequired`.

### 2. Frontend Data Access
- **Client-Side**: Use `useSession` from `src/lib/auth-client.ts`.
  ```typescript
  import { useSession } from "@/lib/auth-client";
  const { data: session } = useSession();
  ```
- **Do NOT use NextAuth imports**. Use `@/lib/auth-client`.

### 3. Server-Side Data Access
- **Check Auth**: Import `auth` from `@/lib/auth`.
- **Get Context**: Use `auth.api.getSession({ headers: await headers() })`.

## Reference
For architecture details, see [reference.md](reference.md).
