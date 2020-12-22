<template>
  <div class="home">
    <img elek-io-element="welcome-image" elek-io-element-type="image" v-if="welcomeImage" :alt="welcomeImage.alt" :src="welcomeImage.src">
    <div elek-io-block="welcome-message" v-if="welcomeMessage" v-html="welcomeMessage.html"></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    blocks: Array
  },
  computed: {
    welcomeImage() {
      return this.blocks.find((block) => {
        return block.id === 'welcome-image';
      });
    },
    welcomeMessage() {
      return this.blocks.find((block) => {
        return block.id === 'welcome-message';
      });
    }
  }
}
</script>
