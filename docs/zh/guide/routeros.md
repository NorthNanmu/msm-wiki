# RouterOS 配置指南

适用于 MikroTik RouterOS（WinBox / WebFig / CLI）。

## 变量约定

- `{MSM主机IP}`：部署 MosDNS / Mihomo / Sing-box 的主机 IP

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

## RouterOS 配置提示（可选）

1. 在 `IP > Routes` 中新增上述路由规则，路由表选择 `main`。
2. 在 `IP > DNS` 保持路由器自身 DNS 为上游值（无需指向 `{MSM主机IP}`）。
3. 在 `IP > DHCP Server > Networks` 设置 DHCP 下发 DNS 为 `{MSM主机IP}`。
4. 如需故障切换，可在 `Tools > Netwatch` 监测目标（如 `1.1.1.1`），异常时切换到备用 DNS，恢复后切回主 DNS。

## RouterOS 命令示例（可选）

### 路由规则

```shell
/ip route
add comment="mihomo/singbox fakeip" disabled=no distance=1 dst-address=28.0.0.0/8 gateway={MSM主机IP} routing-table=main scope=30 suppress-hw-offload=no target-scope=10
add disabled=no distance=1 dst-address=8.8.8.8/32 gateway={MSM主机IP} scope=30 suppress-hw-offload=no target-scope=10
add disabled=no distance=1 dst-address=1.1.1.1/32 gateway={MSM主机IP} scope=30 suppress-hw-offload=no target-scope=10

# Telegram
add disabled=no distance=1 dst-address=149.154.160.0/22 gateway={MSM主机IP} scope=30 suppress-hw-offload=no target-scope=10
add disabled=no distance=1 dst-address=149.154.164.0/22 gateway={MSM主机IP} scope=30 suppress-hw-offload=no target-scope=10
add disabled=no distance=1 dst-address=149.154.172.0/22 gateway={MSM主机IP} scope=30 suppress-hw-offload=no target-scope=10
add disabled=no distance=1 dst-address=91.108.4.0/22 gateway={MSM主机IP} scope=30 suppress-hw-offload=no target-scope=10
add disabled=no distance=1 dst-address=91.108.20.0/22 gateway={MSM主机IP} scope=30 suppress-hw-offload=no target-scope=10
add disabled=no distance=1 dst-address=91.108.56.0/22 gateway={MSM主机IP} scope=30 suppress-hw-offload=no target-scope=10
add disabled=no distance=1 dst-address=91.108.8.0/22 gateway={MSM主机IP} scope=30 suppress-hw-offload=no target-scope=10
add disabled=no distance=1 dst-address=95.161.64.0/22 gateway={MSM主机IP} scope=30 suppress-hw-offload=no target-scope=10
add disabled=no distance=1 dst-address=91.108.12.0/22 gateway={MSM主机IP} scope=30 suppress-hw-offload=no target-scope=10
add disabled=no distance=1 dst-address=91.108.16.0/22 gateway={MSM主机IP} scope=30 suppress-hw-offload=no target-scope=10
add disabled=no distance=1 dst-address=67.198.55.0/24 gateway={MSM主机IP} scope=30 suppress-hw-offload=no target-scope=10
add disabled=no distance=1 dst-address=109.239.140.0/24 gateway={MSM主机IP} scope=30 suppress-hw-offload=no target-scope=10

# Netflix
add disabled=no distance=1 dst-address=207.45.72.0/22 gateway={MSM主机IP} scope=30 suppress-hw-offload=no target-scope=10
add disabled=no distance=1 dst-address=208.75.76.0/22 gateway={MSM主机IP} scope=30 suppress-hw-offload=no target-scope=10
add disabled=no distance=1 dst-address=210.0.153.0/24 gateway={MSM主机IP} scope=30 suppress-hw-offload=no target-scope=10
add disabled=no distance=1 dst-address=185.76.151.0/24 gateway={MSM主机IP} scope=30 suppress-hw-offload=no target-scope=10
```

### DNS 与 DHCP

```shell
/ip dns set servers={MSM主机IP}
/ip dhcp-server network set dns-server={MSM主机IP} numbers=0
```

### Netwatch 故障切换示例

> 目标 IP 可使用 `1.1.1.1` 等公网 IP，备用 DNS 可替换为实际值。

**up（恢复时）**

```shell
/ip dns set server={MSM主机IP}
/ip dhcp-server network set dns-server={MSM主机IP} numbers=0
```

**down（不可达时）**

```shell
/ip dns set server=223.5.5.5
/ip dhcp-server network set dns-server=223.5.5.5 numbers=0
```

## 验证

- 客户端 `nslookup google.com` 返回 `28.0.0.0/8` 段 IP
- 白名单设备可访问国外站点

## 下一步

- [设备管理](/zh/guide/device-management)
- [MosDNS 管理](/zh/guide/mosdns)
