FROM node:12

# Create app directory
WORKDIR /usr/src/azimut

# Install app dependencies
#COPY package.json .
# For npm@5 or later, copy package-lock.json as well
#COPY package-lock.json .
# install will run build-client and build-server
RUN npm install
# Bundle app source
#COPY . .
# Map the port
EXPOSE 4000
EXPOSE 4200

CMD [ "npm", "start", "--host", "0.0.0.0" ]

# At the end, set the user to use when running this image
USER node
