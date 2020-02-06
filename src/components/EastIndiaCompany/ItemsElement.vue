<template>
  <div class="items_item">
    <img :src="item.src" :alt="item.name" :class="{ 'items_item_icon': true, 'items_item_icon-picked': isPicked }">
  </div>
</template>
<script>
export default {
  props: [
    'item',
    'pickedItemsList'
  ],
  computed: {
    isPicked: function() {
      return this.pickedItemsList.includes(this.item.id)
    }
  }
}
</script>
<style scoped>
.items_item {
  max-width: 3em;
  padding: 0.2em;
}
.items_item_icon {
  width: 100%;
  opacity: 1;
}
.items_item_icon-picked {
  opacity: 0.25;
}
</style>
