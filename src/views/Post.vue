<template>
  <div class="post">
    <ElekIo elek-io type="block" id="post-content" :blocks="blocks"></ElekIo>
  </div>
</template>

<script>
import ElekIo from '@/components/ElekIo.vue'

export default {
  name: 'Post',
  components: {
    ElekIo
  },
  props: {
    blocks: Array
  }
}
</script>