#!/bin/bash

# Set a dir to store your data
DATA_DIR=<SET_YOUR_DATA_DIR>
CONTAINER_NAME=mongo
PORT=27017

docker run --name $CONTAINER_NAME -p $PORT:27017 -v $DATA_DIR:/data/db -d mongo

