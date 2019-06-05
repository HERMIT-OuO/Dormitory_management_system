<template>
  <div class="tag-message-list">
    <basic-container>
        <el-card class="box-card">
          <div slot="header" class="clearfix index-chart-title">
            <p style=" font-weight: bolder">公告栏</p>
          </div>
          <div>
            <div class="message-item" v-for="message in messageList.slice(0, 7)"  :key="message.title">
              <a href="##" class="title">
                {{message.text}}
              </a>
              <div class="date">{{message.date}}</div>
            </div>
            <br>
            <div style="text-align: center;">
            <el-button  type="primary"  @click="allAnnV=true" > 查看全部公告</el-button>
            </div>
          </div>
        </el-card>

    </basic-container>

    <el-dialog title="全部公告" :visible.sync="allAnnV">
      <div class="message-item" v-for="message in messageList"  :key="message.title">
        <a href="##" class="title" >
          {{message.text}}
        </a>
        <div class="date">{{message.date}}</div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import BasicContainer from '@vue-materials/basic-container';
import axios from 'axios'

export default {
  components: { BasicContainer },
  name: 'TagMessageList',
  data() {
    return {
      activeTab: 'message',
      messageList: [
        {}
      ],
      allAnnV:false
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab.name);
    },
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
  mounted(){
    this.getMyData()
  }
};
</script>
<style scoped lang="scss">
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
</style>
