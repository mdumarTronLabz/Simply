# Simply — Phase 1

## Setup

```
npm install
npm run dev
```

This produces a `dist/` folder and rebuilds on every save (crxjs also
supports hot-reload for the popup, though content-script changes still
need an extension reload — see below).

## Load into Chrome / Brave / Opera

1. Go to `chrome://extensions` (or the equivalent in Brave/Opera)
2. Enable "Developer mode" (top right)
3. Click "Load unpacked"
4. Select the `dist/` folder

## Try it

Open facebook.com, open any chat/messenger box, and you should see a small
blue "S" icon appear in the bottom-right corner of the message input.
Clicking it currently inserts a hardcoded demo message — this proves the
detect → inject → insert pipeline works before we build the real dropdown
panel on top of it.

## What's next

- Build the dropdown panel (message titles, search bar, category icons)
- Wire the panel to replace the current "insert first message on click"
  stub in `src/content/index.jsx`
- Add the Instagram adapter alongside `src/adapters/facebook.js`
