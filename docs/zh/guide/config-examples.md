# 配置示例

本文档提供 MosDNS、SingBox、Mihomo 的完整配置示例，帮助你快速配置 MSM。

## MosDNS 配置示例

### 基础配置

```yaml
log:
  level: info
  file: ""

# 插件配置
plugins:
  # 缓存
  - tag: cache
    type: cache
    args:
      size: 10240
      lazy_cache_ttl: 86400

  # 转发器 - 国内 DNS
  - tag: forward_local
    type: forward
    args:
      concurrent: 2
      upstreams:
        - addr: "https://223.5.5.5/dns-query"
        - addr: "https://1.12.12.12/dns-query"

  # 转发器 - 国外 DNS
  - tag: forward_remote
    type: forward
    args:
      concurrent: 2
      upstreams:
        - addr: "https://1.1.1.1/dns-query"
        - addr: "https://8.8.8.8/dns-query"

  # FakeIP
  - tag: fakeip
    type: fakeip
    args:
      pool: "28.0.0.0/8"
      ttl: 3600

  # 国内域名列表
  - tag: geosite_cn
    type: domain_set
    args:
      files:
        - "/root/.msm/mosdns/geosite_cn.txt"

  # 国外域名列表
  - tag: geosite_geolocation_non_cn
    type: domain_set
    args:
      files:
        - "/root/.msm/mosdns/geosite_geolocation_non_cn.txt"

  # 客户端 IP 白名单
  - tag: client_ip
    type: ip_set
    args:
      files:
        - "/root/.msm/mosdns/client_ip.txt"

  # 主要执行序列
  - tag: main_sequence
    type: sequence
    args:
      - exec: $cache

      # 检查客户端 IP 是否在白名单
      - matches:
          - "!client_ip $client_ip"
        exec: reject 5  # 不在白名单，拒绝查询

      # 国内域名
      - matches:
          - "qname $geosite_cn"
        exec: $forward_local

      # 国外域名 - 返回 FakeIP
      - matches:
          - "qname $geosite_geolocation_non_cn"
        exec: $fakeip

      # 默认使用国内 DNS
      - exec: $forward_local

# 服务器配置
servers:
  - exec: main_sequence
    listeners:
      - protocol: udp
        addr: ":53"
      - protocol: tcp
        addr: ":53"
```

### 高级配置（带广告过滤）

```yaml
log:
  level: info
  file: ""

plugins:
  # 缓存
  - tag: cache
    type: cache
    args:
      size: 10240
      lazy_cache_ttl: 86400

  # 广告域名列表
  - tag: geosite_category_ads_all
    type: domain_set
    args:
      files:
        - "/root/.msm/mosdns/geosite_category_ads_all.txt"

  # 转发器 - 国内 DNS
  - tag: forward_local
    type: forward
    args:
      concurrent: 2
      upstreams:
        - addr: "https://223.5.5.5/dns-query"
        - addr: "https://1.12.12.12/dns-query"

  # 转发器 - 国外 DNS
  - tag: forward_remote
    type: forward
    args:
      concurrent: 2
      upstreams:
        - addr: "https://1.1.1.1/dns-query"
        - addr: "https://8.8.8.8/dns-query"

  # FakeIP
  - tag: fakeip
    type: fakeip
    args:
      pool: "28.0.0.0/8"
      ttl: 3600

  # 国内域名列表
  - tag: geosite_cn
    type: domain_set
    args:
      files:
        - "/root/.msm/mosdns/geosite_cn.txt"

  # 国外域名列表
  - tag: geosite_geolocation_non_cn
    type: domain_set
    args:
      files:
        - "/root/.msm/mosdns/geosite_geolocation_non_cn.txt"

  # 客户端 IP 白名单
  - tag: client_ip
    type: ip_set
    args:
      files:
        - "/root/.msm/mosdns/client_ip.txt"

  # 主要执行序列
  - tag: main_sequence
    type: sequence
    args:
      - exec: $cache

      # 广告域名 - 返回 0.0.0.0
      - matches:
          - "qname $geosite_category_ads_all"
        exec: reject 0

      # 检查客户端 IP 是否在白名单
      - matches:
          - "!client_ip $client_ip"
        exec: reject 5

      # 国内域名
      - matches:
          - "qname $geosite_cn"
        exec: $forward_local

      # 国外域名 - 返回 FakeIP
      - matches:
          - "qname $geosite_geolocation_non_cn"
        exec: $fakeip

      # 默认使用国内 DNS
      - exec: $forward_local

servers:
  - exec: main_sequence
    listeners:
      - protocol: udp
        addr: ":53"
      - protocol: tcp
        addr: ":53"
```

## SingBox 配置示例

### 基础配置（Shadowsocks）

```json
{
  "log": {
    "level": "info",
    "timestamp": true
  },
  "dns": {
    "servers": [
      {
        "tag": "dns_proxy",
        "address": "1.1.1.1",
        "detour": "proxy"
      },
      {
        "tag": "dns_direct",
        "address": "223.5.5.5",
        "detour": "direct"
      },
      {
        "tag": "dns_fakeip",
        "address": "fakeip"
      }
    ],
    "rules": [
      {
        "outbound": "any",
        "server": "dns_direct"
      },
      {
        "query_type": ["A", "AAAA"],
        "server": "dns_fakeip"
      }
    ],
    "fakeip": {
      "enabled": true,
      "inet4_range": "28.0.0.0/8",
      "inet6_range": "fc00::/18"
    }
  },
  "inbounds": [
    {
      "type": "tproxy",
      "tag": "tproxy-in",
      "listen": "::",
      "listen_port": 7896,
      "sniff": true,
      "sniff_override_destination": true
    },
    {
      "type": "redirect",
      "tag": "redirect-in",
      "listen": "::",
      "listen_port": 7895,
      "sniff": true,
      "sniff_override_destination": true
    },
    {
      "type": "mixed",
      "tag": "mixed-in",
      "listen": "::",
      "listen_port": 7890
    }
  ],
  "outbounds": [
    {
      "type": "shadowsocks",
      "tag": "proxy",
      "server": "your-server.com",
      "server_port": 8388,
      "method": "aes-256-gcm",
      "password": "your-password"
    },
    {
      "type": "direct",
      "tag": "direct"
    },
    {
      "type": "block",
      "tag": "block"
    },
    {
      "type": "dns",
      "tag": "dns-out"
    }
  ],
  "route": {
    "rules": [
      {
        "protocol": "dns",
        "outbound": "dns-out"
      },
      {
        "ip_is_private": true,
        "outbound": "direct"
      },
      {
        "geoip": "cn",
        "outbound": "direct"
      },
      {
        "geosite": "cn",
        "outbound": "direct"
      }
    ],
    "final": "proxy",
    "auto_detect_interface": true
  }
}
```

### 高级配置（多节点 + 负载均衡）

```json
{
  "log": {
    "level": "info",
    "timestamp": true
  },
  "dns": {
    "servers": [
      {
        "tag": "dns_proxy",
        "address": "1.1.1.1",
        "detour": "proxy"
      },
      {
        "tag": "dns_direct",
        "address": "223.5.5.5",
        "detour": "direct"
      },
      {
        "tag": "dns_fakeip",
        "address": "fakeip"
      }
    ],
    "rules": [
      {
        "outbound": "any",
        "server": "dns_direct"
      },
      {
        "query_type": ["A", "AAAA"],
        "server": "dns_fakeip"
      }
    ],
    "fakeip": {
      "enabled": true,
      "inet4_range": "28.0.0.0/8",
      "inet6_range": "fc00::/18"
    }
  },
  "inbounds": [
    {
      "type": "tproxy",
      "tag": "tproxy-in",
      "listen": "::",
      "listen_port": 7896,
      "sniff": true,
      "sniff_override_destination": true
    },
    {
      "type": "redirect",
      "tag": "redirect-in",
      "listen": "::",
      "listen_port": 7895,
      "sniff": true,
      "sniff_override_destination": true
    },
    {
      "type": "mixed",
      "tag": "mixed-in",
      "listen": "::",
      "listen_port": 7890
    }
  ],
  "outbounds": [
    {
      "type": "shadowsocks",
      "tag": "hk-node1",
      "server": "hk1.example.com",
      "server_port": 8388,
      "method": "aes-256-gcm",
      "password": "password1"
    },
    {
      "type": "shadowsocks",
      "tag": "hk-node2",
      "server": "hk2.example.com",
      "server_port": 8388,
      "method": "aes-256-gcm",
      "password": "password2"
    },
    {
      "type": "shadowsocks",
      "tag": "us-node1",
      "server": "us1.example.com",
      "server_port": 8388,
      "method": "aes-256-gcm",
      "password": "password3"
    },
    {
      "type": "urltest",
      "tag": "auto",
      "outbounds": ["hk-node1", "hk-node2", "us-node1"],
      "url": "https://www.gstatic.com/generate_204",
      "interval": "5m",
      "tolerance": 50
    },
    {
      "type": "selector",
      "tag": "proxy",
      "outbounds": ["auto", "hk-node1", "hk-node2", "us-node1"],
      "default": "auto"
    },
    {
      "type": "direct",
      "tag": "direct"
    },
    {
      "type": "block",
      "tag": "block"
    },
    {
      "type": "dns",
      "tag": "dns-out"
    }
  ],
  "route": {
    "rules": [
      {
        "protocol": "dns",
        "outbound": "dns-out"
      },
      {
        "ip_is_private": true,
        "outbound": "direct"
      },
      {
        "geoip": "cn",
        "outbound": "direct"
      },
      {
        "geosite": "cn",
        "outbound": "direct"
      }
    ],
    "final": "proxy",
    "auto_detect_interface": true
  }
}
```

## Mihomo 配置示例

### 基础配置（Shadowsocks）

```yaml
# HTTP(S) 和 SOCKS5 代理端口
port: 7890
socks-port: 7891
mixed-port: 7892

# 允许局域网连接
allow-lan: true
bind-address: "*"

# 运行模式
mode: rule

# 日志级别
log-level: info

# 外部控制器
external-controller: 0.0.0.0:9090

# DNS 配置
dns:
  enable: true
  listen: 0.0.0.0:1053
  enhanced-mode: fake-ip
  fake-ip-range: 28.0.0.0/8
  fake-ip-filter:
    - "*.lan"
    - "localhost.ptlogin2.qq.com"
  nameserver:
    - 223.5.5.5
    - 1.12.12.12
  fallback:
    - 1.1.1.1
    - 8.8.8.8

# 代理节点
proxies:
  - name: "proxy"
    type: ss
    server: your-server.com
    port: 8388
    cipher: aes-256-gcm
    password: your-password

# 代理组
proxy-groups:
  - name: "PROXY"
    type: select
    proxies:
      - proxy
      - DIRECT

# 规则
rules:
  - GEOIP,CN,DIRECT
  - GEOSITE,CN,DIRECT
  - MATCH,PROXY
```

### 高级配置（多节点 + 自动选择）

```yaml
port: 7890
socks-port: 7891
mixed-port: 7892
allow-lan: true
bind-address: "*"
mode: rule
log-level: info
external-controller: 0.0.0.0:9090

dns:
  enable: true
  listen: 0.0.0.0:1053
  enhanced-mode: fake-ip
  fake-ip-range: 28.0.0.0/8
  fake-ip-filter:
    - "*.lan"
    - "localhost.ptlogin2.qq.com"
  nameserver:
    - 223.5.5.5
    - 1.12.12.12
  fallback:
    - 1.1.1.1
    - 8.8.8.8

proxies:
  - name: "hk-node1"
    type: ss
    server: hk1.example.com
    port: 8388
    cipher: aes-256-gcm
    password: password1

  - name: "hk-node2"
    type: ss
    server: hk2.example.com
    port: 8388
    cipher: aes-256-gcm
    password: password2

  - name: "us-node1"
    type: ss
    server: us1.example.com
    port: 8388
    cipher: aes-256-gcm
    password: password3

proxy-groups:
  - name: "PROXY"
    type: select
    proxies:
      - AUTO
      - hk-node1
      - hk-node2
      - us-node1
      - DIRECT

  - name: "AUTO"
    type: url-test
    proxies:
      - hk-node1
      - hk-node2
      - us-node1
    url: "https://www.gstatic.com/generate_204"
    interval: 300

  - name: "HK"
    type: select
    proxies:
      - hk-node1
      - hk-node2

  - name: "US"
    type: select
    proxies:
      - us-node1

rules:
  - GEOIP,CN,DIRECT
  - GEOSITE,CN,DIRECT
  - GEOSITE,GOOGLE,PROXY
  - GEOSITE,YOUTUBE,PROXY
  - GEOSITE,NETFLIX,US
  - GEOSITE,TELEGRAM,HK
  - MATCH,PROXY
```

## 配置说明

### MosDNS 配置要点

1. **缓存大小**: 根据设备数量调整，建议 5120-10240
2. **上游 DNS**: 国内使用 223.5.5.5，国外使用 1.1.1.1
3. **FakeIP 网段**: 必须与 SingBox/Mihomo 一致，建议 28.0.0.0/8
4. **客户端 IP**: 白名单文件路径必须正确

### SingBox 配置要点

1. **FakeIP 网段**: 必须与 MosDNS 一致
2. **TProxy 端口**: 7896（透明代理）
3. **Redirect 端口**: 7895（重定向）
4. **Mixed 端口**: 7890（HTTP/SOCKS5）

### Mihomo 配置要点

1. **FakeIP 网段**: 必须与 MosDNS 一致
2. **External Controller**: 9090（Web UI）
3. **DNS 监听**: 1053（避免与 MosDNS 冲突）
4. **代理端口**: 7890/7891/7892

## 下一步

- [完整使用流程](/zh/guide/complete-workflow) - 从安装到使用的完整流程
- [设备管理](/zh/guide/device-management) - 配置设备白名单
- [路由器集成](/zh/guide/router-integration) - 配置路由器
- [常见问题](/zh/faq/) - 故障排查
