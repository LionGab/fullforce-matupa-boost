# GitHub Copilot Instructions Setup

This document explains the Copilot instructions configuration for the Full Force Academia repository.

## 📋 Overview

As of October 21, 2025, this repository has been configured with comprehensive GitHub Copilot custom instructions following GitHub's best practices.

## 🎯 What Was Added

### 1. YAML Frontmatter (`.github/copilot-instructions.md`)

Added structured metadata at the top of the instructions file:

```yaml
---
applyTo:
  paths:
    - "src/**"
    - "*.config.ts"
    - "*.config.js"
    - "!node_modules/**"
    - "!dist/**"
  languages:
    - "typescript"
    - "javascript"
    - "tsx"
    - "jsx"
  agents:
    - "Copilot"
build:
  - command: "npm install"
    description: "Install project dependencies"
  - command: "npm run lint"
    description: "Lint the codebase using ESLint"
  - command: "npm run build"
    description: "Build production-ready bundle with Vite"
test:
  - command: "npm run preview"
    description: "Preview production build locally"
---
```

### 2. AI Assistant Guidelines Section

Added a new section with:
- **Code Completion Preferences**: Guidance on imports, styling, components, and event handlers
- **Code Quality Standards**: TypeScript, error handling, accessibility, performance, and security guidelines
- **Common Patterns to Follow**: Example component structure following project conventions
- **Testing Approach**: Mobile-first testing guidelines aligned with the project's 80% mobile traffic

### 3. Updated README.md

Enhanced the README with:
- Project title reflecting the Full Force Academia brand
- Reference to GitHub Copilot instructions
- Detailed development commands section
- Project structure overview
- Updated technology stack description

## 🎨 Key Features of the Configuration

### Scoped Application
- Instructions apply to TypeScript and JavaScript files in `src/` directory
- Configuration files are included
- Build artifacts and node_modules are explicitly excluded

### Build & Test Commands
- Clear commands for installing, linting, building, and previewing
- Descriptions help Copilot understand the purpose of each command

### Code Style Guidance
- Mobile-first approach (critical for this project's 80% mobile traffic)
- TypeScript-first with explicit typing
- Tailwind CSS over inline styles
- Functional components with hooks
- Proper event handler naming conventions

### Project Context
- Conversion-focused philosophy
- WhatsApp integration requirements
- Google Analytics 4 tracking
- SEO and performance priorities
- Design system consistency

## 📚 Reference Documentation

The instructions file includes comprehensive guidance on:

1. **Project Context**: Business goals, target metrics, and conversion strategy
2. **Architecture**: Tech stack, directory structure, and component organization
3. **Design System**: Colors, shadows, responsivity, and mobile-first approach
4. **SEO & Marketing**: Local SEO keywords, Schema.org implementation, GA4 events
5. **Performance**: Core Web Vitals targets, optimization strategies
6. **Development Workflows**: Build commands, deployment process
7. **WhatsApp Integration**: Official number, pre-defined messages, conversion tracking
8. **Code Conventions**: TypeScript, React, Tailwind CSS best practices
9. **Brand Voice**: Copywriting guidelines and tone

## 🔄 Maintenance

The instructions should be updated when:
- Major architectural changes are made
- New technologies or libraries are added
- Build or test processes change
- Design system guidelines evolve
- Business goals or metrics shift

Current version: **1.0.1** (updated October 21, 2025)

## 🎓 Learning Resources

- [GitHub Copilot Custom Instructions](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions)
- [Best Practices for GitHub Copilot](https://docs.github.com/en/copilot/get-started/best-practices)
- [Using GitHub Copilot to Work on Tasks](https://docs.github.com/copilot/tutorials/coding-agent/get-the-best-results)

## ✅ Verification

To verify the setup is working:

1. **Build Test**: Run `npm run build` - should complete successfully
2. **Lint Test**: Run `npm run lint` - should show only pre-existing issues
3. **Instructions File**: Located at `.github/copilot-instructions.md`
4. **README Reference**: Check README.md includes section on Copilot instructions

All verifications passed as of October 21, 2025.
