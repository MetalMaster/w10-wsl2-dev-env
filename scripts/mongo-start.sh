#!/bin/bash

# Set a dir to store your data
DATA_DIR=$1
NETWORK_NAME=$2
CONTAINER_NAME=mongo
PORT=27017

docker run --name $CONTAINER_NAME --network $NETWORK_NAME -p $PORT:27017 -v $DATA_DIR:/data/db -d mongo

