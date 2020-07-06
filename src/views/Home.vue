<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ElekIo elek-io type="block" id="welcome-message" :only="['paragraph', 'link']" :blocks="blocks"></ElekIo>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ElekIo from '@/components/ElekIo.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    ElekIo
  },
  props: {
    blocks: Array
  }
}
</script>
