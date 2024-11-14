import { randomUUID } from 'crypto'
import bcrypt from 'bcryptjs'

import db from '@lib/sqlite'
import { UserDB } from '@core/types/user'

export const initializeDb = async (): Promise<void> => {
  try {
    db.prepare(
      `
        CREATE TABLE IF NOT EXISTS users (
          id TEXT PRIMARY KEY,
          email TEXT UNIQUE NOT NULL,
          name TEXT NOT NULL,
          password TEXT NOT NULL
        )
      `,
    ).run()
  } catch (error) {
    console.log('Failed to initialize database', error)
  }
}

export const seedDb = async (): Promise<string> => {
  try {
    const insert = db.prepare(
      'INSERT INTO users (id, email, name, password) VALUES (@id, @email, @name, @password)',
    )

    const insertMany = db.transaction((users) => {
      for (const user of users) insert.run(user)
    })

    insertMany([
      {
        id: randomUUID(),
        name: 'John Doe',
        email: 'john@mail.com',
        password: await bcrypt.hash('A123456*', 10),
      },
      {
        id: randomUUID(),
        name: 'Jane Doe',
        email: 'jane@mail.com',
        password: await bcrypt.hash('A123456*', 10),
      },
      {
        id: randomUUID(),
        name: 'Alice Doe',
        email: 'alice@mail.com',
        password: await bcrypt.hash('A123456*', 10),
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
