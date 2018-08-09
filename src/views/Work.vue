<template>
  <div class="container m-auto">
    <div >
      <div
        v-for="level in levels" :key="level.id"
        v-if="level.status === 'complete'"
        class="h-32 p-2 mb-2 bg-grey-lighter text-sm text-grey-darkest"
        >
        <p>{{ level.project.title }}</p>
        <p>£{{ level.rate }}</p>
      </div>
    </div>
    <div class="h-64 p-2 mb-2 bg-grey-light" id="current">
      current
    </div>
    <div v-for="level in levels" :key="level.id">
      <div v-if="level.complete === false && level.status === 'default'" class="p-2 mb-2 bg-grey-lightest text-grey-light">
        £{{ level.rate }} - {{ level.complete }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'work',
  computed: {
    levels () {
      return this.$store.getters.getLevels
    }
  }
}
</script>

<style scoped>
</style>
