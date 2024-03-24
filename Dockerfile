FROM node:20-alpine

WORKDIR /app

COPY package.json ./
RUN npm install express

COPY src /app/src

CMD ["node", "./src/app.js"]