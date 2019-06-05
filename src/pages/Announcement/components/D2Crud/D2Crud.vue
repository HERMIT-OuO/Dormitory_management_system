<template>
  <div class="d2-crud">
    <!-- 使用方法请参考文档和示例 -->
    <!-- 文档： https://d2-projects.github.io/d2-admin-doc/zh/ecosystem-d2-crud/ -->
    <!-- 示例： https://d2-projects.github.io/d2-admin/#/demo/d2-crud/index -->
    <d2-crud
      ref="d2Crud"
      :columns="columns"
      :data="data"
      :options = "options"
      title="已发公告"
      selection-row
      index-row
      add-title="添加学生"
      :add-template = "addTemplate"
      :edit-template= "addTemplate"
      :rowHandle= "rowHandle"
      :add-rules= "addRules"
      :form-options= "formOptions"
      @row-add= "handleRowAdd"
      @row-edit= "handleRowEdit"
      @row-remove= "handleRowRemove"
      @dialog-cancel= "handleDialogCancel"
      @selection-change= "handleSelectionChange">
      <el-button slot="header"  @click="addRow" style="margin-bottom:5px;" >添加公告</el-button>
    </d2-crud>
  </div>
</template>


<script>
import Vue from 'vue'
import D2Crud from '@d2-projects/d2-crud'
import dayjs from 'dayjs'
import axios from 'axios'
import Qs from 'qs'
import util from '@/libs/util'

Vue.use(D2Crud)


export default {
  data:function(){
    return {
      columns: [
        {
          title: '日期',
          key: 'date',
          width: '180',
          sortable:true,
        },
        {
          title: '发布人',
          key:'name',
          width:'180'
        },
        {
          title: '内容',
          key: 'text',
          width:'1000'
        },
      ],
      options:{
        stripe:true,
        highlightCurrentRow:true
      },
      data: [
        
      ],
      addButton: {
        icon: 'el-icon-plus',
        size: 'small'
      },
      rowHandle: {
        columnHeader: '编辑',
        edit: {
          icon: 'el-icon-edit',
          text: '编辑',
          size: 'small'
        },
        remove: {
          icon: 'el-icon-delete',
          size: 'small',
          fixed: 'right',
          confirm: true
        }
      },
      addTemplate: {
        id:{
          title:'ID',
          value: 3 ,
          component:{
            span:0
          } 
        },
        date: {
          title: '日期',
          value: dayjs().format('YYYY-MM-DD'),
          component: {
            span: 12
          }
        },
        text: {
          title: '内容',
          value: '',
          component: {
            span: 24
          }
        },
        name:{
          title:'发布人',
          value: util.cookies.get("user-name"),
          component: {
            span: 12
          }
        }
      },
      addRules: {
        date: [ { required: true, message: '请输入日期', trigger: 'blur' } ],
        text: [ { required: true, message: '请输入内容', trigger: 'blur' } ],
        name: [ { required: true, message: '请输入发布人', trigger: 'blur' } ]
      },
      formOptions: {
        labelWidth: '80px',
        labelPosition: 'left',
        saveLoading: false,
        gutter: 20
      },
      mylist:{}
    }
  },
  methods: {
    handleRowAdd (row, done) {
      this.formOptions.saveLoading = true
      setTimeout(() => {
        console.log(row)
        this.$message({
          message: '保存成功',
          type: 'success'
        });
        //获取当前data长度
        var len = Object.keys(this.data).length
        //写入row
        done({id:len+1})
        //将row压入data
        this.data.push(row)
        console.log(this.data)
        //调用函数
        this.sendNewRow(row)
        this.formOptions.saveLoading = false
      }, 300);
    },
    handleRowEdit ({index, row}, done) {
      this.formOptions.saveLoading = true
      setTimeout(() => {
        //console.log(index)
        //console.log(row)
        this.$message({
          message: '编辑成功',
          type: 'success'
        })
        done()
        this.alterMyRow(row)
        this.formOptions.saveLoading = false
      }, 300)
    },
    handleRowRemove ({index, row}, done) {
      setTimeout(() => {
        console.log(index)
        console.log(row)
        this.$message({
          message: '删除成功',
          type: 'success'
        })
        done()
        this.delMyRow(row.id)
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
    getMyData(){
      var _this = this
      axios.get('http://localhost:8080/GetAnn')
        .then(function (response) {
          // console.log(response)
          _this.data = response.data
          //console.log(Object.keys(_this.data).length)
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    sendMyData(){
      //获取处理过后的data
      var _this = this
      axios.get('http://localhost:8080/RecAnn?data='+this.data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    sendNewRow(newRow){
      //添加新一行时，只发送新行的数据
      // console.log(newRow)
      axios.post('http://localhost:8080/AddAnnRow',Qs.stringify(newRow))
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    alterMyRow(newRow){
      //修改某一行，只发送当前行的数据
      console.log(newRow)
      axios.post('http://localhost:8080/AlterAnnRow',Qs.stringify(newRow))
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    delMyRow(ID){
      //删除某一行，获取当前行的ID，
      axios.post('http://localhost:8080/DelAnnRow',Qs.stringify({id:ID}))
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log('删除了ID：'+ID)
      
    },
    addRow(){
      this.$refs.d2Crud.showDialog({
        mode: 'add'
      })
    }
  },
  mounted(){
    this.getMyData();
  },
  updated () {
    
  }
}

</script>
