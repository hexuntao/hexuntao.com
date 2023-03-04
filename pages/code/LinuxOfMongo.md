---
title: Linux安装mongodb
---

# Linux 服务器安装 mongodb 教程以及可能会遇到的问题

_记录下在服务器上如何安装 mongo，之前的开发博客的时候安装 mongo 时候各种问题，由此记录下安装过程_

## 打开终端并登录到您的 Linux 服务器

```
ssh root@ip
```

_ip 自行修改_

## 添加 MongoDB 仓库，使用以下命令

```perl
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
```

```bash
echo "deb http://repo.mongodb.org/apt/ubuntu "$(lsb_release -sc)"/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
```

## 更新包列表

```sql
sudo apt-get update
```

## 安装 MongoDB

```csharp
sudo apt-get install -y mongodb-org
```

## 启动 MongoDB

```
sudo systemctl start mongod
```

## 配置 MongoDB 以在服务器启动时启动

```
sudo systemctl enable mongod
```

## 确认 MongoDB 正在运行

```
sudo systemctl status mongod
```

_如果 MongoDB 正在运行，您将看到一条消息，指示 MongoDB 正在运行_

## 为 MongoDB 创建管理员用户

```
mongo
```

```
use admin
```

```
db.createUser({
    user: "admin",
    pwd: "password",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
} )
```

_请记得将“password”替换为您要使用的密码_

## 安全地启用 MongoDB

```
sudo nano /etc/mongod.conf
```

找到并注释掉以下行

```
# bindIp: 127.0.0.1
```

将以下行添加到文件的底部

```yaml
security:
    authorization: enabled
```

保存并关闭文件

## 重启 MongoDB 以使更改生效

```
sudo systemctl restart mongod
```

现在，成功在 Linux 服务器上安装并配置 MongoDB

_下面是有可能遇到的一些问题，不过我只遇到第 4 种_

1.  `Unable to locate package mongodb-org` 错误

这个错误可能是因为 MongoDB 的软件包未能正确添加到系统的软件源中。您可以使用以下命令添加官方 MongoDB 源

```
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927

```

```
echo "deb http://repo.mongodb.org/apt/ubuntu "$(lsb_release -sc)"/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list

```

接下来，更新包列表并尝试重新安装 MongoDB。

2.  `Failed to start mongod.service: Unit mongod.service not found.` 错误

这个错误可能是因为 MongoDB 的服务未能正确安装和启动。您可以使用以下命令重新安装 MongoDB

```
sudo apt-get purge mongodb-org*
sudo rm -r /var/log/mongodb
sudo rm -r /var/lib/mongodb
sudo apt-get install mongodb-org
```

完成安装后，启动 MongoDB

```
sudo systemctl start mongod

```

3.  `Failed to bind to 127.0.0.1:27017 on error Cannot assign requested address` 错误

这个错误可能是因为 MongoDB 绑定到了错误的 IP 地址。您可以编辑 MongoDB 配置文件并将其绑定到正确的 IP 地址。编辑`/etc/mongod.conf`文件并找到以下行

```
bindIp: 127.0.0.1
```

注释掉这行，并添加以下行

```
bindIp: 0.0.0.0
```

保存并关闭文件。现在重新启动 MongoDB 以使更改生效

4.  `MongoDB shell version x.x.x connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb` 错误

这个错误可能是因为您的 MongoDB 实例未启用身份验证。在使用 MongoDB 之前，请确保已启用身份验证以提高安全性。可以按照上面的步骤为 MongoDB 创建管理员用户并启用身份验证。然后，使用管理员用户登录 MongoDB

```
mongo -u admin -p --authenticationDatabase admin
```

以上是一些可能会出现的错误和解决方案。如果您遇到其他错误，请参考 MongoDB 官方文档
