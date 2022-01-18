FROM node:lts-alpine
WORKDIR /app
COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock
RUN yarn
COPY public public
COPY src src
CMD yarn start