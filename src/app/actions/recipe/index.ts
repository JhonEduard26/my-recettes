'use server'

import { RecipeService } from '@features/recipe-management/services/recipe.service'

const recipeService = new RecipeService()

export const getRecipeImageUrl = async (path: string) => {
  return recipeService.getRecipeImageUrl(path)
}
