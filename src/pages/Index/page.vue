<template>
  <d2-container class="page">
    <el-row>
      <el-col :span="8" v-if="!flag">
        <RingChart></RingChart>
      </el-col>
      <el-col :span="8" v-if="flag">
        <el-card class="box-card">
          <div slot="header" class="clearfix index-chart-title">
            <p style=" font-weight: bolder">我的信息</p>
          </div>
          <div class="index_user_card" style=" text-align: center; ">
            <p>姓名： {{user.name}}</p>
            
            <p>学号： {{user.id}}</p>
            
            <p>当前密码： {{user.password}}</p>
            
            <p>联系方式： {{user.tel}}</p>
            
            <p>专业： {{user.major}}</p>

            <p>宿舍：{{ user.dorm_id }}</p>
            
            <p>身份 ： {{ user.flag }}</p>
            <el-divider></el-divider>
            <el-button  type="primary" @click="alter = true" >修改信息</el-button>
          </div>
          
        </el-card>

        

      </el-col>
      <el-col :span="8">
        <TagMessageList></TagMessageList>
      </el-col>
      <el-col :span="8" >
        <ShowNowTime></ShowNowTime>
      </el-col>
    </el-row>
    <LineChart v-if="!flag"></LineChart>


    <el-dialog title="个人信息修改" :visible.sync="alter">
      <el-form>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="user.name" autocomplete="off" placeholder="请输入姓名" ></el-input>
        </el-form-item>
        <el-form-item label="当前密码" :label-width="formLabelWidth">
          <el-input v-model="user.password" autocomplete="off" placeholder="请输入新密码" ></el-input>
        </el-form-item>
        <el-form-item label="联系方式" :label-width="formLabelWidth">
          <el-input v-model="user.tel" autocomplete="off" placeholder="请输入联系方式" ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="alter = false">取 消</el-button>
        <el-button type="primary" @click="alterStudent" >确 定</el-button>
      </div>
    </el-dialog>


  </d2-container>
  



</template>




<script>
import D2HelpBtn from './components/d2-help-btn'
import D2Badge from './components/d2-badge'
import D2PageCover from './components/d2-page-cover'
import LineChart from './components/LineChart'
import RingChart from './components/RingChart'
import ShowNowTime from './components/ShowNowTime'
import TagMessageList from  './components/TagMessageList'
import util from '@/libs/util'
import axios from 'axios'
import Qs from 'qs'

export default {
  components: {
    D2HelpBtn,
    D2Badge,
    D2PageCover,
    LineChart,
    RingChart,
    TagMessageList,
    ShowNowTime
  },
  data () {
    return {
      filename: __filename,
      flag :'',
      flag2 :'',
      userid:util.cookies.get('user-id'),
      user:{},
      alter:false,
      formLabelWidth : '120px'
    }
  },
  methods:{
    getStudent(userid){
      var _this = this
      axios.post('http://localhost:8080/GetOneStudent',Qs.stringify({id:userid}))
        .then(function (response) {
          console.log(response)
          _this.user = response.data
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    alterStudent(){
      this.alter = false
      axios.post('http://localhost:8080/AlterStuRow',Qs.stringify(this.user))
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  
  mounted(){
    this.flag = util.cookies.get('user-flag'),
    this.getStudent(this.userid)
  }
}
</script>

<style lang="scss" scoped>
.index-chart-title{
  text-align: center;
}
.page {
  .page__logo {
    width: 120px;
  }
  .page__btn-group {
    color: $color-text-placehoder;
    font-size: 12px;
    margin-top: 0px;
    margin-bottom: 20px;
    span {
      color: $color-text-sub;
      &:hover {
        color: $color-text-main;
      }
    }
  }
}
</style>
