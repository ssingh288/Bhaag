import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database tables
export type Profile = {
  id: string
  created_at: string
  email: string
  full_name: string
  avatar_url?: string
  strava_connected: boolean
}

export type TrainingPlan = {
  id: string
  user_id: string
  name: string
  description: string
  start_date: string
  end_date: string
  created_at: string
}

export type WorkoutSession = {
  id: string
  user_id: string
  training_plan_id?: string
  type: 'run' | 'strength'
  date: string
  duration: number
  distance?: number
  notes?: string
  created_at: string
}

export type StrengthExercise = {
  id: string
  workout_id: string
  name: string
  sets: number
  reps: number
  weight?: number
  notes?: string
} 