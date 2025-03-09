import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import { db } from './index';

// This will run migrations on the database, creating tables if they don't exist
// and updating them if they do
console.log('Running migrations...');
migrate(db, { migrationsFolder: './src/db/migrations' });
console.log('Migrations completed!'); 