/** 
 * 退出登录逻辑
 * 清除本地所有存储信息，跳转到登录页面
 */
// import Cookies from 'js-cookie'
import api from '../request/api'

const logout = async () => {
    const res=await api.usr.authSafeLogout()
    if(res){
        window.location.href="https://cas.bjtu.edu.cn/auth/logout/?next=http://st.bjtu.edu.cn/v2/auth/callback/"
    }
}

export default logout;