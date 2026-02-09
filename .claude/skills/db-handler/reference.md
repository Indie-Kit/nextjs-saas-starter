# DB Handler Reference

## Core Files
- `src/db/index.ts`: Database connection initialization.
- `src/db/schema/index.ts`: Central export for all schema definitions.
- `drizzle.config.ts`: Drizzle configuration.

## Commands
- `npm run db:generate`: Generate SQL migration files.
- `npm run db:migrate`: Push migrations to the database.
- `npm run db:push`: Prototype schema changes (use with caution).
