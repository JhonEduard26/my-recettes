import { randomUUID } from 'crypto'
import bcrypt from 'bcryptjs'
import type { ReviewDB } from '@core/types/review'

export const users = [
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
]

export const categories = [
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
]

export const recipes = [
  {
    id: randomUUID(),
    name: 'Huevos con jamón',
    description: 'Receta de huevos con jamón',
    difficulty: 'Fácil',
    calories: 200,
    cook_time: 10,
    image_url: 'https://via.placeholder.com/150',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),

    user_id: users[0].id,
    category_id: categories[0].id,
  },
  {
    id: randomUUID(),
    name: 'Pollo a la plancha',
    description: 'Receta de pollo a la plancha',
    difficulty: 'Media',
    calories: 300,
    cook_time: 60,
    image_url: 'https://via.placeholder.com/150',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),

    user_id: users[1].id,
    category_id: categories[1].id,
  },
  {
    id: randomUUID(),
    name: 'Pasta con salsa de tomate',
    description: 'Receta de pasta con salsa de tomate',
    difficulty: 'Difícil',
    calories: 200,
    cook_time: 30,
    image_url: 'https://via.placeholder.com/150',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),

    user_id: users[2].id,
    category_id: categories[2].id,
  },
]

export const reviews: ReviewDB[] = [
  {
    id: randomUUID(),
    rating: 5,
    comment: 'Excelente receta',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),

    user_id: users[0].id,
    recipe_id: recipes[0].id,
  },
  {
    id: randomUUID(),
    rating: 2,
    comment: 'Necesita mejorar receta',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),

    user_id: users[1].id,
    recipe_id: recipes[0].id,
  },
  {
    id: randomUUID(),
    rating: 3,
    comment: 'Regular receta',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),

    user_id: users[2].id,
    recipe_id: recipes[1].id,
  },
]
