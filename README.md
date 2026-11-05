# Shivani Mittal: Portfolio

A Next.js (App Router) portfolio site. All content is in `lib/data.ts`; styles are in `app/globals.css`.

## Run locally

```bash
npm install
```

```bash
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

Push this folder to a new GitHub repository, then import that repository at https://vercel.com/new. No settings need changing; Vercel detects Next.js automatically.

## Editing

- Text, projects, certifications and links: `lib/data.ts`
- Photo: replace `public/shivani.jpg` (keep the same filename). Use a portrait image around 1000px wide.
- Resume: replace `public/Shivani-Mittal-Resume.pdf` (keep the same filename).
- Colors: the variables at the top of `app/globals.css` (`--accent` is the blue).
- Page title and description: `app/layout.tsx`
