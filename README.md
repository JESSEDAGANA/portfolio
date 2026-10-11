# Jesse Dagana — Portfolio

A minimal, light personal portfolio for Jesse Dagana, built with React 18, TypeScript, Vite and Tailwind CSS. Font: Inter (self-hosted via Fontsource). Icons: Lucide.

## Run it

You need Node.js 18 or newer.

```bash
npm install
npm run dev        # development server at http://localhost:5173
npm run build      # type-check and build into dist/
npm run preview    # serve the production build locally
```

## Editing your content

**Everything on the site comes from one file: `src/config/portfolio.ts`.** You never need to edit the components.

| Section in the file | What it controls |
| --- | --- |
| `personal` | Name, location, status, introduction, focus line, photo |
| `facts` | The short facts beside the hero (education, training, studying, location) |
| `resumePath` | Where the résumé PDF lives |
| `contact` | Email, phone numbers, LinkedIn, GitHub, X |
| `highlights` | The three highlights under the hero |
| `about` | The About paragraphs |
| `skills` | Skill groups and items |
| `experience` | Internship entries |
| `projects` | Projects (the first is shown first) |
| `certifications`, `inProgress` | Certificates and what you are currently studying |

Rules the site follows:
- An empty link (`''`) is hidden, never shown as a dead link.
- Entries with `published: false` are not shown.
- If the résumé PDF is missing, the button changes to "Résumé available on request" and the header link is hidden. In development, the console also tells you where to put the file.

### Common updates
- **Résumé:** the button uses a Google Drive direct-download link (`resumePath`). To update the CV, replace the file in Drive (Manage versions keeps the same link). To use a local file instead, put it in `public/resume/` and set `resumePath` to its path.
- **Photo:** replace `public/jesse.jpg` (square, about 720×720, face centred). Set `photo: ''` to remove it.
- **X:** paste your profile URL into `contact.x` to show it.
- **Certificate links:** scan each certificate's QR code and paste the link into its `url`. Python Advanced is already done.
- **Data Science date:** replace `date: '2025'` with the exact date on the certificate.
- **Project screenshot:** add an image to `public/projects/` and set `screenshot: 'projects/your-image.png'` and a short `screenshotAlt`. Until then the project shows a text summary of its workflow.
- **Repository or demo:** add `repoUrl` / `demoUrl` to the project when they exist.

## File structure

```
src/
  config/portfolio.ts      all site content
  types.ts                 TypeScript types for the content
  components/              Header, Hero, Highlights, About, Skills, Experience,
                           FeaturedProject, Certifications, Contact, Footer
  components/ui/           Button, Section (shared section layout)
  hooks/useResume.ts       checks the résumé file exists
  hooks/useReveal.ts       subtle fade-in as sections scroll into view
  lib/utils.ts             smooth scrolling and small helpers
  styles/globals.css       base styles and motion rules
public/resume/             résumé PDF
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. On vercel.com choose **Add New → Project** and import the repository.
3. Vercel detects Vite (build `npm run build`, output `dist`). Click **Deploy**.
4. When you have a domain, add `<link rel="canonical">` and an `og:url` tag to `index.html`.

## Notes

- Animations are limited to one hero fade-in, section fade-ins and hover colour changes. All are disabled when the visitor prefers reduced motion.
- `npm run build:single` produces one self-contained HTML file in `dist-single/` for hosts that need a single file.
