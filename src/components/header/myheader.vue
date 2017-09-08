<template>
  <!--这是头部-->
  <div>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img src="" height="64" width="64" alt="" :src="sellerInfo.avatar">
      </div>
      <!--内容区-->
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{sellerInfo.name}}</span>
        </div>
        <div class="description">
          {{sellerInfo.description}}/{{sellerInfo.deliveryTime}}分钟送达
        </div>
        <!--减满层 如果没有数据就隐藏-->
        <div v-if="sellerInfo.supports" class="supports">
          <span class="icon" :class="classMap[sellerInfo.supports[0].type]"></span>
          <span class="text">{{sellerInfo.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="sellerInfo.supports" class="supports-count" @click="morebtn()">
        <span class="count">{{sellerInfo.supports.length}}个 ></span>
      </div>
    </div>
    <!--公告-->
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span><span class="bulletin-text">{{sellerInfo.bulletin}}</span>
    <span class="icon-keyboard_arrow_right" @click="morebtn()">></span>
    </div>
    <!--背景-->
    <div class="background">
      <img alt="" :src="sellerInfo.avatar" width="100%" height="100%">
    </div>
    <!--浮沉-->
    <transition name="fade">
    <div class="detail" v-show="detailShow" >
      <div class="detail-wrapper clearfixed" >
        <div class="detail-main">
        <!--标题-->
        <h1 class="detail-name">{{sellerInfo.name}}</h1>
          <!--评分-->
          <div class="star-wrapper"><vstar :score="sellerInfo.foodScore" :size="48"></vstar></div>
        <!--评分下面的标题-->
          <div class="detail-title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <!--优惠详情-->
          <ul v-if="sellerInfo.supports" class="supports-ul">
          <li class="support-item" v-for="item in sellerInfo.supports ">
            <span class="icon" :class="classMap[item.type]"></span>
            <span class="support-item-text">{{item.description}}</span>
          </li>
          </ul>
          <!--商家公告-->
          <div class="detail-title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <!--公告详情-->
          <div class="bulletin">
           <p class="content">{{sellerInfo.bulletin}}</p>
          </div>
        </div>
      </div>
      <div class="detail-close" @click="detailShow=false "><span>×</span></div>

    </div>
    </transition>
  </div>

  </div>
</template>
<script>
  import vstar from '../star/star.vue'
  export default {
    props: {
      sellerInfo: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    data () {
      return {
        detailShow:false,

      }
    },
    computed: {},
    created(){
        //后台传过来的type 角标 返回classMap里面的值 然后添加给图标
        this.classMap=['decrease','discount','special','guarantee','invoice'];
      this.initData();
    },
    methods: {
      async initData(){
      },
      /*更多选项*/
      morebtn(){
        this.detailShow=true;
          console.log('d');
      }
    },
    components: {vstar}

  }
</script>
<style rel="stylesheet/stylus">
.header{color:#ffffff;position: relative;background: rgba(7,17,27,0.5);overflow: hidden;}
  .content-wrapper{padding: 24px 12px 18px 24px;font-size: 0;position: relative;}/*父元素设置字体为0可以消除元素间距*/
  .avatar{display:inline-block;vertical-align: top;}
  .avatar img{border-radius: 2px;}
  .content{display: inline-block;font-size: 0px;margin-left: 16px;}
  .title{margin: 2px 0 8px 0;}
.brand{
  width:30px;height: 18px;
  vertical-align: top;
  display: inline-block;
  background-image:url("brand@2x.png");
  background-size: 30px 18px;
  background-repeat: no-repeat;
} @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3)
  {
    .brand{
      width:30px;height: 18px;
      vertical-align: top;
      display: inline-block;
      background-image:url("brand@3x.png");
      background-size: 30px 18px;
      background-repeat: no-repeat;}
  }
  .name{font-size: 16px;margin-left: 6px;line-height: 18px;font-weight: bold;}
.description{margin-bottom: 10px;line-height: 12px;font-size: 12px;}

.supports .icon{
  display: inline-block;
  width: 12px;height: 12px;
  margin-right: 4px;
  background-size: 12px 12px ;
  background-repeat: no-repeat;
}
.decrease{background-image: url("decrease_1@2x.png")}
.discount{background-image: url("discount_1@2x.png")}
.guarantee{background-image: url("guarantee_1@2x.png")}
.invoice{background-image: url("invoice_1@2x.png")}
.special{background-image: url("special_1@2x.png")}
.supports .text{vertical-align:top;font-size: 10px;line-height: 12px;}
@media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3)
{
  .decrease{background-image: url("decrease_1@3x.png")}
  .discount{background-image: url("discount_1@3x.png")}
  .guarantee{background-image: url("guarantee_1@3x.png")}
  .invoice{background-image: url("invoice_1@3x.png")}
  .special{background-image: url("special_1@3x.png")}
}
  .supports-count{
    position: absolute;
    right: 12px;
    bottom: 17px;padding:0 8px;height: 24px;line-height: 24px;border-radius: 14px;background-color: rgba(0,0,0,0.2);text-align: center;
  }
.count {font-size: 10px;}
/*公告*/
.bulletin-wrapper{position: relative;
  background-color: rgba(7,17,27,0.2);
  height: 28px; line-height: 28px;padding: 0 22px 0 12px ; white-space: nowrap;overflow: hidden;text-overflow: ellipsis;
}
.bulletin-title{vertical-align: top; display:inline-block;width:22px;height:12px;background-image: url("bulletin@2x.png");background-size: 22px 12px;margin-top: 7px;}
@media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3) {
  .bulletin-title{vertical-align: top; display:inline-block;width:22px;height:12px;background-image: url("bulletin@3x.png");background-size: 22px 12px;margin-top: 8px;}
}
.bulletin-text{vertical-align: top; font-size: 10px;font-weight: 200;margin: 0 4px;}
.icon-keyboard_arrow_right{position: absolute;font-size: 10px;right: 12px;
  top:0;}
/*背景*/
.background{position: absolute;top:0;left:0;width: 100%;height: 100%;z-index: -1;filter: blur(10px)}
  /*t弹层*/
  .detail{position: fixed;top:0;left:0;z-index: 100;width: 100%;height: 100%;overflow: auto;background-color: rgba(7,17,27,0.8);-webkit-backdrop-filter:blur(10px)}
/*弹层里面的clearfix*/
.clearfixed{display: inline-block;}:after{content:".";display: block;height: 0;line-height: 0;clear:both;visibility:hidden;}
.detail-wrapper{min-height:100%;width:100%;}
.detail-main{margin-top: 64px;padding-bottom:64px;}
.detail-close{position: relative;
  width:32px;
  height: 32px;
  margin: -64px auto 0 auto;
  clear: both;
  font-size:32px;}
/*弹层内容开始*/
  .detail-name{line-height: 16px;text-align: center;font-size: 16px;font-weight: 700;}
/*评分*/
.star-wrapper{text-align: center;height: 24px;margin-top: 18px;padding:2px 0; }

.detail-title{display:flex;width: 80%;margin: 28px auto 24px auto;}
  .line{flex: 1;position: relative;top:-9px;border-bottom: 1px solid rgba(255,255,255,0.2)}
.text{padding: 0 12px;font-size: 14px;font-weight: 700;}
/*更多优惠信息*/
.supports-ul{width:80%; margin: 0 auto;}
  .support-item{padding: 0 12px;margin-bottom:12px;font-size: 0;}:last-child{margin-bottom: 0;}
.support-item .icon{
  display: inline-block;width:16px;height: 16px;vertical-align: top;margin-right: 6px;background-size: 16px 16px;background-repeat: no-repeat; }
.support-item  .decrease{background-image: url("decrease_2@2x.png")}
.support-item  .discount{background-image: url("discount_2@2x.png")}
.support-item  .guarantee{background-image: url("guarantee_2@2x.png")}
.support-item  .invoice{background-image: url("invoice_2@2x.png")}
.support-item  .special{background-image: url("special_2@2x.png")}
@media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3)
{
  .support-item  .decrease{background-image: url("decrease_2@3x.png")}
  .support-item  .discount{background-image: url("discount_2@3x.png")}
  .support-item  .guarantee{background-image: url("guarantee_2@3x.png")}
  .support-item  .invoice{background-image: url("invoice_2@3x.png")}
  .support-item  .special{background-image: url("special_2@3x.png")}
}/*优惠文字*/
  .support-item-text{line-height: 16px;font-size: 12px;}
  .bulletin {width:80%;margin: 0 auto; }
.bulletin .content{padding: 0 12px 0 0;line-height: 24px;font-size: 12px;}





</style>
