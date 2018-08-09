<template>
  <div class="container p-2 text-sm text-grey-darkest">
    <form>
      <div class="flex py-2">
        <h1 class="text-xl text-grey-darkest">Contact Us</h1>
      </div>
      <div class="flex flex-col">
        <label for="topic">Topic</label>
        <select
          id="topic"
          class="w-full border px-1 py-2 mt-1 text-xs text-grey-dark"
          v-model="selectedTopic">
          <option
            v-for="topic in topics" :key="topic">
            {{ topic }}
          </option>
        </select>
      </div>
      <div class="flex flex-col py-2">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Type your name"
          class="w-full border px-1 py-2 mt-1 text-xs text-grey-dark"
          v-model.trim="name">
      </div>
      <div class="flex flex-col py-2">
        <label for="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="Type your email"
          class="w-full border px-1 py-2 mt-1 text-xs text-grey-dark"
          v-model.trim="email">
      </div>
      <div class="flex flex-col py-2">
        <label for="message">Message</label>
        <textarea
          id="message"
          rows="9"
          placeholder="Type your email"
          class="w-full border px-1 py-2 mt-1 text-xs text-grey-dark"
          v-model="message"
          ></textarea>
      </div>
      <div class="flex flex-col py-2">
        <div class="">
          <button
            class="bg-grey-light hover:bg-grey-darkest hover:text-grey-lightest p-1"
            @click.prevent="submitted">Send
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      message: '',
      selectedTopic: 'Support',
      topics: ['Support', 'Services', 'Information'],
      isSubmitted: false
    }
  },
  methods: {
    submitted () {
      this.isSubmitted = true
    }
  }
}
</script>

<style>

</style>
