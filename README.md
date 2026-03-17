# MPAC Healthcare Website

## Project Structure

```
mpac-site/
├── index.html          ← Main page (all sections)
├── css/
│   └── styles.css      ← All styles, brand variables, responsive
├── js/
│   └── main.js         ← Nav scroll, mobile toggle, scroll animations
├── images/             ← Place hero/section images here
└── README.md
```

## Brand Reference

- **Font:** Nunito Sans (loaded via Google Fonts)
- **Primary:** Dark Blue `#03324C`
- **Secondary:** Medium Blue `#33658A`
- **Accent:** Lightest Blue `#7BA4B7`
- **Body text:** Black `#000000`
- **Backgrounds:** Off-White `#F4F6F8`, Tint `#EDF3F6`

All colors defined as CSS variables in `css/styles.css` under `:root`.

## To Run Locally

Open `index.html` in a browser, or serve with any static server:

```bash
npx serve .
# or
python3 -m http.server 8000
```

## Next Steps

- Add hero image (right side of hero section)
- Replace logo placeholder with actual MPAC logo
- Expand Communities section with facility-type detail
- Add team/leadership page
- Consider static site generator (Astro, Hugo) for multi-page
