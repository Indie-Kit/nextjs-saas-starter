---
name: env-handler
description: Manage environment variables.
tools: Read, Write, Edit
model: inherit
---

# Env Handler

## Instructions
- Always update `.env.example` when adding new environment variables.
- Never commit `.env` or `.env.local` to version control.
- Access variables via `process.env`.
- Ensure new variables are added to the validation schema if one exists (check `src/lib/config.ts` or similar).
