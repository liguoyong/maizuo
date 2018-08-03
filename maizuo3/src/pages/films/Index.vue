<template>
<page id="films">
    <nav class="nav">
        <li v-for="(item, index) in navData" :key="index" 
            @click="selectNav(item.flag)"
            class="nav-item" :class="{active: show==item.flag}">
            {{item.title}}
        </li>
    </nav>

    <div v-show="show=='playing'">
        <film-item v-for="item in playingData" :key="item.id"
            :data="item" type="playing">
        </film-item>
    </div>
    <div v-show="show=='coming'">
        <film-item v-for="item in comingData" :key="item.id"
            :data="item" type="coming">
        </film-item>
    </div>

</page>
</template>

<script>
import {getNowPlayingData, getComingSoonData} from '../../services/filmService.js'
import FilmItem from '../../components/films/index/FilmItem.vue'
export default {
    components: {
        FilmItem
    },
    data(){
        return {
            show: 'playing',//playing正在热映,coming即将上映
            navData: [
                {title: '正在热映', flag: 'playing'},
                {title: '即将上映', flag: 'coming'}
            ],
            playingData: [],
            comingData: []
        }
    },
    methods: {
        selectNav(flag){
            this.show = flag;
        },
        //请求正在热映的数据
        requestPlayingData(){
            getNowPlayingData(1, 7).then(result=>{
                this.playingData = result;
            })
        },
        //请求即将上映的数据
        requestComingData(){
            getComingSoonData(1, 7).then(result=>{
                this.comingData = result;
            })
        },
        //请求数据
        requestData(){
            if(this.show == 'playing' && this.playingData.length <= 0){
                console.log('请求正在热映的数据');
                this.requestPlayingData();
            }else if(this.show == 'coming' && this.comingData.length <= 0){
                console.log('请求即将上映的数据');
                this.requestComingData();   
            }
        }
    },
    watch: {
        show(newVal){
            this.requestData();
        }
    },
    mounted(){
        // 请求数据
        this.requestData();
    },
    activated(){
        //每一次进入页面，都需要判断哪个导航选中
        this.show = this.$route.query.flag || 'playing';
    }
}
</script>

<style scoped>
#films{
    padding: 0 15px;
    width: 100%;
    box-sizing: border-box;
}
.nav{
    width: 100%;
    height: 50px;
    display: flex;
    padding-top: 15px;
    box-sizing: border-box;
}
.nav .nav-item{
    flex: 1;
    text-align: center;
    line-height: 20px;
    border-bottom: 1px solid #f78360;
    font-size: 16px; 
    color: #333;
}
.nav .nav-item.active{
    border-bottom: 4px solid #f78360;
    color: #f78360;
}
</style>
