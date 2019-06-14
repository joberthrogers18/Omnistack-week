FROM node:latest

WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json
RUN npm install

COPY . /usr/src/app

ENV PORT 3333
ENV TESTE app

EXPOSE $PORT