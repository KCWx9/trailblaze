<template>
  <div class="container m-auto p-4">
    <div class="flex flex-col justify-between w-full h-48 p-2 mb-2 border rounded bg-img">
      <div class="">
        <p class="text-xl text-grey-darkest">{{ level.project.title }}</p>
      </div>
      <div class="">
      </div>
      <div class="flex flex-row justify-between">
        <div class="text-xs flex flex-row items-center">
          <progress :value="level.status.progress" max="100" class="text-sm mr-2"></progress>
          {{ level.status.progress }}%
        </div>
        <div class="flex flex-row">
          <button class="border p-1 px-2 text-xs rounded-lg bg-grey text-grey-lightest font-medium">No</button>
          <button class="border p-1 px-2 text-xs rounded-lg bg-grey text-grey-lightest font-medium">Ex</button>
          <button class="border p-1 px-2 text-xs rounded-lg bg-grey text-grey-lightest font-medium">Mo</button>
        </div>
      </div>
    </div>
    <div class="w-full h-16 p-2 mb-2 bg-grey-lightest">
      timescale
    </div>
    <div class="w-full h-64 p-2 mb-2 bg-grey-lightest">
      process
    </div>
  </div>
</template>

<script>
export default {
  name: 'status',
  computed: {
    level () {
      return this.$store.getters.getCurrentLevel
    }
  }
}
</script>

<style scoped>

</style>
