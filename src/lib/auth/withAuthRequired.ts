import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { user } from "@/db/schema/auth";
import { eq } from "drizzle-orm";

interface WithAuthHandler {
  (
    req: NextRequest,
    context: {
      session: typeof auth.$Infer.Session.session;
      user: typeof auth.$Infer.Session.user;
      getDbUser: () => Promise<typeof user.$inferSelect | undefined>;
      params: Promise<Record<string, unknown>>;
    }
  ): Promise<NextResponse | Response>;
}

export const withAuthRequired = (handler: WithAuthHandler) => {
  return async (
    req: NextRequest,
    context: {
      params: Promise<Record<string, unknown>>;
    }
  ) => {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session || !session.user) {
      return NextResponse.json(
        {
          error: "Unauthorized",
          message: "You are not authorized to perform this action",
        },
        { status: 401 }
      );
    }

    const getDbUser = async () => {
      return await db
        .select()
        .from(user)
        .where(eq(user.id, session.user.id))
        .then((res) => res[0]);
    };

    return await handler(req, {
      ...context,
      session: session.session,
      user: session.user,
      getDbUser,
    });
  };
};
