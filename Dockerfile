# Use the official Node.js image as the base image
FROM node:18-alpine

# Create and change to the app directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Next.js project
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]

# After successful build"
RUN echo "Build successful! If any problem occurs, there must be a problem in your environment file , please make sure it is according to the template provided."