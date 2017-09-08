<template>
  <div>
    <div>
      <!--头部-->
      <myheader :sellerInfo="sellerInfo"></myheader>
    </div>
    <div>
      <!--导航-->
      <div class="tab border-1px">
        <div class="tab-item"><router-link to="goods">商品</router-link></div>
        <div class="tab-item"><router-link to="reatings">评论</router-link></div>
        <div class="tab-item"><router-link to="seller">商家</router-link></div>
      </div>
    </div>
    <div>
      <!--内容区块,三个子页面都在这里跳转-->
      <router-view>
      </router-view>
    </div>
  </div>
</template>

<script>
  import sellerModel from '../data.json';
  import myheader from '../components/header/myheader.vue'
  import goods from '../components/goods.vue'
  import reatings from '../components/reatings.vue'
  import seller from '../components/seller.vue'
  export default {
    name: 'hello',
    data () {
      return {
        sellerInfo:{}
      }
    },
    created(){
      this.getSellerInfo();
    },
    methods:{
      /*获取商家信息*/
      async getSellerInfo(){
          let self= this;
          let result = await sellerModel;

          self.sellerInfo=result.seller;


      }


    },
    components: {
      myheader,
      goods,
      reatings,
      seller
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body , html{

    font-weight: 200;
    font-family: 'PingFang SC','STHeitiSC-Light','Helvetica-light',arial,sans-serif;
  }
  @import '../stylus/mixin.styl';
  .tab{display: flex;
    width:100%;
    height:40px;line-height: 40px;
 border-bottom:1px solid rgba(7,17,27,0.1);
  }
  .tab-item{flex: 1;text-align: center;}
  .tab-item a{color:black;}


</style>
