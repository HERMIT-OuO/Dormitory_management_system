<template>
  <div class="ring-chart">
    <basic-container >
      <el-card class="box-card">
          <div slot="header" class="clearfix index-chart-title">
            <p style=" font-weight: bolder">报修状况总览</p>
          </div>
          <div>
            <ve-ring :data="chartData" :settings="chartSettings"></ve-ring>
          </div>
      </el-card>
    </basic-container>
  </div>
</template>

<script>
import VeRing from 'v-charts/lib/ring';
import BasicContainer from '@vue-materials/basic-container';
import axios from 'axios'
import { constants } from 'crypto';

export default {
  components: { BasicContainer,VeRing },
  name: 'RingChart',
  data() {
    return {
      chartSettings: {
        dimension: '状态',
        metrics: '数量',
      },
      chartData: {
        columns: ['状态', '数量'],
        rows: [
          // { 状态: '正在处理', 数量: ''},
          // { 状态: '未处理', 数量: this.num2 },
        ]
      },
      num1:3,
      num2:4

    };
  },
  methods:{
    getData(){
      var _this = this
      axios.get('http://localhost:8080/GetRing')
        .then(function (response) {
          console.log(response.data)
          _this.num1 = response.data[0]
          _this.num2 = response.data[2]
          _this.chartData.rows.push({状态:'正在处理',数量:_this.num1})
          _this.chartData.rows.push({状态:'待处理',数量:_this.num2})
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  mounted(){
    this.getData()
  }
};
</script>

<style>
  .index-chart-title{
    text-align: center;
    height: 1em;
  }
</style>
