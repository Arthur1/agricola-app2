<template>
  <div id="app">
    <header>
      <header-bar/>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>
<script>
import HeaderBar from '@/components/HeaderBar'
export default {
  components: {
    HeaderBar
  }
}
</script>
