<template>
    <div>
        <div class="news">
            <!-- <div>
                <ul class="news-list">
                    <li v-for="(news,index) in newsList" :key="index" class="newLi">
                        <div class="newImg">
                            <img :src="news.thumb" alt=""/>
                        </div>
                        <div class="newsWord">
                            <p class="newsTitle">{{news.title}}</p>
                            <p class="newsInfo">{{news.info}}</p>
                            <p class="newsTime">{{news.upTime}}</p>
                        </div>
                    </li>
                </ul>
            </div> -->
            <mt-navbar v-model="selected" v-bind:fixed="true">
                <mt-tab-item id="1">NBA</mt-tab-item>
                <mt-tab-item id="2">CBA</mt-tab-item>
                <mt-tab-item id="3">路人王</mt-tab-item>
                <mt-tab-item id="4">关注</mt-tab-item>
            </mt-navbar>
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                    <ul class="news-list">
                        <li v-for="(news,index) in newsList" :key="index" >
                            <router-link :to="{name:'Detail-NBA', params: {id: news.urls.bbs_url}}" class="newLi">
                                <div class="newImg">
                                    <img :src="news.thumb" alt=""/>
                                </div>
                                <div class="newsWord">
                                    <p class="newsTitle">{{news.title}}</p>
                                    <p class="newsInfo">{{news.info}}</p>
                                    <p class="newsTime">{{news.upTime}}</p>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <ul class="news-list">
                        <li v-for="(cbaNews,index) in cbaNewsList" :key="index" >
                            <router-link :to="{name:'Detail-NBA',params: {id: cbaNews.id}}"  class="newLi">
                                <div class="newImg">
                                    <img :src="cbaNews.thumb" alt=""/>
                                </div>
                                <div class="newsWord">
                                    <p class="newsTitle">{{cbaNews.title}}</p>
                                    <p class="newsInfo">{{cbaNews.info}}</p>
                                    <p class="newsTime">{{cbaNews.upTime}}</p>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </mt-tab-container-item>
                <mt-tab-container-item id="3">

                </mt-tab-container-item>
                <mt-tab-container-item id="4">

                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>

<style scoped>
    
    .mint-navbar{position: fixed;left:0;top: 8vh;z-index: 90;}
    .news{padding-bottom:6vh;}
    .news-list{width: 100vw;margin-top: 16vh;}
    .newLi{padding:2%;height:14vh;overflow: hidden;display: flex;border-bottom: 1px solid #F3F3F3;text-decoration: none;color:#555;}
    .newImg{flex:0 0 25vw;overflow: hidden;margin-right: 2vw;}
    .newImg img{height: 100%;transform: scale(1.2) translate(-1rem,.5rem);}
    .newsTitle{font-size: .875rem;font-weight: bold;}
    .newsInfo{font-size: .75rem;margin-top: 1.2vh;width:68vw;height: 5vh;line-height:2.5vh;-webkit-line-clamp: 2;display: -webkit-box;-webkit-box-orient: vertical;overflow: hidden;
    text-overflow: ellipsis;text-indent:2em;}
    .newsTime{font-size: .75rem;margin-top: 2vh;}

</style>
    
<script>
import Vue from 'vue'
import axios from 'axios'
import { Tabbar, TabItem } from 'mint-ui';
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

export default {
    name: 'news',
    data(){
        return{
        newsList: [],
        selected:"1",
        bbs_id: [],
        cbaNewsList: []
        }
    },
    created:function(){
        axios.get('http://localhost:8085/api/nba')
        .then(res=>{
            // console.log(res.data);
            this.newsList = res.data.api_nba;

            const arr = this.newsList;
            for(let i = 0; i < arr.length;i++) {
                if(arr[i].urls.bbs_url) {
                    //arr[i].urls.bbs_url = arr[i].urls.bbs_url.split("").slice(21, 29).join("")
                    const nba_id = arr[i].urls.bbs_url.split("").slice(21, 29).join("");
                    //const urls = arr[i].urls
                    arr[i].push({
                        bbs_id:nba_id
                    });
                    console.log(bbs_id);
                    // console.log(bbs_id);
                }else {
                    arr[i].urls.bbs_url = ''
                }
            }
        })
        .catch(error=>{
            //   alert("他强任他强……")
            console.log(error)
        });

    //   //cba
    //     axios.get('http://localhost:8085/api/cba')
    //     .then(res=>{
    //         console.log(res);
    //         this.cbaNewsList = res.data.api_cba
    //     })
    //     .catch(error=>{
    //         //   alert("我干我的羊……")
    //     })
  }
}
</script>
