#!/bin/bash

NETWORK_NAME=$1

docker network create $NETWORK_NAME

echo "Created network ${NETWORK_NAME}"

