<template>
  <div class="container">
    <div class="container-top-block container-search-block">
      <Row>
        <Col span="12">
          <Button class="font-size-12" type="info"><i class="fa fa-plus"></i>添加</Button>
        </Col>
        <Col span="12">
          <div class="text-right">
            <Poptip placement="bottom-end" :transfer="true">
              <Button type="info" size="small" ghost>
                <i class="fa fa-sliders"></i>
              </Button>
              <div class="api" slot="content">
                <div>
                  <ButtonGroup>
                    <Button>条件</Button>
                    <Button>条件</Button>
                    <Button>条件</Button>
                    <Button>条件</Button>
                    <Button>条件</Button>
                  </ButtonGroup>
                </div>
                <div class="margin-top-5">
                  <Select style="max-width:80px;text-align: left">
                    <Option value="0">list1list1list1</Option>
                    <Option value="1">list1</Option>
                  </Select>
                  <Select style="max-width:80px;text-align: left">
                    <Option value="0">list1list1list1</Option>
                    <Option value="1">list1</Option>
                  </Select>
                  <Select style="max-width:80px;text-align: left">
                    <Option value="0">list1list1list1</Option>
                    <Option value="1">list1</Option>
                  </Select>
                </div>
              </div>
            </Poptip>

            <DatePicker type="datetimerange" format="yyyy-MM-dd" placeholder="Select date" style="width: 200px"></DatePicker>

            <Input placeholder="small size" :clearable="true" style="width: 150px"/>
            <Button class="font-size-12" type="info"><i class="fa fa-search"></i>搜索</Button>
          </div>
        </Col>
      </Row>
    </div>
    <div class="margin-top-5" :style="styleTableHeight">
      <Table border ref="selection" size="small" :columns="columns" :data="data" @on-selection-change="selTableChange($event)">
        <template slot-scope="{ row, index }" slot="action">
          <i class="fa fa-edit fa-2x table-opr-btn color-success"></i>
          <i class="fa fa-trash fa-2x table-opr-btn color-error"></i>
        </template>

        <template slot-scope="{ row, index }" slot="name">
          <Tooltip placement="bottom-start" max-width="300" :content="row.name">
            <span>{{$utils.getLength(row.name) > 20 ? row.name.substring(0,19)+"..." : row.name}}</span>
          </Tooltip>
        </template>
      </Table>
    </div>
    <div class="container-bottom-block">
      <div class="pull-left">
        <Button class="font-size-12" type="error" @click="delAll($event)"><i class="fa fa-trash-o"></i>批量删除</Button>
        <Button class="font-size-12" type="warning"><i class="fa fa-refresh"></i>批量重启</Button>
      </div>
      <div class="pull-right">
        <Page :total="1000" :page-size-opts="[10,20,50,100]" show-sizer show-elevator/>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
  },
  data () {
    return {
      tableHeight: 0,
      allSel: false,
      tableListArr:[],
      styleTableHeight: {
        'max-height': '',
        'overflow-y': 'auto'
      },
      columns: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: 'Name',
          key: 'name',
          slot: 'name',
          ellipsis: true,
          renderHeader: (h, params) => {
            return (
              <Dropdown transfer>
                <a href="javascript:void(0)">
                  name
                  <Icon type="ios-arrow-down"></Icon>
                </a>
                <DropdownMenu slot="list">
                  <DropdownItem>驴打滚</DropdownItem>
                  <DropdownItem>炸酱面</DropdownItem>
                  <DropdownItem disabled>豆汁儿</DropdownItem>
                  <DropdownItem>冰糖葫芦</DropdownItem>
                  <DropdownItem divided>北京烤鸭</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            );
          }
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        },
        {
          title: 'Action',
          slot: 'action',
          align: 'center',
          width: '150'
        }
      ],
      data: [
        {
          name: 'John Brown John Brown John Brown John Brown John Brown John Brown John Brown John Brown John Brown John Brown John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03',
          id:1
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01',
          id:2
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  },
  created(){
    let _self = this;
    this.tableH();
  },
  methods: {
    tableH(){
      if (process.browser) {
        this.styleTableHeight["max-height"] = window.innerHeight - 80 - 35 - 61 + 'px';
        this.tableHeight = window.innerHeight - 80 - 35 - 61;
        this.$store.commit("SET_DEFAULT_RIGHT_OVERFLOWY",false);
      }
    },
    selAllList(event){
      this.$refs.selection.selectAll(event);
    },
    selTableChange(event){
      this.tableListArr = [];
      for(var i=0; i<event.length;i++){
        this.tableListArr.push(event[i].id);
      }
    },
    delAll(event){
      this.$Message.success('这是一个提示信息');
    }
  }
}
</script>

<style scoped>
.container{
  padding:10px 15px;
}
.container-top-block{
  height:35px;
  line-height: 35px;
}
.container-bottom-block{
  /*padding:5px 10px;
  border-left: 1px solid #dddddd;
  border-right: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;*/
  padding:0px 15px;
  height: 40px;
  line-height: 40px;
  border-left: 1px solid #dddddd;
  border-right: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
  z-index: 999999;
  width: 100%;
  background: #f8f8f9;
}
button i{
  margin-right: 5px;
}
</style>
