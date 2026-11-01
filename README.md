# Gonçalo Barbosa — Portfolio
 
Personal portfolio website designed to show my work in a more visual way. Instead of a plain list of projects, the site is styled as a small desktop operating system, where projects, my bio and my contacts open like files and apps.

**Live site:** [gon1507.github.io](https://Gon1507.github.io)

## Overview
 
The home page is a desktop with three icons: a **Projects Folder**, **About Me.txt** and **Contacts.app**. The projects folder opens as a window with the featured work and each project has its own page with screenshots, tech stack, a short description and a link to the source code.
 
The site is plain HTML, CSS and JavaScript, with no frameworks and no build step, and is hosted on GitHub Pages.

## Features
 
- Desktop-style home page with clickable icons and a pop-up window for the projects
- Dedicated page for each project, with screenshots, technologies and a link to the repository
- About Me page with education, experience, skills and interests
- Contacts page with email, LinkedIn, GitHub and a downloadable CV

## Projects featured
 
| Project | Stack | Repository |
| --- | --- | --- |
| Criminal Case Summarization System | Python, Flask, Ollama, Gemma 3, Docker | [Criminal-Case-Summary-System](https://github.com/Gon1507/Criminal-Case-Summary-System/) |
| Zero Waste Tracker App | Kotlin, Jetpack Compose, MVVM, Firebase | [ZeroWaste-App](https://github.com/Gon1507/ZeroWaste-App) |
| Veterinary Clinic Management | Java, Servlets, MySQL | [Vet-Clinic](https://github.com/Gon1507/Vet-Clinic) |

## Tech stack
 
HTML5, CSS3, JavaScript with no frameworks, Quicksand (Google Fonts), GitHub Pages.

## Getting started
 
No dependencies are needed. Clone the repository and open `index.html` in your browser:
 
```bash
git clone https://github.com/Gon1507/Gon1507.github.io.git
cd Gon1507.github.io
```
 
Or serve it locally with Python:
 
```bash
python -m http.server 8000
```
 
Then open <http://localhost:8000>.

## Deployment
 
The site is published with GitHub Pages from the `main` branch. Every push to `main` updates [gon1507.github.io](https://Gon1507.github.io) after a short delay.

## Repository structure
 
```
Gon1507.github.io/
├── index.html         Desktop / home page
├── pages/
│   ├── aboutme.html   About me, experience and skills
│   ├── contacts.html  Contact methods and CV download
│   ├── police.html    Criminal Case Summarization System
│   ├── zerowaste.html Zero Waste Tracker App
│   └── vet.html       Veterinary Clinic Management
├── css/               Shared and per-page stylesheets
├── js/                Taskbar clock
├── img/               Screenshots, icons and CV
├── video/             Zero Waste demo
└── README.md
```

## Notes
 
- The code of each project lives in its own repository, linked from its page. This repository only contains the portfolio site.
- All sample documents shown on the Criminal Case Summarization System page are fictitious. No real case files are included.
- The site content is in English, while the sample documents of the police project are in Portuguese.


## Contact
 
- Email: goncalomob07@gmail.com
- LinkedIn: [goncalo-barbosa-567204330](https://www.linkedin.com/in/goncalo-barbosa-567204330/)
- GitHub: [Gon1507](https://github.com/Gon1507)