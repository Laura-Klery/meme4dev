<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text',
      required: true
    },
    name: {
      type: String,
      default: '',
      required: true
    },
  },
}
</script>

<template>
  <label class="sm:text-xl label flex flex-col text-sm !mb-2 cursor-pointer" :for="name">{{ label }}</label>
  <input
    :id="name"
    :type="type"
    :name="name"
    :placeholder="placeholder"
    @input="$emit('updated', $event.target.value)"
    class="sm:p-2 sm:text-lg !mt-0 appearance-none border border-blanc p-1 rounded-lg cursor-pointer bg-transparent text-blanc text-xs focus:border-blanc focus:bg-transparent focus:text-violet placeholder-blanc"
  />
</template>