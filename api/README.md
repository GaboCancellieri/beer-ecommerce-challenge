# Backend API

This is the backend API for the project, built with Node.js and Express.

## Getting Started

1. **Install dependencies:**

   ```bash
   cd api
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

3. **Run the production server:**

   ```bash
   npm start
   ```

## Folder Structure

- `src/`: Source files for the API.
- `data/`: Data files used by the API.

## Linting

- **ESLint:**

  ```bash
  npm run lint
  ```

## Environment Variables

Create a `.env` file in the `envs/` directory with the necessary environment variables.

## API Endpoints

- **GET /api/products**: Returns the list of all products.
- **GET /api/products/:id**: Returns the details of a specific product.
- **GET /api/stock-price/:sku**: Returns the stock and price information for a specific SKU.

## Technologies Used

- Node.js
- Express
- Axios
