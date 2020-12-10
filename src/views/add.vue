<template>
    <div class="add">
        <van-nav-bar :title="name?name:'新增人员信息'" @click-left="goBack" fixed>
            <template #left>
                <van-icon name="arrow-left" size="18" color="#29292A"/>
            </template>
        </van-nav-bar>
        <div class="addTitle">您需要填写以下信息</div>
        <div class="addContainer">
          <van-form @submit="onSubmit" class="addForm">
            <van-field
              v-model="form.num"
              name="学号"
              label="学号"
              placeholder="学号"
              :rules="[{ required: true, message: '请填写学号' }]"
              class="vanFieldFirst"
            />
            <van-field
              v-model="form.xm"
              name="姓名"
              label="姓名"
              placeholder="姓名"
              :rules="[{ required: true, message: '请填写姓名' }]"
            />
            <van-field
              v-model="form.phone"
              name="电话"
              label="电话"
              placeholder="电话"
              :rules="[{ required: true, message: '请填写电话' }]"
            />
            <van-field
              v-model="form.email"
              name="邮箱"
              label="邮箱"
              placeholder="邮箱"
              :rules="[{ required: true, message: '请填写邮箱' }]"
            />
            <van-field name="orphan" label="照片" :rules="[{ required: true, message: '请上传照片' }]" class="vanFieldLast">
              <template #input>
                <van-uploader v-model="form.photo" multiple :before-delete="uploadFileRemove" :after-read="fileSuccess" :max-count="1"/>
              </template>
            </van-field>
            <div style="margin: 16px;">
              <van-button round block type="primary" native-type="submit">
                提交
              </van-button>
            </div>
          </van-form>
        </div>
    </div>
</template>
<script>
import { Button, NavBar, Icon, Form, Field,Uploader} from 'vant';
export default {
    components:{
        'van-button':Button,
        'van-nav-bar':NavBar,
        'van-icon':Icon,
        'van-form':Form,
        'van-field':Field,
        'van-uploader':Uploader,
    },
    data() {
        return {
            name:this.$route.query.name,
            data: '',
            form:{}
        };
    },
  async created() {
  },
  methods: {
    async onSubmit() {
        this.form.photo=this.form.photo[0].content
        const res = await this.$api.add.esAdd(this.form)
        if(res){
            this.$router.push('/index')
        }
    },
    async uploadFileRemove(file,detail) {
      console.log(file, 888);
      console.log(detail, 999);
    },
    async fileSuccess(file) {
      console.log(file)
      this.form.photo=[{"content":file.content}]
    },
    goBack() {
      this.$router.push('/index');
    }
  },
}
</script>
<style scoped>
.add{
    width: 100%;
    min-height: 100%;
    background-color: #F6F6F6;
    margin-bottom: 50px;
    margin-top: 46px;
}
.addTitle{
    padding: 30px 0 15px 16px;
    font-size: 14px;
    font-weight: 400;
    color: #8D99A0;
    line-height: 20px;
}
.addForm{
    padding: 0 20px;
}
.vanFieldFirst{
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.vanFieldLast{
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
</style>