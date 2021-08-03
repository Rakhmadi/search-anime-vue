<template>
    <div>
        <h6>Result "{{$route.params.query}}"</h6>

      <div class="row">
        <div  class="d-flex justify-content-center">
          <div v-show="m" class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <div class="col-12 col-lg-6 pb-3" v-for="item in result.results" v-bind:key="item.mal_id">
          <div class="card shadow-x rounded-4 border-0"  data-aos="zoom-in-right">
            <div class="row g-0">
                <div class="col-4 ">
                    <img class="rounded-4 img-fluid w-100 h-100" style="object-fit:cover;" v-bind:src="item.image_url" alt="">
                </div>
                <div class="col-8">
                  <div class="d-flex flex-row w-100">
                    <div class="card-body p-3 pt-2 w-100">
                      <div class="d-flex flex-column">
                        <font class="mb-1 lh-1 eTexTXX" style="">{{item.title}}</font>
                       
                        <font class="eTexT">Type <span class="badge " style="background-color: #1ab778!important;">{{item.type}}</span></font>
                        <font class="eTexT">Episode <span class="badge " style="background-color: #1ab778!important;">
                            {{item.episodes}}
                        </span></font>
                        <font class="eTexT">Aired <span style="font-weight:500;">{{date(item.start_date)}} - {{date(item.end_date)}}</span></font> 
                        <font class="eTexT">Score <span class="badge " style="background-color: #1ab778!important;">{{item.score}}</span></font>
                        <font class="eTexT">Rated <span class="badge " v-bind:style="rating(item.rated)">{{item.rated}}</span></font>
                      </div>      
                    </div>
                    <div class="p-2">
                      
                      <a v-bind:href="item.url" target="_blank" class="btn btn-sm btn-primary btn-x"><i class="mdi mdi-arrow-right-thick"></i></a>
                    </div>
                  </div>
               </div>
             </div>
          </div>
        </div>
        
      </div>

    </div>
</template>
<script>
import moment from 'moment'
export default {
    mounted() {
        this.m=true
        fetch(`https://api.jikan.moe/v3/search/anime?q=${this.$route.params.query}`).then(x=>x.json()).then(f=>{
            this.result = f
            this.m=false
        }).catch(err=>console.log(err))
    },
    data() {
        return {
            result:[],
            m:false
        }
    },
    methods: {
        date(date){
            return moment(date).format('MMMM Do YYYY');
        },
        rating(val){
            if (val == "G") {
                return {
                    'color':'white',
                    'backgroundColor':'rgb(26, 183, 120)'
                }
            } else if(val == 'PG'){
                return{
                    'color':'white',
                    'backgroundColor':'rgb(26 32 183)'
                }
            }else if(val == 'PG-13' || val == 'R' ){
                return{
                    'color':'white',
                    'backgroundColor':'#ffc107'
                }
            }else if(val =='Rx' || val == 'R+'){
                return{
                    'color':'white',
                    'backgroundColor':'rgb(249 60 60)'
                }
            }else if(val == 'NC-17'){
                return{
                    'color':'white',
                    'backgroundColor':'rgb(183 17 17)'
                }
            }else{
                return{
                    'color':'black',
                    'backgroundColor':'rgb(123 123 123)'
                }
            }
        }
    },
}
</script>