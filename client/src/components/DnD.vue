<template>
  <h1>{{ msg }}</h1>

</template>

<script>
import axios from 'axios';

export default {
  name: 'DnD',
  data() {
    return {
      msg: '',
    };
  },
  methods: {
    getMessage() {
      const path = 'http://127.0.0.1:5000/ping';
      axios.get(path)
        .then((res) => {
          this.msg = res.data;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
  },
  created() {
    this.getMessage();
  },
};
</script>

<style scoped>

</style>
