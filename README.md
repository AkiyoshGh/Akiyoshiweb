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
- 每个作品项包含：
  - `title`: 作品标题，简洁明了
  - `category`: 作品类别，从以下选项中选择：
    - 品牌视觉识别系统
    - 应用程序和网站界面
    - 动画和视频
    - 宣传册和书籍
    - 企业形象
    - 包装设计
    - 插画设计
  - `date`: 项目完成时间，格式为"YYYY-MM"
  - `description`: 项目描述，建议包含：
    - 项目背景和目标
    - 设计理念和创意说明
    - 主要设计元素和特点
    - 解决方案和成果
  - `client`: 客户名称（如适用）
  - `role`: 担任角色（如：设计师、艺术指导等）
  - `tools`: 使用的设计工具（如：Photoshop, Illustrator等）
  - `images`: 作品图片路径数组

- 图片文件请放在 `public/portfolio/` 目录下，按以下分类存放：
  - Vi/ - 品牌视觉识别系统相关作品
  - App_Web/ - 应用程序和网站界面设计
  - Animation_Video/ - 动画和视频作品
  - Brochure_Book/ - 宣传册和书籍设计
  - Brand_Image/ - 企业形象设计
  - Packaging/ - 包装设计作品
  - Illustration/ - 插画作品

#### 项目描述编写建议
- 使用专业的设计术语
- 突出设计重点和创新点
- 描述文字简洁清晰，避免过于冗长
- 保持描述风格的一致性
- 适当使用项目数据和成果展示
- 根据项目类型调整描述侧重点

#### 缩略图文字修改说明
- 标题（title）：
  - 保持简洁明了，突出作品核心特点
  - 避免使用过于抽象或模糊的描述
  - 如有系列作品，在标题中标明系列关系
  - 建议字数控制在15字以内

- 类别（category）：
  - 严格从预设类别中选择
  - 确保分类准确，避免归类错误
  - 对于跨领域作品，选择最主要的类别
  - 保持类别使用的一致性

#### 作品集图片规范
- 图片命名：使用 project-[编号].jpg 格式
- 多图项目：使用 project-[编号]-[序号].jpg 格式
- 图片尺寸：建议宽度至少800px，保持适当分辨率

#### 作品展示设置
- 调整缩略图布局：修改 Portfolio.jsx 中的 grid 布局参数
- 自定义过滤分类：在 categories 数组中更新分类选项
- 优化图片加载：可以添加图片预加载或懒加载配置
- 调整图片展示效果：修改 hover 效果和动画参数

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
