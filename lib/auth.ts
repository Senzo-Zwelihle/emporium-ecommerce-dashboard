import { betterAuth } from "better-auth"
import { prismaAdapter } from "better-auth/adapters/prisma"
import { admin } from "better-auth/plugins"
import { organization } from "better-auth/plugins"
import { lastLoginMethod } from "better-auth/plugins"
import { nextCookies } from "better-auth/next-js"

import { prisma } from "@/lib/prisma/client"
import { env } from "@/env/server"

export const auth = betterAuth({
  // database setup
  database: prismaAdapter(prisma, {
    provider: "postgresql"
  }),
  // social providers github/google
  socialProviders: {
    github: {
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET
    },
    google: {
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET
    }
  },
  // basic authentication
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false
  },

  // plugins
  plugins: [admin(), organization(), lastLoginMethod(), nextCookies()]
})
