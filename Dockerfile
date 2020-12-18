FROM node:14

RUN mkdir /app

RUN npm install nodemon -g

WORKDIR /app

RUN yarn

CMD yarn start
