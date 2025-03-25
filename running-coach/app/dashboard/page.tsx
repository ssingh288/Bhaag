import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { DashboardMetrics } from "@/components/dashboard-metrics"
import { UpcomingWorkouts } from "@/components/upcoming-workouts"
import { RecentActivities } from "@/components/recent-activities"
import { WeeklyProgress } from "@/components/weekly-progress"
import { RunningInsights } from "@/components/running-insights"

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" text="View your running stats, upcoming workouts, and AI insights." />
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <DashboardMetrics />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Upcoming Workouts</CardTitle>
                <CardDescription>Your next 7 days of training</CardDescription>
              </CardHeader>
              <CardContent>
                <UpcomingWorkouts />
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>Your latest runs from STRAVA</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentActivities />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="insights" className="space-y-4">
          <RunningInsights />
        </TabsContent>
        <TabsContent value="progress" className="space-y-4">
          <WeeklyProgress />
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

