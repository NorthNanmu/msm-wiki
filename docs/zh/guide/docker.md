# Docker 安装

MSM 提供官方 Docker 镜像，适合容器化部署。

## 前置条件

- 已安装 Docker（建议参考官方安装文档）
- 具备端口映射或 `host` 网络模式能力

## 方式一：Docker Run

```bash
docker run -d \
  --name msm \
  -p 7777:7777 \
  -p 53:53/udp \
  -p 1053:1053/udp \
  -p 7890:7890 \
  -p 7891:7891 \
  -p 7892:7892 \
  -e JWT_SECRET="your-secret-key-at-least-32-chars-long" \
  -e MSM_PORT=7777 \
  -e TZ=Asia/Shanghai \
  -v /opt/msm:/opt/msm \
  msmbox/msm:latest
```

## 方式二：Docker Compose

```yaml
services:
  msm:
    image: msmbox/msm:latest
    container_name: msm
    restart: unless-stopped
    ports:
      - "7777:7777"
      - "53:53/udp"
      - "1053:1053/udp"
      - "7890:7890"
      - "7891:7891"
      - "7892:7892"
    environment:
      - JWT_SECRET=your-secret-key-at-least-32-chars-long
      - MSM_PORT=7777
      - TZ=Asia/Shanghai
    volumes:
      - /opt/msm:/opt/msm
```

## 网络模式建议

- **桥接模式**：适合大多数场景，需映射端口
- **host 模式**：DNS/透明代理需求高时可用

```bash
docker run -d --name msm --network host \
  -e JWT_SECRET="your-secret-key" \
  -v /opt/msm:/opt/msm \
  msmbox/msm:latest
```

## 日志与更新

```bash
# 查看日志
docker logs -f msm

# 更新镜像
docker pull msmbox/msm:latest
```

## 下一步

- [路由器集成](/zh/guide/router-integration)
- [首次使用](/zh/guide/first-use)
