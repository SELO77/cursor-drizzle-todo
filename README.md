# Cursor Drizzle

A Next.js application with Drizzle ORM and SQLite.

## Features

- Next.js 15 with React 19
- Drizzle ORM with SQLite
- PWA support
- Todo application with comments

## Development

```bash
# Install dependencies
npm install

# Run database migrations
npm run db:migrate

# Start development server
npm run dev
```

## Deployment

This application is configured for deployment on Vercel. The database configuration automatically adapts to the production environment.

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Database in Production

In production (Vercel), the application uses an in-memory SQLite database that gets recreated on each serverless function invocation. This means data won't persist between requests.

For a production application, consider using:
- Vercel Postgres
- PlanetScale
- Supabase
- Neon

## License

MIT
