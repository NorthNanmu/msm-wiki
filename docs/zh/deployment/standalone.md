# 单机部署

单机部署适用于快速试用或小规模环境，直接运行 MSM 二进制即可。

## 前置条件

- 已完成安装（见“安装部署”）
- 具备 root 或 sudo 权限（Linux）

## 快速启动

```bash
# 前台运行
msm

# 后台运行
msm -d

# 指定端口
msm -p 8080

# 指定配置目录
msm -c /opt/msm
```

## 目录结构建议

```
/opt/msm/
├── bin/      # 核心组件二进制
├── config/   # MosDNS / Sing-box / Mihomo 配置
├── data/     # 数据库
└── logs/     # 日志
```

## 生产环境建议

- 使用 systemd 管理服务
- 启用反向代理与 HTTPS
- 定期备份配置与数据
