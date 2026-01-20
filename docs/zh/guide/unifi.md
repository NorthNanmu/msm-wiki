# UniFi 配置指南

适用于 UniFi Network 控制器（UDM/USG/UXG 等）。不同版本界面略有差异。

## 示例环境

- UniFi 网关：`192.168.1.1`
- MSM 主机：`192.168.1.2`

## 步骤一：配置 DHCP DNS

在 **Settings > Networks** 中编辑 LAN 网络，设置 DNS：

- **DNS Server**：选择 **Manual**
- **DNS Server 1**：`192.168.1.2`
- **DNS Server 2**：可选填运营商 DNS

## 步骤二：添加静态路由（FakeIP）

在 **Routes / Static Routes** 页面新增路由：

- **Destination Network**：`28.0.0.0/8`
- **Next Hop**：`192.168.1.2`
- **Type**：Next Hop（或网关）

> 路由菜单名称因控制器版本而异，请在设置中查找 “Routes / Static Routes”。

## 验证

客户端执行：

```bash
nslookup google.com
```

应返回 `28.0.0.0/8` 段地址。

## 下一步

- [设备管理](/zh/guide/device-management)
- [MosDNS 管理](/zh/guide/mosdns)
