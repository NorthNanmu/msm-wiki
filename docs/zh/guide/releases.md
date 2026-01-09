# 📦 版本发布

<div style="text-align: center; margin: 2rem 0;">
  <p style="font-size: 1.1rem; color: var(--vp-c-text-2);">
    查看 MSM 的版本更新历史和发布说明
  </p>
</div>

---

## 🚀 最新版本


<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 2rem; border-radius: 12px; color: white; margin: 2rem 0;">
  <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
    <div>
      <h3 style="margin: 0; color: white; font-size: 2rem;">v0.7.5</h3>
      <p style="margin: 0.5rem 0 0 0; opacity: 0.9;">发布日期：2026-01-09 03:28</p>
    </div>
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
      <a href="https://github.com/msm9527/msm-wiki/releases/tag/0.7.5" target="_blank" style="background: white; color: #667eea; padding: 0.5rem 1.5rem; border-radius: 6px; text-decoration: none; font-weight: 600; display: inline-block;">
        📥 下载
      </a>
      <a href="https://github.com/msm9527/msm-wiki/releases/tag/0.7.5" target="_blank" style="background: rgba(255,255,255,0.2); color: white; padding: 0.5rem 1.5rem; border-radius: 6px; text-decoration: none; font-weight: 600; display: inline-block;">
        📝 查看详情
      </a>
    </div>
  </div>
</div>

### ✨ 新增（Added）
- 新增0.7.2-0.7.5发布说明
- 设计 DNS 分流动画 logo
- 全面美化登录界面
- 重新设计顶部导航栏用户菜单
- 全面美化 setup 页面视觉效果
- 优化 setup 页面整体布局和自适应
- 支持 hysteria2 分享链接
- 支持自定义节点(分享链接/YAML)
- 系统更新后自动升级合并配置（mosdns）
- 增加 --help-all 输出全量帮助
- 增加 mihomo 配置升级合并用例

### 🔧 变更（Changed）
- 统一移动端和桌面端动画速度
- 调慢移动端 logo 动画速度
- 优化 logo 动画，移除文字标签，增强视觉效果
- 归一化CPU占用为总核百分比
- 优化导航用户菜单对齐与滚动表现
- 简化用户菜单并恢复主题/语言切换按钮
- 增强登录页 Logo 动态效果
- 移除登录页未使用的组件引用
- 调整登录界面文案和布局
- 重新设计登录界面为左右分栏布局
- make timezone application non-blocking
- remove migrated timezone plan
- archive timezone sync plan
- apply system timezone to host
- 调整时区选择选项
- 优化下拉框样式和显示效果
- 修复 setup 界面开关垂直对齐问题
- 修复 MosDNS 区域右侧标签垂直对齐问题
- 优化自定义节点区域图标
- 优化自定义节点编辑器图标
- 美化自定义节点编辑器界面
- 将全局接口限流上调至每分钟300次
- 放行 mihomo delay 测速接口不计入全局限流
- 自定义节点支持列表增删改
- 扩展分享链接协议支持
- 升级后仅在运行时重启服务
- 未初始化时跳过配置升级

### 🐛 修复（Fixed）
- 修复移动端动画被全局规则覆盖的问题
- 修复用户菜单下拉框右侧空白问题
- 修复导航栏用户菜单相关问题
- 修复 setup 界面开关垂直对齐问题
- 修复 MosDNS 区域右侧标签垂直对齐问题
- 优化移动端 logo 动画性能
- 下载策略优先级按用户配置>内置>直连
- 下载停滞判定改为10s并默认启用代理配置
- sysctl 写入补换行校验

### ⚠️ 废弃（Deprecated）
- 归档CPU口径方案包
- 归档timezone sync plan
- Revert "fix(mihomo): delay测速遇429时本地重试并屏蔽限流错误"
- Revert "fix(mihomo): delay测速2秒内复用缓存避免触发429"
    
    ::: details 📋 构建信息
    - **源提交**: [`66341bc`](https://github.com/msm9527/msm/commit/66341bce8cefcc09813509fbce3db462628be62c)
    - **提交信息**: 0.7.5
    - **提交作者**: doumao
    - **提交时间**: 2026-01-09 11:28:31 +0800
    :::
    
    ---
    
## 📚 历史版本

<details>
<summary><strong>v0.7.4</strong> - 2026-01-05 21:16 <Badge type="info" text="稳定版" /></summary>

<div style="padding: 1rem; background: var(--vp-c-bg-soft); border-radius: 8px; margin-top: 1rem;">

**版本链接**: [GitHub Release](https://github.com/msm9527/msm-wiki/releases/tag/0.7.4)

**✨ 新增功能**
- 🔧 **Mihomo 规则管理增强**
  - 规则页按配置文件排序、快速定位编辑
  - 规则/Provider 可选重启生效
  - 默认 interval 调整

- ⚙️ **Setup 流程优化**
  - 保存流程带下载进度提示
  - 支持运行期切换代理核心并自动下载缺失核心

- 📋 **项目管理**
  - Issue 模板新增
  - VPS 预设配置加入 Mihomo

- 📥 **下载优化**
  - CLI/下载链路默认优先内置加速源
  - 用户界面增加进度提示

**🐛 问题修复**
- ✅ Mihomo 规则编辑器初始化报错、弹窗越界、空 `{}` YAML 破坏等
- ✅ 前端启停代理、日志级别解析、Toast 长文本、导航高亮等 UI/交互问题
- ✅ 多处版本号、路径、配置读取错位（尤其 Setup 与缓存）

**⚠️ 注意事项**
- Tauri 桌面链路已基本稳定，但仍建议在 macOS 上验证 launchctl 工作目录及权限场景

</div>
</details>

<details>
<summary><strong>v0.7.3</strong> - 2026-01-01 13:29</summary>

<div style="padding: 1rem; background: var(--vp-c-bg-soft); border-radius: 8px; margin-top: 1rem;">

**版本链接**: [GitHub Release](https://github.com/msm9527/msm-wiki/releases/tag/0.7.3)

**✨ 新增功能**
- 🔄 **Connections 页面重做**
  - 弹窗模式：保持展开状态、更紧凑布局
  - 测速/展开可并存

- 🔗 **代理链展示优化**
  - 切换操作不再折叠，补充测速
  - 规则页节点卡新增图标、双列瀑布流布局

- ⚙️ **Setup 优化**
  - 初始化与版本号管理多处微调

**🐛 问题修复**
- ✅ IPv6/DNS 开关保存与读取旧配置问题
- ✅ Mihomo 页面若干弹窗居中、溢出与 YAML 处理错误
- ✅ 白屏/布局跳动等细碎 UI 问题

**⚠️ 注意事项**
- 桌面端与 SSE 改造已初步落地，仍属快速演进期，建议升级时验证 SSE 长连接稳定性

</div>
</details>

<details>
<summary><strong>v0.7.2</strong> - 2025-12-31 20:52</summary>

<div style="padding: 1rem; background: var(--vp-c-bg-soft); border-radius: 8px; margin-top: 1rem;">

**版本链接**: [GitHub Release](https://github.com/msm9527/msm-wiki/releases/tag/0.7.2)

**✨ 核心内容**
- 🖥️ **桌面端服务管理**
  - 桌面端服务管理与托盘初版
  - 自动安装/提权、首次运行门禁、状态面板

- 🎨 **UI 优化**
  - MosDNS/Mihomo UI 大幅优化
  - SSE 相对路径、CORS、静态资源与代理概览链路梳理

- 🐛 **问题修复**
  - 大量 macOS DMG、权限、服务检测问题修复
  - Connections 刷新/测速/展开等问题修复

</div>
</details>

---

## 🔄 升级建议

::: warning 升级前准备
1. 升级前建议进行备份，避免漏过资源/配置迁移
2. 桌面端（Tauri）用户：升级后确认 launchctl/托盘服务状态与本地 API 可访问性
3. Mihomo 规则/Provider 编辑器自 0.7.3 快速演进，升级后建议备份并复核生成的 YAML
:::

### 📖 如何升级

详细的升级步骤请参考 [更新升级指南](/zh/guide/update)。

### 🔗 版本兼容性

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin: 1rem 0;">
  <div style="padding: 1rem; background: var(--vp-c-bg-soft); border-radius: 8px; border-left: 4px solid #10b981;">
    <div style="font-weight: 600; margin-bottom: 0.5rem;">✅ 直接升级</div>
    <div style="font-size: 0.9rem; color: var(--vp-c-text-2);">0.7.x 系列版本之间可以直接升级</div>
  </div>
  <div style="padding: 1rem; background: var(--vp-c-bg-soft); border-radius: 8px; border-left: 4px solid #3b82f6;">
    <div style="font-weight: 600; margin-bottom: 0.5rem;">🔄 自动迁移</div>
    <div style="font-size: 0.9rem; color: var(--vp-c-text-2);">配置文件会自动迁移和合并</div>
  </div>
  <div style="padding: 1rem; background: var(--vp-c-bg-soft); border-radius: 8px; border-left: 4px solid #f59e0b;">
    <div style="font-weight: 600; margin-bottom: 0.5rem;">💾 定期备份</div>
    <div style="font-size: 0.9rem; color: var(--vp-c-text-2);">建议定期备份配置文件</div>
  </div>
</div>

---

## 💬 获取帮助

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 2rem 0;">
  <a href="/zh/faq/" style="padding: 1.5rem; background: var(--vp-c-bg-soft); border-radius: 8px; text-decoration: none; color: inherit; transition: transform 0.2s; display: block;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
    <div style="font-size: 2rem; margin-bottom: 0.5rem;">❓</div>
    <div style="font-weight: 600; margin-bottom: 0.5rem;">常见问题</div>
    <div style="font-size: 0.9rem; color: var(--vp-c-text-2);">查看常见问题解答</div>
  </a>
  <a href="/zh/faq/troubleshooting" style="padding: 1.5rem; background: var(--vp-c-bg-soft); border-radius: 8px; text-decoration: none; color: inherit; transition: transform 0.2s; display: block;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
    <div style="font-size: 2rem; margin-bottom: 0.5rem;">🔧</div>
    <div style="font-weight: 600; margin-bottom: 0.5rem;">故障排查</div>
    <div style="font-size: 0.9rem; color: var(--vp-c-text-2);">解决常见技术问题</div>
  </a>
  <a href="https://github.com/msm9527/msm-wiki/issues" target="_blank" style="padding: 1.5rem; background: var(--vp-c-bg-soft); border-radius: 8px; text-decoration: none; color: inherit; transition: transform 0.2s; display: block;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
    <div style="font-size: 2rem; margin-bottom: 0.5rem;">🐛</div>
    <div style="font-weight: 600; margin-bottom: 0.5rem;">提交问题</div>
    <div style="font-size: 0.9rem; color: var(--vp-c-text-2);">在 GitHub 上报告问题</div>
  </a>
</div>
