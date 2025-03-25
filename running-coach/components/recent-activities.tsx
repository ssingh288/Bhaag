import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, MapPin } from "lucide-react"
import Link from "next/link"

export function RecentActivities() {
  // Sample recent activities from STRAVA
  const activities = [
    {
      id: 1,
      title: "Morning Run",
      date: "Today",
      time: "7:30 AM",
      distance: "5.2 km",
      duration: "28:45",
      pace: "5:32 /km",
    },
    {
      id: 2,
      title: "Lunch Run",
      date: "Yesterday",
      time: "12:15 PM",
      distance: "4.8 km",
      duration: "26:12",
      pace: "5:27 /km",
    },
    {
      id: 3,
      title: "Evening Run",
      date: "2 days ago",
      time: "6:45 PM",
      distance: "8.3 km",
      duration: "46:18",
      pace: "5:35 /km",
    },
  ]

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <Link
          key={activity.id}
          href={`/activity/${activity.id}`}
          className="flex items-start space-x-4 rounded-lg border p-4 transition-colors hover:bg-muted/50"
        >
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Activity" />
            <AvatarFallback>RUN</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <p className="font-medium">{activity.title}</p>
              <p className="text-sm text-muted-foreground">{activity.date}</p>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
              <span className="flex items-center text-muted-foreground">
                <MapPin className="mr-1 h-4 w-4" />
                {activity.distance}
              </span>
              <span className="flex items-center text-muted-foreground">
                <Clock className="mr-1 h-4 w-4" />
                {activity.duration}
              </span>
              <span className="text-muted-foreground">{activity.pace}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

