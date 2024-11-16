export interface RecipeDB {
  id: string
  name: string
  description: string
  cook_time: number
  image_url: string
  calories: number
  difficulty: string
  created_at: string
  updated_at: string

  category_id: string
}
