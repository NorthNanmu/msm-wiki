# Nginx 配置

使用 Nginx 反向代理可提供统一域名与 HTTPS 入口。

## 示例配置

```nginx
server {
    listen 80;
    server_name msm.example.com;

    location / {
        proxy_pass http://127.0.0.1:7777;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # WebSocket
    location /ws {
        proxy_pass http://127.0.0.1:7777;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
    }
}
```

## 启用配置

```bash
sudo nginx -t
sudo systemctl reload nginx
```
