<template>
    <div>
        <div class="More">
            <div class="user">
                <div class="userImg">
                    <img src="./user.jpg" alt="userImg">
                </div>
                <div class="myPage">我的主页></div>
                <div class="userInfo">
                    <p class="userName">拿什么再爱</p>
                    <p class="addDays">加入虎扑1666天</p>
                </div>
            </div>
            <div class="aboutOwn">
                <ul class="aboutOwn-ul">
                    <li>
                        <i class="icon iconfont icon-shoucang"></i>
                        <p>收藏</p>
                    </li>
                    <li>
                        <i class="icon iconfont icon-liulanjilu"></i>
                        <p>浏览记录</p>
                    </li>
                    <li>
                        <i class="icon iconfont icon-mess"></i>
                        <p>消息</p>
                    </li>
                    <li>
                        <i class="icon iconfont icon-coin-black"></i>
                        <p>虎扑币</p>
                    </li>
                    <li>
                        <i class="icon iconfont icon-jindou-"></i>
                        <p>金豆</p>
                        <p>88</p>
                    </li>
                </ul>
            </div>
            <div class="List-ul">
                <ul>
                    <li>
                        <span>
                            <img src="" alt="">
                        </span>
                        <div>></div>
                        <div></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
    *{margin: 0px;padding: 0px;}
    .More{padding-top:8vh;padding-bottom:8vh;}
    .user{width: 100vw;height: 12vh;border-top:.625rem solid #ECEBE7;}
    .userImg{width: 14vw;float: left;height: 12vh;margin-left:5vw;}
    .userImg img{width: 14vw;border-radius: 50%;margin-top: 2vh;}
    .userInfo{width: 50vw;height:12vh;margin-top: 3.2vh;margin-left:23vw;}
    .userName{font-size: .87rem; color: #444;font-weight: bold}
    .addDays{margin-top: 2vh;font-size: .78rem; color: #777}
    .myPage{float: right;width: 20vw;margin-top:4.2vh;margin-right: 5vw; color: #666;}
    .aboutOwn{width: 100vw;height: 10vh;}
    .aboutOwn-ul{display: flex;justify-content:space-around;margin-top: 2vh;}
    .aboutOwn-ul li{text-align: center;}
    .iconfont{font-size: 1.3rem;color: #666;}
    .aboutOwn-ul li p{font-size: .8rem;margin-top: 1vh;color: #666;}
    .List-ul{border-top:.625rem solid #ECEBE7;}
</style>

<script>

</script>
