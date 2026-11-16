# Saurabh Latta | Developer Portfolio

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-blue)

A dark, glassmorphism-style personal portfolio built with plain HTML, CSS and JavaScript. No frameworks and no build step.

## About the developer
Saurabh Latta is a second-year B.Tech Computer Science and Engineering (AI & ML) student at JECRC University, Jaipur, interested in software development, AI/ML, data structures and algorithms, and entrepreneurship.

## Features
- Loading screen, typing role animation, particle background and rotating 3D-style cube
- Scroll-reveal sections, tilt project cards, magnetic buttons, desktop-only custom cursor
- Interactive learning-journey tabs and education timeline
- GitHub contribution graph (via ghchart.rshah.org) with a fallback message
- Mailto-based contact form (no backend; nothing is stored or sent by the site)
- Responsive layout, semantic HTML, keyboard focus styles, `prefers-reduced-motion` support
- SEO metadata, Open Graph tags, `robots.txt`, `sitemap.xml`

## Technologies
HTML5, CSS3, Vanilla JavaScript, Google Fonts (Space Grotesk, Inter).

## Project structure
```
saurabh-portfolio/
├── index.html
├── README.md  LICENSE  .gitignore  robots.txt  sitemap.xml
├── css/   style.css  animations.css  responsive.css
├── js/    main.js  animations.js  projects.js
├── assets/images/ (profile.png, favicon.png, project-images/)
├── assets/icons/
├── assets/resume/
└── docs/screenshots/
```

## Run locally
Open `index.html` in a browser, or serve the folder:
```bash
python -m http.server 8000
# visit http://localhost:8000
```

## Customize
- Projects: edit `js/projects.js`. Set `repo` and `demo` to real URLs to show those buttons.
- Photo: replace `assets/images/profile.png` (square, about 640x640).
- Resume: add `assets/resume/Saurabh_Latta_Resume.pdf`, then add a link to it in `index.html`.

## Deploy with GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit: portfolio website"
git branch -M main
git remote add origin https://github.com/saurabhlatta/saurabh-portfolio.git
git push -u origin main
```
Then on GitHub: **Settings > Pages > Build and deployment > Source: Deploy from a branch > Branch: main, folder: / (root) > Save**. The site will be at https://saurabhlatta.github.io/saurabh-portfolio/ after a minute or two.

## Screenshots
Add images to `docs/screenshots/` and reference them here.

## Contact
- Email: lattaajay@gmail.com
- Phone: +91 8949433004
- [LinkedIn](https://www.linkedin.com/in/saurabh-latta-647412382/) | [GitHub](https://github.com/saurabhlatta)

## License
MIT. See [LICENSE](LICENSE).
