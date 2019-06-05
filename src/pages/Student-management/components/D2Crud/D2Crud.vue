<template>
  <div >
    <!-- title="D2 CRUD" -->
    <!-- add-mode
      :add-button="addButton" 
      :form-rules="formRules"
      -->
    <d2-crud
      ref="d2Crud"
      :columns="columns"
      :data="data.filter(data => data.name.includes(myname) && data.id.includes(myid) && String(data.dorm_id).includes(mydormid))"
      :options = "options"
      selection-row
      index-row
      add-title="添加学生"
      :add-template = "addTemplate"
      :add-rules="addRules"
      :rowHandle="rowHandle"
      :form-options="formOptions"
      :edit-rules = "addRules"
      :edit-template="addTemplate"
      @row-add="handleRowAdd"
      @row-edit="handleRowEdit"
      @row-remove="handleRowRemove"
      @dialog-cancel="handleDialogCancel"
      @selection-change="handleSelectionChange">
      <div slot="header" class="table_header">
          <el-input v-model="myid" placeholder="请输入要查找的学号" suffix-icon="el-icon-search" style="width:15em;margin-right:1.5em;"></el-input>
          <el-input v-model="myname"  placeholder="请输入要查找的姓名" suffix-icon="el-icon-search" style="width:15em;margin-right:1.5em;"></el-input>
          <el-input v-model="mydormid"  placeholder="请输入要查找的宿舍号" suffix-icon="el-icon-search" style="width:15em;margin-right:1.5em;"></el-input>
          <el-button   @click="addRow"  icon="el-icon-circle-plus-outline"   style="margin-left:40em;">添加学生</el-button>
          <el-upload :before-upload="handleUpload" action="default" style="display: inline-block; margin-left:1em">
            <el-button ><d2-icon name="file-o"/> 导入表格</el-button>
          </el-upload>
          <el-button @click="exportExcel" style="margin-left:1em">
            <d2-icon name="download"/>
            导出表格
          </el-button>
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
      myid:'',
      myname:'',
      mydormid:'',
      columns: [
        {
          title: '学号',
          key: 'id',
          width: '250'
        },
        {
          title: '姓名',
          key: 'name',
          width: '180'
        },
        {
          title: '宿舍号',
          key: 'dorm_id',
          width: '180'
        },
        {
          title: '性别',
          key: 'sex',
          width: '180',
          filters: [
            { text: '男', value: '男' },
            { text: '女', value: '女' }
          ],
          filterMethod (value, row) {
            return row.sex === value
          },
          filterPlacement: 'bottom-end'
        },
        {
          title: '专业',
          key: 'major',
          width: '250'
        },
        {
          title: '身份',
          key : 'flag',
          width : '180',
          filters: [
            { text: '舍员', value: '舍员' },
            { text: '舍长', value: '舍长' }
          ],
          filterMethod (value, row) {
            return row.flag === value
          },
          filterPlacement: 'bottom-end'
        }
      ],
      data: [
        
      ],
      table:{
        header:{},
        data:{}
      },
      options: {
        stripe:true,
        highlightCurrentRow:true,
        border:true
      },
      addButton: {
        icon: 'el-icon-plus',
        size: 'small'
      },
      rowHandle: {
        columnHeader: '学生管理',
        edit: {
          icon: 'el-icon-edit',
          text: '编辑',
          size: 'small',
        },
        remove: {
          icon: 'el-icon-delete',
          size: 'small',
          fixed: 'right',
          confirm: true,
        }
      },
      addTemplate: {
        id: {
          title: '学号',
          value: '',
          component: {
            span: 10
          }
        },
        sex:{
          title: '性别',
          value: '',
          component:{
            name: 'el-select',
            options: [
              {
                value: '男',
                label: '男'
              },
              {
                value: '女',
                label: '女'
              }
            ],
            clearable: true,
            span: 12
          }
        },
        name: {
          title: '姓名',
          value: '',
          component: {
            clearable: true,
            span: 10
          }
        },
        flag:{
          title: '身份',
          value:'',
          component: {
          name: 'el-select',
            options: [
              {
                value: '舍员',
                label: '舍员'
              },
              {
                value: '舍长',
                label: '舍长'
              }
            ],
            clearable: true,
            span: 12
          }
        },
        dorm_id: {
          title: '宿舍号',
          value: '',
          component: {
            span: 10
          }
        },
        major: {
          title : '专业',
          value: '',
          component:{
            span:10
          }
        },
        tel: {
          title: '联系方式',
          value: '',
          component: {
            span:10
          }
        },
        
      },
      addRules: {
        id: [ { required: true, message: '请输入学号', trigger: 'blur' } ],
        name: [ { required: true, message: '请输入姓名', trigger: 'blur' } ],
        sex: [ { required: true, message: '请选择性别', trigger: 'blur' } ],
        flag:[ { required: true, message: '请选择身份', trigger: 'blur' } ],
        major: [ { required: true, message: '请输入专业', trigger: 'blur' } ],
        tel:[{ required: true, message: '请输入电话号', trigger: 'blur' }],
        dorm_id:[ {required: true, message: '请输入宿舍号', trigger: 'blur'} ]
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
      //导出表格
    exportExcel(){
      const mycolumns = [
        {
          label: '姓名',
          prop: 'id'
        },
        {
          label: '姓名',
          prop: 'name'
        },
        {
          label: '宿舍号',
          prop: 'dorm_id'
        },
        {
          label: '性别',
          prop: 'sex'
        },
        {
          label: '专业',
          prop: 'major'
        },
       {
          label: '身份',
          prop: 'flag'
        }
      ]
      var _this = this
      console.log(this.data)
      this.$export.excel({
        columns: mycolumns,
        data: _this.data,
      })
        .then(() => {
          this.$message('导出表格成功')
        })
    },
      //导入表格
    handleUpload(file){
      this.$import.xlsx(file)
        .then(({ header, results }) => {
          this.table.columns = header.map(e => {
            return {
              label: e,
              prop: e
            }
          })
          this.table.data = results
          for(var i in results)
          {
            this.data.push(results[i])
          }
          this.uploadExcel(results)
        })
      return false
    },
      //上传多条数据
    uploadExcel(results){
      for(var i in results)
      {
        this.AddStudent(results[i])
      }
    },
      // 普通的新增
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
        done()
        this.AddStudent(row)
        this.formOptions.saveLoading = false
      }, 300);
    },
    handleRowEdit ({index, row}, done) {
      this.formOptions.saveLoading = true
      setTimeout(() => {
        console.log(index)
        console.log(row)
        this.$message({
          message: '编辑成功',
          type: 'success'
        })
        done()
        this.alterStudent(row)
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
        this.delStudent(row)
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
    getAllStudent(){
      var _this = this
      axios.get('http://localhost:8080/GetAllStudent')
        .then(function (response) {
          console.log(response)
          _this.data = response.data
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    AddStudent(newStudent){
      axios.post('http://localhost:8080/AddStuRow',Qs.stringify(newStudent))
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    alterStudent(newStudent){
      axios.post('http://localhost:8080/AlterStuRow',Qs.stringify(newStudent))
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    delStudent(ID){
      //删除某一行，获取当前行的ID，
      axios.post('http://localhost:8080/DelStuRow',Qs.stringify({id:ID.id}))
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log('删除了ID：'+ID)
      
    },
    findID(){

    },
  },
  mounted(){
    this.getAllStudent()
  }
}

</script>
