<template>
  <div :id="id" elek-io type="block" :only="this.only.join(',')" :not="this.not.join(',')" v-html="block(id)"></div>
</template>

<script>
export default {
  name: 'ElekIoBlock',
  props: {
    id: String,
    only: {
      type: Array,
      default: () => {
        return [];
      }
    },
    not: {
      type: Array,
      default: () => {
        return [];
      }
    },
    blocks: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  methods: {
    block(id) {
      const foundBlock = this.blocks.find((block) => {
        return block.id === id;
      });

      if (foundBlock) {
        return foundBlock.content;
      }
    }
  }
}
</script>