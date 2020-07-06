<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ElekIo elek-io type="block" id="about-content" :blocks="blocks"></ElekIo>
    <hr>
    <ElekIo elek-io type="block" id="about-footer" :not="['heading']" :blocks="blocks"></ElekIo>
  </div>
</template>

<script>
import ElekIo from '@/components/ElekIo.vue'

export default {
  name: 'About',
  components: {
    ElekIo
  },
  props: {
    blocks: Array
  }
}
</script>