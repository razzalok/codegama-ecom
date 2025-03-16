# CodeGama E-Commerce

## Overview
CodeGama E-Commerce is a modern e-commerce web application built with React, Redux, and Tailwind CSS. The project is powered by Vite for fast development and optimized builds.

## Features
- **React 19** for a seamless user interface
- **Redux Toolkit** for state management
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Vite** for fast development and builds
- **TypeScript** for type safety and maintainability

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js (latest LTS version recommended)
- npm or yarn

### Steps
1. Clone the repository:
   ```sh
   git clone [<repository-url>](https://github.com/razzalok/codegama-ecom)
   cd codegama-ecom
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```
4. Open your browser and navigate to `http://localhost:5173/` (or the specified port).

## Scripts
- `npm run dev` - Starts the development server
- `npm run build` - Builds the project for production
- `npm run lint` - Runs ESLint for code quality checks
- `npm run preview` - Previews the production build

## Project Structure
```
codegama-ecom/
├── public/          # Static assets
├── src/
│   ├── assets/      # Images and other assets
│   ├── components/  # Reusable UI components
│   ├── pages/       # Application pages
│   ├── store/       # Redux store configuration
│   ├── types/       # TypeScript type definitions
│   ├── App.css      # Global styles
│   ├── App.tsx      # Root component
│   ├── index.css    # Global styles
│   ├── main.tsx     # Entry point
│   ├── vite-env.d.ts # Vite environment types
│
├── .gitignore       # Git ignore file
├── eslint.config.js # ESLint configuration
├── index.html       # Main HTML file
├── package-lock.json# Package lock file
├── package.json     # Project dependencies and scripts
├── postcss.config.mjs # PostCSS configuration
├── README.md        # Project documentation
├── tsconfig.app.json # TypeScript configuration (app)
├── tsconfig.json    # TypeScript configuration
├── tsconfig.node.json # TypeScript configuration (node)
├── vite.config.ts   # Vite configuration
```


