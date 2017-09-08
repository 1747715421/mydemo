/**
 * Created by 王一辉 on 2017/8/30.
 */
import request from 'superagent';
export  default {
  /*获取商家信息*/
  async getSellerInfo (){
  return new Promise(function (resolve,reject) {
    request
      .get('../data.json')
      .accept('json')
      .end(function (err,res) {
        if(res.status==200){
          resolve({status:true,res:res.body})
        }else{
          resolve({status: false, reason: "获取数据失败,请重试!"})
        }

      });

  });

  }


}
