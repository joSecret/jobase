# Jobase - Astro Blog Project

A custom Astro-based blog with PostCSS styling and component library.

## ## Features:

- ✅ Astro 5.x with TypeScript support
- ✅ PostCSS with advanced features (mixins, variables, nested CSS)
- ✅ Custom component library (alerts, accordions, cards, modals, etc.)
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap and RSS Feed support
- ✅ Markdown & MDX support with content collections
- ✅ Custom icon support via astro-icon
- ✅ Responsive navigation and banner components

## 🚀 Project Structure

The project includes:

The project includes:

```text
├── public/
│   ├── fonts/          # Custom web fonts
│   └── img/            # Static images (modals, popovers, tooltips)
├── src/
│   ├── components/     # Reusable Astro components
│   │   ├── common/     # Base components (BaseHead)
│   │   ├── local/      # Project-specific components (Banner, HeaderLink)
│   │   ├── navigation/ # Navigation components
│   │   ├── theme/      # Theme components (Header, Footer, Logo)
│   │   └── ui/         # UI components (Alert, Accordion, Link)
│   ├── content/        # Content collections (blog posts)
│   ├── data/           # JSON data files (menu.json)
│   ├── layouts/        # Page layouts (Html, BlogPost)
│   ├── pages/          # File-based routing
│   ├── pcss/           # PostCSS stylesheets
│   │   ├── api/        # Utility classes (bg, border, padding/margin)
│   │   ├── base/       # Color palette and scale
│   │   ├── components/ # Component styles
│   │   └── custom/     # Custom layouts
│   └── styles/         # Global CSS
├── astro.config.mjs
├── postcss.config.cjs
├── package.json
└── tsconfig.json
```

**Key Directories:**

**Key Directories:**

- `src/pages/` - File-based routing (`.astro` and `.md` files become routes)
- `src/content/` - Content collections with type-safe frontmatter
- `src/components/` - Organized component library (common, local, theme, ui, navigation)
- `src/pcss/` - PostCSS modules with custom utilities and component styles
- `public/` - Static assets served directly

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## � Learn More

- [Astro Documentation](https://docs.astro.build)
- [Astro Discord](https://astro.build/chat)
- [PostCSS Documentation](https://postcss.org/)

## 📦 Dependencies

This project uses:

- **Astro 5.x** - Static site generator
- **PostCSS** - CSS processing with plugins for variables, mixins, nested rules
- **astro-icon** - Icon component system
- **astro-font** - Web font optimization

## Credits
