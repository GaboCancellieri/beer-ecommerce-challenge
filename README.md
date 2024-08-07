# Beer-Oz E-commerce Platform

Welcome to the Beer-Oz E-commerce Platform! This repository contains the source code for both the frontend and backend of the Beer-Oz application, an e-commerce platform designed for beer enthusiasts. The project is structured into two main directories: `/app` for the frontend and `/api` for the backend.

## Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Environment Configuration](#environment-configuration)
- [Usage](#usage)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

Beer-Oz is an e-commerce platform dedicated to providing a wide variety of beers to customers. The platform includes functionalities such as product browsing, detailed product pages, stock and price updates, and more.

## Project Structure

The project is divided into two main parts:

- **Frontend**: Located in the `/app` directory, built with Next.js and React.
- **Backend**: Located in the `/api` directory, built with Node.js and Express.

## Features

### Frontend

- Responsive design with a custom layout and navigation
- Product listing and detail pages
- Custom 404 error page
- Periodic stock and price updates using custom hooks
- Error boundary for graceful error handling
- SCSS for styling with CSS modules and global styles

### Backend

- RESTful API built with Express
- Endpoints for product and stock price management
- Middleware for error handling and parameter validation
- Unit tests using Jest and Supertest

## Technologies

### Frontend

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [SCSS](https://sass-lang.com/)
- [Jest](https://jestjs.io/) for testing
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) for component testing

### Backend

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) for database (if applicable)
- [Jest](https://jestjs.io/) for testing
- [Supertest](https://github.com/visionmedia/supertest) for API testing

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Clone the Repository

```bash
git clone https://github.com/your-username/beer-oz.git
cd beer-oz
```

### Install Dependencies

```bash
# Install dependencies for the frontend
cd app
npm install
```

```bash
# Install dependencies for the backend
cd ../api
npm install
```

# Environment Configuration

Each subproject (app and api) has a .env.local file for environment-specific variables. You can find an example configuration file in each directory named .env.local-example. Copy these files to create your own .env.local files, which will not be uploaded to the repository.

## Setup Environment Variables

### Frontend (app):

- Copy .env.local-example to .env.local
- Edit .env.local with your specific configuration.

```bash
cp app/envs/.env.local-example app/envs/.env.local
```

### Backend (api):

- Copy .env.local-example to .env.local
- Edit .env.local with your specific configuration

```bash
cp api/envs/.env.local-example api/envs/.env.local
```

# Usage

### Running the Frontend

```bash
cd app
npm run dev
```

The frontend will be available at http://localhost:3000.

### Running the Backend

```bash
cd api
npm start
```

The backend will be available at http://localhost:5000.

# Scripts

### Frontend Scripts

```bash
# Start the development server
npm run dev

# Build the project
npm run build

# Start the production server
npm start

# Run tests
npm test
```

### Backend Scripts

```bash
# Start the development server
npm run dev

# Start the server
npm start

# Run tests
npm test
```

# Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Create a pull request.
6. Please make sure your code adheres to the project's coding standards and includes tests for any new functionality.

# License

This project is licensed under the MIT License. See the LICENSE file for details.

# Contact

For any inquiries or issues, please contact the project maintainer at: cancellieri.gabriel@gmail.com
