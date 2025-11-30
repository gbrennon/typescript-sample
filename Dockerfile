FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

# Intentionally missing tsc compilation step
COPY . .

CMD ["node", "dist/index.js"]
