---
title: Godaddy DNS解析问题
---

# Godaddy DNS 解析问题

## 介绍

前段时间在[GoDaddy](https://www.godaddy.com/zh-sg)注册购买一个域名，但是解析后发现国内访问有时打不开、很慢，解析出错等问题

后来才知道 Goddady 默认的 DNS 解析是很慢，不适合我们国内中文网站，需要更换一个国内的 DNS 解析。

[DNSPod](https://www.dnspod.cn)据说是国内非常稳定、而且免费的域名解析服务商。

## 注册 DNSPod

[DNSPod](https://www.dnspod.cn) 微信扫码注册即可，这里就不过多介绍。

登录之后进入控制台

![1676871442373.jpg](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/66da741541d14183ba7b8c11b7ec0b4e~tplv-k3u1fbpfcp-watermark.image?)

## DNSPod 添加域名

![a16af4562ffec7c1a6b31e519083e9e8.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/faa90e08c90b43598e444743c0d03d3a~tplv-k3u1fbpfcp-watermark.image?)

![f69cd0f85bb243c22331bdc3379c7484.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9223062c388c42a2b05fa60b8ea4b188~tplv-k3u1fbpfcp-watermark.image?)

## 添加记录

- 单击解析域名的“域名名称”，进入解析记录管理页。
- 在 “记录管理” 页签中，可以通过单击快速添加解析添加解析记录。

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b4d32ea3097b4b63a5810e072056d6c4~tplv-k3u1fbpfcp-watermark.image?)

### 快速添加网站解析

在弹出的 “快速添加解析” 窗口中，单击选择网站解析

![2bae34eeac1b16e669cc2773270cb076.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6172cdbb09a342d8a50e751074873afe~tplv-k3u1fbpfcp-watermark.image?)

#### 快速添加网站解析支持以下两个选项：

- 主机 IP：在 “快速添加解析” 窗口中输入您的主机 IP 地址（公网 IP）
- 域名映射(CNAME)：将该域名映射至另一个域名，与它指向相同的服务器。如：hexuntao.com。

![a503072c092b33d7a4e1dde584fa3dc5.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ee6964c57b2449e3b88fe40ef57cd5b3~tplv-k3u1fbpfcp-watermark.image?)

> 复制 DNSPod 所属服务器 两个地址到 GoDaddy 域名服务器

## GoDaddy 注册域名配置为 DNSPod 的 DNS 服务器

进入 GoDaddy DNS 管理

![1676872359114.jpg](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/84c35b27f1934f23b60976073fc530cd~tplv-k3u1fbpfcp-watermark.image?)

往下拉 找到 域名服务器

![WX20230220-135440@2x.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/972db2a79e234d2a98eefff505447e3b~tplv-k3u1fbpfcp-watermark.image?)

点击输入我的域名服务器（高级），再点击更改

![WX20230220-135526@2x.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/41ea4f99fde44d508051d40b9cf7d812~tplv-k3u1fbpfcp-watermark.image?)

输入上面 刚才复制的 DNSPod 所属服务器 的地址

![WX20230220-135501@2x.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1ae1558161584cd4af85773d6b2aff10~tplv-k3u1fbpfcp-watermark.image?)

## 回到 DNSPod

点击重新 **重新验证** 这时候应该是提示验证成功了，也可以返回我的域名列表查看是否成功。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a6641b7fd8c24615b2cf16707dd56f0a~tplv-k3u1fbpfcp-watermark.image?)

同时回到 DNSPod DNS 记录会显示们 **_无法显示您的 DNS 信息，因为您的域名服务器不是由我们管理的_**

![WX20230220-135301@2x.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/206dd9d0e9424e32b7248855742a0152~tplv-k3u1fbpfcp-watermark.image?)

## 最后试试访问域名
