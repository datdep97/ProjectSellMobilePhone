FROM node:10

WORKDIR /Project

COPY . .

ENV NODE_PORT 6060

RUN npm install

EXPOSE ${NODE_PORT}

CMD ["npm", "start"]
