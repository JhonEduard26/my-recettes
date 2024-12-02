import { randomUUID } from 'crypto'
import bcrypt from 'bcryptjs'

import type { RecipeDB } from '@core/types/recipe'
import type { ReviewDB } from '@core/types/review'
import type { UserDB } from '@core/types/user'

export const users: UserDB[] = [
  {
    id: randomUUID(),
    name: 'John Doe',
    email: 'john@mail.com',
    password: await bcrypt.hash('A123456*', 10),
    image_url: 'https://dummyimage.com/100x100',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: randomUUID(),
    name: 'Jane Doe',
    email: 'jane@mail.com',
    password: await bcrypt.hash('A123456*', 10),
    image_url: 'https://dummyimage.com/100x100',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: randomUUID(),
    name: 'Alice Doe',
    email: 'alice@mail.com',
    password: await bcrypt.hash('A123456*', 10),
    image_url: 'https://dummyimage.com/100x100',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
]

export const categories = [
  {
    id: randomUUID(),
    name: 'Desayunos',
    description: 'Recetas para el desayuno',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: randomUUID(),
    name: 'Almuerzos',
    description: 'Recetas para el almuerzo',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: randomUUID(),
    name: 'Cenas',
    description: 'Recetas para la cena',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: randomUUID(),
    name: 'Postres',
    description: 'Recetas para postres',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: randomUUID(),
    name: 'Snacks y aperitivos',
    description: 'Recetas para snacks y aperitivos',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: randomUUID(),
    name: 'Bebidas',
    description: 'Recetas para bebidas',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: randomUUID(),
    name: 'Ensaladas',
    description: 'Recetas para ensaladas',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: randomUUID(),
    name: 'Sopas y cremas',
    description: 'Recetas para sopas y cremas',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: randomUUID(),
    name: 'Vegetariano y vegano',
    description: 'Recetas para vegetarianos y veganos',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: randomUUID(),
    name: 'Carnes',
    description: 'Recetas para carnes',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
]

export const recipes: RecipeDB[] = [
  {
    id: randomUUID(),
    name: 'Huevos con jamón',
    description: 'Receta de huevos con jamón',
    difficulty: 'Fácil',
    calories: 200,
    cook_time: 10,
    image_url: 'recipes/huevos-con-jamon-g668iz257grd/huevos-con-jamon-1.webp',
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
    image_url: 'recipes/huevos-con-jamon-g668iz257grd/huevos-con-jamon-1.webp',
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
    image_url: 'recipes/huevos-con-jamon-g668iz257grd/huevos-con-jamon-1.webp',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),

    user_id: users[2].id,
    category_id: categories[2].id,
  },
  {
    id: randomUUID(),
    name: 'Tarta de manzana',
    description: 'Receta de tarta de manzana',
    difficulty: 'Fácil',
    calories: 400,
    cook_time: 45,
    image_url: 'recipes/tarta-de-manzana/tarta-de-manzana.png',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),

    user_id: users[0].id,
    category_id: categories[3].id,
  },
  {
    id: randomUUID(),
    name: 'Galletas de chocolate',
    description: 'Receta de galletas de chocolate',
    difficulty: 'Media',
    calories: 200,
    cook_time: 20,
    image_url: 'recipes/huevos-con-jamon-g668iz257grd/huevos-con-jamon-1.webp',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),

    user_id: users[1].id,
    category_id: categories[4].id,
  },
  {
    id: randomUUID(),
    name: 'Batido de fresa',
    description: 'Receta de batido de fresa',
    difficulty: 'Fácil',
    calories: 100,
    cook_time: 10,
    image_url: 'recipes/huevos-con-jamon-g668iz257grd/huevos-con-jamon-1.webp',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),

    user_id: users[2].id,
    category_id: categories[5].id,
  },
  {
    id: randomUUID(),
    name: 'Ensalada César',
    description: 'Receta de ensalada César',
    difficulty: 'Fácil',
    calories: 200,
    cook_time: 15,
    image_url: 'recipes/ensalada-cesar/ensalada-cesar.png',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),

    user_id: users[0].id,
    category_id: categories[6].id,
  },
  {
    id: randomUUID(),
    name: 'Sopa de verduras',
    description: 'Receta de sopa de verduras',
    difficulty: 'Fácil',
    calories: 200,
    cook_time: 30,
    image_url: 'recipes/huevos-con-jamon-g668iz257grd/huevos-con-jamon-1.webp',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),

    user_id: users[1].id,
    category_id: categories[7].id,
  },
  {
    id: randomUUID(),
    name: 'Hamburguesa vegetariana',
    description: 'Receta de hamburguesa vegetariana',
    difficulty: 'Media',
    calories: 300,
    cook_time: 30,
    image_url: 'recipes/huevos-con-jamon-g668iz257grd/huevos-con-jamon-1.webp',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),

    user_id: users[2].id,
    category_id: categories[8].id,
  },
  {
    id: randomUUID(),
    name: 'Costillas de cerdo',
    description: 'Receta de costillas de cerdo',
    difficulty: 'Media',
    calories: 300,
    cook_time: 60,
    image_url: 'recipes/costillas-de-cerdo/costillas-de-cerdo.png',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),

    user_id: users[0].id,
    category_id: categories[9].id,
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
    recipe_id: recipes[2].id,
  },
]
