export default {
    install(Vue){
        //日期过滤器
        Vue.filter('formatDate', (value, ...rest)=>{
            let date = new Date(value);
            // console.log(date);
            let mouth = date.getMonth()+1;
            let day = date.getDate();
            return mouth+'月'+day+'日';
        })
        //
        //
    }
}