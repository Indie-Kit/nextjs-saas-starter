// Stub for @better-auth/kysely-adapter when using the Drizzle adapter.
// Kysely SQLite dialects break Turbopack builds on kysely@0.29.x until upstream ships the fix.
// Remove once better-auth includes the kysely/migration import fix in a release you use.

export function getKyselyDatabaseType() {
  return null;
}

export async function createKyselyAdapter() {
  return { kysely: null, databaseType: null, transaction: undefined };
}

const emptyKyselyAdapter = {};

export default emptyKyselyAdapter;
