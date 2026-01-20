# 安装总览

本页帮助你快速选择合适的安装方式，并给出安装后的首要检查项。

## 选择安装方式

| 场景 | 推荐方式 | 说明 |
| --- | --- | --- |
| Linux 服务器/虚拟机 | [Linux 安装](/zh/guide/install-linux) | 一键脚本 + systemd 服务 |
| macOS 主机 | [macOS 安装](/zh/guide/install-macos) | CLI 安装或桌面版 |
| Alpine/OpenWrt 类极简系统 | [Alpine 安装](/zh/guide/install-alpine) | musl + 手动服务管理 |
| Docker 环境 | [Docker 安装](/zh/guide/docker) | 容器化部署 |

## 基本要求（通用）

- **权限**：Linux 需要 root 或 sudo，macOS 需要管理员权限。
- **网络**：能够访问 GitHub Releases 或镜像源。
- **端口**：默认使用 `7777`（Web），`53/1053`（DNS），`7890/7891/7892`（代理）。

## 安装完成后必做

1. 打开管理界面
   - 默认：`http://your-server-ip:7777`
   - 示例：`http://192.168.20.2/`
2. 完成初始化向导（账号、服务选择、组件下载）
3. 进入 [路由器集成](/zh/guide/router-integration)，按你的路由器系统完成 DNS 与静态路由配置。

## 常用命令（Linux/macOS CLI 安装）

```bash
# 状态
msm status

# 日志
msm logs

# 重启
msm restart
```

## 下一步

- [首次使用](/zh/guide/first-use)
- [路由器集成总览](/zh/guide/router-integration)
- [使用指南总览](/zh/guide/basic-config)
