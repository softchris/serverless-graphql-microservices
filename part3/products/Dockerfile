# Dockerfile

# from what OS
FROM node:10-alpine

## set workdir
WORKDIR /app

# set env variable
ENV PORT=3000

# install npm libraries
# doing this first makes docker take this step from cache on rebuild if dependencies are untouched,
# it saves much time in bigger projects
COPY package.json package-lock.json ./
RUN npm install

# copy source code files
COPY src/ .

# make the port exposed to the outside world
EXPOSE $PORT

# how to start the app, aka `npm start`
ENTRYPOINT ["npm", "start"]
