# 🧪 Beta 版发布

用于查看 MSM `dev` 分支的每日构建发布记录。Beta 版可能包含未完全验证的功能，请勿直接用于生产环境。

---

## 🧪 最新 Beta 版本


> 当前 Beta 版本：`beta-0.9.6`  
> 发布时间：2026-02-08 21:48  
> - 发布页：<https://github.com/msm9527/msm-wiki/releases/tag/beta-0.9.6>  
> - 下载方式：同一发布页内提供各平台二进制与安装包

### 🐛 修复（Fixed）
- 修复 nftables 区间元素重复提交导致文件存在错误

::: details 📋 构建信息
- **发布通道**: beta（Beta 版）
- **源提交**: [`10e4af8`](https://github.com/msm9527/msm/commit/10e4af84cd075fa86a62258565e7200c181f27d1)
- **提交信息**: chore: sync version to 0.9.6
- **提交作者**: github-actions[bot]
- **提交时间**: 2026-02-08 13:48:17 +0000
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
