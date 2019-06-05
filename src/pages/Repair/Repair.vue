<template>
  <!-- d2-container 文档 https://doc.d2admin.fairyever.com/zh/sys-components/container.html -->
  <d2-container class="page-Repair">
    <D2Crud v-if="!flag"></D2Crud>
    <div v-if="flag" style=" text-align:center; " >
      <el-card class="box-card" style="width:80%; position: relative; left:10em; height: 48em; ">
        <div slot="header" class="clearfix index-chart-title">
            <p style=" font-weight: bolder">我的报修</p>
        </div>
        <MyCrud></MyCrud>
      </el-card>
    </div>
    <template slot="footer"><MyTime></MyTime> </template>
  </d2-container>
</template>

<script>
// 组件
import D2Crud from './components/D2Crud'
import MyTime from '../../components/my-time'
import util from '@/libs/util'
import axios from 'axios'
import MyCrud from './components/MyCrud'


// 请删除下面代码中你不需要的部分
export default {
  name: 'Repair',
  components: {
    D2Crud,
    MyTime,
    MyCrud
  },
  // 数据
  data () {
    return {
       flag : util.cookies.get('user-flag'),
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
  mounted () {},
  beforeUpdate () {},
  updated () {},
  activated () {},
  deactivated () {},
  beforeDestroy () {},
  destroyed () {},
  // 事件处理方法
  methods: {}
}
</script>

<style lang="scss" scoped>
@import './Repair.scss';
</style>
