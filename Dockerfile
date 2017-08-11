FROM node:8.3-alpine
MAINTAINER Doguhan Uluca <duluca@gmail.com>

ENV NPM_CONFIG_LOGLEVEL error

ADD https://github.com/Yelp/dumb-init/releases/download/v1.1.1/dumb-init_1.1.1_amd64 /usr/local/bin/dumb-init
RUN chmod +x /usr/local/bin/dumb-init

RUN mkdir -p /usr/src/app

RUN adduser -S nodejs
RUN chown nodejs: /usr/src/app
USER nodejs
# RUN daemon with `dockerd --userns-remap=nodejs`

WORKDIR /usr/src/app

COPY package.json .
ENV NODE_ENV production
RUN npm install --only=production

ENV HOST "0.0.0.0"
ENV PORT 3000
EXPOSE 3000

COPY . .

CMD [ "dumb-init", "npm", "start" ]