# RouterOS 配置指南

适用于 MikroTik RouterOS（WinBox / WebFig / CLI）。

## 示例环境

- RouterOS 网关：`192.168.20.1`
- MSM 主机：`192.168.20.2`

## 步骤一：添加静态路由（FakeIP）

### Web 界面（WinBox / WebFig）

1. 打开 **IP > Routes**
2. 新增路由：
   - **Dst. Address**：`28.0.0.0/8`
   - **Gateway**：`192.168.20.2`

### CLI

```shell
/ip route add dst-address=28.0.0.0/8 gateway=192.168.20.2
```

## 步骤二：配置 DHCP DNS

1. 打开 **IP > DHCP Server > Networks**
2. 编辑你的 LAN 网络条目
3. 将 **DNS Servers** 设置为 `192.168.20.2`

### CLI（修改已有网络）

```shell
/ip dhcp-server network set [find address~"192.168.20.0/24"] dns-server=192.168.20.2
```

## 验证

- 客户端 `nslookup google.com` 返回 `28.0.0.0/8` 段 IP
- 白名单设备可访问国外站点

## 下一步

- [设备管理](/zh/guide/device-management)
- [MosDNS 管理](/zh/guide/mosdns)
