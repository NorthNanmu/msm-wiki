# 技术栈

本页基于 `/Users/doumao/code/github/msm` 的依赖清单整理。

## 后端

- **语言**: Go 1.25 (toolchain)
- **Web 框架**: Gin
- **配置管理**: Viper
- **命令行**: Cobra
- **日志**: Zap
- **鉴权**: JWT (jwt/v5)
- **数据库**: SQLite (GORM + modernc.org/sqlite)
- **实时通信**: WebSocket
- **系统能力**: netlink / nftables / gopsutil

## 前端

- **框架**: React 19
- **构建**: Vite
- **路由**: React Router v7
- **状态管理**: Zustand
- **样式**: TailwindCSS 4
- **编辑器**: CodeMirror
- **图表**: Recharts
- **国际化**: i18next

## 测试

- **后端**: Go test + Testify
- **前端**: Vitest + Testing Library

## 运行环境

- **系统**: Linux / macOS
- **服务管理**: systemd（推荐）/ supervisord（可选）
