# Use Node.js base image
FROM node:22-alpine

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package files first to cache dependencies
COPY package*.json ./

# Install all dependencies (including dev ones)
RUN npm install

# Copy the rest of the source code
COPY . .

# Expose the dev server port
EXPOSE 5173

# Run Next.js in development mode
CMD ["npm","run" ,"dev"]
