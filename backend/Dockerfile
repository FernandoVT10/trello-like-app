FROM node:21-alpine as base
WORKDIR /app
COPY ./package-lock.json ./backend/package.json .
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
COPY ./backend .
COPY --from=base /app/node_modules .
RUN npm run build

FROM builder as prod
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/build ./build
COPY --from=builder /app/package-lock.json /app/package.json .
RUN npm install --omit=dev
CMD ["node", "build/main.js"]
