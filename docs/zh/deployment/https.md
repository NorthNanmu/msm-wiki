# HTTPS 配置

推荐通过 Nginx 或 Caddy 终结 TLS。

## 使用 Certbot（Nginx）

```bash
sudo apt update
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d msm.example.com
```

## 自动续期

```bash
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer
```

## 注意事项

- 证书签发前确保域名解析正确
- 开放 80/443 端口
- WebSocket 需要 `Upgrade` 头转发
