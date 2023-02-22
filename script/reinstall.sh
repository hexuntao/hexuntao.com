#!/bin/bash

SHELL_PATH=$(dirname $0)

cd $SHELL_PATH
cd ..

echo "[deploy] yarn installing..."
yarn install
echo "[deploy] yarn install done"