# Repository Guidelines

## React Project Structure
src/
├── assets/        # images, fonts, static assets
├── pages/         # route-level page components
├── components/    # reusable UI components
│   ├── common/    # buttons, inputs, modals, etc.
│   ├── layout/    # header, footer, sidebar, layout wrappers
│   └── features/  # domain-specific UI blocks (UserCard, PostItem, etc.)
├── hooks/         # custom React hooks
├── services/      # API calls and external service logic
├── store/         # global state (Zustand, Redux, etc.)
├── types/         # shared TypeScript types
├── utils/         # pure utility functions
├── constants/     # static values and config
└── styles/        # Tailwind base styles and globals

## Directory Rules
- pages/
  - One page = one route
  - Pages compose components and call hooks / services
  - Pages are never reused
- components/
  - Only reusable UI
  - No API calls
  - No routing logic
  - common = generic UI
  - layout = structural UI
  - features = project-specific UI blocks
- hooks/
  - Reusable or page-specific logic
  - No UI markup
- services/
  - All API requests live here
  - Pages and hooks call services
  - UI components never call services directly
- store/
  - Global state only
  - No UI imports
- types/
  - Shared models and API types
- utils/
  - Pure functions (no React, no browser API)
- styles/
  - Tailwind base, global styles only
  - No component-level CSS files

## Naming Conventions
- Conponents: PascalCase.tsx
- Hooks: useSomething.ts
- Services: something.service.ts
- Types: something.type.ts
- Utils: camelCase.ts