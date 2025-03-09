# Next.js with Drizzle ORM

A simple Todo application built with Next.js and Drizzle ORM to demonstrate how to use Drizzle with Next.js.

## Features

- Next.js 15 with App Router
- Drizzle ORM for database operations
- SQLite database
- TypeScript
- Tailwind CSS for styling
- Simple Todo CRUD operations

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Generate migrations:
   ```bash
   npm run db:generate
   ```
4. Run migrations:
   ```bash
   npm run db:migrate
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `src/db/schema.ts` - Database schema definition
- `src/db/index.ts` - Database connection setup
- `src/db/migrate.ts` - Migration script
- `src/app/api/todos/route.ts` - API routes for todos
- `src/components/` - React components
- `src/app/page.tsx` - Main page component

## Learn More

- [Drizzle ORM Documentation](https://orm.drizzle.team/docs/overview)
- [Next.js Documentation](https://nextjs.org/docs)
