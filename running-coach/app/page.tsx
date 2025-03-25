import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarDays, LineChart, Dumbbell, Users, Award, Zap, ChevronRight } from "lucide-react"
import { StarsBackground } from "@/components/ui/stars-background"
import { RunningIcon } from "@/components/ui/running-icon"
import { TechButton } from "@/components/ui/tech-button"
import { TechCard } from "@/components/ui/tech-card"

export default function HomePage() {
  return (
    <StarsBackground>
      <div className="flex min-h-screen flex-col text-white">
        <header className="sticky top-0 z-50 w-full border-b border-[#00d264]/20 bg-[#0a0f14]/80 backdrop-blur-md">
          <div className="container flex h-16 items-center">
            <div className="mr-4 hidden md:flex">
              <Link href="/" className="mr-6 flex items-center space-x-2">
                <RunningIcon size={28} />
                <span className="hidden font-bold sm:inline-block">Bhaag</span>
              </Link>
              <nav className="flex items-center space-x-6 text-sm font-medium">
                <Link href="/dashboard" className="transition-colors hover:text-[#00d264]">
                  Dashboard
                </Link>
                <Link href="/training" className="transition-colors hover:text-[#00d264]">
                  Training
                </Link>
                <Link href="/strength" className="transition-colors hover:text-[#00d264]">
                  Strength
                </Link>
                <Link href="/community" className="transition-colors hover:text-[#00d264]">
                  Community
                </Link>
              </nav>
            </div>
            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
              <div className="w-full flex-1 md:w-auto md:flex-none">
                <TechButton
                  className="flex items-center gap-2 bg-[#FC4C02] text-white hover:bg-[#E34902] border-none"
                  glowColor="rgba(252, 76, 2, 0.5)"
                >
                  <img src="/placeholder.svg?height=20&width=20" alt="STRAVA logo" className="h-5 w-5" />
                  <span className="font-medium">Connect with STRAVA</span>
                </TechButton>
              </div>
              <nav className="flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  className="mr-2 rounded-full border border-white/10 bg-black/30 backdrop-blur-md"
                  aria-label="User profile"
                >
                  <img src="/placeholder.svg?height=32&width=32" alt="User avatar" className="h-8 w-8 rounded-full" />
                </Button>
              </nav>
            </div>
          </div>
        </header>
        <main className="flex-1">
          <section className="relative overflow-hidden pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0f14]/80"></div>
            </div>
            <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
              <div className="inline-block rounded-lg bg-[#00d264]/10 px-3 py-1 text-sm text-[#00d264] backdrop-blur-sm border border-[#00d264]/20">
                <RunningIcon size={16} className="mr-1 inline-block" /> Powered by AI
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Your AI-Powered{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d264] to-[#4cc9f0]">
                  Running Coach
                </span>
              </h1>
              <p className="max-w-[42rem] leading-normal text-gray-300 sm:text-xl sm:leading-8 backdrop-blur-sm bg-black/30 p-4 rounded-lg border border-white/10">
                Personalized training plans, strength workouts, and performance tracking for runners of all levels.
                Powered by AI and integrated with STRAVA.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <TechButton
                  asChild
                  size="lg"
                  glowColor="rgba(0, 210, 100, 0.5)"
                  className="bg-gradient-to-r from-[#00d264]/80 to-[#00d264]/40 text-white font-medium"
                >
                  <Link href="/get-started">
                    <RunningIcon size={20} className="mr-2 inline-block" />
                    Get Started
                  </Link>
                </TechButton>
                <TechButton
                  asChild
                  variant="outline"
                  size="lg"
                  glowColor="rgba(76, 201, 240, 0.5)"
                  className="backdrop-blur-sm bg-black/30"
                >
                  <Link href="/learn-more">Learn More</Link>
                </TechButton>
              </div>
            </div>
          </section>

          <section className="container space-y-6 py-8 md:py-12 lg:py-24">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-[#00d264]/10 px-3 py-1 text-sm text-[#00d264] backdrop-blur-sm border border-[#00d264]/20">
                What We Offer
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Advanced Features</h2>
              <p className="max-w-[85%] leading-normal text-gray-300 sm:text-lg sm:leading-7">
                Everything you need to take your running to the next level
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
              <TechCard
                className="group h-[180px] flex flex-col justify-between p-6"
                borderStyle="accent"
                glowColor="rgba(0, 210, 100, 0.3)"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-[#00d264]/10 p-2 border border-[#00d264]/20">
                    <CalendarDays className="h-5 w-5 text-[#00d264]" />
                  </div>
                  <h3 className="text-lg font-bold">Personalized Plans</h3>
                </div>
                <p className="text-sm text-gray-300">
                  AI-generated training plans based on your goals and fitness level
                </p>
                <Link
                  href="/training"
                  className="flex items-center text-sm text-[#00d264] transition-transform duration-300 group-hover:translate-x-1"
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </TechCard>

              <TechCard
                className="group h-[180px] flex flex-col justify-between p-6"
                borderStyle="accent"
                glowColor="rgba(76, 201, 240, 0.3)"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-[#4cc9f0]/10 p-2 border border-[#4cc9f0]/20">
                    <LineChart className="h-5 w-5 text-[#4cc9f0]" />
                  </div>
                  <h3 className="text-lg font-bold">STRAVA Integration</h3>
                </div>
                <p className="text-sm text-gray-300">Sync your runs and get AI-powered insights and recommendations</p>
                <Link
                  href="/strava"
                  className="flex items-center text-sm text-[#4cc9f0] transition-transform duration-300 group-hover:translate-x-1"
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </TechCard>

              <TechCard
                className="group h-[180px] flex flex-col justify-between p-6"
                borderStyle="accent"
                glowColor="rgba(94, 84, 142, 0.3)"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-[#5e548e]/10 p-2 border border-[#5e548e]/20">
                    <Dumbbell className="h-5 w-5 text-[#5e548e]" />
                  </div>
                  <h3 className="text-lg font-bold">Strength Training</h3>
                </div>
                <p className="text-sm text-gray-300">Custom strength routines to complement your running</p>
                <Link
                  href="/strength"
                  className="flex items-center text-sm text-[#5e548e] transition-transform duration-300 group-hover:translate-x-1"
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </TechCard>

              <TechCard
                className="group h-[180px] flex flex-col justify-between p-6"
                borderStyle="accent"
                glowColor="rgba(247, 37, 133, 0.3)"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-[#f72585]/10 p-2 border border-[#f72585]/20">
                    <Users className="h-5 w-5 text-[#f72585]" />
                  </div>
                  <h3 className="text-lg font-bold">Community</h3>
                </div>
                <p className="text-sm text-gray-300">
                  Connect with other runners, share achievements, and stay motivated
                </p>
                <Link
                  href="/community"
                  className="flex items-center text-sm text-[#f72585] transition-transform duration-300 group-hover:translate-x-1"
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </TechCard>

              <TechCard
                className="group h-[180px] flex flex-col justify-between p-6"
                borderStyle="accent"
                glowColor="rgba(255, 209, 102, 0.3)"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-[#ffd166]/10 p-2 border border-[#ffd166]/20">
                    <Award className="h-5 w-5 text-[#ffd166]" />
                  </div>
                  <h3 className="text-lg font-bold">Challenges</h3>
                </div>
                <p className="text-sm text-gray-300">Join group challenges and earn rewards for your achievements</p>
                <Link
                  href="/challenges"
                  className="flex items-center text-sm text-[#ffd166] transition-transform duration-300 group-hover:translate-x-1"
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </TechCard>
            </div>
          </section>

          <section className="relative py-16 md:py-24">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-fixed bg-center opacity-5"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f14] via-transparent to-[#0a0f14]"></div>
            </div>
            <div className="container">
              <TechCard className="mx-auto max-w-3xl p-8" borderStyle="accent">
                <h2 className="mb-6 text-center text-3xl font-bold">Ready to transform your running?</h2>
                <p className="mb-8 text-center text-lg text-gray-300">
                  Join thousands of runners who are using AI to reach their goals faster and stay injury-free.
                </p>
                <div className="flex justify-center">
                  <TechButton
                    asChild
                    size="lg"
                    glowColor="rgba(0, 210, 100, 0.5)"
                    className="bg-gradient-to-r from-[#00d264]/80 to-[#00d264]/40 text-white font-medium"
                  >
                    <Link href="/get-started">
                      <Zap className="mr-2 h-4 w-4" />
                      Start Your Journey
                    </Link>
                  </TechButton>
                </div>
              </TechCard>
            </div>
          </section>

          <section className="py-16">
            <div className="container">
              <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00d264]/10 to-[#4cc9f0]/10 opacity-30"></div>
                <div className="absolute inset-0 backdrop-blur-sm bg-black/50"></div>
                <div className="relative grid gap-8 p-8 md:grid-cols-2">
                  <div>
                    <h2 className="mb-4 text-2xl font-bold">Advanced Running Analytics</h2>
                    <p className="text-gray-300">
                      Our AI analyzes your running data to provide personalized insights and training recommendations.
                      Track your progress with advanced metrics and visualizations.
                    </p>
                    <div className="mt-6">
                      <TechButton
                        asChild
                        glowColor="rgba(0, 210, 100, 0.5)"
                        className="bg-gradient-to-r from-[#00d264]/80 to-[#00d264]/40 text-white font-medium"
                      >
                        <Link href="/analytics">Explore Analytics</Link>
                      </TechButton>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-full max-w-xs">
                      <div className="mb-4 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Weekly Distance</span>
                          <span className="text-sm font-bold">24.5 km</span>
                        </div>
                        <div className="running-stat">
                          <div className="running-stat-fill" style={{ width: "70%" }}></div>
                        </div>
                      </div>
                      <div className="mb-4 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Average Pace</span>
                          <span className="text-sm font-bold">5:30 /km</span>
                        </div>
                        <div className="running-stat">
                          <div className="running-stat-fill" style={{ width: "85%" }}></div>
                        </div>
                      </div>
                      <div className="mb-4 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Training Load</span>
                          <span className="text-sm font-bold">Optimal</span>
                        </div>
                        <div className="running-stat">
                          <div className="running-stat-fill" style={{ width: "60%" }}></div>
                        </div>
                      </div>
                      <div className="mt-6">
                        <div className="text-xs text-gray-400 mb-1">Weekly Activity</div>
                        <div className="data-grid h-20">
                          {Array.from({ length: 28 }).map((_, i) => (
                            <div
                              key={i}
                              className="data-point"
                              style={{ "--opacity": `${Math.random() * 0.8 + 0.2}` } as React.CSSProperties}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="border-t border-[#00d264]/20 py-6 md:py-0 bg-[#0a0f14]/80 backdrop-blur-md">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <div className="flex items-center gap-2">
              <RunningIcon size={20} />
              <p className="text-center text-sm leading-loose text-gray-400 md:text-left">
                &copy; {new Date().getFullYear()} AI Running Coach. All rights reserved.
              </p>
            </div>
            <div className="flex gap-4 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-[#00d264] transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-[#00d264] transition-colors">
                Terms
              </Link>
              <Link href="/contact" className="hover:text-[#00d264] transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </StarsBackground>
  )
}

