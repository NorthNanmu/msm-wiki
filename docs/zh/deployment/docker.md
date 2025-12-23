# Docker 部署

适用于希望用容器管理 MSM 的场景。

## 安装 Docker

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo systemctl enable docker
sudo systemctl start docker
```

## Docker Compose 示例

> 以下为示例，请根据实际镜像与路径调整。

```yaml
version: '3.8'

services:
  msm:
    image: doumao/msm:latest
    container_name: msm
    restart: unless-stopped
    ports:
      - "7777:7777"
    volumes:
      - /opt/msm/config:/app/config
      - /opt/msm/data:/app/data
      - /opt/msm/logs:/app/logs
      - /opt/msm/bin:/app/bin
    environment:
      - JWT_SECRET=${JWT_SECRET}
      - SERVER_MODE=release
```

## 启动

```bash
export JWT_SECRET=$(openssl rand -hex 32)
docker-compose up -d
```

## 查看日志

```bash
docker-compose logs -f
```
