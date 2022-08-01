### STAGE 1: Build ###
FROM node:latest AS angular
WORKDIR /app

COPY package.json /app

RUN npm install
COPY . .

RUN npm run build

### STAGE 2: Run ###
FROM nginx:alpine

VOLUME /var/cache/nginx

COPY --from=angular /app/dist/frontend /usr/share/nginx/html
COPY ./config/nginx.conf /etc/ngix/conf.d/default.conf
