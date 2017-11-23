<template>
  <div id="Odiv">
      <v-header></v-header>
      <router-view></router-view>
      <v-footer></v-footer>
  </div>
</template>
<style>
#Odiv{
  overflow: hidden;
}
</style>

<script>
import header from '@/components/Header'
import footer from '@/components/Footer'
export default {
  components:{
      "v-header": header,
      "v-footer": footer
  }
}
</script>