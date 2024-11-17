import { categories, recipes, reviews, users } from './data'
import { getSession } from '@lib/session'
import { TABLE_SCHEMAS } from './schemas'
import db from '@lib/sqlite'
import type { CategoryDB } from '@core/types/category'
import type { RecipeDB, RecipeWithUserDB } from '@core/types/recipe'
import type { ReviewDB } from '@core/types/review'
import type { UserDB } from '@core/types/user'

const dropTable = (tableName: string) => {
  try {
    db.prepare(`DROP TABLE IF EXISTS ${tableName}`).run()
  } catch (error) {
    throw new Error(`Failed to drop table: ${error}`)
  }
}

const createTable = async (schema: string) => {
  try {
    db.prepare(schema).run()
  } catch (error) {
    throw new Error(`Failed to create table: ${error}`)
  }
}

export const initializeDb = async (): Promise<string> => {
  try {
    for (const table of Object.keys(TABLE_SCHEMAS)) {
      dropTable(table)
    }

    for (const schema of Object.values(TABLE_SCHEMAS)) {
      createTable(schema)
    }

    return 'Database initialized successfully'
  } catch (error) {
    console.log('Failed to initialize database', error)
    return 'Failed to initialize database'
  }
}

export const seedDb = async (): Promise<string> => {
  try {
    const insertUsers = db.prepare(
      `
        INSERT INTO users (id, email, name, password, created_at, updated_at)
        VALUES (@id, @email, @name, @password, @created_at, @updated_at)
      `,
    )

    const insertManyUsers = db.transaction((users: UserDB[]) => {
      for (const user of users) insertUsers.run(user)
    })

    insertManyUsers(users)

    const insertCategories = db.prepare(
      `
        INSERT INTO categories (id, name, description, created_at, updated_at)
        VALUES (@id, @name, @description, @created_at, @updated_at)
      `,
    )

    const insertManyCategories = db.transaction((categories: CategoryDB[]) => {
      for (const category of categories) insertCategories.run(category)
    })

    insertManyCategories(categories)

    const insertRecipes = db.prepare(
      `
        INSERT INTO recipes (id, name, description, difficulty, calories, cook_time, image_url, created_at, updated_at, user_id, category_id)
        VALUES (@id, @name, @description, @difficulty, @calories, @cook_time,  @image_url,  @created_at, @updated_at, @user_id, @category_id)
      `,
    )

    const insertManyRecipes = db.transaction((recipes: RecipeDB[]) => {
      for (const recipe of recipes) insertRecipes.run(recipe)
    })

    insertManyRecipes(recipes)

    // Reviews

    const insertReviews = db.prepare(
      `
        INSERT INTO reviews (id, rating, comment, created_at, updated_at, user_id, recipe_id)
        VALUES (@id, @rating, @comment, @created_at, @updated_at, @user_id, @recipe_id)
      `,
    )

    const insertManyReviews = db.transaction((reviews: ReviewDB[]) => {
      for (const review of reviews) insertReviews.run(review)
    })

    insertManyReviews(reviews)

    return 'Database seeded successfully'
  } catch (error) {
    console.log('Failed to seed database', error)
    return 'Failed to seed database'
  }
}

export const deleteAllData = async (): Promise<string> => {
  try {
    const tablesToDelete = ['reviews', 'recipes', 'users', 'categories']

    for (const table of tablesToDelete) {
      db.prepare(`DELETE FROM ${table}`).run()
    }

    return 'All users deleted successfully'
  } catch (error) {
    console.log('Failed to delete all users', error)
    return 'Failed to delete all users'
  }
}

export const getUserByEmail = async (email: string): Promise<UserDB | null> => {
  try {
    const stmt = db.prepare('SELECT * FROM users WHERE email = ?')
    const user = stmt.get(email) as UserDB
    return user
  } catch (error) {
    console.log('Failed to get user by email', error)
    return null
  }
}

export const getCurrentUser = async () => {
  const user = await getSession()

  if (!user) return null

  const stmt = db.prepare('SELECT * FROM users WHERE id = ?')
  const currentUser = stmt.get(user.userId) as UserDB
  return currentUser
}

export const getAllCategories = async (): Promise<CategoryDB[]> => {
  try {
    const stmt = db.prepare('SELECT * FROM categories')
    const categories = stmt.all() as CategoryDB[]
    return categories
  } catch (error) {
    console.log('Failed to get all categories', error)
    return []
  }
}

export const getPopularRecipes = async (): Promise<RecipeWithUserDB[]> => {
  try {
    const stmt = db.prepare(`
        SELECT
          recipes.*,
          users.name as chef_name,
          COALESCE(review_stats.count, 0) as review_count,
          COALESCE(review_stats.avg_rating, 0) as review_avg
        FROM recipes
        LEFT JOIN users
        ON recipes.user_id = users.id
        LEFT JOIN (
          SELECT
            recipe_id,
            COUNT(*) as count,
            AVG(rating) as avg_rating
          FROM reviews
          GROUP BY recipe_id
        ) as review_stats
        ON recipes.id = review_stats.recipe_id
    `)
    const recipes = stmt.all() as RecipeWithUserDB[]
    return recipes
  } catch (error) {
    console.log('Failed to get popular recipes', error)
    return []
  }
}
