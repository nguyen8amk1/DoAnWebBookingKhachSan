FROM node:18-alpine
WORKDIR /client 
COPY . . 
RUN npm install --legacy-peer-deps
CMD ["npm", "start"]
EXPOSE 3000