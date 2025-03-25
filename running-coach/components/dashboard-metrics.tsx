import { Activity, Calendar, Clock, TrendingUp } from "lucide-react"
import { TechCard } from "@/components/ui/tech-card"

export function DashboardMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <TechCard className="p-4" borderStyle="accent" glowColor="rgba(0, 210, 100, 0.3)">
        <div className="flex flex-row items-center justify-between space-y-0 pb-2">
          <h3 className="text-sm font-medium">Weekly Distance</h3>
          <div className="rounded-full bg-[#00d264]/10 p-2 border border-[#00d264]/20">
            <Activity className="h-4 w-4 text-[#00d264]" />
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold">24.5 km</div>
          <p className="flex items-center text-xs text-[#00d264]">
            <TrendingUp className="mr-1 h-3 w-3" />
            +2.5 km from last week
          </p>
        </div>
      </TechCard>

      <TechCard className="p-4" borderStyle="accent" glowColor="rgba(76, 201, 240, 0.3)">
        <div className="flex flex-row items-center justify-between space-y-0 pb-2">
          <h3 className="text-sm font-medium">Average Pace</h3>
          <div className="rounded-full bg-[#4cc9f0]/10 p-2 border border-[#4cc9f0]/20">
            <Clock className="h-4 w-4 text-[#4cc9f0]" />
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold">5:30 /km</div>
          <p className="flex items-center text-xs text-[#4cc9f0]">
            <TrendingUp className="mr-1 h-3 w-3" />
            -0:05 /km from last week
          </p>
        </div>
      </TechCard>

      <TechCard className="p-4" borderStyle="accent" glowColor="rgba(94, 84, 142, 0.3)">
        <div className="flex flex-row items-center justify-between space-y-0 pb-2">
          <h3 className="text-sm font-medium">Workouts Completed</h3>
          <div className="rounded-full bg-[#5e548e]/10 p-2 border border-[#5e548e]/20">
            <Calendar className="h-4 w-4 text-[#5e548e]" />
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold">4</div>
          <p className="flex items-center text-xs text-[#5e548e]">This week (80% of plan)</p>
        </div>
      </TechCard>

      <TechCard className="p-4" borderStyle="accent" glowColor="rgba(247, 37, 133, 0.3)">
        <div className="flex flex-row items-center justify-between space-y-0 pb-2">
          <h3 className="text-sm font-medium">Training Load</h3>
          <div className="rounded-full bg-[#f72585]/10 p-2 border border-[#f72585]/20">
            <TrendingUp className="h-4 w-4 text-[#f72585]" />
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold">Optimal</div>
          <p className="flex items-center text-xs text-[#f72585]">
            <TrendingUp className="mr-1 h-3 w-3" />
            +5% from last week
          </p>
        </div>
      </TechCard>
    </div>
  )
}

