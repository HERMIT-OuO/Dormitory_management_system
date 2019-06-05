<template>
  <div >
    <!-- title="D2 CRUD" -->
    <!-- add-mode
      :add-button="addButton" 
      :form-rules="formRules"
      -->
      <!-- .filter(data => data.name.includes(myname) && data.id.includes(myid) && String(data.dorm_id).includes(mydormid)) -->
      <!-- && String(data.id).includes(util.cookies.get('user-id')) -->
    <d2-crud
      ref="d2Crud"
      :columns="columns"
      :data="data.filter(data =>  String(data.userid).includes(myid) && data.text.includes(mytext) )"
      :options = "options"
      selection-row
      index-row
      add-title="申请报修"
      :add-template = "addTemplate"
      :edit-template= "addTemplate"
      :add-rules= "addRules"
      :rowHandle= "rowHandle"
      :form-options= "formOptions"
      :edit-rules = "addRules"
      @row-add= "handleRowAdd"
      @row-edit= "handleRowEdit"
      @row-remove= "handleRowRemove"
      @dialog-cancel="handleDialogCancel"
      @selection-change="handleSelectionChange">
      <div slot="header" class="table_header">
          <el-input v-model="mytext" placeholder="请输入要查找的保修内容" suffix-icon="el-icon-search" style="width:15em;margin-right:1.5em;"></el-input>
          <el-button  @click="addRow"  icon="el-icon-circle-plus-outline"   style="margin-left:65em;">申请报修</el-button>
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
import util from '@/libs/util'

Vue.use(D2Crud)


export default {
  data() {
    return {
      myid:'',
      mytext:'',
      nowuser:{},
      columns: [
        {
          title: '学号',
          key: 'userid',
          width: '150'
        },
        {
          title: '申诉人',
          key: 'username',
          width: '100'
        },
        {
          title: '宿舍号',
          key: 'dormid',
          width: '100'
        },
        {
          title: '报修内容',
          key: 'text',
          width: '350'
        },
        {
          title: '状态',
          key: 'statues',
          width: '100',
          filters: [
            { text: '待处理', value: '待处理' },
            { text: '正在处理', value: '正在处理' },
            { text: '已处理', value: '已处理' }
          ],
          filterMethod (value, row) {
            return row.statues === value
          },
          filterPlacement: 'bottom-end'
        }
      ],
      data: [
        
      ],
      addTemplate: {
        userid: {
          title: '学号',
          value: util.cookies.get('user-id'),
          component: {
            span: 18
          }
        },
        username: {
          title: '姓名',
          value: util.cookies.get('user-name'),
          component: {
            span: 18
          }
        },
        dormid: {
          title: '宿舍号',
          value: util.cookies.get('user-dorm-id'),
          component: {
            span: 18
          }
        },
        text: {
          title: '报修内容',
          value: '',
          component: {
            span:20
          }
        },
      },
      addRules: {
        userid: [ { required: true, message: '请输入学号', trigger: 'blur' } ],
        username: [ { required: true, message: '请输入姓名', trigger: 'blur' } ],
        text:[{ required: true, message: '请输入报修内容', trigger: 'blur' }],
        dormid:[ {required: true, message: '请输入宿舍号', trigger: 'blur'} ]
      },
      options: {
        stripe:true,
        highlightCurrentRow:true,
        border:true
      },
      rowHandle: {
        columnHeader: '操作',
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
  methods: {
    addRow () {
      this.$refs.d2Crud.showDialog({
        mode: 'add'
      })
    },
    handleRowAdd (row, done) {
      this.formOptions.saveLoading = true
      setTimeout(() => {
        console.log(row)
        this.$message({
          message: '保存成功',
          type: 'success'
        });
        done({statues:'待处理'})
        this.addApp(row)
        this.formOptions.saveLoading = false
      }, 300);
    },
    handleRowEdit ({index, row}, done) {
      this.formOptions.saveLoading = true
      setTimeout(() => {
        this.$message({
          message: '编辑成功',
          type: 'success'
        })
        done()
        this.alterApp(row.text,temp)
        this.formOptions.saveLoading = false
      }, 300)
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
    getStudent(userid){
      var _this = this
      axios.post('http://localhost:8080/GetOneStudent',Qs.stringify({id:userid}))
        .then(function (response) {
          console.log(response)
          _this.nowuser = response.data
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    addApp(row){
      var _this = this
      axios.post('http://localhost:8080/AddAppRow',Qs.stringify(row))
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getAllStudent(){
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
    alterApp(text,temp){
      axios.post('http://localhost:8080/AlterAppText',Qs.stringify({text:text,temp:temp}))
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
    this.getAllStudent()
    this.myid = util.cookies.get('user-id')
    this.getStudent(this.myid)
  }
}

</script>
