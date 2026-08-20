# AI Agent Instructions for Nuxt 4 Starter

## 1. Project Overview & Tech Stack
This repository is a modern starter template built on Nuxt 4. It focuses on scalable frontend architecture, strict TypeScript hygiene, and high-performance UI rendering using utility-first CSS and unstyled component patterns.

**Core Stack:**
*   **Framework:** Nuxt 4 / Vue.js 3
*   **Language:** Strict TypeScript (VueTS)
*   **Styling Engine:** Tailwind CSS 4
*   **Component Library:** PrimeVue (with Tailwind CSS layer integration)
*   **State Management:** Pinia
*   **Package Manager:** pnpm

## 2. Scaffolded Skills & Context Guardrails
This project utilizes the `npx skills add` CLI to inject explicit architectures and rule sets. You **must** strictly adhere to the guidelines and philosophies outlined in the following initialized skills. Do not recreate these functionalities manually or deviate from their patterns:

*Note: If the skills generated markdown or config files in a specific directory (e.g., `/.github` or `/.skills`), read them for deeper context before coding.*

### Core Framework & Architecture
*   **`nuxt` & `vue`**: Follow modern Vue 3 Composition API patterns and standard Nuxt 4 directory structures.
*   **`vue-router-best-practices`**: Adhere to clean routing hygiene and standard navigation guard patterns.
*   **`vitepress`**: Used for project documentation. Maintain documentation standards matching this ecosystem.

### State & Component Utilities
*   **`pinia`**: Use for global state management. Do not use raw un-hydrated global refs for shared state.
*   **`vueuse-functions`**: Prioritize native `@vueuse/core` composables for browser APIs, event listeners, and reactive utilities instead of writing custom wrappers.

### UI, Styling & Design Systems
*   **`primevue`**: Leverage PrimeVue components and its pass-through (PT) architecture.
*   **`tailwind-design-system`**: Follow the established utility class design system for Tailwind CSS 4.
*   **`web-design-guidelines`**: Enforce responsive design, accessibility (a11y), and performance standards.

### Tooling, Build & Testing
*   **`pnpm`**: Strict use of `pnpm` for dependency management. Never use `npm` or `yarn`.
*   **`vite` & `tsdown`**: Respect the build pipelines and bundling configurations established for the starter.
*   **`vitest`**: Use Vitest for all unit and component testing.

### Quality Assurance
*   **`vue-best-practices`**: Strict linting, formatting, and structural rules for `.vue` files.
*   **`vue-testing-best-practices`**: Follow these paradigms when writing tests in `*.test.ts` or `*.spec.ts` files.

## 3. Architecture & Directory Structure
*   `components/`: Vue components (auto-imported by Nuxt).
*   `composables/`: Reusable Composition API logic (auto-imported).
*   `layouts/` & `pages/`: Nuxt file-based routing.
*   `server/api/`: Nitro server routes using `defineEventHandler`.
*   `utils/`: Pure TypeScript utility functions (auto-imported).

## 4. Coding Standards & Implementation Patterns

### Vue & Nuxt Patterns
*   **Strictly use the Composition API** with `<script setup lang="ts">`. Absolutely no Options API.
*   Utilize Nuxt auto-imports. Do not manually import Vue APIs (`ref`, `computed`, `watch`) or standard Nuxt composables unless explicitly required by an edge case.
*   Prefer `useState` over `ref` for global state that requires SSR hydration safely, or use Pinia as dictated by the scaffolded skill.

### TypeScript Guidelines
*   Enforce strict typing. Do not use `any`. 
*   Define component props and emits using explicit TypeScript interfaces:
    ```vue
    <script setup lang="ts">
    interface Props {
      title: string
      isActive?: boolean
    }
    defineProps<Props>()
    </script>