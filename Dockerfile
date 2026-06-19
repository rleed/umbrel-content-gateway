FROM node:20-alpine
USER node
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 8077
CMD node server.js
