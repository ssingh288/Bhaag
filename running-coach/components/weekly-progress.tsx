import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function WeeklyProgress() {
  // Sample weekly progress data
  const weeklyGoals = [
    { name: "Distance", current: 24.5, target: 30, unit: "km" },
    { name: "Workouts", current: 4, target: 5, unit: "" },
    { name: "Strength Sessions", current: 2, target: 3, unit: "" },
    { name: "Elevation Gain", current: 320, target: 500, unit: "m" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Progress</CardTitle>
        <CardDescription>Track your progress towards your weekly goals</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {weeklyGoals.map((goal) => (
            <div key={goal.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{goal.name}</span>
                <span className="text-sm text-muted-foreground">
                  {goal.current} / {goal.target} {goal.unit}
                </span>
              </div>
              <Progress value={(goal.current / goal.target) * 100} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

