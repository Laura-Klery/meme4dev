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
        }
    },
}

</script>

<template>
    <div class="my-input">
        <label class="label"> {{ label }} </label>
        <input :type="type" :name="name" :placeholder="placeholder" :ref="ref"/>
    </div>
    
</template>


