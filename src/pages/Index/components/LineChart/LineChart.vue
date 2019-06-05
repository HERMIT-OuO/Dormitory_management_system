<template>
  <div className="line-chart" style="text-align: center; ">
    <basic-container>
      <el-card class="box-card">
          <div slot="header" class="clearfix index-chart-title">
            <p style=" font-weight: bolder">报修数量趋势图</p>
          </div>
          <div>
            <ve-line :data="chartData" :settings="chartSettings"></ve-line>
          </div>
        </el-card>
    </basic-container>
  </div>
</template>

<script>
import VeLine from 'v-charts/lib/line'
import BasicContainer from '@vue-materials/basic-container'
import axios from 'axios'

export default {
  components: { VeLine, BasicContainer },
  name: 'LineChart',

  data() {
    return {}
  },

  created() {
    this.chartData = {
      columns: ['日期', '报修数量'],
      rows: [
        { '报修数量': 0, '日期': '5月31日' },
        { '报修数量': 0, '日期': '6月1日' },
        { '报修数量': 1, '日期': '6月2日' },
        { '报修数量': 1, '日期': '6月3日' },
        { '报修数量': 0, '日期': '6月4日' },
        
      ]
    }
    this.chartSettings = {
      metrics: ['报修数量'],
      dimension: ['日期']
    }
  },
  methods:{

    getData(){
        var _this = this
        axios.get('http://localhost:8080/GetLine')
          .then(function (response) {
            console.log(response.data)
            var num = response.data
            _this.chartData.rows.push({ '报修数量': num, '日期': '6月5日' })
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    },
  mounted(){
    this.getData()
  }
}

</script>

<style>
  .index-chart-title{
    text-align: center;
    height: 1em;
  }
</style>
