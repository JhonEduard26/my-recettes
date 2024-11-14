import { initializeDb } from '@lib/sqlite/statements'
import { NextResponse } from 'next/server'

export async function GET() {
  const response = await initializeDb()
  return NextResponse.json({ message: response })
}
