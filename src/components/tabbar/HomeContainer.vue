<template>
    <div>
        <!-- 这是轮播图区域 -->
        <mt-swipe :auto="3000">
            <!-- 在组件只用v-for循环，一定要使用key -->
            <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
                <img :src="item.img" alt="">
            </mt-swipe-item>
            
        </mt-swipe>

        <!-- 九宫格到六宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="">
                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">留言反馈</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">视频专区</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">联系我们</div>
                </router-link>
            </li>
	    </ul> 

    </div>
</template>

<script>

import {Toast} from 'mint-ui';

export default {
    data(){
        return {
            lunbotuList:[]   // 保存图片的数组
        }
    },
    created(){
        this.getLunbotu();
    },
    methods:{
        getLunbotu(){
            this.$http.get('api/getlunbo').then( result => {
                console.log(result.body);
                if(result.body.status == 0){
                    this.lunbotuList = result.body.message;
                    // Toast("加载轮播图成功")
                }else{
                    // Toast('加载轮播图失败');
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
    // .mint-swipe-item:nth-child(1){
    //     background-color: red;
    // }
    // .mint-swipe-item:nth-child(2){
    //     background-color:blue;
    // }
    // .mint-swipe-item:nth-child(3){
    //     background-color: yellow;
    // }    
    .mint-swipe-item{
        &:nth-child(1){
            background-color: red;
        }
        &:nth-child(2){
            background-color: blue;
        }
        &:nth-child(3){
            background-color: yellow;
        }    
        img{
            height:100%;
            width:100%;
        }            
    }
}

.mui-grid-view.mui-grid-9{
    background-color: #fff;
    border:none;   
    .mui-media-body{
        font-size: 13px;
    }
}
.mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3{
    border: 0;
}

</style>