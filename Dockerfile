FROM node:alpine
COPY ./ ./

RUN npm install
RUN npm install -D

EXPOSE 8080

CMD ["node", "src/server.js"]