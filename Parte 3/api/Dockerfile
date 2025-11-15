# Etapa 1
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY server.js .
# Etapa 2
FROM node:18-alpine AS prod
WORKDIR /app
COPY --from=build /app /app
EXPOSE 3000
CMD ["node", "server.js"]
