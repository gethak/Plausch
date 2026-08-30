# Stage 1: Build the React application
FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source and build (Tailwind is processed here)
COPY . .
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine
# Copy the build output to Nginx's html folder
# Note: If you use Vite, the folder is /app/dist. If Create React App, it's /app/build.
COPY --from=build /app/dist /usr/share/nginx/html

# Custom nginx config: handles the React Router SPA fallback and applies
# basic per-IP rate limiting (see nginx/default.conf for details).
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

