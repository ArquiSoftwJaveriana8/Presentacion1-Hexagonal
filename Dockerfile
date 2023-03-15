# Specify the base image
FROM node:14-alpine

# Create a working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Copy .env file to the root directory of the Docker image
COPY .env .

# Expose port 54 and 5432
EXPOSE 54 5432

# Start the application
CMD [ "npm", "run", "dev" ]
