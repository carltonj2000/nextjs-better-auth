# Better Auth Minimal Next JS Example

To run:

- `docker compose up -d` - starts the db
- `npm run dev`

# Code History

The code in this repo is base on:

- https://youtu.be/hFtufpaMcLM?si=39iNIIUjdaq9nO72
- https://orm.drizzle.team/docs/get-started/postgresql-new
- https://www.better-auth.com/docs/installation

# Creation History

```bash
npx create-next-app@latest
cd  nextjs-better-auth
npm i drizzle-orm pg dotenv
npm i -D drizzle-kit tsx @types/pg
npm install better-auth
openssl rand -hex 15 # for better-auth secret
npx @better-auth/cli generate --output ./src/db/auth-schema.ts
npx drizzle-kit push # pushed the created schema to the db
npx tsx ./scripts/seed.ts # verify db works
```

# Postgres And Docker

- Default user `postgres`.
- Bring db up via: `docker compose up`.
