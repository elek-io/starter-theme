<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ElekIoBlock id="about-content" :blocks="blocks"></ElekIoBlock>
    <hr>
    <ElekIoBlock id="about-footer" :not="['heading']" :blocks="blocks"></ElekIoBlock>
  </div>
</template>

<script>
import ElekIoBlock from '@/components/ElekIoBlock.vue'

export default {
  name: 'About',
  components: {
    ElekIoBlock
  },
  props: {
    blocks: Array
  }
}
</script>