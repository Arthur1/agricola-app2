<template>
  <b-list-group-item :variant="order === 0 ? 'info' : ''">
    {{ length - order }}回目:
    <span class="history_icon">
      <img :src="marker1.src" :alt="marker1.name">・<img :src="marker2.src" :alt="marker2.name">
    </span>
    <br>
    <span v-if="marker1.id === marker2.id">
      <span class="history_icon">
        <img :src="marker1.animalSrc" :alt="marker1.animalName">
      </span>
      {{ marker1.animalName }}
    </span>
    <span v-else>
      ---
    </span>
  </b-list-group-item>
</template>
<script>
export default {
  props: [
    'order',
    'pair',
    'markers',
    'length'
  ],
  computed: {
    marker1: function() {
      return this.markers[this.pair[0]]
    },
    marker2: function() {
      return this.markers[this.pair[1]]
    }
  }
}
</script>
<style scoped>
.history_icon {
  height: 1.5rem;
  margin: 0 0.5rem;
}
.history_icon img {
  height: 1.5rem;
}
</style>
