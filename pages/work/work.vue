<template>
  <div id="container" class="container" :style="styleMenuObject">
    <!--<div class="pull-left layout-left">
      &lt;!&ndash;<Anchor class="link-layout" container="#container" show-ink>
        <AnchorLink v-for="(item,index) in menuList" :key="index" :href="'#'+item.mainMenu.name" :title="item.mainMenu.title" />
      </Anchor>&ndash;&gt;
    </div>-->
    <div id="layout-middle" class="layout-middle">
      <div v-for="(item,index) in menuList" :key="index" class="margin-bottom-30">
        <div :id="item.mainMenu.name">
          <span>{{ item.mainMenu.title }}</span>
          <a :href="'#'+item.mainMenu.name"></a>
        </div>
        <div class="margin-top-10">
          <Row :gutter="20">
            <Col span="6" v-for="(item,index) in item.mainMenu.subMenu" :key="index" class="margin-bottom-20">
              <span class="item-list">
                <label><i :class="item.icon" :style="{color: item.color}"></i></label>
                {{item.title}}
              </span>
            </Col>
          </Row>
        </div>
      </div>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuList: [],
      styleMenuObject: {
        'height': '',
        'overflow-y': 'auto'
      }
    }
  },
  created() {
    this.layoutSet();
    this.getMenu();
  },
  methods: {
    layoutSet(){
      let _self = this;
      this.$parent.$parent.layoutContent = 'fullscreen';
      setTimeout(function () {
        _self.$parent.$parent.spinShow = false;
      },1000);

      if (process.browser) {
        this.styleMenuObject.height = window.innerHeight - 80 + 'px';
      }
    },
    getMenu(){
      let _self = this;
      this.$axios.get('/json/workJson.json').then((res)=>{
        _self.menuList = res.data.menuList;
      });
    }
  }
}
</script>

<style scoped>
.container{
  position: relative;
  padding:0px 0px 10px 15px;
}
.item-list{
  display: block;
  height: 60px;
  line-height: 60px;
  border: 1px solid #dcdee2;
  border-radius: 5px;
  font-size: 13px;
  padding: 0px 15px;
}
.item-list label{
  position: relative;
  top: 5px;
}
.link-layout{
  position: fixed;
  left: 30px;
  top: 80px;
}
.layout-left{
  width: 200px;
}
.layout-right{
  width: 200px;
}
.layout-middle{
  margin-left: 200px;
  margin-right: 200px;
  padding: 30px 0px 30px 0px;
  overflow-y: auto;
}
.item-list:hover{
  border: 1px solid #2db7f5;
}
</style>
