 ## Cynthia Landing Page Clone

<img width="1882" height="866" alt="ss1" src="https://github.com/user-attachments/assets/32b21915-4e7b-4d96-bcc5-7329ef4411f0" />

## Project Overview

This repository contains a polished, responsive landing-page clone inspired by the *Cynthia* website. It is built using standard web technologies with a focus on smooth, modern animations and an interactive cursor experience.

## Live preview
https://cynthia-web-project.vercel.app/

## Key Features

* Pixel-perfect landing page clone of the Cynthia website (visual & interaction focused)
* Fully **responsive** layout (mobile, tablet, desktop)
* Built with **HTML**, **CSS**, and **JavaScript** (no heavy frameworks required)
* Smooth scroll animations using **Lenis** (for buttery scroll smoothing)
* Powerful timeline & hover animations using **GSAP** (GreenSock)
* Interactive **moving circle cursor** that follows pointer movement across the page
* Image reveal and follow effects: when hovering items, an image appears and follows the cursor (linked to each item)
* Various hover & entrance animations (fade, scale, slide, mask reveals, etc.)
* Subtle page reload/intro animations for a polished first impression

## Tech Stack

* **HTML5**
* **CSS3** (Flexbox / Grid, custom properties for theming)
* **Vanilla JavaScript**
* **GSAP** — for advanced and performant animations
* **Lenis** — for smooth scrolling behavior

<img width="1762" height="855" alt="ss2" src="https://github.com/user-attachments/assets/5a394488-9fd3-4721-989f-048b163c81b1" />


## How it works — interactions & animations

1. **Landing animation / page intro:** On page load a short intro animation runs (logo or hero reveal). This gives a refined entry experience.
2. **Smooth scrolling:** Lenis replaces native scroll for a smoother feel and helps GSAP produce consistent animations on scroll.
3. **GSAP timelines:** Sections and hero elements animate with GSAP timelines (staggered reveals, mask transitions, parallax subtle movement).
4. **Moving circle cursor:** A circular DOM element follows the pointer with a small easing to create a floating cursor. It reacts to hover states (grows, changes blend mode, or shows labels).
5. **Hover-follow images:** When hovering list items (for example portfolio cards or product thumbnails) a preview image appears and follows the cursor. This image uses `pointer-events: none` and updates `transform` for smooth GPU-accelerated movement.

## Usage — Setup & run locally

1. Clone the repo:

```bash
git clone https://github.com/Owais-khan-1/Cynthia-Web-Project.git
cd Cynthia-Web-Project
```

2. Simply open the index.html file in your browser — the website will load immediately.

## Contact

If you have any questions or suggestions about this project, feel free to reach out:

Email: khanowaiszai@gmail.com

Author: Owais Khan

⭐ If you found this project helpful or inspiring, don’t forget to star the repo!

Thanks for checking out this project!
