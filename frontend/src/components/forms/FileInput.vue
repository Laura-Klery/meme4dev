<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
      required: true
    },
    name: {
      type: String,
      default: '',
      required: true
    },
  },
  methods: {
    debug(event){
      console.log(event.target.files[0])
    }
  }

}
</script>

<template>
  <label class="sm:text-xl label flex flex-col text-sm !mb-2 cursor-pointer" :for="name">{{ label }}</label>
  <input
    :id="name"
    type="file"
    :name="name"
    @input="debug($event); $emit('updated', $event.target.files[0])"
    class="sm:p-2 sm:text-lg !mt-0 appearance-none border border-blanc p-1 rounded-lg cursor-pointer bg-transparent text-blanc text-xs placeholder-blanc focus:border-blanc focus:bg-transparent focus:text-violet file:rounded-lg file:border-none file:text-blanc file:bg-transparent"
  />
</template>