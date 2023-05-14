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
    },
    name: {
      type: String,
      default: '',
      required: true
    },
    ref: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
  },
}

</script>

<template>
  <div class="my-input p-2">
    <label class="sm:text-xl label flex flex-col text-sm" :for="id"> {{ label }}
      <input
        class="sm:p-2 sm:text-lg appearance-none border border-blanc p-1 rounded-lg cursor-pointer bg-transparent text-noir text-xs focus:border-blanc focus:bg-transparent focus:text-violet file:rounded-lg file:border-none placeholder-blanc"
        :type="type" :name="name" :placeholder="placeholder" :ref="ref" :v-model="modelValue" :id="id" />
    </label>
  </div>
</template>


