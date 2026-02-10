# 回家配置

在外网通过访问内网IP直接访问家里的内网设备

## 服务端配置

在服务端的mihomo（即MSM的mihomo）配置文件中添加如下字段

```yaml
listeners:
  #Shadowsocks监听器 - 代理节点 玩法：远程连接家庭网络，端口和密码，使用时请修改，在路由器中做好端口转发
  - {name: SS-IN, type: shadowsocks, listen: '::', port: 12345, udp: true, password: "12345", cipher: aes-256-gcm}

rules:
  #内网ip直连，改成你的内网ip网段
  - IP-CIDR,192.168.1.0/24,DIRECT
  #回家端口直连
  - IN-NAME,SS-IN,DIRECT
```

## 客户端配置

在客户端的mihomo（手机/平板/异地电脑）中添加如下字段

```yaml
proxies:
  - {name: 直连, type: direct}
  - {name: 回家, type: ss, server: "12345.xyz", port: 12345, password: "12345", cipher: aes-256-gcm}
  #server是你的DDNS域名或公网IP地址，port和password与服务端一致

#添加回家节点选择组，选择“回家”时连接服务端的内网设备，选择“直连”时连接客户端本地内网设备
proxy-groups:
  - {name: 🏡 回家, type: select, proxies: [回家, 直连]}

rules:
  #回家规则，改成你的内网ip网段
  - IP-CIDR,192.168.1.0/24,🏡 回家,no-resolve
```
