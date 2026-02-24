# 爱快（iKuai）配置指南

## 示例环境

- 爱快网关：`192.168.1.1`
- MSM 主机IPv4：`192.168.1.2`
- MSM 主机IPv6：`fe80::a1b2:c3d4:e5f6:g7h8`
## 步骤一：下载并修改静态路由规则

- [下载爱快 3.X 规则](https://raw.githubusercontent.com/msm9527/msm-wiki/main/docs/zh/guide/ikuai_static_route_3.x.csv)
- [下载爱快 4.X (Beta版) 规则](https://raw.githubusercontent.com/msm9527/msm-wiki/main/docs/zh/guide/ikuai_static_route_4.x_beta.csv)
- 使用Excel、WPS亦或是Visual Studio打开对应爱快版本的static_route.csv文件
- 查找替换，搜索并替换**`10.0.0.2`**为**`192.168.1.2`** （填写实际的MSM IPv4地址）
- 查找替换，搜索并替换**`fe80::be24:11ff:feec:684d`**为**`fe80::a1b2:c3d4:e5f6:g7h8`** （填写实际的MSM IPv6地址）
- 保存并关闭文件

## 步骤二：导入静态路由（FakeIP）

1.爱快 3.X 静态路由配置导入
在 **网络设置>静态路由>静态路由** 页面导入刚修改完之后的静态路由：
![爱快 3.X 静态路由配置导入](https://github.com/user-attachments/assets/54d01507-f2f8-4182-8dcc-736b4664c51a)

2.爱快 4.X 静态路由配置导入
在 **网络配置>静态路由>静态路由** 页面导入刚修改完之后的静态路由：
![爱快 4.X 静态路由配置导入](https://github.com/user-attachments/assets/8fa6470b-a31d-446b-9413-999079fe939c)

## 步骤三：配置 DHCP DNS

在 **DHCP 服务器地址池** 中设置 DNS：

- **DNS 服务器**：`192.168.1.2`
- **备用 DNS**：可选填写运营商 DNS
![配置 DHCP DNS](https://github.com/user-attachments/assets/68fb5a28-8059-47d0-86f5-71c0df55e20b)

## 验证

客户端执行：

```bash
nslookup google.com
```

应返回 `28.0.0.0/8` 段地址。

## 下一步

- [设备管理](/zh/guide/device-management)
- [MosDNS 管理](/zh/guide/mosdns)
