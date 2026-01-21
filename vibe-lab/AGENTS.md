# Repository Guidelines

## Architecture Principles

### Single Responsibility Principle
Every file, component, hook, and module must have exactly **one reason to change**

A unit is responsible for one of the following — never multiple:
- UI rendering
- Domain logic
- Data fetching
- State management
- User interaction (keyboard, focus, gestures)
- Side effects (API, storage, timers)

If a unit handles more than one of these, it must be split.

### Domain Separation
Each domain (e.g., title, date, todo) must be completely isolated:
- Each domain has its own state management hook
- Each domain has its own interaction hook
- Domains never share state or logic directly
- Domains communicate only through props or events

## React Project Structure
src/
├── assets/        # images, fonts, static assets
├── pages/         # route-level page components
├── components/    # reusable UI components
│   ├── common/    # buttons, inputs, modals, etc.
│   ├── layout/    # header, footer, sidebar, layout wrappers
│   └── features/  # domain-specific UI blocks (UserCard, PostItem, etc.)
├── hooks/         # custom React hooks
│   ├── common/    # reusable hooks used across multiple pages
│   └── pages/     # page-specific hooks organized by page and domain
│       └── PageName/
│           └── domainName/
│               ├── useDomainState.ts      # state management only
│               └── useDomainInteractions.ts # user interactions only
├── services/      # API calls and external service logic
├── store/         # global state (Zustand, Redux, etc.)
├── types/         # shared TypeScript types
├── utils/         # pure utility functions
├── constants/     # static values and config
└── styles/        # Tailwind base styles and globals

## Directory Rules

### pages/
- One page = one route
- Pages compose components and call hooks / services
- Pages are never reused
- Pages orchestrate multiple domain hooks but don't contain domain logic

### components/
- Only reusable UI
- No API calls
- No routing logic
- common = generic UI
- layout = structural UI
- features = project-specific UI blocks

### hooks/
- Reusable or page-specific logic
- No UI markup
- **Structure:**
  - `hooks/common/` - Hooks used across multiple pages (e.g., useClickOutside, useFocusManagement)
  - `hooks/pages/PageName/domainName/` - Page-specific hooks organized by domain
    - Each domain folder contains:
      - `useDomainState.ts` - State management only (useState, useReducer)
      - `useDomainInteractions.ts` - User interactions only (event handlers, keyboard, focus)
- **Domain Separation Rules:**
  - Each domain (title, date, todo, etc.) must be in its own folder
  - State hooks and interaction hooks are separate files
  - One domain = one responsibility
  - Domains don't import from other domains
  - Common hooks can be used by any domain

### services/
- All API requests live here
- Pages and hooks call services
- UI components never call services directly

### store/
- Global state only
- No UI imports

### types/
- Shared models and API types

### utils/
- Pure functions (no React, no browser API)

### styles/
- Tailwind base, global styles only
- No component-level CSS files

## Naming Conventions
- Components: PascalCase.tsx
- Hooks: useSomething.ts
- Services: something.service.ts
- Types: something.type.ts
- Utils: camelCase.ts

## Git Commit Conventions

### Format
[vibe] <type>: <summary>

### Project Tag
- All commit messages must start with [vibe]
- [vibe] identifies this commit as part of the vibe project

### Types
- feat: new feature
- fix: bug fix
- refactor: code structure improvement without changing behavior
- chore: tooling, config, build, or dependency changes
- style: formatting, linting, no logic change
- test: test-related changes
- docs: documentation changes
- perf: performance improvements

### Summary
- Written in Korean
- Describe what was done
- One change per commit
