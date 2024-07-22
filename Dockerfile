FROM node:20.14.0
WORKDIR /app
COPY package*.json ./
RUN if [ -d "node_modules" ]; then rm -rf node_modules; fi
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
