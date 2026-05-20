# Verdict

Verdict is a web-first microblogging and social media platform designed for scalable, real-time interactions with young people in today's world.

## Product direction

Verdict should feel premium, fast, and community-driven. The product is built around short-form conversation, deeper article-style posts, private chat, story-style updates, and expressive social interaction.

- Chronological microblogging feed
- Short posts and deeper long-form verdicts
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

## User-facing language rule

The app should not reference competitor platforms in the UI. Verdict should describe itself as a modern microblogging and social media platform for scalable interaction, publishing, private conversation, and community engagement.
