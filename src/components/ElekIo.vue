<template>
  <div :id="id" :only="this.only.join(',')" :not="this.not.join(',')" v-html="block(id)"></div>
</template>

<script>
export default {
  name: 'ElekIo',
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