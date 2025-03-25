import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { StrengthWorkoutCard } from "@/components/strength-workout-card"
import Link from "next/link"

export default function StrengthPage() {
  // Sample strength workouts
  const strengthWorkouts = [
    {
      id: "core-stability",
      title: "Core Stability",
      description: "Build a strong core to improve running efficiency",
      duration: "20 minutes",
      level: "All levels",
      equipment: "Bodyweight",
      category: "Core",
    },
    {
      id: "lower-body-strength",
      title: "Lower Body Strength",
      description: "Strengthen your legs for better running performance",
      duration: "30 minutes",
      level: "Intermediate",
      equipment: "Dumbbells",
      category: "Lower Body",
    },
    {
      id: "mobility-flow",
      title: "Mobility Flow",
      description: "Improve your range of motion and prevent injuries",
      duration: "15 minutes",
      level: "All levels",
      equipment: "Bodyweight",
      category: "Mobility",
    },
    {
      id: "runner-hiit",
      title: "Runner's HIIT",
      description: "High-intensity interval training for runners",
      duration: "25 minutes",
      level: "Advanced",
      equipment: "Bodyweight",
      category: "HIIT",
    },
    {
      id: "injury-prevention",
      title: "Injury Prevention",
      description: "Target common weak areas for runners",
      duration: "20 minutes",
      level: "All levels",
      equipment: "Resistance band",
      category: "Prehab",
    },
    {
      id: "upper-body-strength",
      title: "Upper Body Strength",
      description: "Build upper body strength for balanced fitness",
      duration: "25 minutes",
      level: "Intermediate",
      equipment: "Dumbbells",
      category: "Upper Body",
    },
  ]

  return (
    <DashboardShell>
      <DashboardHeader heading="Strength Training" text="Complement your running with personalized strength workouts.">
        <Button>Create Custom Workout</Button>
      </DashboardHeader>
      <Tabs defaultValue="workouts" className="space-y-4">
        <TabsList>
          <TabsTrigger value="workouts">Workouts</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
        </TabsList>
        <TabsContent value="workouts" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {strengthWorkouts.map((workout) => (
              <StrengthWorkoutCard key={workout.id} workout={workout} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Workout History</CardTitle>
              <CardDescription>Track your completed strength workouts</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center space-y-4 py-8">
              <p className="text-center text-muted-foreground">You haven't completed any strength workouts yet</p>
              <Button asChild>
                <Link href="#workouts">Start a Workout</Link>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="recommended" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI Recommendations</CardTitle>
              <CardDescription>Personalized strength workouts based on your running data</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center space-y-4 py-8">
              <p className="text-center text-muted-foreground">
                Connect your STRAVA account to get personalized recommendations
              </p>
              <Button>Connect STRAVA</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

