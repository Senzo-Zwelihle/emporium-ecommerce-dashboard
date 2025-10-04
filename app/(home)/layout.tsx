import NavigationMenu from "@/components/home/navigation-menu"
import React from "react"

const StoreLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <NavigationMenu />
      {children}
    </main>
  )
}

export default StoreLayout
