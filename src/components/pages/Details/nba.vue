<template>
    <div>
        <div class="nba">
            <header class="backto">
                <i class="icon iconfont icon-back" @click="goBack"></i>
                <span class="title">NBA</span>
            </header>
            <div class="nbadetail"></div>
        </div>
    </div>
</template>

<style scoped>
    .nba{padding-top:8vh;padding-bottom:6vh;}
    .backto{width: 100vw;height: 4vh;color: #C51A2D;line-height: 4vh;}
    .backto span{vertical-align: top;}
    .iconfont{font-size: 24px;}
</style>

<script>
export default {
    methods: {
        goBack(){
        window.history.back();
        }
    },
    mounted() {
        console.log(this.$route)
        // console.log(this.$route.params.id)
        
    }
}

</script>