import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from './schema';

// Initialize the SQLite database
const sqlite = new Database('sqlite.db');

// Create the Drizzle client
export const db = drizzle(sqlite, { schema });

// Export the schema for use in other files
export { schema }; 