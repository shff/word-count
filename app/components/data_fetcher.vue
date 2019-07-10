<template>
  <div>
    <slot v-if="payload" :payload="payload" />
    <slot v-else name="empty" />
  </div>
</template>

<script>
  export default {
    props: {
      url: {
        type: String,
        required: true
      },
      postProcessor: {
        type: Function,
        required: false,
        default: data => data
      }
    },
    data() {
      return {
        payload: null
      };
    },
    methods: {
      async fetch() {
        const response = await fetch(this.url);
        const payload = await response.json();
        this.payload = this.postProcessor(payload);
      }
    }
  };
</script>
