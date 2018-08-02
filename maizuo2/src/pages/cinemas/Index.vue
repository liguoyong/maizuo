<template>
<page id="cinema">
    <ul class="cimemaList">
        <li v-for="(item,i) in city" :key="i" @click="eachPlace(item)">
            {{item}}
            <div></div>
        </li>
    </ul>
</page>
</template>
<script>
import {CinemaDataApi} from "../../services/filmService";
export default {
    data(){
        return{
            cinameMeg:null,
            rel:null,
            city:["南山区","福田区","龙岗区","宝安区","坪山新区","龙华新区","罗湖区","盐田区"]
        }
    },
    methods:{
        eachPlace(item){
            alert(item)
            // this.CinemaDataApi()
        }
    },
    mounted(){
    CinemaDataApi().then(result => {
        this.rel = result;
        console.log(this.rel)
    });
    },
    updated:{
        thecreat(){
            console.log(this.result)
        },
         eachPlace(item){
            alert(item)
            // this.CinemaDataApi()
        }
    }
}
</script>

<style>
    .cimemaList li{
        border-bottom:1px solid #fff;
        line-height:40px;
        padding-left:16px;
    }
    .cimemaList li:nth-last-child(1){
        border-bottom:none;
    }
</style>
