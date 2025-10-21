# Full Force Academia - Website de Conversão

Site otimizado para conversão de leads via Google Ads para a maior academia de Matupá-MT.

## Project info

**URL**: https://lovable.dev/projects/9bcb9a96-b439-4406-9ae1-10f1552ba7d2

## 🤖 GitHub Copilot Instructions

This repository includes comprehensive custom instructions for GitHub Copilot at `.github/copilot-instructions.md`. These instructions help Copilot understand:

- Project architecture and tech stack
- Design system and UX/UI philosophy
- SEO and marketing requirements
- Performance optimization goals
- Coding conventions and best practices

Make sure to review the instructions file before making significant changes to understand the project's conversion-focused philosophy.

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/9bcb9a96-b439-4406-9ae1-10f1552ba7d2) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## 🛠️ Development Commands

```sh
# Install dependencies
npm install

# Start development server (default port: 5173)
npm run dev

# Lint the codebase
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Hero.tsx        # Main hero section with CTA
│   ├── Plans.tsx       # Pricing plans (Monthly/Annual)
│   ├── Benefits.tsx    # Academy benefits
│   ├── Testimonials.tsx # Customer testimonials
│   └── ui/             # shadcn/ui reusable components
├── lib/                # Utilities
└── pages/              # Page components
    └── Index.tsx       # Landing page
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- **Framework**: React 18 + TypeScript + Vite
- **UI Library**: shadcn/ui (Radix UI components)
- **Styling**: Tailwind CSS
- **Theme**: next-themes (Dark/Light mode)
- **Analytics**: Google Analytics 4
- **Deploy**: Netlify with optimized caching
- **Package Manager**: npm (Bun also supported)

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/9bcb9a96-b439-4406-9ae1-10f1552ba7d2) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
