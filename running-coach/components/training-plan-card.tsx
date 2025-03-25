import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import Link from "next/link"

interface TrainingPlanProps {
  plan: {
    id: string
    title: string
    description: string
    duration: string
    workoutsPerWeek: number
    level: string
  }
}

export function TrainingPlanCard({ plan }: TrainingPlanProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{plan.title}</CardTitle>
          <Badge
            variant={
              plan.level === "Beginner" ? "default" : plan.level === "Intermediate" ? "secondary" : "destructive"
            }
          >
            {plan.level}
          </Badge>
        </div>
        <CardDescription>{plan.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="space-y-2 text-sm">
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>{plan.duration}</span>
          </div>
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>{plan.workoutsPerWeek} workouts per week</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href={`/training/plan/${plan.id}`}>View Details</Link>
        </Button>
        <Button>Start Plan</Button>
      </CardFooter>
    </Card>
  )
}

