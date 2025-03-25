import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Dumbbell } from "lucide-react"
import Link from "next/link"

interface StrengthWorkoutProps {
  workout: {
    id: string
    title: string
    description: string
    duration: string
    level: string
    equipment: string
    category: string
  }
}

export function StrengthWorkoutCard({ workout }: StrengthWorkoutProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{workout.title}</CardTitle>
          <Badge
            variant={
              workout.category === "Core"
                ? "default"
                : workout.category === "Lower Body"
                  ? "secondary"
                  : workout.category === "Upper Body"
                    ? "outline"
                    : workout.category === "HIIT"
                      ? "destructive"
                      : "default"
            }
          >
            {workout.category}
          </Badge>
        </div>
        <CardDescription>{workout.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="space-y-2 text-sm">
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>{workout.duration}</span>
          </div>
          <div className="flex items-center">
            <Dumbbell className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>{workout.equipment}</span>
          </div>
          <div className="mt-1">
            <Badge variant="outline">{workout.level}</Badge>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href={`/strength/workout/${workout.id}`}>View Details</Link>
        </Button>
        <Button>Start Workout</Button>
      </CardFooter>
    </Card>
  )
}

