# Marlowby

This is the Vercel-ready source code for the Marlowby demo website. Checkout is a simulation: it does not collect payment details, place orders, or create subscriptions.

## Deploy with Vercel

1. Upload the contents of this folder to a Git repository (include the hidden `.gitignore` file if available).
2. In Vercel, choose **Add New → Project** and import the repository.
3. Leave the framework as **Next.js**, the root directory at the repository root, and the build command as `npm run build`.
4. Select **Deploy**. No environment variables are needed for the site to work.

If the repository contains this whole folder instead of its contents, set Vercel's Root Directory to that folder.

## Run on your computer

Install Node.js 20.9 or newer, then run:

```
npm ci
npm run dev
```

Open http://localhost:3000.

## Where to edit

- `app/` — pages and styling (`globals.css`)
- `components/` — header, footer, cards, and other shared elements
- `features/` — checkout, city search, gallery, and FAQ interactions
- `content/` — city, product, and FAQ text
- `lib/domain.mts` — plan prices and checkout validation
- `public/` — images, font files, and font licenses

The project uses Next.js, React, TypeScript, and Lucide icons. The package files and `tsconfig.json` are needed to install and build it. Product/maker examples and prices are illustrative; city photographs are credited in the Terms page.
