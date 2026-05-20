# Verdict Vercel Deployment

Verdict is prepared for Vercel as a Vite React application.

## Vercel project settings

Use these settings when importing the GitHub repository into Vercel:

- Framework preset: Vite
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`
- Development command: `npm run dev`

The repository also includes `vercel.json` with the same deployment defaults and a single-page app rewrite.

## Environment variables

Add these in Vercel under Project Settings > Environment Variables.

```env
VITE_APP_NAME=Verdict
VITE_APP_URL=https://your-vercel-domain.vercel.app
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_BLOB_PUBLIC_URL=your_public_blob_base_url
VITE_ENABLE_GOOGLE_AUTH=true
VITE_ENABLE_MEGA_LOGIN=false
```

## Important security rules

Only public browser-safe values should use the `VITE_` prefix. Do not add Supabase service role keys, private Postgres connection strings, blob write tokens, or provider client secrets to frontend variables.

Private server-only secrets should be added later through Vercel serverless/API routes or Supabase Edge Functions.

## Supabase auth callback

When the Vercel domain is ready, add it to Supabase Auth URL settings:

- Site URL: your production Vercel URL
- Redirect URL: your production Vercel URL plus `/auth/callback`
- Local redirect URL: `http://localhost:5173/auth/callback`

## Blob and media storage

This scaffold includes `src/lib/storage.ts` for client-safe public blob URLs. Upload signing or private write access should not happen directly from this public frontend. Add a server route or Supabase Edge Function when private upload tokens are introduced.
