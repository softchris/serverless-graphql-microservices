# Dockerfile

# from what OS
FROM node:10-alpine

## set workdir
WORKDIR /app

# set env variable
ENV PORT=3000

# copy application files
COPY . .

# install npm libraries
RUN npm install

# make the port exposed to the outside world
EXPOSE $PORT

# how to start the app, aka `npm start`
ENTRYPOINT ["npm", "start"]