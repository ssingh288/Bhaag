import { Calendar, Clock, MapPin, Play } from "lucide-react"
import Link from "next/link"
import { TechButton } from "@/components/ui/tech-button"
import { TechCard } from "@/components/ui/tech-card"

export function UpcomingWorkouts() {
  // Sample upcoming workouts
  const workouts = [
    {
      id: 1,
      title: "Easy Run",
      date: "Today",
      time: "6:00 PM",
      distance: "5 km",
      duration: "30 min",
      description: "Keep your heart rate low and focus on recovery",
      completed: false,
      color: "rgba(0, 210, 100, 0.3)",
      textColor: "#00d264",
    },
    {
      id: 2,
      title: "Interval Training",
      date: "Tomorrow",
      time: "7:00 AM",
      distance: "6 km",
      duration: "45 min",
      description: "8 x 400m repeats with 200m recovery jogs",
      completed: false,
      color: "rgba(76, 201, 240, 0.3)",
      textColor: "#4cc9f0",
    },
    {
      id: 3,
      title: "Long Run",
      date: "Saturday",
      time: "8:00 AM",
      distance: "12 km",
      duration: "70 min",
      description: "Steady pace, focus on endurance building",
      completed: false,
      color: "rgba(94, 84, 142, 0.3)",
      textColor: "#5e548e",
    },
    {
      id: 4,
      title: "Recovery Run",
      date: "Sunday",
      time: "9:00 AM",
      distance: "4 km",
      duration: "25 min",
      description: "Very easy pace to promote recovery",
      completed: false,
      color: "rgba(247, 37, 133, 0.3)",
      textColor: "#f72585",
    },
  ]

  return (
    <div className="space-y-4">
      {workouts.map((workout) => (
        <TechCard key={workout.id} className="p-4" borderStyle="accent" glowColor={workout.color}>
          <div className="flex items-center justify-between">
            <div className="font-medium">{workout.title}</div>
            <div className="flex items-center text-sm" style={{ color: workout.textColor }}>
              <Calendar className="mr-1 h-4 w-4" />
              {workout.date}
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center text-gray-300">
              <Clock className="mr-1 h-4 w-4" />
              {workout.time}
            </div>
            <div className="flex items-center text-gray-300">
              <MapPin className="mr-1 h-4 w-4" />
              {workout.distance}
            </div>
          </div>
          <p className="text-sm text-gray-300 mt-2">{workout.description}</p>
          <div className="flex items-center justify-between pt-4">
            <TechButton
              variant="outline"
              size="sm"
              asChild
              glowColor={workout.color}
              className="bg-black/30 backdrop-blur-sm"
            >
              <Link href={`/workout/${workout.id}`}>View Details</Link>
            </TechButton>
            <TechButton size="sm" glowColor={workout.color} className="bg-black/30 backdrop-blur-sm">
              <Play className="mr-1 h-3 w-3" />
              Start Workout
            </TechButton>
          </div>
        </TechCard>
      ))}
    </div>
  )
}

