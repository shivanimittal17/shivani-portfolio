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

## Contact form

The form works in two modes:

- **Without a key:** "Send Message" opens the visitor's email app with the message filled in.
- **With a key:** messages are delivered straight to Shivani's inbox through [Web3Forms](https://web3forms.com).

To turn on direct delivery:

1. Go to https://web3forms.com and enter `shivanimittal1705@gmail.com` to get a free access key by email.
2. In Vercel, open the project, then Settings, then Environment Variables.
3. Add `NEXT_PUBLIC_WEB3FORMS_KEY` with the key as its value.
4. Redeploy from the Deployments tab.

## Editing

- Text, projects, certifications and links: `lib/data.ts`
- Photo: replace `public/shivani.jpg` (keep the same filename). Use a portrait image around 1000px wide.
- Resume: replace `public/Shivani-Mittal-Resume.pdf` (keep the same filename).
- Colors: the variables at the top of `app/globals.css` (`--accent` is the blue).
- Page title and description: `app/layout.tsx`
