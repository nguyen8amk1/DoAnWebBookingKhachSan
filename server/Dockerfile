FROM node:18-alpine
WORKDIR /server 
COPY . . 
RUN yarn install 
CMD ["node", "src/server.js"
EXPOSE 8080