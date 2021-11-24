<template>
<div class="container px-4">
  <div class="row gx-5">
    <div class="col-6 col-md-4">
     <div class="p-3 border bg-light">
       <input type="text" class="form-control" placeholder="Character name"  >
     </div>
    </div>
    <div class="col p-3 border bg-light">
      <div class="row">
        <div class="col ">
          <div>
            <input type="text" class="form-control" placeholder="Class">
            <br>
            <input type="text" class="form-control" placeholder="Experiens point" >
          </div>
        </div>
        <div class="col">
          <div >
            <input type="text" class="form-control" placeholder="Race" >
            <br>
            <input type="text" class="form-control" placeholder="Alignment" >
          </div>
        </div>
        <div class="col">
          <div>
            <input type="text" class="form-control" placeholder="Player name" >
            <br>
            <input type="text" class="form-control" placeholder="Blackgraund" >
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
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
