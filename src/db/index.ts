import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from './schema';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';

// Initialize the SQLite database with a path that works in both development and production
let db: ReturnType<typeof drizzle>;

// In development, use a local SQLite file
// In production (Vercel), use an in-memory database that gets recreated on each request
if (process.env.NODE_ENV === 'production') {
    // For production, we'll use an in-memory database
    // Note: This means data won't persist between function invocations
    // For a production app, you'd want to use a proper database service
    const sqlite = new Database(':memory:');
    db = drizzle(sqlite, { schema });

    // Run migrations to create tables in the in-memory database
    migrate(db, { migrationsFolder: './src/db/migrations' });

    // Add some initial data for demo purposes
    db.insert(schema.todos).values([
        { title: 'Learn Next.js', completed: true, createdAt: new Date() },
        { title: 'Learn Drizzle ORM', completed: false, createdAt: new Date() },
        { title: 'Build a full-stack app', completed: false, createdAt: new Date() }
    ]).run();
} else {
    // For development, use a local SQLite file
    const sqlite = new Database('sqlite.db');
    db = drizzle(sqlite, { schema });
}

// Export the database client
export { db, schema }; 