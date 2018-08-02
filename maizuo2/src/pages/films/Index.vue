<template>
<page id="films">
    <div class="tepShop">
        <div class="nowShow" @click="nowshop()" :class="cto">正在热映</div>
        <div class="nextShow" @click="nextshop()" :class="ato">即将上映</div>
        <div class="box-Shop">
            <ul v-show="vshop==true">
                <li v-for="(item,i) in filmsMeg" :key="i">
                    <img :src="item.cover" alt="">
                    <div>{{item.name}}</div>
                    <div>{{item.intro}}</div>
                    <div><span>{{item.cinemaCount}}家影院上映</span><span>{{item.watchCount}}人购票</span></div>
                </li>
            </ul>
            <ul v-show="bshop==false">
                <li v-for="(item,i) in nextMeg" :key="i">
                    <img :src="item.cover" alt="">
                    <div>{{item.name}}</div>
                    <div>{{item.intro}}</div>
                    <div><span>家影院上映</span><span>{{item.watchCount}}人购票</span></div>
                </li>
            </ul>
        </div>
    </div>
</page>
</template>
<script>
import { AtNowPlayingData,AtComingSoonData } from "../../services/filmService";
export default {
  data(){
      return {
          filmsMeg:null,
          nextMeg:null,
          vshop:true,
          bshop:false,
          cto:"org",
          ato:null
      }
  },
  methods:{
      nowshop:function(){
          this.vshop=true;
          this.bshop=false;
           this.cto = "org";
          this.ato = "cto";
      },
      nextshop:function(){
          this.vshop=true,
          this.vshop=false;
          this.ato = "org";
          this.cto = "cto";
      }
  },
  mounted() {
    AtNowPlayingData().then(result => {
      this.filmsMeg = result;
   
    });
    AtComingSoonData().then(result=>{
        this.nextMeg=result;
           console.log(result);
    })
  }
};
</script>

<style>
.tepShop {
  position: relative;
  top:0;
  width: 90%;
  margin: 0 auto;
}
.nowShow, .nextShow{
    float: left;
    text-align: center; 
    width:50%;
    line-height:45px;
}
.org{
      color: #fe6e00;
      border-bottom:4px solid #fe6e00;
}
.box-Shop{
    position: absolute;
    top:49px;
    background:#fff;
    bottom: 0;
    /* overflow:hidden; */
    width:100%;
}
.box-Shop ul li{
    height:125px;
}
.box-Shop ul li img{
    width:60px;
    height:82px;
    float: left;
}
</style>
