FROM node:12

# Create app directory
WORKDIR /usr/src/azimut-e2e

# Install app dependencies
COPY package.json .
# For npm@5 or later, copy package-lock.json as well
COPY package-lock.json .
# install will run build-client and build-server
RUN npm ci
RUN npm build

# Bundle app source
#COPY . .
# Map the port
EXPOSE 8080

CMD [ "npm", "run", "start" ]

# At the end, set the user to use when running this image
USER node
