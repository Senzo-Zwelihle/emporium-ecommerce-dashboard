import React from "react"
import { Container } from "../ui/container"
import DashboardHero from "@/public/images/dashboard-hero.png"
import DashboardHeroDark from "@/public/images/dashboard-hero-dark.png"
import Image from "next/image"
import { ZapIcon, CpuIcon, LockIcon } from "lucide-react"

const Features = () => {
  return (
    <Container
      size={"2xl"}
      alignment={"none"}
      height={"screen"}
      padding={"px-sm"}
      gap={"none"}
      flow={"none"}
      id="features"
      className="overflow-hidden"
    >
      <div className="mx-auto space-y-8 md:space-y-12">
        {/* Section Intro */}
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Built for Modern Ecommerce Teams
          </h2>
          <p className="mt-6 text-lg">
            Emporium gives you the speed, flexibility, and security needed to
            run your store with confidence—all in one streamlined dashboard.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="relative -mx-4 mask-b-from-75% mask-b-to-95% mask-l-from-75% mask-l-to-95% pt-3 pr-3 md:-mx-12">
          <div className="perspective-midrange">
            <div className="rotate-x-6 -skew-2">
              <div className="relative aspect-88/36">
                <Image
                  src={DashboardHeroDark}
                  className="hidden dark:block"
                  alt="Emporium dashboard preview dark"
                  width={2797}
                  height={1137}
                />
                <Image
                  src={DashboardHero}
                  className="dark:hidden"
                  alt="Emporium dashboard preview light"
                  width={2797}
                  height={1137}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="relative mx-auto grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {/* Fast */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <ZapIcon className="size-4" />
              <h3 className="text-sm font-medium">Fast & Efficient</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Lightning-quick dashboards powered by Next.js. Get real-time
              insights without the lag.
            </p>
          </div>

          {/* Powerful */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <CpuIcon className="size-4" />
              <h3 className="text-sm font-medium">Powerful & Flexible</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Manage sales, products, customers, and analytics all in one
              place—built for scale.
            </p>
          </div>

          {/* Security */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <LockIcon className="size-4" />
              <h3 className="text-sm font-medium">Secure by Design</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Robust authentication and modern security keep your business and
              customer data safe.
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Features
