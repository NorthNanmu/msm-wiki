# Systemd 配置

建议在生产环境使用 systemd 管理 MSM 服务。

## 一键安装服务

```bash
sudo msm service install
```

## 常用命令

```bash
sudo systemctl start msm
sudo systemctl stop msm
sudo systemctl restart msm
sudo systemctl status msm
```

## 查看日志

```bash
sudo journalctl -u msm -f
```

## 卸载服务

```bash
sudo msm service uninstall
```
