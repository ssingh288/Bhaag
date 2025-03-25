import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { LineChart, BarChart, Activity, TrendingUp, AlertTriangle } from "lucide-react"

export function RunningInsights() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium">Pace Analysis</CardTitle>
          <LineChart className="h-5 w-5 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Based on your recent runs, your optimal pace zones are:</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Easy Runs:</span>
                <span className="font-medium">5:45-6:15 /km</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Tempo Runs:</span>
                <span className="font-medium">5:00-5:20 /km</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Interval Training:</span>
                <span className="font-medium">4:30-4:50 /km</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium">Training Load</CardTitle>
          <BarChart className="h-5 w-5 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Your current training load is optimal. You're making good progress without risking overtraining.
            </p>
            <Alert>
              <Activity className="h-4 w-4" />
              <AlertTitle>Recommendation</AlertTitle>
              <AlertDescription className="text-xs">
                Continue with your current training volume for the next 2 weeks before increasing intensity.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium">Performance Trend</CardTitle>
          <TrendingUp className="h-5 w-5 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Your running performance has improved by 8% over the last 4 weeks. Your endurance is showing the most
              improvement.
            </p>
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Recovery Alert</AlertTitle>
              <AlertDescription className="text-xs">
                Your recovery metrics suggest you should take an extra rest day this week.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

