import { deleteAllUsers, seedDb } from '@lib/sqlite/statements'
import { NextResponse } from 'next/server'

export async function GET() {
  await deleteAllUsers()
  const response = await seedDb()
  return NextResponse.json({ message: response })
}
