# Sing-box 管理

Sing-box 是 MSM 支持的代理内核之一，与 Mihomo 二选一。

## 页面入口

- **概览**：运行状态、版本、核心配置概览
- **配置管理**：编辑 Sing-box 配置并校验
- **日志查看**：实时日志与错误排查

## 推荐流程

1. 在初始化向导选择 **Sing-box** 作为代理核心
2. 进入 **Sing-box > 配置管理** 更新节点与规则
3. 保存后按提示重启服务
4. 通过 **日志查看** 验证是否生效

## 注意事项

- FakeIP 网段需与 MosDNS 配置保持一致
- 修改配置前建议先备份原配置

## 下一步

- [MosDNS 管理](/zh/guide/mosdns)
- [配置编辑](/zh/guide/config-editor)
- [日志查看](/zh/guide/logs)
