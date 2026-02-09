---
name: form-creator
description: Create forms with React Hook Form and Zod.
tools: Read, Write, Edit
model: inherit
---

# Form Creator

## Instructions

### 1. Client-Side Forms
- Use `react-hook-form` for state management.
- Use `zod` for schema validation.
- Integrate using `@hookform/resolvers/zod`.
- Use the `Form` components from `@/components/ui/form`.
- Define schemas using `z.object({...})`.

### 2. API Validation
- **MANDATORY**: Use `zod` schemas to validate incoming request bodies in API routes.
- Share schemas between client and server if possible (e.g., in a separate file or exported from the component file if simple).

## Example
### Client
```tsx
const form = useForm<z.infer<typeof schema>>({
  resolver: zodResolver(schema),
  defaultValues: { ... },
});

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)}>
    {/* ... fields ... */}
  </form>
</Form>
```

### Server (API Route)
```typescript
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
});

export async function POST(req: Request) {
  const body = await req.json();
  const result = schema.safeParse(body);

  if (!result.success) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  // ... process valid data ...
}
```
