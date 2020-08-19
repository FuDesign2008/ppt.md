# ir-web 上线事故回顾

=====

## ir-web 是什么

https://ir.youdao.com

Note: ir-web 是一个前端工程，对应 https://ir.youdao.com 的前端部分，主要面向海外投资者。

=====

## 上线出现的问题

---

### 上线前的状况

1. 已经上线 http://ir-test.youdao.com
1. 切换 `ir.youdao.com` 域名

---

### 切换域名时出现的问题

1. 海外打开 https://ir.youdao.com 很慢
1. 根据运维同事的建议，应该把 css/js 等静态资源部署到 CDN 上

---

### 临时解决

手动修改 build 之后的代码

---

### 系统解决

[merge_requests/186](https://gitlab.corp.youdao.com/zhiyun/IR/ir-web/merge_requests/186/diffs)

=====

## 教训

---

1. 头一次开发面向海外的项目，经验不足

---

2. 多与运维同学沟通，最好面对面聊一下

Note: 运维同学负责全公司前端/后端服务的上线，经验丰富, 更专业

---

3. webpack 知识储备不足

Note: 不能快速修改 webpack 配置, 系统学习一下 webpack

=====

## END
