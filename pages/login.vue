<template>
  <div>
    <div :style="contentMainLayout">
      <div class="container">
        <img src="~static/img/login-bg.jpeg" class="login-bg">
        <div class="login-cover"></div>
      </div>
      <div class="login-main">
        <div class="login-content">
          <div class="login-title">
            <div>棉花糖智慧校园</div>
            <div class="login-title-sub">Online System</div>
          </div>
          <div class="login-content-form-main">
            <!--<div class="pull-left login-form-tab">
              <div class="login-form-tab-top">
                <span class="login-form-tab-word">管理员</span>
              </div>
              <div class="login-form-tab-bottom">
                <span class="login-form-tab-word">教师</span>
              </div>
            </div>-->
            <div>
              <div class="pull-left login-form-input-item">
                <div class="login-content-form-main-top">
                <span v-if="showStudent == true" @click="changeRole('admin')">
                  <i class="fa fa-indent"></i>
                  <label>切换为管理员</label>
                </span>
                  <span v-if="showAdmin == true" @click="changeRole('teacher')">
                  <i class="fa fa-indent"></i>
                  <label>切换为教师</label>
                </span>
                </div>
                <div v-if="showAdmin == true" class="login-form-input-content">
                  <div>
                    <Input prefix="ios-contact-outline" placeholder="用户名" size="large" style="width: 60%" />
                  </div>
                  <div class="margin-top-20">
                    <Input prefix="ios-unlock-outline" placeholder="密码" size="large" style="width: 60%" />
                  </div>
                  <div class="margin-top-20">
                    <Button type="success" size="large" ghost style="width: 60%" >登录</Button>
                  </div>
                </div>

                <div v-if="showStudent == true" class="login-form-input-content">
                  <div v-if="teacherloginType == 'user'">
                    <div>
                      <Input prefix="ios-contact-outline" placeholder="用户名/手机号" size="large" style="width: 60%" />
                    </div>
                    <div class="margin-top-20">
                      <Input prefix="ios-unlock-outline" placeholder="密码" size="large" style="width: 60%" />
                    </div>
                  </div>

                  <div v-if="teacherloginType == 'teacherNo'">
                    <div>
                      <Input prefix="ios-home-outline" placeholder="学校编号" size="large" style="width: 60%" />
                    </div>
                    <div class="margin-top-20">
                      <Input prefix="ios-contact-outline" placeholder="工号" size="large" style="width: 60%" />
                    </div>
                    <div class="margin-top-20">
                      <Input prefix="ios-unlock-outline" placeholder="密码" size="large" style="width: 60%" />
                    </div>
                  </div>

                  <div v-if="teacherloginType == 'idcard'">
                    <div>
                      <Input prefix="ios-contact-outline" placeholder="身份证号码" size="large" style="width: 60%" />
                    </div>
                    <div class="margin-top-20">
                      <Input prefix="ios-unlock-outline" placeholder="密码" size="large" style="width: 60%" />
                    </div>
                  </div>

                  <div class="margin-top-20">
                    <Button type="success" size="large" ghost style="width: 60%" @click="login()">登录</Button>
                  </div>
                  <Divider class="login-three-login">
                    <span class="color-success font-size-12">更多登录方式</span>
                  </Divider>
                  <div>
                    <span class="login-three-item">
                      <Tooltip content="用户名/手机号码" placement="bottom">
                        <i class="fa fa-user fa-2x" @click="changeTeacherLoginType('user')"></i>
                      </Tooltip>
                    </span>
                    <span class="login-three-item">
                      <Tooltip content="身份证" placement="bottom">
                        <i class="fa fa-id-card-o fa-2x" @click="changeTeacherLoginType('idcard')"></i>
                      </Tooltip>
                    </span>
                    <span class="login-three-item">
                      <Tooltip content="工号" placement="bottom">
                        <i class="fa fa-id-badge fa-2x" @click="changeTeacherLoginType('teacherNo')"></i>
                      </Tooltip>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="login-form-sel-item">
              <div class="pull-left vertical-line"></div>
              <div>
                <div class="login-form-sel-img">
                  <div>
                    <img src="~static/img/WechatIMG1.png">
                  </div>
                  <div class="margin-top-30">
                    <img src="~static/img/WechatIMG2.png">
                  </div>
                </div>
              </div>
              <div class="clearfix"></div>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
      <div class="login-copyright">
        <div>
          <a href="javascript:;">官方网站</a>
          |
          <a href="javascript:;">在线客服</a>
          |
          <a href="javascript:;">辽ICP备12008717号</a>
        </div>
        <div class="margin-top-5">
          大连网月科技股份有限公司 © 版权所有
        </div>
      </div>
    </div>
    <!--<div :style="contentMainLayout">
      <div class="container">
        <img src="~static/img/login-bg.jpeg" class="login-bg">
        <div class="login-cover"></div>
      </div>
      <div class="login-main">
        <div class="login-content">
          <div class="login-title">
            <div>棉花糖智慧校园</div>
            <div class="login-title-sub">Online System</div>
          </div>
          <div class="login-content-form-main">
            &lt;!&ndash;<div class="pull-left login-form-tab">
              <div class="login-form-tab-top">
                <span class="login-form-tab-word">管理员</span>
              </div>
              <div class="login-form-tab-bottom">
                <span class="login-form-tab-word">教师</span>
              </div>
            </div>&ndash;&gt;
            <div>
              <div class="pull-left login-form-input-item">
                <div class="login-content-form-main-top">
                <span v-if="showStudent == true" @click="changeRole('admin')">
                  <i class="fa fa-indent"></i>
                  <label>切换为管理员</label>
                </span>
                  <span v-if="showAdmin == true" @click="changeRole('student')">
                  <i class="fa fa-indent"></i>
                  <label>切换为教师</label>
                </span>
                </div>
                <div v-if="showAdmin == true" class="login-form-input-content">
                  <div>
                    <Input prefix="ios-contact-outline" placeholder="用户名" size="large" style="width: 60%" />
                  </div>
                  <div class="margin-top-20">
                    <Input prefix="ios-unlock-outline" placeholder="密码" size="large" style="width: 60%" />
                  </div>
                  <div class="margin-top-20">
                    <Button type="success" size="large" ghost style="width: 60%" >登录</Button>
                  </div>
                </div>

                <div v-if="showStudent == true" class="login-form-input-content">
                  <div>
                    <Input prefix="ios-contact-outline" placeholder="用户名/手机号" size="large" style="width: 60%" />
                  </div>
                  <div class="margin-top-20">
                    <Input prefix="ios-unlock-outline" placeholder="密码" size="large" style="width: 60%" />
                  </div>
                  <div class="margin-top-20">
                    <Input prefix="ios-unlock-outline" placeholder="密码" size="large" style="width: 60%" />
                  </div>
                  <div class="margin-top-20">
                    <Button type="success" size="large" ghost style="width: 60%" >登录</Button>
                  </div>
                  <Divider class="login-three-login">
                    <span class="color-success font-size-12">更多登录方式</span>
                  </Divider>
                  <div>
                  <span class="login-three-item">
                    <i class="fa fa-user fa-2x"></i>
                  </span>
                    <span class="login-three-item">
                    <i class="fa fa-id-card-o fa-2x"></i>
                  </span>
                    <span class="login-three-item">
                    <i class="fa fa-id-badge fa-2x"></i>
                  </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="login-form-sel-item">
              <div class="pull-left vertical-line"></div>
              <div>
                <div class="login-form-sel-img">
                  <div>
                    <img src="~static/img/WechatIMG1.png">
                  </div>
                  <div class="margin-top-30">
                    <img src="~static/img/WechatIMG2.png">
                  </div>
                </div>
              </div>
              <div class="clearfix"></div>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="login-copyright">
      <div>
        <a href="javascript:;">官方网站</a>
        |
        <a href="javascript:;">在线客服</a>
        |
        <a href="javascript:;">辽ICP备12008717号</a>
      </div>
      <div class="margin-top-5">
        大连网月科技股份有限公司 © 版权所有
      </div>
    </div>-->
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  layout:'fullScreenLayout',
  components: {
    Logo
  },
  data () {
    return {
      teacherloginType: 'user',
      showStudent: true,
      showAdmin: false,
      contentMainLayout: {
        'height': '',
        'background': '#dddddd',
        'overflow-y': 'auto'
      }
    }
  },
  mounted() {
    // 注：window.onresize只能在项目内触发1次
    var _self = this;
    if (process.browser) {
      window.onresize = function () {
        _self.hh();
      }
    }
  },
  created(){
    this.hh();
  },
  methods: {
    hh(){
      if (process.browser) {
        this.contentMainLayout.height = window.innerHeight + 50 + 'px';
      }
    },
    changeRole(event){
      if(event == 'teacher'){
        this.showStudent = true;
        this.showAdmin = false;
      }
      if(event == 'admin'){
        this.showStudent = false;
        this.showAdmin = true;
      }
    },
    changeTeacherLoginType(event){
      this.teacherloginType = event;
    },
    login(){
      if(this.teacherloginType == 'user'){
        this.$Message.success("登录方式为 用户名/手机号");
      }
      if(this.teacherloginType == 'idcard'){
        this.$Message.success("登录方式为 身份证");
      }
      if(this.teacherloginType == 'teacherNo'){
        this.$Message.success("登录方式为 工号");
      }
    }
  }
}
</script>

<style scoped>
.container{
  padding:0px 0px;
}
.login-bg{
  position: absolute;
  min-height: 100%;
  width: 100%;
  height: 100%;
  width: 100%;
  z-index: 1;
}
.login-cover{
  position: absolute;
  background: #808695;
  height: 100%;
  width: 100%;
  filter:alpha(opacity=80);
  -moz-opacity:0.8;
  -khtml-opacity: 0.8;
  opacity: 0.8;
  z-index: 2;
}
.login-main{
  position: relative;
  z-index: 3;
}
.login-content{
  width: 800px;
  margin: 80px auto;
}
.login-title{
  height:50px;
  line-height: 50px;
  color: #ffffff;
  font-size: 45px;
  text-align: center;
}
.login-title-sub{
  font-size: 25px;
  text-align: center;
}
.login-content-form-main{
  margin-top: 70px;
  height: 400px;
  background: #ffffff;
  filter:alpha(opacity=80);
  -moz-opacity:0.8;
  -khtml-opacity: 0.8;
  opacity: 0.8;
}
.login-form-tab{
  width: 50px;
  height: 100%;
}
.login-form-tab-top{
  height: 200px;
  color: #ffffff;
  font-weight: bold;
  background: #808695;
}
.login-form-tab-bottom{
  height: 200px;
  color: #ffffff;
  font-weight: bold;
  background: #f8f8f9;
}
.login-form-tab-word{
  margin-left: 15px;
  margin-top: 55px;
  display: inline-block;
  width: 15px;
  word-wrap: break-word;/*英文的时候需要加上这句，自动换行*/
  word-break:break-all;
  font-size: 18px;
  word-wrap: break-word;/*英文的时候需要加上这句，自动换行*/
  word-break:break-all;
}
.login-form-input-item{
  width: 550px;
  text-align: center;
}
.login-form-sel-item{
  margin-left: 550px;
}
.login-form-input-content{
  margin-top: 50px;
}
.vertical-line{
  background: #19be6b;
  width: 1px;
  height: 400px;
}
.login-three-login{
  margin-top: 20px;
}
.login-three-item{
  margin:0px 40px;
}
.login-content-form-main-top{
  text-align: right;
}
.login-content-form-main-top span{
  display: inline-block;
  padding:5px 15px 5px 0px;
  height: 25px;
  line-height: 25px;
  font-weight: bold;
}
.login-copyright{
  /*position: absolute;
  top: 640px;
  height: 60px;
  width: 100%;
  z-index: 3;
  color: #ffffff;*/
  position: relative;
  text-align: center;
  padding:10px 0px;
  font-size: 15px;
  z-index: 2;
  bottom: 50px;
  color: #ffffff;
}
.login-copyright a{
  color: #ffffff;
  padding:5px 15px;
}
.login-form-sel-img{
  text-align: center;
  padding-top: 60px;
}
</style>
