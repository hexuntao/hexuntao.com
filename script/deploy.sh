#!/bin/bash

PM2_APP_NAME=hexuntao.com

SHELL_PATH=$(dirname $0)

echo "[deploy] 开始部署..."

echo "[deploy] stop pm2 app..."

pm2 stop $PM2_APP_NAME -s

sh ${SHELL_PATH}/refetch.sh
sh ${SHELL_PATH}/reinstall.sh
sh ${SHELL_PATH}/reload.sh

echo "[deploy] restart pm2 app..."

pm2 restart $PM2_APP_NAME -s

echo "[deploy] 部署完成。"