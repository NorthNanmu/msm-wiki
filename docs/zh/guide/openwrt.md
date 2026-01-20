# OpenWrt 配置指南

适用于 OpenWrt/LEDE。以下以命令行（UCI）方式配置，适用于 LuCI 与 SSH 场景。

## 示例环境

- OpenWrt 网关：`192.168.1.1`
- MSM 主机：`192.168.1.2`

## 步骤一：添加静态路由（FakeIP）

```bash
uci add network route
uci set network.@route[-1].interface='lan'
uci set network.@route[-1].target='28.0.0.0'
uci set network.@route[-1].netmask='255.0.0.0'
uci set network.@route[-1].gateway='192.168.1.2'
uci commit network
/etc/init.d/network reload
```

## 步骤二：设置 DHCP DNS

```bash
uci set dhcp.lan.dhcp_option='6,192.168.1.2'
uci commit dhcp
/etc/init.d/dnsmasq restart
```

## 验证

```bash
nslookup google.com 192.168.1.2
```

应返回 `28.0.0.0/8` 段地址。

## 下一步

- [设备管理](/zh/guide/device-management)
- [MosDNS 管理](/zh/guide/mosdns)
