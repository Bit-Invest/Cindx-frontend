FROM ubuntu:bionic

# replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# update the repository sources list
# and install dependencies
RUN apt-get update \
    && apt-get install -y wget \
    && apt-get install -y nginx \
    && apt-get -y autoclean

# nvm environment variables
ENV NVM_DIR $HOME/.nvm
ENV NODE_VERSION 8.11.1

# install nvm
# https://github.com/creationix/nvm#install-script
RUN wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash

# install node and npm
RUN source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

# add node and npm to path so the commands are available
ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

RUN mkdir -p /home/cindex
WORKDIR /home/cindex

COPY ./package.json ./package-lock.json ./
RUN npm install

# TODO: Optimization needed to include only required files for build.
COPY . .

RUN node scripts/build.js

COPY ./nginx.conf /etc/nginx/

ENTRYPOINT ./run.sh