<template>
<page id="home">
    <!-- 轮播图 -->
    <Banner :data="bannerData"/>

    <!-- 正在热映 -->
    <div class="now-playing">
        <film-card v-for="item in playingData" :key="item.id"
            :data="item" type="playing">
        </film-card>
    </div>

    <!-- 即将上映 -->
    <div class="coming-soon">
        <film-card v-for="item in comingData" :key="item.id"
            :data="item" type="coming">
        </film-card>
    </div>

</page>
</template>

<script>
import {getNowPlayingData, getComingSoonData, getHomeBannerData} from '../../services/filmService'
import Banner from '@/components/home/index/Banner'
import FilmCard from '@/components/home/index/FilmCard'
export default {
    components: {
        Banner,
        FilmCard
    },
    data(){
        return {
            bannerData: [],
            playingData: [],
            comingData: []
        }
    },
    mounted(){
        // 请求轮播图的数据
        getHomeBannerData().then(result=>{
            this.bannerData = result;
        })
        // 请求正在热映电影的数据
        getNowPlayingData()
        .then(result=>{
            this.playingData = result;
        })
        // 请求即将上映电影的数据
        getComingSoonData().then(result=>{
            this.comingData = result;
        })

    }
}
</script>

<style>

</style>
