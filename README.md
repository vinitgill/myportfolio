# Vinit Gill · 3D Portfolio

Personal portfolio built on the MIT-licensed [reactjs18-3d-portfolio](https://github.com/ladunjexa/reactjs18-3d-portfolio) template by Liron Abutbul (React 18, Vite, Three.js, Tailwind CSS 3, Framer Motion). The original licence is kept in `LICENSE`.

## Run it

```bash
npm install
npm run dev          # http://localhost:5173
```

Checks and production build:

```bash
npm run ts:check     # type-check
npm run lint
npm run build        # outputs ./dist
npm run preview
```

## Edit the content

| What | Where |
| --- | --- |
| Name, page title, email, hero line, about text, section headings, social links | `src/constants/config.ts` |
| Tech balls, services, experience timeline, projects | `src/constants/index.ts` |
| Images and icons | `src/assets/` (register new ones in `src/assets/index.ts`) |

- **Project cards:** `sourceCodeLink` and `liveLink` are both optional. A card shows a button only for the links you provide.
- **Project images:** the covers in `src/assets/projects/` are generated placeholders. Replace them with real screenshots (PNG/JPG) and update the import in `src/assets/index.ts`.
- **Tech logos:** the SVGs in `src/assets/tech/` come from [devicon](https://github.com/devicons/devicon) (MIT).

## Contact form (EmailJS)

The form sends email from the browser through [EmailJS](https://www.emailjs.com/). Create an account, then copy `.env.example` to `.env` and fill in:

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_ACCESS_TOKEN=
```

Your EmailJS template should use these variables: `form_name`, `to_name`, `from_email`, `to_email`, `message`. Without these values the form shows "Something went wrong" on submit. The template's own README spells the last variable `VITE_EMAIL_JS_ACCESS_TOKEN`, but the code reads `VITE_EMAILJS_ACCESS_TOKEN`, so use the spelling above.

## Deploy on Vercel

1. Push the project to GitHub.
2. Import the repository at [vercel.com/new](https://vercel.com/new). The Vite preset is detected automatically.
3. Add the three `VITE_EMAILJS_*` variables under **Settings → Environment Variables**, then deploy.
