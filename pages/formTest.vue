<template>
  <div class="container">
    <div class="container-content">
      <Form :label-width="80">
        <FormItem label="Input">
          <Input placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="Input">
          <Input placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="Input">
          <Input placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="Input">
          <Input placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="Input">
          <Input placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="Input">
          <Input placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="Input">
          <Input placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="Text">
          <Input type="textarea" :autosize="{minRows: 5,maxRows: 10}" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="Text">
          <Input type="textarea" :autosize="{minRows: 5,maxRows: 10}" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="Text">
          <Input type="textarea" :autosize="{minRows: 5,maxRows: 10}" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="Text">
          <Input type="textarea" :autosize="{minRows: 5,maxRows: 10}" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem>
          <Button type="info">Submit</Button>
          <Button style="margin-left: 8px">Reset</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
  }
}
</script>

<style scoped>
.container{

}
.container-content{
  padding:10px 20px;
}
</style>
