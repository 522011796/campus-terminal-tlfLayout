<template>
  <div class="layout-main">
    <!--top layout-->
    <div class="layout-top">
      <div class="pull-left layout-menu-left">
        <span>
          <Avatar size="large" style="color: #f56a00;background-color: #fde3cf">U</Avatar>
        </span>
        <span>
          棉花糖校园
        </span>
      </div>
      <div class="pull-right layout-menu-right">
        <label>
          <i class="fa fa-volume-up" style="font-size: 15px;color: #808695"></i>
        </label>
        <label>
          <Badge dot :offset="[-5,3]">
            <i class="fa fa-bell-o" style="font-size: 15px;color: #808695"></i>
          </Badge>
        </label>
        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" class="avatar"/>
      </div>
      <div class="layout-menu-middle">
        <div>
          <Menu mode="horizontal" active-name="basic" class="layout-menu-item">
            <MenuItem name="basic" @click.native="getMenu('basic')">
              <Icon type="ios-paper" />
              {{ $t("menuTop.basic") }}
            </MenuItem>
            <MenuItem name="schoolWork" @click.native="getMenu('schoolWork')">
              <Icon type="ios-school" />
              {{ $t("menuTop.student") }}
            </MenuItem>
            <MenuItem name="aiManage" @click.native="getMenu('aiManage')">
              <Icon type="md-expand" />
              {{ $t("menuTop.aiManage") }}
            </MenuItem>
            <MenuItem name="attendManage" @click.native="getMenu('attendManage')">
              <Icon type="md-clock" />
              {{ $t("menuTop.attend") }}
            </MenuItem>
            <MenuItem name="bigData" @click.native="getMenu('bigData')">
              <Icon type="ios-stats" />
              {{ $t("menuTop.dataShow") }}
            </MenuItem>
            <MenuItem name="work" to="/work/work">
              <Icon type="ios-desktop" />
              {{ $t("menuTop.work") }}
            </MenuItem>
          </Menu>
        </div>
      </div>
      <div class="clearfix"></div>
    </div>
    <!--content layout-->
    <div class="layout-content" style="position: relative">
      <!--左右布局-->
      <div v-if="layoutContent == 'lr'">
        <div class="pull-left layout-content-left" :style="styleMenuObject">
          <Menu active-name="1" width="200">
            <MenuGroup v-for="(item,index) in menuList" :key="index" :title="item.title">
              <MenuItem v-for="(item,index) in item.list" :key="index" :name="item.title">
                <Icon :type="item.icon" />
                {{item.title}}
              </MenuItem>
            </MenuGroup>
          </Menu>
        </div>
        <div class="layout-content-right">
          <nuxt ref="mychild"></nuxt>
        </div>
        <div class="clearfix"></div>
      </div>

      <!--内容全屏布局-->
      <div class="layout-content-fullscreen" style="position: relative" v-if="layoutContent == 'fullscreen'">
        <Spin size="large" fix v-if="spinShow"></Spin>
        <nuxt ref="mychild"></nuxt>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        spinShow: false,
        subMenuList: "",
        mainMenuTitle: "",
        menuList: [],
        layoutContent: "lr",
        styleMenuObject: {
          'height': '',
          'overflow-y': 'auto'
        }
      }
    },
    mounted() {
      let _self = this;
      if (process.browser) {
        /*if(_self.$refs.mychild.$children[0].layoutSet){
          _self.$refs.mychild.$children[0].layoutSet();//设置子页面的函数
        }*/
        window.onresize = function () {
          _self.hh();
        }
      }
    },
    created(){
      this.hh();
      this.getMenu('basic');
    },
    methods: {
      hh(){
        if (process.browser) {
          this.styleMenuObject.height = window.innerHeight - 80 + 'px';
          /*this.$nextTick(function () {
            //默认选中
            this.loadingShow = true;
          });*/
        }
      },
      getMenu(event){
        let _self = this;
        this.$axios.get('/json/menuJson.json').then((res)=>{
          let menuList = res.data.menuList;
          for (let i = 0; i < menuList.length; i++){
            if(menuList[i].name == event){
              this.menuList = menuList[i].itemList;
            }
          }
          _self.$router.push(this.menuList[0].list[0].item.url);
        });
      }
    },
    watch: {
      '$route': function (to, from) {//监听路由变化,为了浏览器点击后退和前进也能切换菜单选中
        this.layoutContent =  "lr";
      },
      '$store.state.setDefaultRightOverflowy': function () {

      }
    }
  }
</script>

<style scoped>
.layout-main{
  position: relative;
}
.layout-top{
  height:62px;
  border:1px solid #dcdee2;
  background: #f8f8f9;
  width: 100%;
  top: 0px;
  z-index: 1200;
}
.layout-menu-left{
  width: 200px;
  text-align: center;
  color: #515a6e;
  font-size: 14px;
  position: relative;
  top: 10px;
}
.layout-menu-middle{
  margin: 0px 200px;
}
.layout-menu-right{
  width: 200px;
  height: 60px;
  text-align: right;
  padding:0px 20px;
  position: relative;
  top: 0px;
}
.layout-menu-center{
  margin: 0 auto;
}
.ivu-menu-horizontal.ivu-menu-light:after {
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  background: none;
  position: absolute;
  bottom: 0;
  left: 0;
}
.layout-menu-item{
  position: relative;
  margin: 0 auto;
  width: 720px;
}
.layout-menu-right label{
  position: relative;
  top: 15px;
  margin-right: 10px;
}
.layout-menu-right .avatar{
  position: relative;
  top: 10px;
  margin-right: 0px;
}
.layout-content{
  position: relative;
  top: 0px;
}
.layout-content-left{
  width: 200px;
  border-right: 1px solid #dcdee2;
}
.layout-content-right{
  margin-left: 200px;
  position: relative;
}
.ivu-menu-vertical.ivu-menu-light:after {
  content: '';
  display: block;
  width: 1px;
  height: 100%;
  background: none;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
}
.layout-menu-middle .layout-menu-item {
  position: relative;
  margin: 0 auto;
  width: 720px;
  background: #f8f8f9;
}
</style>
