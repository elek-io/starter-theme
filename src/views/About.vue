<template>
  <div class="about">
    <h1>This is an about page</h1>
    <elek-io-block id="about-content" v-html="blocks[0].content">Start writing something about this page here</elek-io-block>
    <hr>
    <elek-io-block id="about-footer" not="heading" v-html="blocks[1].content"></elek-io-block>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    blocks: Array
  }
}
</script>