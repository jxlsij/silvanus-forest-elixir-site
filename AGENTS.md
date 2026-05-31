# AGENTS.md

## Project

SILVANUS Forest Elixir is a Next.js 14 landing page with a scroll-linked canvas image sequence.

Live Space: https://huggingface.co/spaces/amiasayedau/silvanus  
Live site: https://amiasayedau-silvanus.hf.space  
GitHub: https://github.com/jxlsij/silvanus-forest-elixir-site

## Commands

```bash
npm install
npm run dev
npm run build
```

For Hugging Face Spaces, the Docker container runs:

```bash
npm run start:space
```

## Important Files

- `components/SilvanusCanvas.tsx` controls the sticky full-screen canvas sequence.
- `components/HeroOverlay.tsx` controls the scroll-faded text overlays.
- `public/sequence/frame_0.jpg` through `public/sequence/frame_119.jpg` are required runtime assets.
- `Dockerfile` and `README.md` configure the Hugging Face Docker Space.

## Working Rules

- Keep the animation full-bleed. The canvas should fill the viewport without visible framing or letterboxing.
- Do not commit `node_modules`, `.next`, `.omx`, `.DS_Store`, or `FRAMES`.
- Keep `public/sequence` committed; the app depends on those 120 frames.
- Run `npm run build` before pushing.
- After deploying to Hugging Face, verify the Space at `https://amiasayedau-silvanus.hf.space`.

## Deploy

Push GitHub:

```bash
git push
```

Upload to Hugging Face Space:

```bash
hf upload amiasayedau/silvanus . . --repo-type space \
  --exclude 'node_modules/**' \
  --exclude '.git/**' \
  --exclude '.next/**' \
  --exclude 'FRAMES/**' \
  --exclude '.omx/**' \
  --exclude '.DS_Store'
```
