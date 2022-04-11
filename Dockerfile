FROM node:lts-alpine

WORKDIR /app

COPY ./src/package.json .

RUN yarn

COPY ./src .

EXPOSE 8091

CMD ["yarn", "start"]