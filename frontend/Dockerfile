FROM node:21-alpine as base
WORKDIR /app
COPY ./package-lock.json ./frontend/package.json .
RUN npm install

# Development
FROM base as dev
WORKDIR /app
ENV NODE_ENV development
COPY --from=base /app/node_modules .
CMD ["npm", "run", "dev"]

# Production
FROM base as builder
WORKDIR /app
COPY ./frontend .
COPY --from=base /app/node_modules .
RUN npm run build

FROM nginx:alpine as prod
COPY --from=builder /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
