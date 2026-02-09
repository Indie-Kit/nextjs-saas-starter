# Auth Handler Reference

## Core Files
- `src/lib/auth.ts`: Better Auth server configuration (Drizzle adapter, providers).
- `src/lib/auth-client.ts`: Better Auth client configuration (React hooks).
- `src/lib/auth/withAuthRequired.ts`: API route wrapper for protected routes.
- `src/db/schema/auth.ts`: Database schema for users, sessions, accounts.

## Usage Patterns

### API Route
```typescript
import { withAuthRequired } from "@/lib/auth/withAuthRequired";
import { NextResponse } from "next/server";

export const GET = withAuthRequired(async (req, { session, user }) => {
  return NextResponse.json({ message: "Hello " + user.name });
});
```

### React Component
```typescript
"use client";
import { useSession } from "@/lib/auth-client";

export function UserProfile() {
  const { data: session } = useSession();
  if (!session) return null;
  return <div>{session.user.name}</div>;
}
```
