import { deleteSession } from '@lib/session'
import { deleteAllData, seedDb } from '@lib/sqlite/statements'
import { NextResponse } from 'next/server'

export async function GET() {
  await deleteAllData()
  await deleteSession()
  const response = await seedDb()
  return NextResponse.json({ message: response })
}
