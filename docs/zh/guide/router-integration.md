# 路由器集成总览

MSM 采用旁路由模式。主路由仅需完成 **DHCP DNS** 与 **静态路由** 两类配置即可工作。

## 必要配置

### 1. DHCP DNS

将主路由 DHCP 下发 DNS 指向 MSM：

- MSM IP：`192.168.1.2`
- DHCP DNS：`192.168.1.2`

### 2. 静态路由（FakeIP）

将 FakeIP 网段路由到 MSM：

- 目标网段：`28.0.0.0/8`
- 下一跳：`192.168.1.2`

> 若启用 IPv6，请根据 MSM 实际配置添加 IPv6 静态路由。

## 验证方式

1. 在客户端执行 `nslookup google.com`，应返回 `28.0.0.0/8` 段地址
2. 白名单设备能访问国外站点，非白名单设备无法访问

## 选择你的路由器系统

- [RouterOS 配置](/zh/guide/routeros)
- [爱快配置](/zh/guide/ikuai)
- [OpenWrt 配置](/zh/guide/openwrt)
- [UniFi 配置](/zh/guide/unifi)

## 常见问题

### 为什么必须配置静态路由？

FakeIP 为虚拟 IP 段。若没有静态路由，客户端访问 FakeIP 会被主路由丢弃，导致国外域名无法访问。

### 为什么必须设置 DHCP DNS？

只有将 DNS 请求交给 MosDNS，分流规则与 FakeIP 才能生效。
