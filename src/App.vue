<template>
  <div id="app">
    <MainNav></MainNav>
    <router-view/>
  </div>
</template>

<script>
import '@/assets/css/master.css'
import MainNav from '@/components/MainNav.vue'

export default {
  name: 'App',
  components: { MainNav }
}
</script>

<style>
</style>
