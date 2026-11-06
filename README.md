# Basic Web Dev 101: MVC with the MEHN Stack

A beginner workshop (about 1.5–2 hours) that takes students with zero experience to a working web app built with **MongoDB, Express, Handlebars and Node.js**, organized using **MVC** (Model, View, Controller).

Students build a **Message Wall**: a small site where anyone can post a message and see everyone else's.

## What's inside

| Path | What it is |
|---|---|
| `[GGFM-WEB] BasWebDev - MEHN.pptx` | The slide deck (21 slides, with speaker notes) |
| `mehn-workbook/workbook.html` | The hands-on workbook: open it in any browser |
| `mehn-workbook/checkpoints/` | A working copy of the app at the end of each of the 8 steps |

## For students

1. Install [Node.js (LTS)](https://nodejs.org), [VS Code](https://code.visualstudio.com) and [MongoDB Community Server](https://www.mongodb.com/try/download/community).
2. Download this repository (green **Code** button → **Download ZIP**) and unzip it.
3. Open `mehn-workbook/workbook.html` in your browser and follow the **Setup Checklist**.

Fell behind during a step? In the `mehn-workbook` folder:

```
npm install
npm run step5
```

Then open http://localhost:3000. Replace `step5` with any step from `step1` to `step8`.

## The 8 steps

1. Hello Node
2. First web server (Express)
3. Routes
4. Views with Handlebars
5. Lists with `{{#each}}`
6. Split into MVC
7. Add a form
8. Save to MongoDB (only the Model changes!)
