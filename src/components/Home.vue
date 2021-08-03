<template>
    <div>
<h6>"Result Top Anime Upcoming "</h6>
      <div class="row">
        <div class="col-12 col-lg-6 pb-3" v-for="item in resp" v-bind:key="item.mal_id">
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
                        <font class="eTexT"><span class="badge" style="background-color:#203bc9">Rank {{item.rank}}</span></font>
                        <font class="eTexT">Type <span class="badge " style="background-color: #1ab778!important;">{{item.type}}</span></font>
                        <font class="eTexT">Episode <span class="badge " style="background-color: #1ab778!important;">
                            
                        </span></font>
                        <font class="eTexT">Aired <span style="font-weight:500;">{{item.start_date}} - {{item.end_date}}</span></font> 
                        <font class="eTexT">Score <span class="badge " style="background-color: #1ab778!important;">{{item.score}}</span></font>
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
    export default {
        mounted(){
            fetch('https://api.jikan.moe/v3/top/anime/1/upcoming')
            .then(response => response.json()).then(x=>{
                this.resp = x.top
            }).catch(error => console.log(error))
        },
        data(){
            return{
                resp:[]
            }
        }
        
    }
</script>