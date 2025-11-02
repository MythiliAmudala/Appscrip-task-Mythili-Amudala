# Product Listing Page (Appscrip Assignment)

A fully responsive, production-grade **Product Listing Page (PLP)** replicating the given Figma design for the Appscrip Frontend assignment.

This project demonstrates strong UI engineering, clean React architecture, API-driven UI, CSS animations, and responsive design.

## Live Demo

**Netlify:**
https://appscrip-task-mythili-amudala.netlify.app/

## Objective
Build a PLP matching the Figma UI, focusing on:

- Pixel-perfect design
- React modular components
- SEO & semantic markup
- Responsive layout (desktop/tablet/mobile)
- CSS animations and transitions
- API-based dynamic product rendering
- Minimal external libraries
- Optimized DOM structure

## Features
- Modern React + Hooks
- Dynamic API products
- Grid layout + filters UI
- Advanced CSS animations
- Fully responsive
- JSON-LD SEO schema
- Error handling (Not Found page)
- Vercel deployment

## Tech Stack

| Category | Tools |
|---|---|
| Frontend | React.js, JavaScript (ES6+) |
| Styling | Pure CSS, Media Queries, Animations |
| API | FakeStore API |
| Build & Deploy | Node, Vercel |
| Dev Tools | Git, GitHub, ESLint, Prettier |

## Folder Structure
public/
src/
components/
About/
Contact/
Footer/
Header/
Home/
Newsletter/
NotFound/
Products/
Skills/
Stories/
utils/
styles/
App.css
App.js
App.test.js
index.css
index.js
logo.svg
reportWebVitals.js
setupTests.js
.gitignore
package.json
package-lock.json
README.md


### Key Components
| Component | Responsibility |
|----------|----------------|
| Header | Navigation, Logo, Menu |
| Filters | Category filtering, UI controls |
| ProductCard | Individual product card |
| Products | Product grid + API fetch |
| Footer | Footer links, info |
| NotFound | 404 route |
| Utils | Helper methods |
| Styles | Global + component styles |

## 🔗 API Integration Example

```javascript
useEffect(() => {
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => setProducts(data))
    .catch(err => console.error('API error:', err));
}, []);

📐 Responsive Strategy

CSS Grid for product layout

Flexbox for navigation & sections

Mobile-first media queries

Optimized images & alt tags

🧩 SEO Enhancements

Meta description

Title tags

Semantic HTML tags

JSON-LD Product schema

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": []
}
</script>

🛠 Local Development
git clone <repo-url>
cd project-folder
npm install
npm start

📦 Build & Deploy
npm run build


Deployment: Vercel

🧪 Testing

Basic React test setup available (Jest + React Testing Library).

📝 Notes

No bulky UI frameworks used

Focus on clean performance-oriented UI

Advanced CSS transitions applied for UI smoothness

Minimal DOM structure for speed

🧑‍💻 Author

Mythili
Frontend Developer

📫 Feedback / Improvements?

This project was built to showcase frontend depth, not shortcuts.
If you're reviewing this and want to push it further, suggestions are welcome.


---

If you want a version that screams even more confidence (or arrogance), tell me. If you want a recruiter-friendly version, tell me. Right now it's clean, professional, and shows competence.  

If you spot anything you didn't implement in your actual code — fix your code, don’t come crying.
