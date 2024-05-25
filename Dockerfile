# Stage 1: Build the Next.js app
FROM node:22-alpine
# Set the working directory inside the container
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application source code to the working directory
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Create a lightweight image for production
FROM node:18-slim

# Create and set a non-root user
RUN addgroup --system appgroup && adduser --system appuser --ingroup appgroup

# Set the working directory inside the container
WORKDIR /app

# Copy the necessary files from the builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/next-i18next.config.js ./ # If you have a next-i18next.config.js file
COPY --from=builder /app/next-env.d.ts ./ # If you have a next-env.d.ts file

# Change ownership of the /app directory to the non-root user
RUN chown -R appuser:appgroup /app

# Switch to the non-root user
USER appuser

# Set environment variables for production
ENV NODE_ENV production

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
