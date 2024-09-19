# Use the official Node.js 18 image as the base image
FROM node:18.19 AS build

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the Angular application in production mode
RUN npm run build --prod

# Use Nginx to serve the built Angular app
FROM nginx:alpine

# Copy custom Nginx configuration
COPY default.conf /etc/nginx/conf.d/default.conf

# Copy the built files from the Node.js image
COPY --from=build /app/dist/oi-ng/browser /usr/share/nginx/html

# Expose port 80 to access the app
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
