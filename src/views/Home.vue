<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div v-if="block('welcome-message')" id="welcome-message" elek-io type="block" v-html="block('welcome-message').html"></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    blocks: Array
  },
  methods: {
    block(id) {
      return this.blocks.find((block) => {
        return block.id === id;
      });
    }
  }
}
</script>
