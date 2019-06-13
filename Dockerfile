FROM node:10

RUN mkdir /app

WORKDIR /app

COPY ./package.json .

ENV NODE_PORT 6060

RUN npm install

COPY ./app.js ./app.js

EXPOSE ${NODE_PORT}

CMD ["npm", "start"]