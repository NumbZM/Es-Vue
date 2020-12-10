<template>
  <div class="search">
    <van-search
    v-model="value"
    shape="round"
    background="#4fc08d"
    show-action
    placeholder="请输入搜索关键词"
    @search="onSearch"
    @cancel="onCancel"
    />
    <p class="searchTitle" v-if="searchList&&searchList.length>0">
      基本信息
    </p>
    <div class="searchList">
      <van-skeleton avatar :row="4" :loading="loadingSke" avatar-shape="square" v-for="item in 6" :key="item" />
      <div class="searchListItem clearfix" v-for="item in searchList" :key="item.xgh">
        <div class="searchListContainer">
          <div :style="{backgroundImage:'url('+item.photo+')'}" class="searchListPhoto"/>
        </div>
        <div class="searchListBody">
          <div class="searchListCell">
            <span class="searchListCellTitle">学号</span>
            <span class="searchListCellText">{{item.num}}</span>
          </div>
          <div class="searchListCell">
            <span class="searchListCellTitle">姓名</span>
            <span class="searchListCellText">{{item.xm}}</span>
          </div>
          <div class="searchListCell">
            <span class="searchListCellTitle">电话</span>
            <span class="searchListCellText">{{item.phone}}</span>
          </div>
          <div class="searchListCell">
            <span class="searchListCellTitle">电子邮箱</span>
            <span class="searchListCellText">{{item.email}}</span>
          </div>
        </div>
      </div>
    </div>
    <van-button type="primary" class="addBtn" round block @click="add">+ 新增</van-button>
  </div>
</template>
<script>
import { Search,Skeleton,Button } from 'vant';
export default {
  components:{
    'van-search':Search,
    'van-skeleton':Skeleton,
    'van-button':Button
  },
  data () {
    return {
      searchList:'',
      value:'',
      loadingSke:false,
    }
  },
  async created(){
  },
  methods:{
    async onSearch(){
        this.loadingSke=true
        const res = await this.$api.query.esQuery({param:this.value})
        if(res){
            this.searchList=res.data
            this.loadingSke=false
        }
    },
    onCancel(){
        console.log('onCancel')
    },
    add(){
        this.$router.push('/add')
    }
  }
}
</script>

<style scoped lang="less">
.search {
  height: 100%;
  width: 100%;
  position: relative;
  background-color: #F7F8FA;
  .searchTitle{
    width: 100%;
    box-sizing: border-box;
    padding: 18px 0 15px 18px;
    color: #8D99A0;
    font-size:14px;
    font-weight:400;
    line-height:20px;
  }
  .searchList{
    background-color: #F7F8FA;
    padding-bottom: 50px;
  }
  .searchListItem{
    background-color: #ffffff;
    display: flex;
    justify-content:space-between;
    margin-bottom: 20px;
  }
  .searchListContainer{
    padding: 20px;
    float: left;
    width: 40%;
  }
  .searchListPhoto{
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .searchListBody{
    padding-top: 10px;
    float: left;
    width: 60%;
  }
  .searchListCell{
    width: 100%;
    display: flex;
    padding: 10px 0;
  }
  .searchListCell:not(:last-child){
    border-bottom: 1px solid #F6F7F8;
  }
  .searchListCellTitle{
    font-size:14px;
    font-weight:400;
    color:#68696A;
    line-height:20px;
    width: 100px;
  }
  .searchListCellText{
    font-size:14px;
    font-weight:400;
    color:#323233;
    line-height:20px;
  }
  .bottomTab{
    width: 100%;
    background-color: #ffffff;
    padding: 5px 0;
    position: fixed;
    bottom: 0;
  }
  .bottomTabItem{
    display: inline-block;
    text-align: center;
    width: 33.33%;
    padding: 10px 0;
    box-sizing: border-box;
    font-size:14px;
    font-weight:400;
    color:#68696A;
    line-height:20px;
  }
  .bottomTabItem:not(:last-child){
    border-right: 1px solid #F6F7F8;
  }
  .van-search__action{
      color: #ffffff;
  }
  .van-search__action:active{
      background-color: transparent;
  }
}
.addBtn{
    width: 80%;
    margin: 10px auto 0;
}
</style>
<style>
.van-skeleton:first-child{
  margin-top: 53px;
}
.van-skeleton{
  margin-top: 20px;
  padding: 20px!important;
  background-color: #F7F8FA;
}
.van-skeleton__avatar{
  width: 100px!important;
  height: 139px!important;
  margin-right: 20px!important;
}
</style>