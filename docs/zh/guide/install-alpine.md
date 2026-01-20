# Alpine 安装

Alpine 使用 musl 与 OpenRC，安装流程与常规 Linux 略有不同。

## 依赖准备

确保已安装 `curl` 或 `wget`：

```bash
apk add --no-cache curl
```

## 一键安装

```bash
curl -fsSL https://raw.githubusercontent.com/msm9527/msm-wiki/main/install.sh | sudo bash
```

脚本会自动选择 **musl** 版本，但不会创建 systemd 服务。

## 启动方式

Alpine 默认使用 OpenRC，请手动启动：

```bash
msm -d
```

## 验证安装

```bash
msm status
msm logs
```

浏览器访问：`http://<MSM-IP>:7777`

## 注意事项

- 如需开机自启，请使用 OpenRC 自行创建服务脚本
- 端口开放请按实际防火墙策略配置

## 下一步

- [路由器集成](/zh/guide/router-integration)
- [首次使用](/zh/guide/first-use)
