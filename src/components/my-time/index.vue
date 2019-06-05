<template>
<div>
    {{ nowDate }}
</div>
</template>

<script>
export default {
    name: 'MyTime',
    data: function(){
      return {
        nowDate:''
      }
    },
    methods: {
      getNewTime(){
            var _this = this;   //声明一个变量指向Vue实例this，保证作用域一致
            this.timer = setInterval(function () {
            var temp = new Date();    //修改数据date
            var m = temp.getMonth()+1
            _this.nowDate = temp.getFullYear() + '-' + m + '-' 
            + temp.getDate() + '   ' + temp.getHours() + ':' + temp.getMinutes() + ':' + temp.getSeconds()
            },1000);
        } 
    },
    mounted(){
        this.getNewTime()
    },
    beforeDestory:function () { //清除定时器
        if (this.timer){
            clearInterval(this.timer);  //在Vue实例销毁前，清除定时器
        }
    }
}
</script>
