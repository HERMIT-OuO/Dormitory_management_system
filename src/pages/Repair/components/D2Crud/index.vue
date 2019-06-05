<template>
  <div >
    <!-- title="D2 CRUD" -->
    <!-- add-mode
      :add-button="addButton" 
      :form-rules="formRules"
      -->
      <!-- .filter(data => data.name.includes(myname) && data.id.includes(myid) && String(data.dorm_id).includes(mydormid)) -->
    <d2-crud
      ref="d2Crud"
      :columns="columns"
      :data="data.filter(data => String(data.dormid).includes(mydormid) && data.text.includes(mytext) )"
      :options = "options"
      selection-row
      index-row
      add-title="添加学生"
      :rowHandle="rowHandle"
      :form-options="formOptions"
      @custom-emit-1="handleCustomEvent"
      @row-remove= "handleRowRemove"
      @dialog-cancel="handleDialogCancel"
      @selection-change="handleSelectionChange">
      <div slot="header" class="table_header">
          <el-input v-model="mytext" placeholder="请输入要查找的保修内容" suffix-icon="el-icon-search" style="width:15em;margin-right:1.5em;"></el-input>
          <el-input v-model="mydormid"  placeholder="请输入要查找的宿舍号" suffix-icon="el-icon-search" style="width:15em;margin-right:1.5em;"></el-input>
      </div>
      </d2-crud>
  </div>
</template>

<style>
.table_header{
  margin-bottom: 1em;
  /* text-align: right; */
}

</style>

<script>
import Vue from 'vue'
import D2Crud from '@d2-projects/d2-crud'
import axios from 'axios'
import Qs from 'qs'

Vue.use(D2Crud)


export default {
  data() {
    return {
      mydormid:'',
      mytext:'',
      columns: [
        {
          title: '学号',
          key: 'userid',
          width: '250'
        },
        {
          title: '申诉人',
          key: 'username',
          width: '180'
        },
        {
          title: '宿舍号',
          key: 'dormid',
          width: '180'
        },
        {
          title: '报修内容',
          key: 'text',
          width: '300'
        },
        {
          title: '状态',
          key: 'statues',
          width: '180',
          filters: [
            { text: '待处理', value: '待处理' },
            { text: '正在处理', value: '正在处理' },
            { text: '已处理', value: '已处理' }
          ],
          filterMethod (value, row) {
            return row.statues === value
          },
          filterPlacement: 'bottom-end'
        },
        {
          title:'时间',
          key:'time',
          width:'180'
        }
      ],
      data: [
        
      ],
      options: {
        stripe:true,
        highlightCurrentRow:true,
        border:true
      },
      rowHandle: {
        columnHeader: '操作',
        custom: [
          {
            text: '更改状态',
            type: 'primary',
            size: 'small',
            fixed: 'left',
            icon: 'el-icon-circle-check',
            emit: 'custom-emit-1'
          }
        ],
        remove: {
          icon: 'el-icon-delete',
          size: 'small',
          fixed: 'right',
          confirm: true
        }
      },
      formOptions: {
        labelWidth: '80px',
        labelPosition: 'left',
        saveLoading: false,
        gutter: 20
      }
    }
  },
  filters:{
    searchStudent:function(arr){
      var newData = []
      for(var i=0;i<arr.length;i++){
        if(arr[i].id.indexOf(myid))
          newData.pust(arr[i])  
      }
      return newData
    }
  },
  methods: {
     // 普通的新增
    addRow () {
      this.$refs.d2Crud.showDialog({
        mode: 'add'
      })
    },
     handleCustomEvent ({index, row}) {
      if(row.statues=='待处理')
        row.statues='正在处理'
      else if(row.statues=='正在处理')
        row.statues='已完成'
      else
        row.statues='待处理'
      this.alterApp(row)
    },
    handleRowRemove ({index, row},done) {
      setTimeout(() => {
        this.$message({
          message: '删除成功',
          type: 'success'
        })
        done()
        this.delApp(row)
      }, 300)
    },
    handleDialogCancel (done) {
      this.$message({
        message: '取消保存',
        type: 'warning'
      });
      done()
    },
    handleSelectionChange (selection) {
      console.log(selection)
    },
    getAllApp(){
      var _this = this
      axios.get('http://localhost:8080/GetAllApp')
        .then(function (response) {
          console.log(response)
          _this.data = response.data
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    alterApp(row){
      axios.post('http://localhost:8080/AlterAppRow',Qs.stringify(row))
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    delApp(row){
      //删除某一行，获取当前行的ID，
      axios.post('http://localhost:8080/DelAppRow',Qs.stringify({text:row.text}))
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      
    },
  },
  mounted(){
    this.getAllApp()
  }
}

</script>
