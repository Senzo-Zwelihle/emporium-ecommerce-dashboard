import "server-only"

import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { auth } from "@/lib/auth"

export async function useRole() {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) {
    return redirect("/sign-in")
  }

  // adjust to your liking...

  if (session.user.role !== "user") {
    return redirect("/")
  }

  return session
}
