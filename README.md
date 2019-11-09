# 项目

## Vue项目

### 123全会哈哈哈

## [主流开源协议之间有何异同？](https://www.zhihu.com/question/19568896)

### 用(传统方式)命令行将代码上传到GitHub

1、git add
2、git commit -m "提交信息"
3、git push

## 制作首页中的App组件

1、完成Header区，使用的是 Mint-UI中的Hheader组件
2、制作底部的Tabbar区域，使用的是MUI的Tabbar.html
    + 在制作购物车小图标时，操作会相对多一些
    + 先把扩展图标的css样式拷贝到项目中
    + 拷贝扩展字体库 .ttf 文件
    + 为购物车小图标添加样式 mui-icon mui-icon-extra mui-icon-extra-cart
3、要在中间区域放置一个roouter-view来展示路由匹配到的组件

## 改造 tabbar 为 router-link

## 设置路由高亮

## 点击 tabbar 中的路由链接展示对应的路由组件

## 制作首页轮播图数据

1、获取数据，如何获取数据呢？ 使用vue-resource
2、使用vue-resource 的 this.$http.get 获取数据
3、获取到的数据要保存到data上
4、使用 v-for 循环渲染每一个item项

## 改造九宫格区域的样式

## 改造新闻资讯路由链接

## 新闻资讯页面制作

1. 绘制界面，使用MUI中的 media-list.html
2. 使用vue-resource获取数据
3. 渲染真实数据

## 实现 新闻资讯列表 点击跳转到新闻详情

1、把列表中每一项改造为router-link，同时在跳转的时候应该提供唯一的ID标识符
2、插件新闻详情的组件页面，NewsInfo.vue
3、在路由模块中，将新闻详情的路由地址和组件页面对应起来

## 实现 新闻详情的页面布局的数据渲染

## 单独封装一个 comment.vue 评论子组件

1、先创建一个单独的comment.vue 组件模板
2、在需要使用comment 组件的页面中，先动手导入comment组件
 + `import comment from './comment.vue'`
3、在父组件中，使用`compoents`属性，将刚才导入的component组件，注册为自己的子组件
4、在注册子组件的时候，注册名称，以标签的形式，在页面中引用即可

## 获取所有的评论数据，显示到页面中

## 实现点击加载更多评论的功能
1、为加载更多按钮绑定事件，在事件中，请求下一页数据
2、点击加载更多，让 pageIndex++，然后重新调用this.getcomments方法，重新获取最新一页的数据

3、为了防止新数据覆盖老数据的情况，在点击加载更多的时候，每当获取到新数据，应该让老数据调用数组的concat方法，拼接上新数组
