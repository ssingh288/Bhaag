import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { TrainingPlanCard } from "@/components/training-plan-card"
import { Calendar } from "@/components/calendar"
import Link from "next/link"

export default function TrainingPage() {
  // Sample training plans
  const trainingPlans = [
    {
      id: "5k-beginner",
      title: "5K Beginner",
      description: "Perfect for new runners looking to complete their first 5K race",
      duration: "8 weeks",
      workoutsPerWeek: 3,
      level: "Beginner",
    },
    {
      id: "10k-intermediate",
      title: "10K Intermediate",
      description: "For runners who have completed a 5K and want to step up to 10K",
      duration: "10 weeks",
      workoutsPerWeek: 4,
      level: "Intermediate",
    },
    {
      id: "half-marathon-advanced",
      title: "Half Marathon Advanced",
      description: "For experienced runners looking to improve their half marathon time",
      duration: "12 weeks",
      workoutsPerWeek: 5,
      level: "Advanced",
    },
    {
      id: "marathon-beginner",
      title: "Marathon Beginner",
      description: "For runners who want to complete their first marathon",
      duration: "16 weeks",
      workoutsPerWeek: 4,
      level: "Intermediate",
    },
  ]

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Training Plans"
        text="Choose from our AI-generated training plans or create a custom plan."
      >
        <Button>Create Custom Plan</Button>
      </DashboardHeader>
      <Tabs defaultValue="plans" className="space-y-4">
        <TabsList>
          <TabsTrigger value="plans">Training Plans</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
          <TabsTrigger value="active">Active Plan</TabsTrigger>
        </TabsList>
        <TabsContent value="plans" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {trainingPlans.map((plan) => (
              <TrainingPlanCard key={plan.id} plan={plan} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="calendar" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Training Calendar</CardTitle>
              <CardDescription>View your upcoming workouts and schedule</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Training Plan</CardTitle>
              <CardDescription>You don't have an active training plan</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center space-y-4 py-8">
              <p className="text-center text-muted-foreground">
                Select a training plan to get started with your running journey
              </p>
              <Button asChild>
                <Link href="#plans">Browse Plans</Link>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

