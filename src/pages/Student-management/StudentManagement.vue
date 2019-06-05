<template>
  <!-- d2-container 文档 https://doc.d2admin.fairyever.com/zh/sys-components/container.html -->
  <d2-container class="page-Student-management">
    <!-- <template slot="header">Student-management</template> -->
    
    <d2-crud v-if="!flag"></d2-crud>
    <div v-if="flag" style=" text-align:center;">
      <el-row :gutter="20">
        <el-col :span="6" v-for="item in roommate" :key="item.name">
          <el-card class="box-card">
            <div slot="header" class="clearfix index-chart-title">
              <p> 宿舍成员 </p>
            </div>
            <div>
            <p>姓名： {{item.name}}</p>
            
            <p>学号： {{item.id}}</p>
            
            <p>当前密码： {{item.password}}</p>
            
            <p>联系方式： {{item.tel}}</p>
            
            <p>专业： {{item.major}}</p>

            <p>宿舍：{{ item.dorm_id }}</p>
            
            <p>身份 ： {{ item.flag }}</p>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <template slot="footer"><MyTime></MyTime> </template>


  </d2-container>
</template>

<script>
// 组件
import D2Crud from './components/D2Crud/index'
import MyTime from '../../components/my-time'
import util from '@/libs/util'
import axios from 'axios'
import Qs from 'qs'

// 请删除下面代码中你不需要的部分
export default {
  name: 'Student-management',
  components: {
    D2Crud,
    MyTime
  },
  // 数据
  data () {
    return {
        flag : util.cookies.get('user-flag'),
        roommate:{},
    }
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 生命周期钩子
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {
    this.getMyRoommate()
  },
  beforeUpdate () {},
  updated () {},
  activated () {},
  deactivated () {},
  beforeDestroy () {},
  destroyed () {},
  // 事件处理方法
  methods: {
    getMyRoommate(){
      var _this = this
       axios.post('http://localhost:8080/GetRoommate',Qs.stringify({dormid:util.cookies.get("user-dorm-id")}))
        .then(function (response) {
          console.log(response)
          _this.roommate = response.data
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
</script>

<style lang="scss" scoped>
@import './StudentManagement.scss';
</style>
