# 爱快（iKuai）配置指南

## 示例环境

- 爱快网关：`192.168.1.1`
- MSM 主机：`192.168.1.2`

## 步骤一：下载并修改静态路由规则

- <a href="/zh/guide/static_route.csv" download>点击下载 static_route.csv</a>
- 用WPS打开下载的static_route.csv文件
- 查找替换，搜索**10.0.0.2**并替换为自己msm的ipv4地址
- 查找替换，搜索**fe80::be24:11ff:feec:684d**并替换为自己msm的ipv6地址
- 保存并关闭文件

## 步骤二：导入静态路由（FakeIP）

在 **网络设置>静态路由>静态路由** 页面导入刚修改完之后的静态路由：
<img width="2559" height="1231" alt="image" src="https://github.com/user-attachments/assets/54d01507-f2f8-4182-8dcc-736b4664c51a" />


## 步骤三：配置 DHCP DNS

在 **DHCP 服务器地址池** 中设置 DNS：

- **DNS 服务器**：`192.168.1.2`
- **备用 DNS**：可选填写运营商 DNS
<img width="1863" height="1266" alt="image" src="https://github.com/user-attachments/assets/68fb5a28-8059-47d0-86f5-71c0df55e20b" />

## 验证

客户端执行：

```bash
nslookup google.com
```

应返回 `28.0.0.0/8` 段地址。

## 下一步

- [设备管理](/zh/guide/device-management)
- [MosDNS 管理](/zh/guide/mosdns)
