FROM node:slim
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install -g serve
CMD serve -s build
EXPOSE 3000
COPY package.json package.json
COPY npm-shrinkwrap.json npm-shrinkwrap.json
RUN npm install
COPY . .
RUN npm run build --production
