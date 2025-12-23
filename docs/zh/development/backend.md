# 后端开发

## 技术栈

- Go 1.25
- Gin（HTTP API）
- GORM + SQLite
- Zap（日志）
- JWT（鉴权）

## 本地开发

```bash
cd backend
cp configs/app.yaml.example configs/app.yaml
# 修改配置后启动
./bin/msm-server
```

## 测试

```bash
go test ./...
```

## 运行方式

- CLI 模式：`msm` 命令
- 服务模式：systemd / supervisord
