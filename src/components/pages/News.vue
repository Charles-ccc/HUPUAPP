<template>
    <div>
        <div class="news">
            <div>
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
            </div>
        </div>
    </div>
</template>

<style scoped>
    .news{padding-top:10vh;padding-bottom:8vh;}
    .news-list{width: 100vw;}
    .newLi{padding:2%;height:14vh;overflow: hidden;display: flex;border-bottom: 1px solid #F3F3F3}
    .newImg{flex:0 0 25vw;overflow: hidden;margin-right: 2vw;}
    .newImg img{height: 100%;transform: scale(1.2) translate(-1rem,.5rem);}
    .newsTitle{font-size: .875rem;font-weight: bold;}
    .newsInfo{font-size: .75rem;margin-top: 1.2vh;width:68vw;height: 5vh;line-height:2.5vh;-webkit-line-clamp: 2;display: -webkit-box;-webkit-box-orient: vertical;overflow: hidden;
    text-overflow: ellipsis;text-indent:2em;}
    .newsTime{font-size: .75rem;margin-top: 2vh;}
</style>
    
<script>
import axios from 'axios'

export default {
  name: 'news',
  data(){
    return{
      newsList: [],
    }
  },
  created:function(){
      axios.get('http://localhost:8085/api/data')
      .then(res=>{
          console.log(res.data.data);
          this.newsList = res.data.data
      })
      .catch(error=>{
          alert("他强任他强……")
      })
  }
}
</script>
