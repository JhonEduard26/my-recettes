import { randomUUID } from 'crypto'
import bcrypt from 'bcryptjs'

import db from '@lib/sqlite'
import { UserDB } from '@core/types/user'
import { getSession } from '@lib/session'
import { CategoryDB } from '@core/types/category'

export const initializeDb = async (): Promise<string> => {
  try {
    db.prepare(
      `
        DROP TABLE IF EXISTS users;
      `,
    ).run()

    db.prepare(
      `
        DROP TABLE IF EXISTS categories;
      `,
    ).run()

    db.prepare(
      `
        CREATE TABLE IF NOT EXISTS users (
          id TEXT PRIMARY KEY,
          email TEXT UNIQUE NOT NULL,
          name TEXT NOT NULL,
          password TEXT NOT NULL,
          created_at TEXT NOT NULL,
          updated_at TEXT NOT NULL
        )
      `,
    ).run()

    db.prepare(
      `
        CREATE TABLE IF NOT EXISTS categories (
          id TEXT PRIMARY KEY,
          name TEXT NOT NULL,
          description TEXT NOT NULL,
          created_at TEXT NOT NULL,
          updated_at TEXT NOT NULL
        )
      `,
    ).run()

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

    insertManyUsers([
      {
        id: randomUUID(),
        name: 'John Doe',
        email: 'john@mail.com',
        password: await bcrypt.hash('A123456*', 10),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        id: randomUUID(),
        name: 'Jane Doe',
        email: 'jane@mail.com',
        password: await bcrypt.hash('A123456*', 10),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        id: randomUUID(),
        name: 'Alice Doe',
        email: 'alice@mail.com',
        password: await bcrypt.hash('A123456*', 10),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    ])

    const insertCategories = db.prepare(
      `
        INSERT INTO categories (id, name, description, created_at, updated_at)
        VALUES (@id, @name, @description, @created_at, @updated_at)
      `,
    )

    const insertManyCategories = db.transaction((categories: CategoryDB[]) => {
      for (const category of categories) insertCategories.run(category)
    })

    insertManyCategories([
      {
        id: randomUUID(),
        name: 'Desayuno',
        description: 'Recetas para el desayuno',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        id: randomUUID(),
        name: 'Almuerzo',
        description: 'Recetas para el almuerzo',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        id: randomUUID(),
        name: 'Cena',
        description: 'Recetas para la cena',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    ])

    return 'Database seeded successfully'
  } catch (error) {
    console.log('Failed to seed database', error)
    return 'Failed to seed database'
  }
}

export const deleteAllUsers = async (): Promise<string> => {
  try {
    const stmt = db.prepare('DELETE FROM users')
    stmt.run()

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
