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

  user_id: string
  category_id: string
}

export interface RecipeWithUserDB extends RecipeDB {
  chef_name: string
  chef_image: string
  category_name: string
  review_count: number
  review_avg: number
}