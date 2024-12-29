FROM node:16-alpine

WORKDIR /app

COPY ./twitter-clone/package*.json /app

RUN yarn install

CMD ["yarn", "start"]