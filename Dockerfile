# Import Node.js image
FROM node:22

# Set the working directory
WORKDIR /app

# Copy the package.json file
COPY package.json .

# Install the dependencies
RUN npm install 

# Copy the rest of the files
COPY . .

# Expose the port
EXPOSE 3001

# Start the application
CMD ["npm", "start"]
