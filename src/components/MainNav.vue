<template lang="html">
  <div class="flex flex-row w-full p-2 bg-grey-lighter border-b text-xs justify-between sticky pin-t">
    <router-link :to="{ name: 'Home' }">Trailblaze</router-link>
    <div class="">
      <router-link :to="{ name: 'Status' }">Status</router-link>
      <router-link :to="{ name: 'Work' }">Work</router-link>
    </div>
    <router-link :to="{ name: 'Contact' }">Contact</router-link>
  </div>
</template>

<script>
export default {
  name: 'MainNav'
}
</script>

<style lang="css">
</style>
