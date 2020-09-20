#!/bin/bash

PROJECT_NAME=${PWD##*/}
NETWORK_NAME=$1
EXTERNAL_PORT=8080
INTERNAL_PORT=3000

echo "Removing old container"
docker kill $PROJECT_NAME
docker rm $PROJECT_NAME

echo "Building $PROJECT_NAME"
docker build -t $PROJECT_NAME .

echo "Running $PROJECT_NAME"
docker run --name $PROJECT_NAME -d -p $EXTERNAL_PORT:$INTERNAL_PORT --network $NETWORK_NAME --env-file ./docker_env.list -t $PROJECT_NAME





