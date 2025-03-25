"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

const quotes = [
  "The miracle isn't that I finished. The miracle is that I had the courage to start.",
  "Running is the greatest metaphor for life, because you get out of it what you put into it.",
  "I run because if I didn't, I'd be sluggish and glum and spend too much time on the couch.",
  "The only bad workout is the one that didn't happen.",
  "Pain is temporary. Quitting lasts forever.",
  "Run when you can, walk if you have to, crawl if you must; just never give up.",
  "The voice inside your head that says you can't do this is a liar.",
  "Running allows me to set my mind free. Nothing seems impossible. Nothing unattainable.",
  "It's very hard in the beginning to understand that the whole idea is not to beat the other runners. Eventually you learn that the competition is against the little voice inside you that wants you to quit.",
  "Every morning in Africa, a gazelle wakes up. It knows it must outrun the fastest lion or it will be killed. Every morning in Africa, a lion wakes up. It knows it must run faster than the slowest gazelle, or it will starve. It doesn't matter whether you're the lion or a gazelle - when the sun comes up, you'd better be running.",
]

export function MotivationalQuote() {
  const [quote, setQuote] = useState("")

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)])
  }, [])

  return (
    <Card className="bg-black/5 backdrop-blur-sm border-none shadow-lg">
      <CardContent className="flex items-center p-4">
        <QuoteIcon className="h-8 w-8 mr-4 text-primary opacity-70" />
        <p className="italic text-sm md:text-base">{quote}</p>
      </CardContent>
    </Card>
  )
}

