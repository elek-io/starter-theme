<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <elek-io-block id="welcome-message" only="paragraph, link" v-html="blocks[0].content">A default welcome message!</elek-io-block>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  props: {
    blocks: Array
  }
}
</script>
