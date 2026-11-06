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

The form posts to `/api/contact` (`app/api/contact/route.ts`), which emails the message to Shivani over SMTP using nodemailer. The visitor sees a "Message sent successfully!" or "Failed to send message" notice.

It only sends once the SMTP settings are added to the Vercel project:

1. In Shivani's Google account, turn on 2-Step Verification (Security settings).
2. Still in Security, open **App passwords** and create one (any name, for example "portfolio"). Google shows a 16-character password.
3. In Vercel, open the project, then Settings, then Environment Variables, and add these:
   - `SMTP_HOST` = `smtp.gmail.com`
   - `SMTP_PORT` = `465`
   - `SMTP_USER` = `shivanimittal1705@gmail.com`
   - `SMTP_PASS` = the 16-character app password, typed without spaces
   - `EMAIL_TO` (optional) = where messages should arrive; defaults to the email in `lib/data.ts`
4. Redeploy from the Deployments tab.

Messages are sent from her own Gmail to her own inbox. Replying to one replies to the visitor.

## Editing

- Text, projects, certifications and links: `lib/data.ts`
- Photo: replace `public/shivani.jpg` (keep the same filename). Use a portrait image around 1000px wide.
- Resume: replace `public/Shivani-Mittal-Resume.pdf` (keep the same filename).
- Colors: the variables at the top of `app/globals.css` (`--accent` is the rose pink).
- Page title and description: `app/layout.tsx`
