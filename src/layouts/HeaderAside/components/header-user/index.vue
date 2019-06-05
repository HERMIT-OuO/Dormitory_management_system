<template>
  <el-dropdown size="small" class="d2-mr">
    <span class="btn-text">{{username ? `你好，${username}` : '未登录'}}</span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item @click.native="logOff">
        <d2-icon name="power-off" class="d2-mr-5"/>
        注销
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import util from '@/libs/util'

export default {
  computed: {
    // ...mapState('d2admin/user', [
    //   'info'
    // ])
  
    
  },
  data:function(){
		return{
			username:''
		}
	},
  methods: {
    ...mapActions('d2admin/account', [
      'logout'
    ]),
    getUsername(){
      this.username = util.cookies.get('user-name')
  
    },
    /**
     * @description 登出
     */
    logOff () {
      util.cookies.remove('user-name')
      util.cookies.remove('user-flag')
      util.cookies.remove('user-id')
      util.cookies.remove('user-dorm-id')
      util.cookies.remove('token')
      this.logout({
        confirm: true
      })
    }
  },
  mounted(){
    this.getUsername()
  }
}
</script>
