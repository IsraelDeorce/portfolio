FROM node:16-alpine
WORKDIR /portfolio
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 9000
CMD ["npm", "run", "serve"]
