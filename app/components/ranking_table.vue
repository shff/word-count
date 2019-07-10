<template>
  <details>
    <summary>{{ caption }}</summary>
    <table class="m-4">
      <tr v-for="(key, value) in data">
        <td>{{ key }}</td>
        <td>{{ value }}</td>
      </tr>
    </table>
  </details>
</template>

<script>
  export default {
    props: {
      caption: {
        type: String,
        default: "Show table"
      },
      data: {
        type: Object,
        required: true
      }
    }
  };
</script>
