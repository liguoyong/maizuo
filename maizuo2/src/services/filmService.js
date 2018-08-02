import axios from 'axios'
import API from '../api'

// 请求首页的轮播图数据
export function getHomeBannerData(){
return new Promise((resolve, reject)=>{
    axios.get(API.HOME_BANNER_API, {
        params: {
            __t: new Date().getTime()
        }
    })
    .then(response=>{
        // console.log(response);
        let data = response.data.data.billboards.map(item=>{
            return {
                id: item.id,
                imageUrl: item.imageUrl
            }
        })
        resolve(data);
    })
    .catch(error=>{
        console.log('请求失败');
    })
})
}

//请求正在热映的电影数据
export function getNowPlayingData(){
return new Promise((resolve, reject)=>{
    //发送请求
    axios.get(API.NOW_PLAYING_API, {
        params: {
            __t: new Date().getTime(),
            page: 1,
            count: 5
        }
    })
    .then(response=>{
        // console.log('成功');
        //处理请求成功的数据
        let data = response.data.data.films.map(item=>{
            return {
                name: item.name,
                id: item.id,
                cover: item.cover.origin,
                cinemaCount: item.cinemaCount,
                watchCount: item.watchCount,
                grade: item.grade
            }
        });
        resolve(data);
    })
    .catch(error=>{
        console.log('失败');
    })
})  
}
//导航影院接口时的影院接口
export function AtNowPlayingData(){
    return new Promise((resolve, reject)=>{
        //发送请求
        axios.get(API.NOW_PLAYING_API, {
            params: {
                __t: new Date().getTime(),
                page: 1,
                count: 7
            }
        })
        .then(response=>{
            // console.log('成功');
            //处理请求成功的数据
            let data = response.data.data.films.map(item=>{
                return {
                    name: item.name,
                    id: item.id,
                    intro:item.intro,
                    cover: item.cover.origin,
                    cinemaCount: item.cinemaCount,
                    watchCount: item.watchCount,
                    grade: item.grade
                }
            });
            resolve(data);
        })
        .catch(error=>{
            console.log('失败');
        })
    })  
    }
//请求即将上映的数据
export function getComingSoonData(){
return new Promise((resolve, reject)=>{
    // 请求
    axios.get(API.COMING_SOON_API, {
        params: {
            __t: new Date().getTime(), 
            page: 1,
            count:3 
        }
    })
    .then(response=>{
        let data = response.data.data.films.map(item=>{
            return {
                name: item.name,
                id: item.id,
                cover: item.cover.origin,
                premiereAt: item.premiereAt
            }
        })
        resolve(data);
    })
    .catch(error=>{
        console.log('失败');
    })
})
}
//影院即将上映的数据
export function AtComingSoonData(){
    return new Promise((resolve, reject)=>{
        // 请求
        axios.get(API.COMING_SOON_API, {
            params: {
                __t: new Date().getTime(), 
                page: 1,
                count:7 
            }
        })
        .then(response=>{
            let data = response.data.data.films.map(item=>{
                return {
                    name: item.name,
                    id: item.id,
                    cover: item.cover.origin,
                    intro:item.intro,
                    premiereAt: item.premiereAt
                }
            })
            resolve(data);
        })
        .catch(error=>{
            console.log('失败');
        })
    })
    }
//map地图电影院集合
export function CinemaDataApi(){
    return new Promise((resolve,reject)=>{
        axios.get(API.CINEMA_DATA_API,{
            params: {
                __t: new Date().getTime()
            }
        })
        .then(response=>{
            let data = response.data.data.cinemas;
            resolve(data);
        })
        .catch(error=>{
            console.log('失败');
        })
    })
}
