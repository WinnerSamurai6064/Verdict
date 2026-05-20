# Verdict

Verdict is a web-first social publishing platform that combines an X-style chronological feed with Substack-style long-form writing.

## Product direction

- Chronological posts and articles
- Private chat and conversations
- Story-style media updates
- Likes, comments, threaded replies, emoji reactions, reposts, bookmarks, and shares
- Professional OLED black + electric blue interface
- Google authentication via the production auth provider
- Demo data isolated under `src/demo` so it can be removed before production

## Frontend stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Supabase-ready architecture

## Development

```bash
npm install
npm run dev
```

## Production rule

Demo content must stay isolated in `src/demo`. Do not hard-code fake users, posts, stories, or chat messages inside production components.
