FROM node:14
WORKDIR /app
COPY package.json /index
RUN npm install
COPY . /app
CMD node index.js
EXPOSE 5000