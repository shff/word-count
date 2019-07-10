<template>
  <button
    class="text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 hover:border-t-2 border-blue-400 hover:border-blue-500 rounded"
    :class="[ disabled ? 'bg-gray-500' : 'bg-blue-500' ]"
    @click="$emit('click')"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    disabled: Boolean
  }
};
</script>
