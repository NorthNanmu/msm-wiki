# 🧪 Beta 版发布

用于查看 MSM `dev` 分支的每日构建发布记录。Beta 版可能包含未完全验证的功能，请勿直接用于生产环境。

---

## 🧪 最新 Beta 版本


> 当前 Beta 版本：`beta-0.9.7`  
> 发布时间：2026-02-08 23:30  
> - 发布页：<https://github.com/msm9527/msm-wiki/releases/tag/beta-0.9.7>  
> - 下载方式：同一发布页内提供各平台二进制与安装包

### 🐛 修复（Fixed）
- 修复容器重启后 PID 误判导致启动循环

### 🔧 变更（Changed）
- 优化网络规则失败处理与 nftables 兼容降级

::: details 📋 构建信息
- **发布通道**: beta（Beta 版）
- **源提交**: [`04921c2`](https://github.com/msm9527/msm/commit/04921c23ddd08ebceada035b4cccc55b580f3c3c)
- **提交信息**: chore: sync version to 0.9.7
- **提交作者**: github-actions[bot]
- **提交时间**: 2026-02-08 15:30:51 +0000
:::

---

## 📚 历史 Beta 版本

> 下面仅展示最新一次 beta 每日构建信息。完整历史请以 GitHub Releases 中 `beta-*` 标签为准。

---

## ⚠️ 使用说明

1. Beta 版标签格式：`beta-x.x.x`
2. Docker 标签格式：`msmbox/msm:beta-x.x.x` 与 `msmbox/msm:beta-latest`
3. 若需稳定环境，请使用[稳定版发布](/zh/guide/releases)
4. Beta 一键安装：`curl -fsSL https://raw.githubusercontent.com/msm9527/msm-wiki/main/install_beta.sh | sudo bash`
5. Beta 国内镜像安装：`curl -fsSL https://raw.githubusercontent.com/msm9527/msm-wiki/main/install_beta_cn.sh | sudo bash`
