"use client"

import { useState } from "react"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"

export function Calendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  // Sample workout data for the calendar
  const workouts = [
    { date: new Date(2023, 5, 10), type: "Easy Run", distance: "5 km" },
    { date: new Date(2023, 5, 12), type: "Interval Training", distance: "6 km" },
    { date: new Date(2023, 5, 14), type: "Long Run", distance: "12 km" },
    { date: new Date(2023, 5, 15), type: "Recovery Run", distance: "4 km" },
    { date: new Date(2023, 5, 17), type: "Tempo Run", distance: "8 km" },
    { date: new Date(2023, 5, 19), type: "Easy Run", distance: "6 km" },
    { date: new Date(2023, 5, 21), type: "Long Run", distance: "14 km" },
  ]

  // Find workouts for the selected date
  const selectedDateWorkouts = workouts.filter(
    (workout) =>
      workout.date.getDate() === date?.getDate() &&
      workout.date.getMonth() === date?.getMonth() &&
      workout.date.getFullYear() === date?.getFullYear(),
  )

  return (
    <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
      <CalendarComponent
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        modifiers={{
          workout: workouts.map((workout) => workout.date),
        }}
        modifiersStyles={{
          workout: {
            fontWeight: "bold",
            backgroundColor: "hsl(var(--primary) / 0.1)",
            color: "hsl(var(--primary))",
          },
        }}
      />
      <div className="flex-1 rounded-md border p-4">
        <h3 className="font-medium">
          {date
            ? date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })
            : "Select a date"}
        </h3>
        {selectedDateWorkouts.length > 0 ? (
          <div className="mt-4 space-y-2">
            {selectedDateWorkouts.map((workout, index) => (
              <div key={index} className="rounded-md bg-muted p-2">
                <div className="font-medium">{workout.type}</div>
                <div className="text-sm text-muted-foreground">{workout.distance}</div>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-sm text-muted-foreground">No workouts scheduled for this day.</p>
        )}
      </div>
    </div>
  )
}

