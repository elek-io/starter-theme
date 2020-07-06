<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ElekIoBlock id="welcome-message" :only="['paragraph', 'link']" :blocks="blocks"></ElekIoBlock>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ElekIoBlock from '@/components/ElekIoBlock.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    ElekIoBlock
  },
  props: {
    blocks: Array
  }
}
</script>
