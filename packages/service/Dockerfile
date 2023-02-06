# syntax=docker/dockerfile:1
FROM node:18
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production && npm run build
COPY ./dist .
CMD [ "node", "dist/app.js" ]