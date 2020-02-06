<template>
  <b-link
    :href="`https://buratsuki.work/cards/view/${id}`"
    rel="noopener"
    target="_blank"
  >{{ name }}[{{ idd || id }}]</b-link>
</template>
<script>
export default {
  props: [
    'id',
    'idd',
    'name'
  ]
}
</script>
