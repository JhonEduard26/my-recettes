import Database from 'better-sqlite3'
import { join } from 'path'

const dbPath = join(process.cwd(), 'data', 'my_recettes_db.db')
const db = new Database(dbPath, { verbose: console.log })

export default db
