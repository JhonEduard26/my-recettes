import { StorageProvider } from '@shared/providers/storage.provider'

export class RecipeService {
  private storage = StorageProvider.getInstance()

  async uploadRecipeImage(file: File, recipeId: string): Promise<string> {
    const path = `recipes/${recipeId}/${file.name}`
    return this.storage.upload(file, path)
  }

  async deleteRecipeImage(path: string): Promise<void> {
    return this.storage.delete(path)
  }

  async getRecipeImageUrl(path: string): Promise<string> {
    return this.storage.getUrl(path)
  }
}
