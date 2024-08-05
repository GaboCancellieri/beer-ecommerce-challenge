# Frontend Application

This is the frontend application for the project, built with Next.js.

## Getting Started

1. **Install dependencies:**

   ```bash
   cd app
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

3. **Build for production:**

   ```bash
   npm run build
   ```

4. **Start the production server:**

   ```bash
   npm start
   ```

## Folder Structure

- `components/`: React components used in the application.
- `pages/`: Next.js pages.
- `public/`: Static assets.
- `styles/`: SCSS and CSS files.

## Linting and Formatting

- **ESLint:**

  ```bash
  npm run lint
  ```

- **Prettier:**

  ```bash
  npm run format
  ```

## Environment Variables

- **HOST_URL**: The host URL for the application.
- **API_URL**: The URL for the backend API.

Create a `.env.local` file in the `envs/` directory with the necessary environment variables.

## Technologies Used

- Next.js
- React
- SCSS
- Axios
