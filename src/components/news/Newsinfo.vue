<template>
    <div class="newsinfo-container">
        <!-- 大标题 -->
        <h1 class="title">{{newsinfo.title}}</h1>
        <!-- 子标题 -->
        <p class="subtitle">
            <span>发表时间：{{newsinfo.add_time}}</span>
            <span>点击：{{newsinfo.click}}次</span>
        </p>

        <hr>
    <!-- 内容区 -->
        <div class="content" v-html="newsinfo.content">

        </div>
        <!-- 评论子组件、 -->
        <comment-box :id="this.id"></comment-box>

    </div>
</template>


<script>
import {Toast} from 'mint-ui';
// 1、导入评论子组件
import comment from '../subcomponents/comment.vue';

export default {
    data(){
        return {
            id:null,
            // id: this.$route.params.id
            newsinfo:{}  // 新闻对象
        }
    },
    created(){
        this.id = this.$route.params.id,
        this.getnewsinfo();
    },
    methods:{
        getnewsinfo(){
            this.$http.get('api/getnew/' + this.id).then( result => {
                if(result.body.status == 0){
                    this.newsinfo = result.body.message[0];
                }else{
                    Toast('获取新闻详情失败')
                }
            })
        }
    },
    components:{
        // 注册子组件的
        'comment-box':comment
    }
}
</script>

<style lang="scss">
.newsinfo-container{
    padding: 0 4px;
    .title{
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
        color: red
    }
    .subtitle{
        font-size: 13px;
        color:#226aff;
        display: flex;
        justify-content: space-around;
    }
    .content{
        width:100%;
    }
}
</style>