# syntax=docker/dockerfile:1
FROM node:12.18.1
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
RUN npm build
COPY ./dist .
CMD [ "node", "dist/app.js" ]