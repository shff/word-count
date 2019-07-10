<template>
  <main class="gradient-bg h-screen p-8">
    <header>
      <h2 class="mb-6 text-4xl font-bold">Choose an amount of sentences.</h2>
      <NumberPicker class="block mb-6" v-model="amount" />
      <Button class="block mb-6" @click="fetch">Fetch sentences</Button>
    </header>

    <DataFetcher :url="url()" :post-processor="wordCounter" ref="fetcher">
      <template #default="{ payload: { topWord, usages, counter } }">
        <p>The most used word was "{{ topWord }}".</p>
        <p>It was used {{ usages }} times.</p>
        <RankingTable class="my-6" :data="counter" />
      </template>
      <template #empty>
        Waiting for you!
      </template>
    </DataFetcher>
  </main>
</template>

<script>
import Button from "./components/button.vue";
import NumberPicker from "./components/number_picker.vue";
import DataFetcher from "./components/data_fetcher.vue";
import RankingTable from "./components/ranking_table.vue";

import WordCounter from "./lib/word_counter.js";

export default {
  components: { Button, NumberPicker, DataFetcher, RankingTable },
  data() {
    return {
      amount: 1
    };
  },
  methods: {
    url() {
      return this.counterEndpoint + this.amount;
    },
    fetch() {
      this.$refs.fetcher.fetch();
    },
    wordCounter(data) {
      return WordCounter(data);
    }
  }
};
</script>

<style scoped>
.gradient-bg {
  background: linear-gradient(to bottom, #ebf8ff 0px, #ffffff 251px);
}
</style>
