<template>
  <!-- d2-container 文档 https://doc.d2admin.fairyever.com/zh/sys-components/container.html -->
  <d2-container class="page-Announcement tag-message-list">
    <d2-crud v-if="!flag" />
    
    <div v-if="flag" style=" text-align: center; ">
      <el-card class="box-card" style="width:80%; position: relative; left:10em;">
        <div slot="header" class="clearfix index-chart-title">
            <p style=" font-weight: bolder">公告板</p>
        </div>
        <div class="message-item" v-for="message in messageList"  :key="message.title">
          <a href="##" class="title" >
            {{message.text}}
          </a>
          <div class="date">{{message.date}}</div>
        </div>
      </el-card>
    </div>
    <template slot="footer"><MyTime></MyTime></template>
  </d2-container>
</template>

<script>
// 组件
import D2Crud from './components/D2Crud/index'
import MyTime from '../../components/my-time'
import util from '@/libs/util'
import axios from 'axios'

// 请删除下面代码中你不需要的部分
export default {
  name: 'Announcement',
  components: {
    D2Crud,
    MyTime
  },
  // 数据
  data () {
    return {
      flag : util.cookies.get('user-flag'),
      messageList: {}
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
    this.getMyData()
  },
  beforeUpdate () {},
  updated () {},
  activated () {},
  deactivated () {},
  beforeDestroy () {},
  destroyed () {},
  // 事件处理方法
  methods: {
    getMyData(){
      var _this = this
      axios.get('http://localhost:8080/GetAnn')
        .then(function (response) {
          console.log(response)
          _this.messageList = response.data
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
}
</script>

<style lang="scss" scoped>
@import './Announcement.scss';
@import '~normalize.css/normalize.css';
.tag-message-list {
  .el-tabs__content {
    color: #666;
    font-size: 14px;
  }

  .message-item {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    border-bottom: 1px solid rgb(244, 244, 244);

    a.title {
      color: #666;
      text-decoration: none;
    }
    .date {
      font-size: 12px;
    }
  }
  .show-more {
    display: block;
    margin: 20px auto 0;
    padding: 0;
  }
}
.mycard{
  position: relative;
}
</style>
