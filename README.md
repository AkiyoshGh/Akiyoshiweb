# Akiyoshi Web

这是一个基于React + Vite构建的个人设计作品集网站。

## 项目结构

```
src/
  ├── components/     # 组件目录
  │   ├── layout/     # 布局相关组件
  │   └── blog/       # 博客相关组件
  ├── pages/          # 页面组件
  │   ├── Home.jsx    # 首页
  │   ├── About.jsx   # 关于页面
  │   ├── Blog.jsx    # 博客页面
  │   └── Portfolio.jsx# 作品集页面
  └── styles/         # 样式文件
      └── GlobalStyles.js
```

## 内容修改指南

### 修改首页内容

在 `src/pages/Home.jsx` 中：
- 修改英雄区域的标题和副标题
- 更新精选作品展示
- 编辑最新博客文章列表

### 更新作品集

在 `src/pages/Portfolio.jsx` 中：
- 修改 `projects` 数组来更新作品列表
- 每个作品项包含：标题、类别、描述和图片
- 图片文件请放在 `public/portfolio/` 目录下

### 编辑关于页面

在 `src/pages/About.jsx` 中：
- 更新个人简介和头像
- 修改服务内容描述

### 替换图片资源

- 头像图片：替换 `public/images/profile.jpg`
- 作品图片：放置在 `public/portfolio/` 目录下
- 微信二维码：替换 `public/images/wechat-qr.svg`

### 修改导航栏文字

在 `src/components/layout/Header.jsx` 中：
- 修改导航菜单项的文字
- 更新Logo文字（如果有）

### 修改页面标题和描述

在各个页面组件中：
- `src/pages/Home.jsx`：修改首页标题、副标题和各区块的描述文字
- `src/pages/About.jsx`：更新关于页面的标题和介绍文字
- `src/pages/Portfolio.jsx`：修改作品集页面的标题和项目描述
- `src/pages/Blog.jsx`：更新博客页面的标题和文章描述

### 修改页脚信息

在 `src/components/layout/Footer.jsx` 中：
- 更新联系方式
- 修改社交媒体链接
- 编辑版权信息

## 开发说明

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```
