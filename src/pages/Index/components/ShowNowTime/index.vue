<template>
    <div>
        <basic-container >
            <el-card class="box-card">
              <!-- <div slot="header" class="clearfix index-chart-title">
                <p style=" font-weight: bolder">日历</p>
              </div> -->
              <div>
                    <el-calendar :range="['2019-05-13', '2019-06-09']" class="el-calendar__title">
                    </el-calendar>
                    <!-- v-model="value" -->
                    <!-- <MyTime></MyTime> -->
              </div>
            </el-card>
        </basic-container>
    </div>
</template>


<script>
import BasicContainer from '@vue-materials/basic-container';
import MyTime from '../../../../components/my-time'

export default {
    components: { MyTime , BasicContainer},
    name: 'ShowNowTime',
    data () {
        return {
            value : new Date()
        }
    }
}
</script>

<style>
</style>
