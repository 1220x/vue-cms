// 入口文件
import Vue from 'vue'

// 1.1  导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由模块
Vue.use(VueRouter)

// 2.1 导入 vue-resource 
import VueResource from 'vue-resource'
// 2.2 安装
Vue.use(VueResource)

// 全局配置项目请求接口的跟地址，放在vueresource之后
Vue.http.options.root = 'http://www.liulongbin.top:3005/';

// 导入时间插件
import moment from 'moment'

// 定义全局的过滤器
Vue.filter('dataFormat', function(dataStr, pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern);
})



// 导入MUI的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 按需导入 mint-ui 组件
import {Header,Swipe,SwipeItem,Button} from 'mint-ui'  // 顶部样式组件
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
Vue.component(Button.name,Button);


// 1.3 导入router.js模块
import router from './router.js'


// 导入 app 根组件
import app from './App.vue'


var vm = new Vue({
    el:'#app',
    data:{

    },
    methods:{

    },
    render: c => c(app),
    router   // 1.4  挂载到 vm 实例上
})