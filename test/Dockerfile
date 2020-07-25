FROM node:12-alpine

WORKDIR /usr/src/app/test

ENV NODE_ENV=test

COPY . .

EXPOSE 80

CMD [ "npm", "test" ]
