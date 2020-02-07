<template>
  <div id="app">
    <header>
      <header-bar/>
    </header>
    <main>
      <router-view/>
    </main>
    <footer>
      <footer-bar/>
    </footer>
  </div>
</template>
<script>
import HeaderBar from '@/components/HeaderBar'
import FooterBar from '@/components/FooterBar'
export default {
  components: {
    HeaderBar,
    FooterBar
  }
}
</script>
<style scoped>
main {
  padding-bottom: 50px;
}
</style>
