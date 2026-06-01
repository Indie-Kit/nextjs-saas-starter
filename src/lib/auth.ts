import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db";
import { nextCookies } from "better-auth/next-js";
import { magicLink } from "better-auth/plugins";

function optionalSocialProvider(
  clientId: string | undefined,
  clientSecret: string | undefined
) {
  if (!clientId || !clientSecret) return undefined;
  return { clientId, clientSecret };
}

const google = optionalSocialProvider(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET
);
const github = optionalSocialProvider(
  process.env.GITHUB_CLIENT_ID,
  process.env.GITHUB_CLIENT_SECRET
);
const twitter = optionalSocialProvider(
  process.env.TWITTER_CLIENT_ID,
  process.env.TWITTER_CLIENT_SECRET
);
const facebook = optionalSocialProvider(
  process.env.FACEBOOK_CLIENT_ID,
  process.env.FACEBOOK_CLIENT_SECRET
);
const apple = optionalSocialProvider(
  process.env.APPLE_CLIENT_ID,
  process.env.APPLE_CLIENT_SECRET
);

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    ...(google ? { google } : {}),
    ...(github ? { github } : {}),
    ...(twitter ? { twitter } : {}),
    ...(facebook ? { facebook } : {}),
    ...(apple ? { apple } : {}),
  },
  plugins: [
    magicLink({
      async sendMagicLink(data) {
        console.log("Sending magic link to", data.email, "Link:", data.url);
        // TODO: Implement email sending
      },
    }),
    nextCookies(),
  ],
});
