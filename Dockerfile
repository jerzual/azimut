FROM node:boron

# Create app directory
WORKDIR /usr/src/plague

# Install app dependencies
COPY package.json .
# For npm@5 or later, copy package-lock.json as well
COPY package.json package-lock.json .

RUN npm install
# Bundle app source
COPY . .
# Map the port
EXPOSE 5000

CMD [ "npm", "start" ]


# At the end, set the user to use when running this image
USER node