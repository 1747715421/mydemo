<template>
    <div class="star" :class="starType">
      <span v-for="itemClass in itemClasses" :class="itemClass" class="star-item" track-by="$index"></span>
    </div>
</template>
<script>
const Length=5;
const Cls_on='on';
const Cls_half='half';
const Cls_off='off';
    export default {
        props: {
            size: {
                type: Number,
            },
          score: {
            type: Number,
          }
        },
        data () {
            return {

            }
        },
        computed: {
          starType(){
              return 'star-'+ this.size;
          },
          itemClasses (){
              let result = [];
              /*向下去0.5的倍数的值*/
              let score = Math.floor(this.score*2)/2;
              /*检查是否有半星*/
              let hasDecimal =score%1!==0;
              /*检查是否有全心*/
              let foolScore = Math.floor(score);
              for(let i=0;i<foolScore;i++){
                result.push(Cls_on);
              }
            if(hasDecimal){result.push(Cls_half)}
            while (result.length<Length){
                result.push(Cls_off);
            }
            return result;
          }

        },
        created(){
            this.initData();
        },
        methods: {
            async initData(){
            }
        },
        components: {}

    }
</script>
<style scoped>
.star{}
.star-item{display: inline-block; background-repeat: no-repeat;}
/*第一套星星*/
.star-48 .star-item{width:20px;height: 20px;margin-right: 22px;background-size: 20px 20px;}:last-child{margin-right: 0;}
.star-48 .on{background-image: url("star48_on@2x.png");}
.star-48 .half{background-image: url("star48_half@2x.png");}
.star-48 .off{background-image: url("star48_off@2x.png");}
/*第二套星星*/
.star-36 .star-item{width:15px;height: 15px;margin-right: 16px;background-size: 15px 15px;}:last-child{margin-right: 0;}
.star-36 .star-item .on{background-image: url("star36_on@2x.png");}
 .star-36 .star-item .half{background-image: url("star36_half@2x.png");}
 .star-36 .star-item .off{background-image: url("star36_off@2x.png");}


/*第三套星星*/

 .star-24 .star-item{width:10px;height: 10px;margin-right: 3px;background-size: 10px 10px;}:last-child{margin-right: 0;}
 .star-24 .star-item .on{background-image: url("star24_on@2x.png");}
.star-24 .star-item .half{background-image: url("star24_half@2x.png");}
.star-24 .star-item .off{background-image: url("star24_off@2x.png");}
















</style>
