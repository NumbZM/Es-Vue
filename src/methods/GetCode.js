import GetRequest from './GetRequest'
function getCode(){
    const query=GetRequest(window.location.href)
    console.log(window.location.href,111)
    console.log(query,222)
    console.log(query.code,333)
    if(query&&query.code){
      return query.code;
    }else{
      window.close();
      window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx413d2fa27fd64de8&response_type=code&scope=snsapi_base&connect_redirect=1&redirect_uri="+encodeURIComponent(window.location.href)+"#wechat_redirect"
      console.log("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx413d2fa27fd64de8&response_type=code&scope=snsapi_base&connect_redirect=1&redirect_uri="+encodeURIComponent(window.location.href)+"#wechat_redirect",111)
      console.log(window.location.href)
    }
}
export default getCode
