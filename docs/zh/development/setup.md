# 开发环境搭建

本页基于 `/Users/doumao/code/github/msm` 的实际结构整理。

## 依赖准备

- Go 1.25+（toolchain）
- Node.js 20+ / npm
- Git

## 获取代码

```bash
git clone https://github.com/doumao/msm.git
cd msm
```

## 后端启动

```bash
cd backend
cp configs/app.yaml.example configs/app.yaml
# 按需修改配置

go test ./...
# 启动后端
./bin/msm-server
```

## 前端启动

```bash
cd frontend
npm install
npm run dev
```

## 常用命令

```bash
# 后端测试
cd backend
go test ./...

# 前端测试
cd frontend
npm test
```
