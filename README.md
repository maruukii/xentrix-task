# Xentrix task

This project is inspired by a junior developer task provided by Xentrix, along with a Figma UI design that outlines the core layout and user interactions. The goal of the assignment is to translate the provided interface into a functional MERN-stack application while respecting the visual guidelines and component structure defined in the Figma prototype.

## Technologies and Tools

### Frontend

- Vite.js: A modern front-end build tool that provides a fast development experience.
- React.js: A JavaScript library for building user interfaces, particularly single-page applications.
- Tailwind CSS: A utility-first CSS framework that allows developers to build responsive and customizable interfaces directly in the markup, enabling rapid UI development with consistent styling.

### Backend

- Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- Express.js: A minimal and flexible Node.js web application framework.
- MongoDB: A document database with the scalability and flexibility that you want with the querying and indexing that you need.

## Project Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/maruukii/xentrix-task.git
   cd xentrix-task
   ```

   **I/ Access frontend directory:**

   ```bash
   cd front
   ```

   **II/ Access backend directory:**

   ```bash
   cd api
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server (frontend):**

   ```bash
   npm run dev
   ```

4. **Start the development server (backend):**

   ```bash
   npm run dev
   ```
> **Note:** You can start the project in two ways:
> 1. Run the frontend and backend separately (as described above), or  
> 2. Use **Docker Compose** from the **project root** (where `compose.yml` is located).  
>    Make sure you are in the root directory before running Compose; if the file is not there, adjust the project structure accordingly.  
>    When using Docker Compose, set **NODE_ENV=production** in the api .env.local file.
5. **Build for production:**

   ```bash
   npm run build
   ```
## Branches

- `main`: Stable production code
- `develop`: Default branch for ongoing work
- `qa/*`: Branches for QA testing before release
- `release/*`: Final prep for upcoming releases
- `feat/*`: Feature branches
- `chore/*`: Maintenance or cleanup tasks
- `fix/*` or `bugfix/*`: Bug fix branches
- `hotfix/*`: Urgent production fixes
- `refac/*`: Code cleanup, restructuring, or optimization
- `docs/*` or `doc/*`: Documentation updates

## Contributing

Please follow the established coding standards and commit message guidelines.
