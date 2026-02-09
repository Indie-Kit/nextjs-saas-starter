import { withAuthRequired } from "@/lib/auth/withAuthRequired";
import { NextResponse } from "next/server";

export const GET = withAuthRequired(async (req, { getDbUser }) => {
  const dbUser = await getDbUser();
  
  if (!dbUser) {
    return NextResponse.json(
      { error: "User not found" },
      { status: 404 }
    );
  }
  
  return NextResponse.json(dbUser);
});
