# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:12-slim
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run ng build --prod
EXPOSE 8080
CMD [ "node", "server.js" ]