# Use an official Node.js image to build the app
FROM node:latest

# Set the working directory in the container
WORKDIR /treasure_onah_final_site

# Copy package files and install dependencies
COPY package*.json ./

# Install yarn
RUN yarn install

# Copy the app files and build the production version
COPY . .

# Build the app
RUN yarn build

# Install http-server globally
RUN yarn global add http-server

# Expose the port the app runs on
EXPOSE 5575

# Start http-server to serve the build
CMD ["http-server", "build", "-p", "5575"]
