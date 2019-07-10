<template>
  <div class="inline-block bg-blue-400 text-white font-bold py-2 px-4 rounded select-none">
    <a class="cursor-pointer" @click="decrement">-</a>
    <span class="px-6">
      {{ value }}
    </span>
    <a class="cursor-pointer" @click="increment">+</a>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true
    },
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 10
    }
  },
  methods: {
    decrement() {
      this.$emit("input", Math.max(this.min, this.value - 1));
    },
    increment() {
      this.$emit("input", Math.min(this.max, this.value + 1));
    }
  }
};
</script>
