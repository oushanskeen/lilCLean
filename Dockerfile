FROM node:12.2.0-alpine
RUN mkdir -p /beenderback/app/node_modules && chown -R node:node /beenderback/app

WORKDIR /beenderback/app

USER node

COPY package*.json ./

#RUN npm install -g nodemon
RUN npm install

COPY --chown=node:node . .

EXPOSE 3001
CMD [ "npm", "start" ]
#CMD ["node", "server.js"]
