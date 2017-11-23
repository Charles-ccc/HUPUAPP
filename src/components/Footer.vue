<template>
  <div class="footer">
      <ul class="nav">
          <li>
              <router-link to="/News">
                <i class="icon iconfont icon-xinwen"></i>
                <span>新闻</span>
              </router-link>
          </li>
          <li>
              <router-link to="/List">
                <i class="icon iconfont icon-lanqiu"></i>
                <span>比赛</span>
              </router-link>
          </li>
          <li>
              <router-link to="/Issue">
                <i class="icon iconfont icon-shequ"></i>
                <span>社区</span>
              </router-link>
          </li>
          <li>
              <router-link to="/More">
                <i class="icon iconfont icon-gengduo"></i>
                <span>更多</span>
              </router-link>
          </li>
      </ul>
  </div>
</template>

<style scoped>
    *{margin: 0px;padding: 0px;}
    .footer{width: 100vw;height: 8vh;background-color: #C51A2D;position: fixed;bottom: 0;left: 0;z-index: 99;}
    .nav{width: 100vw;height: 8vh;margin: 0 auto;list-style: none;display:flex;justify-content:space-between;}
    .nav li{width: 25vw;height: 8vh; text-align: center;color: #fff;padding-top: 1vh;}
    .nav li a{color: #fff;text-decoration: none;}
    .iconfont{font-size:24px;}
    .nav li span{display: block;font-size: 14px;margin-top: 0.5vh;}
    .nav li a.active{color:#7BE65A}
</style>

