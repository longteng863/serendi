# 奇遇光屿 SERENDI 珠宝网站

这是一个现代化的珠宝品牌网站项目，名称为 "奇遇光屿 SERENDI"。

## 项目结构

```
serenedi-jewelry/
├── index.html        # 主页面文件
├── css/
│   └── style.css     # 样式表
├── js/
│   └── script.js     # JavaScript脚本
├── images/           # 图片文件夹（目前为空）
└── README.md         # 项目说明文档
```

## 功能特性

✨ **响应式设计** - 适配桌面、平板和手机设备
🎨 **现代化界面** - 高端珠宝品牌风格的设计
📱 **交互功能** - 包含以下交互：
  - 平滑滚动导航
  - 产品卡片悬停效果
  - 表单提交处理
  - 页面滚动时导航高亮
  - 元素滚动加载动画

## 页面内容

1. **导航栏** - 品牌Logo和导航菜单
2. **英雄区域** - 首屏展示和立即选购按钮
3. **产品展示** - 5个产品系列展示
4. **关于我们** - 品牌介绍和数据展示
5. **联系我们** - 联系信息和反馈表单
6. **页脚** - 版权信息和社交链接

## 如何使用

### 1. 打开项目
在 VS Code 中打开 `/Users/fengqidahan/Desktop/serenedi-jewelry` 文件夹

### 2. 运行网站
有几种方式可以运行网站：

**方式一：使用 Live Server 扩展**
- 安装 VS Code 中的 "Live Server" 扩展
- 右键点击 `index.html` 
- 选择 "Open with Live Server"

**方式二：直接打开文件**
- 在文件浏览器中找到 `index.html`
- 双击打开（用浏览器默认打开）

**方式三：使用 Python 本地服务器**
```bash
cd /Users/fengqidahan/Desktop/serenedi-jewelry
# Python 3
python3 -m http.server 8000
# 然后打开浏览器访问 http://localhost:8000
```

### 3. 部署到 GitHub Pages
网站已优化为可在 GitHub Pages 上完美运行：

**自动部署步骤：**
1. 确保项目已推送到 GitHub 仓库
2. 进入仓库设置：`Settings > Pages`
3. 选择 `Branch: main`，目录选择 `/ (root)`
4. 保存后等待几分钟，GitHub 会生成访问 URL
5. 访问格式：`https://<你的用户名>.github.io/<仓库名>/`

**手动部署：**
```bash
# 提交最新更改
git add .
git commit -m "Update for GitHub Pages deployment"
git push origin main
```

## 颜色主题

- **主色** (#d4af37): 金色 - 用于强调和按钮
- **副色** (#1a1a1a): 深黑色 - 用于导航栏和标题
- **浅色** (#f5f5f5): 浅灰色 - 用于背景
- **文字色** (#333): 深灰色 - 用于主要文本

## 自定义建议

### 添加图片
- 将图片文件放在 `images/` 文件夹中
- 在 HTML 中替换占位符图片
- 参考 `IMAGES_GUIDE.md` 获取详细说明

### 需要的图片文件：
- `hero-jewelry.jpg` - 英雄区域展示图片
- `diamond-collection.jpg` - 戒指系列产品图片
- `jade-collection.jpg` - 项链系列产品图片
- `pearl-collection.jpg` - 手链系列产品图片
- `gold-collection.jpg` - 耳环系列产品图片
- `platinum-collection.jpg` - 手镯系列产品图片
- `logo.png` - 网站Logo
- `favicon.ico` - 浏览器标签页图标
- `wechat-qr.jpg` - 微信二维码图片
- `douyin-qr.jpg` - 抖音二维码图片

### 修改文本
- 打开 `index.html` 修改品牌名称、描述等
- 修改联系信息

### 调整样式
- 编辑 `css/style.css` 修改颜色、字体、间距等
- 修改 `:root` 下的 CSS 变量可以快速改变全局颜色

### 添加功能
- 编辑 `js/script.js` 添加更多JavaScript功能
- 例如：实际的购物车、用户认证、数据库集成等

## 浏览器兼容性

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 扩展功能想法

- [ ] 购物车功能
- [ ] 产品详情页
- [ ] 用户注册登录
- [ ] 搜索功能
- [ ] 分类筛选
- [ ] 在线支付集成
- [ ] 用户评价系统
- [ ] 产品推荐算法
- [ ] 多语言支持
- [ ] SEO 优化

## 许可证

© 2026 奇遇光屿 SERENDI. 版权所有。

## 联系方式

- 电话: +86 13309460916
- WhatsApp: +86 13309460916
- 邮箱: lteng863@gmail.com
- 地址: 甘肃省兰州市七里河区兰州中心
