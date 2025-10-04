"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Container } from "../ui/container"

import EcommerceDashboard from "@/public/images/dashboard.png"
import EcommerceDashboardDark from "@/public/images/dashboard-dark.png"
import { TextEffect } from "../ui/text-effect"
import { AnimatedGroup } from "../ui/animated-group"
import { LightRays } from "../ui/light-rays"

import { authClient } from "@/lib/auth-client"
import { SparklesIcon } from "../pqoqubbw/icons/sparkles"

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5
      }
    }
  }
}

const Hero = () => {
  const { data: session, isPending } = authClient.useSession()
  return (
    <Container
      size={"2xl"}
      alignment={"none"}
      height={"screen"}
      padding={"px-sm"}
      gap={"none"}
      flow={"none"}
      id="hero"
      className="overflow-hidden"
    >
      <LightRays />
      <section>
        <div className="relative pt-24">
          <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
          <div className="mx-auto">
            <div className="sm:mx-auto lg:mt-0 lg:mr-auto">
              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h1"
                className="mt-8 max-w-2xl text-5xl font-medium text-balance md:text-6xl lg:mt-16"
              >
                Manage Your Business Smarter with Emporium
              </TextEffect>
              <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.5}
                as="p"
                className="mt-8 max-w-2xl text-pretty"
              >
                A pre-built ecommerce dashboard for managing products, users,
                orders, and analytics with elegance and efficiency.Emporium
                gives you a sleek, customizable dashboard that helps you focus
                on growth, not guesswork
              </TextEffect>

              {session ? (
                <>
                  <AnimatedGroup
                    variants={{
                      container: {
                        visible: {
                          transition: {
                            staggerChildren: 0.05,
                            delayChildren: 0.75
                          }
                        }
                      },
                      ...transitionVariants
                    }}
                    className="mt-12 flex items-center gap-2"
                  >
                    <div key={1}>
                      <Button>
                        <SparklesIcon />
                        <Link href="/dashboard">
                          <span className="text-nowrap">Start Building</span>
                        </Link>
                      </Button>
                    </div>
                    <Button key={2} asChild variant="outline">
                      <Link href="#features">
                        <span className="text-nowrap">Features</span>
                      </Link>
                    </Button>
                  </AnimatedGroup>
                </>
              ) : (
                <>
                  <AnimatedGroup
                    variants={{
                      container: {
                        visible: {
                          transition: {
                            staggerChildren: 0.05,
                            delayChildren: 0.75
                          }
                        }
                      },
                      ...transitionVariants
                    }}
                    className="mt-12 flex items-center gap-2"
                  >
                    <div key={1}>
                      <Button asChild>
                        <Link href="/sign-up">
                          <span className="text-nowrap">Sign Up</span>
                        </Link>
                      </Button>
                    </div>
                    <Button key={2} asChild variant="outline">
                      <Link href="/sign-up">
                        <span className="text-nowrap">Features</span>
                      </Link>
                    </Button>
                  </AnimatedGroup>
                </>
              )}
            </div>
          </div>
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.75
                  }
                }
              },
              ...transitionVariants
            }}
          >
            <div className="relative mt-8 -mr-56 overflow-hidden sm:mt-12 sm:mr-0 md:mt-20">
              <div
                aria-hidden
                className="to-background absolute inset-0 z-10 bg-linear-to-b from-transparent from-35%"
              />
              <div className="ring-background bg-background relative mx-auto overflow-hidden rounded-2xl border shadow-lg ring-1 inset-shadow-2xs shadow-zinc-950/15 dark:inset-shadow-white/20">
                <Image
                  className="bg-background relative hidden rounded-2xl dark:block"
                  src={EcommerceDashboardDark}
                  alt="app screen"
                  width="2700"
                  height="1440"
                />
                <Image
                  className="border-border/25 relative z-2 rounded-2xl border dark:hidden"
                  src={EcommerceDashboard}
                  alt="app screen"
                  width="2700"
                  height="1440"
                />
              </div>
            </div>
          </AnimatedGroup>
        </div>
      </section>
    </Container>
  )
}

export default Hero
