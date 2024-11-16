export interface ReviewDB {
  id: string
  rating: 1 | 2 | 3 | 4 | 5
  comment: string
  created_at: string
  updated_at: string
  user_id: string
  recipe_id: string
}