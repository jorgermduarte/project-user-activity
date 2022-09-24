FROM node:16-alpine
WORKDIR /node-project

COPY ./src /node-project/src
COPY package.json /node-project
COPY package-lock.json /node-project
COPY tsconfig*.json /node-project

RUN npm install

RUN npm run build

COPY ./dist /node-project/dist

