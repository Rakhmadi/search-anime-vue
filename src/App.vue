<template>
  <div class="container">
    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button href="" class="btn btn-sm btn-primary"><i class="mdi mdi-menu"></i></button>
    </nav> -->
    <div class="pt-3">
    <from class="p-1" action="" >
        <div class="container">
          <div class="row">
            <div class="col-10 ">
              <input type="text" @change="search()" class="form-control shadow-sm border-0" v-model="searchD" placeholder="Search">
            </div>
            <div class="col-2  p-0">
              <button class="btn btn-transparent rounded-circle shadow-none border-0 " @click="search()"><i class="mdi mdi-magnify"></i></button>
            </div>
          </div>
        </div>
    </from>
    </div>

  <!-- ---- -->

    <div class="container-fluid pt-2">
      <router-view :key="$route.fullPath"></router-view>
    </div>
  </div>
</template>

<script>
import AOS from 'aos'
export default {
  created () {
      AOS.init({
      startEvent: 'load',
    })
  },
  data() {
    return {
      searchD: ''
    }
  },
  methods: {
    search(){
      console.log('err')
      this.$router.push({name:'serch',params:{
        query:this.searchD
      }})
    }
  },
}
</script>
<style>
 @import './assets/aos.css';
body{
  background-color: #fdfdfd !important;
}
.rund{
  border-radius: 1rem;
}
.shadow-x {
    box-shadow: 0 0 .75rem rgba(106, 106, 106, 0.152)!important;
}
.btn-x{
  background-color:#40e699 !important;
  border: none !important;
  box-shadow: none !important;

}
btn-x:hover{
  background-color:#40e699 !important;
}
@media (max-width: 767px) {

  .eTexT{
      font-size: 10px;
  }
  .eTexTXX{
    font-size:14px;
    font-weight:500;
  }
 
}
@media (min-width: 767px) {
  .eTexT{
    font-size: 16px;
  }
  .eTexTXX{
    font-size:24px;
    font-weight:500;
  }
}
</style>
