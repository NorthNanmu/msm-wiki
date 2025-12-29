# 问题修复说明

## 问题描述

访问 https://msm9527.github.io/msm-wiki/zh/ 时，页面可以访问但没有任何 UI 和 CSS 样式。

## 问题原因

VitePress 的 `base` 配置不正确。

- **错误配置**: `base: '/'`
- **正确配置**: `base: '/msm-wiki/'`

GitHub Pages 将项目部署在 `https://msm9527.github.io/msm-wiki/` 路径下，所以所有静态资源（CSS、JS、图片）的路径都需要加上 `/msm-wiki/` 前缀。

## 修复内容

修改了 `docs/.vitepress/config.mts` 文件：

```typescript
export default defineConfig({
  title: "MSM Wiki",
  description: "MSM Manager - 统一管理平台文档",
  base: '/msm-wiki/',  // 修改这里
  ignoreDeadLinks: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/msm-wiki/logo/favicon.svg' }],  // 修改这里
    // ...
  ],
  // ...
})
```

## 修复步骤

1. ✅ 修改 `base` 配置
2. ✅ 修改 favicon 路径
3. ✅ 测试本地构建
4. ✅ 提交并推送到 GitHub

## 验证

等待 GitHub Actions 部署完成（约 2-3 分钟），然后访问：

- https://msm9527.github.io/msm-wiki/zh/
- https://msm9527.github.io/msm-wiki/en/

现在应该可以看到完整的 UI 和样式了。

## 查看部署进度

1. 访问 https://github.com/msm9527/msm-wiki/actions
2. 查看最新的 "Deploy Wiki to GitHub Pages" 工作流
3. 等待绿色勾号

## 相关提交

```
941e0c7 修复 CSS 和 UI 不显示的问题
```

## 技术说明

### 为什么需要 base 配置？

当 VitePress 站点部署在子路径下时（如 `/msm-wiki/`），所有资源的引用路径都需要加上这个前缀：

- CSS: `/msm-wiki/assets/style.css`
- JS: `/msm-wiki/assets/app.js`
- 图片: `/msm-wiki/logo/logo.svg`

如果 `base` 配置为 `/`，VitePress 会生成：
- CSS: `/assets/style.css` ❌ (404)
- JS: `/assets/app.js` ❌ (404)

如果 `base` 配置为 `/msm-wiki/`，VitePress 会生成：
- CSS: `/msm-wiki/assets/style.css` ✅
- JS: `/msm-wiki/assets/app.js` ✅

### 本地开发

本地开发时，访问 `http://localhost:5173/msm-wiki/` 即可看到正确的效果。

### 自定义域名

如果将来使用自定义域名（如 `wiki.example.com`），则需要将 `base` 改回 `/`。

## 总结

这是一个常见的静态站点部署问题。关键是要确保 `base` 配置与实际部署路径一致。

现在问题已经修复，wiki 应该可以正常显示了！🎉
