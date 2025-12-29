# 快速开始

本指南将帮助你快速部署和使用 MSM。

::: tip 推荐方式
推荐使用[一键安装脚本](/zh/guide/install)，自动完成所有配置。本页面介绍手动安装方式。
:::

## 系统要求

### 支持的平台

- ✅ **Linux** (Ubuntu 20.04+ / Debian 11+ / CentOS 8+ / Alpine 3.15+)
- ✅ **macOS** (10.15+)

### 支持的架构

- ✅ x86_64 (amd64)
- ✅ ARM64 (aarch64)

### 支持的 libc

- ✅ **glibc** (标准 Linux 发行版)
- ✅ **musl** (Alpine Linux)

### 最低配置

- **CPU**: 1 核心
- **内存**: 512MB
- **磁盘**: 2GB 可用空间
- **权限**: root 或 sudo 权限（Linux）/ 管理员权限（macOS）

### 推荐配置

- **CPU**: 2 核心以上
- **内存**: 2GB 以上
- **磁盘**: 10GB 以上可用空间
- **网络**: 公网 IP（用于远程访问）

## 手动安装

### 1. 下载二进制文件

访问 [Releases 页面](https://github.com/msm9527/msm-wiki/releases/latest) 下载对应平台和架构的压缩包。

**Linux amd64 (glibc)**:
```bash
wget https://github.com/msm9527/msm-wiki/releases/latest/download/msm-0.7.1-linux-amd64.tar.gz
tar -xzf msm-0.7.1-linux-amd64.tar.gz
sudo mv msm /usr/local/bin/msm
sudo chmod +x /usr/local/bin/msm
```

**Linux amd64 (musl - Alpine)**:
```bash
wget https://github.com/msm9527/msm-wiki/releases/latest/download/msm-0.7.1-linux-amd64-musl.tar.gz
tar -xzf msm-0.7.1-linux-amd64-musl.tar.gz
sudo mv msm /usr/local/bin/msm
sudo chmod +x /usr/local/bin/msm
```

**Linux arm64 (glibc)**:
```bash
wget https://github.com/msm9527/msm-wiki/releases/latest/download/msm-0.7.1-linux-arm64.tar.gz
tar -xzf msm-0.7.1-linux-arm64.tar.gz
sudo mv msm /usr/local/bin/msm
sudo chmod +x /usr/local/bin/msm
```

**Linux arm64 (musl - Alpine)**:
```bash
wget https://github.com/msm9527/msm-wiki/releases/latest/download/msm-0.7.1-linux-arm64-musl.tar.gz
tar -xzf msm-0.7.1-linux-arm64-musl.tar.gz
sudo mv msm /usr/local/bin/msm
sudo chmod +x /usr/local/bin/msm
```

**macOS amd64 (Intel)**:
```bash
wget https://github.com/msm9527/msm-wiki/releases/latest/download/msm-0.7.1-darwin-amd64.tar.gz
tar -xzf msm-0.7.1-darwin-amd64.tar.gz
sudo mv msm /usr/local/bin/msm
sudo chmod +x /usr/local/bin/msm
```

**macOS arm64 (Apple Silicon)**:
```bash
wget https://github.com/msm9527/msm-wiki/releases/latest/download/msm-0.7.1-darwin-arm64.tar.gz
tar -xzf msm-0.7.1-darwin-arm64.tar.gz
sudo mv msm /usr/local/bin/msm
sudo chmod +x /usr/local/bin/msm
```

::: tip 提示
请将版本号 `0.7.1` 替换为最新版本号。
:::

### 2. 启动 MSM

**方式一：直接运行**

```bash
# 前台运行（默认端口 7777）
msm

# 后台运行
msm -d

# 指定端口
msm -p 8080

# 指定配置目录
msm -c /opt/msm
```

**方式二：安装为系统服务（推荐）**

```bash
# 安装系统服务并设置开机自启
sudo msm service install

# 启动服务
sudo systemctl start msm

# 查看状态
sudo systemctl status msm
```

## 首次使用

### 1. 访问 Web 界面

打开浏览器访问：

```
http://your-server-ip:7777
```

### 2. 创建管理员账号

::: tip 首次访问
首次访问时，系统会引导你创建管理员账号。请设置强密码并妥善保管。
:::

### 3. 开始使用

登录后即可开始管理服务。

## MSM 命令详解

### 默认行为

```bash
# 不加任何参数时，自动执行 serve 命令启动 HTTP 服务
msm
```

### 基本命令

```bash
# 启动 HTTP 服务（前台运行）
msm serve

# 指定端口启动
msm -p 8080

# 指定配置目录
msm -c /opt/msm

# 后台运行
msm -d

# 查看版本
msm -v

# 查看帮助
msm -h
```

### 服务管理命令

```bash
# 安装系统服务（开机自启）
sudo msm service install

# 卸载系统服务
sudo msm service uninstall

# 停止 MSM 服务
sudo msm stop

# 重启 MSM 服务
sudo msm restart

# 查看服务状态
sudo msm status
```

### 系统管理命令

```bash
# 初始化配置目录
msm init

# 重置管理员密码
sudo msm reset-password

# 系统诊断
sudo msm doctor

# 查看服务日志
sudo msm logs
```

### 使用 systemd 管理（推荐）

安装系统服务后，推荐使用 systemd 命令管理：

```bash
# 启动服务
sudo systemctl start msm

# 停止服务
sudo systemctl stop msm

# 重启服务
sudo systemctl restart msm

# 查看状态
sudo systemctl status msm

# 查看日志
sudo journalctl -u msm -f

# 查看最近 50 条日志
sudo journalctl -u msm -n 50

# 禁用开机自启
sudo systemctl disable msm

# 启用开机自启
sudo systemctl enable msm
```

## 配置说明

### 默认配置

- **配置目录**: `/root/.msm`
- **HTTP 端口**: `7777`
- **数据目录**: `/root/.msm/data`
- **日志目录**: `/root/.msm/logs`

### 自定义配置

```bash
# 使用自定义配置目录
msm -c /opt/msm

# 使用自定义端口
msm -p 8080

# 组合使用
msm -c /opt/msm -p 8080 -d
```

## 常见问题

### 端口被占用

如果 7777 端口被占用，可以修改端口：

```bash
msm -p 8888
```

### 无法访问 Web 界面

1. 检查服务状态：
   ```bash
   sudo msm status
   # 或
   sudo systemctl status msm
   ```

2. 检查端口监听：
   ```bash
   sudo netstat -tlnp | grep 7777
   # 或
   sudo ss -tlnp | grep 7777
   ```

### 服务无法启动

查看详细日志：

```bash
# 使用 MSM 命令
sudo msm logs

# 使用 systemd
sudo journalctl -u msm -n 50 --no-pager

# 使用诊断命令
sudo msm doctor
```

## 下一步

- [详细安装教程](/zh/guide/install) - 查看完整安装选项
- [基础配置](/zh/guide/basic-config) - 配置系统参数
- [用户管理](/zh/guide/user-management) - 管理用户和权限
- [服务管理](/zh/guide/mosdns) - 开始管理服务
